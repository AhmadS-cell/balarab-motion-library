import assert from 'node:assert/strict';
import {buildTotalState,totalBuildSteps} from './dist/render.js';
import {motions} from './dist/motions.js';
const motion=motions.find(m=>m.id==='M018');
assert.equal(motion.duration,9.6);
for(const [seconds,total,visible] of [[.1,0,0],[1,0,1],[1.79,0,1],[1.8,100,1],[2.5,100,1],[3.19,100,1],[3.8,100,2],[4.74,100,2],[4.75,150,2],[5.5,150,2],[6.14,150,2],[6.8,150,3],[7.69,150,3],[7.7,180,3],[8.5,180,3],[9.59,180,3]]){
 const state=buildTotalState(seconds);
 assert.equal(state.total,total,'total at '+seconds);
 assert.equal(state.visibleSteps.length,visible,'visible cards at '+seconds);
 assert.equal(state.total,state.addedSteps.reduce((sum,step)=>sum+step.amount,0));
}
assert.deepEqual(totalBuildSteps.map(s=>s.amount),[100,50,30]);
assert.deepEqual(totalBuildSteps.map(s=>s.total),[100,150,180]);
assert.ok(totalBuildSteps[1].enter-totalBuildSteps[0].addEnd>=1.3);
assert.ok(totalBuildSteps[2].enter-totalBuildSteps[1].addEnd>=1.3);
assert.ok(motion.duration-totalBuildSteps[2].addEnd>=1.8);
console.log('PASS M018: reveal, add, hold; 100 then 150 then 180, without premature additions.');
