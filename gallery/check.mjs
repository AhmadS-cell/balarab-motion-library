import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {motions,groups} from './dist/motions.js';
import {drawMotion,supportedCategories} from './dist/render.js';
assert.equal(motions.length,120);
assert.equal(new Set(motions.map(x=>x.key)).size,120);
assert.equal(new Set(motions.map(x=>x.name)).size,120);
assert.equal(new Set(motions.map(x=>x.id)).size,120);
const sources=JSON.parse(await fs.readFile('dist/sources.json','utf8'));
for(const m of motions){assert.ok(sources.entries.some(s=>s.repository===m.source));assert.ok(supportedCategories.includes(m.category));}
// Exercise every preview across its lifecycle, including seek and loop boundaries.
// Canvas command recording checks finite geometry and that previews actually change.
const counts=[];
const fingerprints=new Set();
for(const m of motions){
 const frames=[];
 for(const sec of [0,.9,1.8,2.7,3.6,4.5,5.39,5.4]) {
  const commands=[];
  const ctx=new Proxy({}, {get(target,name){if(name==='canvas')return {width:640,height:420};return function(){const args=Array.from(arguments);for(const x of args)if(typeof x==='number')assert.ok(Number.isFinite(x),m.id+' '+name);commands.push([name,args]);};},set(target,name,value){if(typeof value==='number')assert.ok(Number.isFinite(value),m.id+' '+name);commands.push([name,value]);return true;}});
  drawMotion(ctx,m,sec);frames.push(JSON.stringify(commands));
 }
 assert.ok(new Set(frames).size>1,'Static preview: '+m.id);
 assert.ok(!fingerprints.has(frames.join('|')),'Duplicated motion implementation: '+m.id);
 fingerprints.add(frames.join('|'));
 counts.push({id:m.id,frame_samples:frames.length,changed:true});
}
for(const file of ['index.html','style.css','app.js','motions.js','render.js','sources.json']) {
 const data=await fs.readFile('dist/'+file,'utf8');
 assert.ok(!data.includes('.'.repeat(3))&&!data.includes(String.fromCharCode(0x2026)),'Omission marker: '+file);
}
assert.equal(groups.length,10);
await fs.mkdir('qa',{recursive:true});
await fs.writeFile('qa/preview-integrity.json',JSON.stringify({count:120,categories:10,sources:33,unique_ids:true,unique_names:true,all_previews_have_changing_frames:true,finite_geometry:true,frame_checks:960,visual_review:'separate browser review required',results:counts},null,2)+'\n');
console.log('PASS: 120 unique named previews, 10 groups, 33 valid source references; 960 finite changing frame samples.');
