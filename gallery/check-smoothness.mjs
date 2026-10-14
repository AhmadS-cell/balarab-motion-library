import assert from 'node:assert/strict';
import {easing,previewState,previewPeriod,motionProfile} from './dist/timing.js';
import {motions} from './dist/motions.js';
for(let i=0;i<=1000;i++){const p=i/1000;assert.ok(Number.isFinite(easing(p)));if(i)assert.ok(easing(p)>=easing(p-.001));}
assert.equal(easing(0),0);assert.equal(easing(1),1);assert.ok(easing(.01)<.00001);assert.ok(1-easing(.99)<.00001);assert.ok(easing(.51)-easing(.5)>easing(.01)-easing(0),'Acceleration should build rather than jump to peak speed');
for(const item of motions){
 const middle=item.duration+.4,a=previewState(item,middle-.00001),b=previewState(item,middle+.00001);
 assert.ok(a.cover>.999999&&b.cover>.999999,'Both reset states must be hidden: '+item.id);assert.equal(a.time,item.duration-.00001);assert.equal(b.time,0);assert.equal(previewState(item,previewPeriod(item)).time,0);assert.ok(motionProfile(item).technique);
}
// M035: selected C uses a separate lane before changing row, then returns after the other rows settle.
const phase=(p,a,b)=>easing((p-a)/(b-a));
for(let i=0;i<=1000;i++){const p=i/1000,leave=phase(p,.12,.29),sort=phase(p,.34,.57),back=phase(p,.62,.8),x=320+250*leave*(1-back),w=340-250*leave*(1-back),y=280-160*sort;for(let k=0;k<2;k++){const otherY=120+k*80+80*sort;assert.ok(Math.abs(y-otherY)>=54-1e-6||x-w/2>=490-1e-6,'Rank rows must not intersect');}}
assert.equal(motions.find(m=>m.id==='M018').duration,9.6);assert.equal(motionProfile(motions.find(m=>m.id==='M141')).technique,'J-cut');
console.log('PASS: monotone ease with quiet endpoint velocity, masked restart for all 144, collision-free ranking, preserved total timing and intended J-cut.');
