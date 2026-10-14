import assert from 'node:assert/strict';
import {motions} from './dist/motions.js';
import {dollyState} from './dist/expansion.js';
import {drawMotion} from './dist/render.js';
assert.equal(motions.length,144);assert.equal(motions.filter(m=>m.category==='smooth').length,18);assert.equal(motions.filter(m=>m.category==='video-reference').length,6);
const initial=dollyState(0),final=dollyState(.99);assert.ok(final.distance<initial.distance);assert.ok(final.focal<initial.focal);assert.ok(Math.abs(final.heroScale-initial.heroScale)<1e-10);assert.ok(final.backgroundScale<initial.backgroundScale,'Dolly zoom must change background perspective while preserving the hero');
const flip=motions.find(m=>m.id==='M130');for(let frame=0;frame<=50;frame++){const scales=[];const c=new Proxy({}, {get:(target,key)=>function(){if(key==='scale')scales.push(Array.from(arguments));},set:()=>true});drawMotion(c,flip,flip.duration*frame/51);assert.ok(scales.every(a=>a[0]>0&&a[1]>0),'Arabic faces must never be mirrored in a flip');}
for(let k=0;k<120;k++)assert.equal(motions[k].id,'M'+String(k+1).padStart(3,'0'),'Original IDs must remain stable');
for(const m of motions.slice(120))assert.ok(m.referenceUrl&&m.exampleUrl&&m.provenance,'Each added preview needs explicit source provenance');
assert.ok(motions.find(m=>m.id==='M136').exampleVideoUrl,'Notification queue must also link to the video reference');
console.log('PASS: 24 additional referenced previews, stable original IDs, dolly projection and readable non-mirrored flip faces.');
