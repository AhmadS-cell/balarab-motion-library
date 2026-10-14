import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {curation} from '../data/curation.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const snapshot=JSON.parse(await fs.readFile(path.join(root,'research/github-snapshot.json'),'utf8'));
const checks=JSON.parse(await fs.readFile(path.join(root,'research/license-checks.json'),'utf8'));
const categories={ 'video-engine':'محركات الفيديو',timeline:'تتابع الحركة', 'asset-runtime':'تشغيل أصول الأنيميشن','3d':'المنتج والعمق 3D','2d-renderer':'رسم 2D', 'web-inspiration':'مكونات الويب الملهمة', 'svg-motion':'حركة SVG',decorative:'مؤثرات اختيارية', 'scene-pack':'مكونات ومشاهد جاهزة', 'workflow-reference':'مراجع سير الإنتاج'};
const priorities={core:'أولوية تجربة أساسية',adapt:'مفيد بعد التكييف',specialist:'لاستخدام متخصص',inspiration:'مرجع إلهام', 'license-hold':'مرجع حتى حسم الترخيص'};
const entries=curation.map(row=>{
 const [repository,name,category,priority,description_ar,effects,arabic_adaptation_ar,limitations_ar,preview_url]=row;
 const source=snapshot.find(x=>x.requested_repository===repository&&x.http_status===200);
 if(!source) throw new Error('Missing verified source: '+repository);
 const check=checks.find(x=>x.repo===repository);
 let license=source.license_spdx??'Unknown';
 let license_url=check?.url??source.readme_url+'#license';
 if(repository==='remotion-dev/remotion') license='Remotion License';
 if(repository==='greensock/GSAP'){license='GSAP Standard No Charge';license_url='https://gsap.com/community/standard-license/';}
 if(repository==='konvajs/konva') license='MIT (license text checked)';
 if(repository==='DavidHDev/react-bits') license='MIT + Commons Clause';
 if(repository==='theatre-js/theatre') license='Apache-2.0 core / AGPL-3.0 studio';
 if(priority==='license-hold') license='MIT claimed in README; license endpoint 404';
 const videoNative=['video-engine','scene-pack','workflow-reference'].includes(category);
 return {id:repository.toLowerCase().replace(/[^a-z0-9]+/g,'-'),name,repository,category,priority,description_ar,effects:effects.split(' '),arabic_adaptation_ar,limitations_ar,preview_url,license,license_url,stars:source.stars,forks:source.forks,archived:source.archived,pushed_at:source.pushed_at,checked_at:source.checked_at,source_url:source.url,readme_url:source.readme_url,metadata_url:source.source_url,render_path_ar:videoNative?'مسار فيديو أصلي أو قالب له؛ تحقق من التصدير للمكون المختار.':'مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.',evaluation_basis:'official repository metadata and README; editorial inference for Balarab fit',arabic_status:'adaptation_required_not_render_tested',demo_status:'official preview link catalogued; motion not visually certified',production_status:'research_candidate'};
});
await fs.writeFile(path.join(root,'catalog.json'),JSON.stringify({version:1,checked_date:'2026-10-14',language_policy:'English technical names; Arabic explanations and Arabic-first production',popularity_policy:'Stars and forks measure repository interest, not viewer retention or proven Arabic support.',categories,priorities,entries},null,2)+'\n');
let markdown='# مكتبة مصادر الموشن | Motion Sources\n\nآخر تحقق: 14 أكتوبر 2026. الأسماء التقنية إنجليزية والشرح عربي. التقييم تحريري يستند إلى README والبيانات الرسمية، ولم يجر اختبار تصدير عربي لهذه المكتبات. النجوم مؤشر اهتمام بالمستودع وليست دليل نجاح ريل.\n\n[طريقة الاختيار](docs/selection.ar.md) · [وصفات المشاهد](PATTERNS.md) · [قواعد العربية](docs/arabic-rtl.ar.md) · [دليل التراخيص](docs/licenses.ar.md)\n\n';
for(const [category,title] of Object.entries(categories)) {
 markdown+='## '+title+'\n\n';
 for(const item of entries.filter(x=>x.category===category)) {
  markdown+='### '+item.name+'\n\n'+item.description_ar+'\n\n';
  markdown+='- **المصدر:** ['+item.repository+']('+item.source_url+') · [README]('+item.readme_url+') · [معاينة المصدر]('+item.preview_url+')\n';
  markdown+='- **الاهتمام:** '+item.stars.toLocaleString('en-US')+' نجمة، '+(item.forks===null?'عدد fork غير محفوظ':item.forks.toLocaleString('en-US')+' fork')+'؛ التحقق '+item.checked_at.slice(0,10)+'.\n';
  markdown+='- **الاختيار لبالعرب:** '+priorities[item.priority]+'.\n';
  markdown+='- **حركات مفيدة:** '+item.effects.join('، ')+'.\n';
  markdown+='- **العربية وRTL:** '+item.arabic_adaptation_ar+'\n';
  markdown+='- **طريق الفيديو:** '+item.render_path_ar+'\n';
  markdown+='- **الحدود:** '+item.limitations_ar+'\n';
  markdown+='- **الترخيص:** ['+item.license+']('+item.license_url+').\n\n';
 }
}
await fs.writeFile(path.join(root,'CATALOG.md'),markdown);
console.log('Built '+entries.length+' curated sources in '+Object.keys(categories).length+' categories.');
