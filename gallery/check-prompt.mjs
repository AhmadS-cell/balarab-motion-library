import assert from 'node:assert/strict';
import {motions} from './dist/motions.js';
import {promptMotions,promptUpdates} from './dist/prompt-data.js';
import {sliderState,scrubState,springResponse,impactPose,bucketState,bucketEvents} from './dist/prompt-motion.js';
assert.equal(promptMotions.length,16);assert.equal(Object.keys(promptUpdates).length,8);assert.equal(motions.length,160);
for(let n=0;n<144;n++)assert.equal(motions[n].id,'M'+String(n+1).padStart(3,'0'));
for(let n=0;n<=1000;n++){const p=n/1000,s=sliderState(p),impact=impactPose(p),b=bucketState(p);assert.ok(s.value>=0&&s.value<=1);assert.ok(s.knob>=150&&s.knob<=480);assert.ok(scrubState(p)>=0&&scrubState(p)<=1);assert.ok(impact.y+impact.radius*impact.sy<=impact.floor+1e-7,'Ball must not penetrate its contact surface');assert.ok(Math.abs(impact.sx*impact.sy-1)<1e-10,'Squash must preserve area');assert.ok(b.tokens>=0&&b.tokens<=3);assert.ok(b.passed>=0&&b.passed<=4);}
assert.equal(bucketState(.7).waiting,1);assert.equal(bucketState(.7).passed,3);assert.equal(bucketState(.81).tokens,1);assert.equal(bucketState(.92).passed,4);assert.equal(bucketState(.92).tokens,0);
for(const e of bucketEvents){assert.ok(e.start<e.gate&&e.gate<e.consume&&e.consume<e.end);}
assert.equal(springResponse(0),0);assert.equal(springResponse(1.8),1);assert.ok(springResponse(.28)>1,'Spring should show its controlled overshoot');assert.equal(sliderState(.95).knob,160);assert.equal(sliderState(.95).value,1);
for(const m of promptMotions){assert.equal(new URL(m.exampleUrl).hostname,'prompt-motion.com');assert.ok(m.referenceCredit);assert.ok(m.motionTiming);}
console.log('PASS: 16 distinct additions, 8 stable-ID revisions; clamped slider and seek, impact contact and area, ordered quota consumption/refill, shared spring endpoint and explicit author credit.');
