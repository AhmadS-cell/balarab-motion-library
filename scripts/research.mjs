import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repositories = [
 'remotion-dev/remotion', 'motion-canvas/motion-canvas', 'motion-canvas/examples',
 'juliangarnier/anime', 'greensock/GSAP', 'motiondivision/motion',
 'airbnb/lottie-web', 'LottieFiles/dotlottie-web', 'rive-app/rive-wasm',
 'ManimCommunity/manim', 'mrdoob/three.js', 'pmndrs/react-three-fiber',
 'pmndrs/drei', 'pixijs/pixijs', 'konvajs/konva',
 'DavidHDev/react-bits', 'magicuidesign/magicui', 'ibelick/motion-primitives',
 'formkit/auto-animate', 'pmndrs/react-spring', 'theatre-js/theatre',
 'mojs/mojs', 'maxwellito/vivus', 'veltman/flubber', 'rough-stuff/rough',
 'tsparticles/tsparticles', 'Curvable/motion', 'lifeprompt-team/remotion-scenes',
 'av/remotion-bits', 'reactvideoeditor/remotion-templates',
 'ahmdd4vd/MotionCraft', 'degueba/onda', 'simplexlabs/montage'
];
const headers = {'User-Agent': 'Balarab-Motion-Library-Research', 'Accept': 'application/vnd.github+json'};
await fs.mkdir(path.join(root, 'research'), {recursive:true});
const existing = JSON.parse(await fs.readFile(path.join(root,'research','github-snapshot.json'),'utf8').catch(()=>'[]'));
const results = [];
for (const repository of repositories) {
 const saved = existing.find(x=>x.requested_repository===repository && x.http_status===200);
 if(saved) {results.push(saved); continue;}
 const response = await fetch('https://api.github.com/repos/'+repository, {headers});
 const data = await response.json();
 const entry = {requested_repository:repository, checked_at:new Date().toISOString(), http_status:response.status};
 if(response.ok) {
  Object.assign(entry, {repository:data.full_name,url:data.html_url,description:data.description,stars:data.stargazers_count,forks:data.forks_count,archived:data.archived,pushed_at:data.pushed_at,default_branch:data.default_branch,license_spdx:data.license?.spdx_id??null,homepage:data.homepage,topics:data.topics,source_url:'https://api.github.com/repos/'+repository,license_url:data.html_url+'/blob/'+data.default_branch+'/LICENSE'});
  let readme = '';
  for (const name of ['README.md','readme.md','README.rst']) {
   const rawUrl = 'https://raw.githubusercontent.com/'+data.full_name+'/'+data.default_branch+'/'+name;
   const readmeResponse = await fetch(rawUrl);
   if(readmeResponse.ok) {readme=await readmeResponse.text();entry.readme_url=data.html_url+'/blob/'+data.default_branch+'/'+name;break;}
  }
  // Local research input only: do not upload entire upstream README files.
  if(readme) await fs.writeFile(path.join(root,'research',repository.replace('/','--')+'.txt'),readme);
 } else entry.error=data.message;
 results.push(entry);
 await fs.writeFile(path.join(root,'research','github-snapshot.json'),JSON.stringify(results,null,2)+'\n');
 console.log(repository, response.status, entry.stars??'', entry.license_spdx??'');
 if(response.status===403||response.status===429) break;
}
await fs.writeFile(path.join(root,'research','github-snapshot.json'),JSON.stringify(results,null,2)+'\n');
