import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {patternCuration} from '../data/pattern-curation.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const entries=patternCuration.map(row=>{
 const [id,name_en,name_ar,when_ar,state_before_ar,action_ar,state_after_ar,candidate_repositories,avoid_ar]=row;
 return {id,name_en,name_ar,when_ar,state_before_ar,action_ar,state_after_ar,candidate_repositories,avoid_ar,enter_cue:'كلمة تعريف العنصر في المنطوق الحالي',transform_cue:'كلمة الفعل في المنطوق الحالي',exit_cue:'انتهاء دور العنصر بحسب المنطوق والانتقال',timing_basis:'actual narration alignment',timing_seconds:{enter:null,transform:null,settle:null,exit:null},qa_status:'planned_recipe_not_rendered',source_basis:'original Balarab editorial recipe linked to researched tools; latest user rules apply'};
});
await fs.writeFile(path.join(root,'patterns.json'),JSON.stringify({version:1,patterns:entries},null,2)+'\n');
let md='# وصفات مشاهد الموشن | Semantic Motion Recipes\n\n20 وصفة أصلية لاختيار الحركة بحسب المنطوق. المرشح التقني رابط للبحث وليس كودًا منسوخًا أو اعتماد فيديو. التوقيت يبقى من محاذاة التسجيل الفعلي؛ لا مدد جاهزة إلزامية.\n\n';
for(const p of entries) {
 md+='## '+p.name_en+' | '+p.name_ar+'\n\n';
 md+='- **متى:** '+p.when_ar+'.\n- **قبل:** '+p.state_before_ar+'\n- **الفعل:** '+p.action_ar+'\n- **النتيجة:** '+p.state_after_ar+'\n';
 md+='- **مصادر مرشحة:** '+p.candidate_repositories.map(r=>'['+r+'](https://github.com/'+r+')').join('، ')+'.\n';
 md+='- **ما يحتاج الانتباه:** '+p.avoid_ar+'\n- **التوقيت:** دخول على تعريف العنصر، تحول على الفعل، استقرار للقراءة، خروج بعد دوره؛ يثبت من التسجيل الحالي.\n\n';
}
await fs.writeFile(path.join(root,'PATTERNS.md'),md);
console.log('Built '+entries.length+' semantic recipes.');
