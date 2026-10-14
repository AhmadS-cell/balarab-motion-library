import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const catalog=JSON.parse(await fs.readFile(path.join(root,'catalog.json'),'utf8'));
const patterns=JSON.parse(await fs.readFile(path.join(root,'patterns.json'),'utf8')).patterns;
assert.equal(catalog.entries.length,36);
assert.equal(patterns.length,20);
assert.equal(new Set(catalog.entries.map(x=>x.id)).size,36);
assert.equal(new Set(patterns.map(x=>x.id)).size,20);
const repositories=new Set(catalog.entries.map(x=>x.repository));
for(const row of catalog.entries) {
 assert.ok(Number.isInteger(row.stars)&&row.stars>=0,row.name);
 assert.ok(Object.hasOwn(catalog.categories,row.category));
 assert.ok(Object.hasOwn(catalog.priorities,row.priority));
 for(const field of ['source_url','readme_url','metadata_url','preview_url','license_url'])assert.equal(new URL(row[field]).protocol,'https:');
 assert.equal(row.arabic_status,'adaptation_required_not_render_tested');
 assert.equal(row.production_status,'research_candidate');
}
for(const p of patterns) {
 for(const repository of p.candidate_repositories)assert.ok(repositories.has(repository),repository);
 assert.equal(p.timing_seconds.enter,null);
 assert.equal(p.qa_status,'planned_recipe_not_rendered');
}
const files=[];
async function walk(folder) {
 for(const item of await fs.readdir(folder,{withFileTypes:true})) {
  if(['research','node_modules','.git'].includes(item.name))continue;
  const target=path.join(folder,item.name);
  if(item.isDirectory())await walk(target);else files.push(target);
 }
}
await walk(root);
for(const file of files) {
 const text=await fs.readFile(file,'utf8');
 if(/\.(md|json)$/.test(file))assert.ok(!text.includes('.'.repeat(3))&&!text.includes(String.fromCharCode(0x2026)),'Forbidden omission marker: '+file);
 if(file.endsWith('.md')) {
  for(const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
   if(/^(https?:|#)/.test(match[1]))continue;
   const dest=path.resolve(path.dirname(file),match[1].split('#')[0]);
   await fs.access(dest);
  }
 }
}
for(const args of [['comparison','--json'],['--patterns','العميل','--json'],['--category','scene-pack','--json']]) {
 const result=spawnSync(process.execPath,[path.join(root,'scripts/find.mjs')].concat(args),{encoding:'utf8'});
 assert.equal(result.status,0,result.stderr);
 assert.ok(JSON.parse(result.stdout).length>0,args.join(' '));
}
const noResults=spawnSync(process.execPath,[path.join(root,'scripts/find.mjs'),'no-such-pattern-27916','--json'],{encoding:'utf8'});
assert.deepEqual(JSON.parse(noResults.stdout),[]);
const badCategory=spawnSync(process.execPath,[path.join(root,'scripts/find.mjs'),'--category','invalid'],{encoding:'utf8'});
assert.notEqual(badCategory.status,0);
console.log(JSON.stringify({sources:36,patterns:20,categories:Object.keys(catalog.categories).length,source_and_pattern_integrity:'pass',internal_links:'pass',text_rules:'pass',search_smoke_checks:'pass',arabic_video_render:'not_performed',continuous_playback:'not_performed',audition:'not_performed'}));
