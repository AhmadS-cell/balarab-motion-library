const ownCode='https://balarab-motion-gallery.ahmadsabbah81.chatgpt.site/prompt-motion.js';
const refs={photo:{slug:'twoclipping-221cab',author:'@twoclipping'},gallery:{slug:'twoclipping-6dd14e',author:'@twoclipping'},escape:{slug:'pankajkumar-dev-0bee87',author:'@pankajkumar_dev'},ui:{slug:'twoclipping-5cba86',author:'@twoclipping'},dot:{slug:'ultimaxbt-bbebf5',author:'@ultimaxbt'},paper:{slug:'ik-builds-b8bdcf',author:'@ik_builds'},badge:{slug:'bthreeagency-b9b8d9',author:'@BThreeAgency'},bucket:{slug:'parkerrex-1a54fe',author:'@ParkerRex'}};
export function promptReference(key){const r=refs[key];return {source:'Prompt Motion',sourceType:'visual-reference',referenceUrl:ownCode,referenceTitle:'تنفيذ بالعرب / Prompt Motion',exampleUrl:'https://prompt-motion.com/'+r.slug,referenceCredit:r.author,referenceNote:'مرجع '+r.author+' على Prompt Motion. السلوك أعيد تصميمه ورسمه لهذه المكتبة، مع تكييف العربية؛ لم ينسخ الفيديو أو البرومبت أو شيفرة مؤلفه. المرجع '+(key==='paper'?'وصف تقني في البرومبت، وليس ادعاء مطابقة فيديو المصدر.':'مثال مرئي ووصف سلوك، وليس حزمة GitHub.'),provenance:'prompt_motion_behavior_original_canvas',productionStatus:'preview_only'};}
const rows=[
 ['elastic-slider','سحب مرن عند حد القيمة','Elastic Limit Slider','المؤشر يسحب إلى الحد، تتمدد القبضة قليلًا، ثم ترجع دون تجاوز القيمة 100%.','ui',8.4,'Direct Manipulation + Release','اربط القيمة بالمؤشر أثناء السحب، وحدّدها عند الحد قبل ارتداد الشكل.'],
 ['chart-tooltip','مؤشر يكشف قيمة النقطة','Chart Tooltip Tracker','خط إرشادي وبطاقة قيمة يتبعان نفس النقطة على الرسم.','ui',8.4,'Path Tracking','استخدم بيانات معلومة، واشتق البطاقة والدليل من النقطة نفسها.'],
 ['play-pause-morph','تشغيل يتحول إلى إيقاف','Play Pause Morph','أجزاء رمز التشغيل تتحول إلى عمودي الإيقاف بعد الضغط.','ui',7.2,'Path Morph','حوّل أجزاء الرمز، مع إبقاء العربية خارج تشوه المسارات.'],
 ['scrub-preview','سحب الزمن يغيّر المعاينة','Scrub and Preview','موضع المقبض والوقت والصورة تتبع قيمة زمن واحدة أثناء التقديم والرجوع.','ui',8.4,'Seek Driven Motion','احسب الصورة والوقت من الموضع نفسه، ولا تشغّل ساعة مستقلة عنه.'],
 ['spring-response-plot','رسم الاستجابة والارتداد','Spring Response Plot','النقطة ترسم منحنى استجابتها، تتجاوز الهدف قليلًا ثم تستقر عليه.','dot',7.8,'Damped Spring','المنحنى والنقطة ناتجان عن الدالة نفسها. الرسم توضيحي وليس بيانات أداء متجر.'],
 ['orbit-labels','كلمات تدور حول الفكرة','Orbiting Labels','كلمات عربية كاملة تدور حول مركز مشترك وتستقر باتجاه قراءة صحيح.','dot',7.2,'Orbit + Settle','حرّك موضع الكلمة الكاملة مع حفظ شكل حروفها واتجاه قراءتها.'],
 ['halftone-reveal','كشف بنقاط تتمدد','Halftone Reveal','حقل نقاط يتمدد من اليمين ويكشف عبارة نهائية واضحة.','dot',8.4,'Staggered Dot Mask','استخدمه جسرًا قصيرًا إلى عبارة ذات معنى، مع وقفة قراءة في النهاية.'],
 ['shape-to-control','دائرة تصبح بطاقة ثم زرًا','Shape to UI Control','نفس الحاوية تتحول بين دائرة وبطاقة وزر، ويظهر محتوى كل حالة بعد استقرارها.','dot',8.4,'Shared Shape Morph','احفظ مركز الحاوية، وافصل خروج المحتوى عن دخول المحتوى التالي.'],
 ['badge-unlock','فتح شارة إنجاز','Badge Unlock','شارة تميل بخفة ثم تستقر، مع احتفال صغير بعد ظهور علامة الإنجاز.','badge',7.8,'Tilt + Reveal','احتفال بعد إنجاز واضح. هذه معاينة 2.5D أصلية وليست نموذج المصدر ثلاثي الأبعاد.'],
 ['smear-trail','أثر سرعة خلف العنصر','Smear Trail','عنصر سريع يترك أثرًا خفيفًا يتلاشى عند الوصول.','paper',6.4,'Speed Trail','الأثر يشرح السرعة، ولا يمثل عناصر أو طلبات إضافية.'],
 ['squash-stretch','ضغط وتمدد عند التلامس','Squash and Stretch','كرة تتمدد في الهواء وتنضغط على السطح ثم ترتد، مع حفظ مساحتها وعدم اختراق الأرض.','paper',8.4,'Impact + Rebound','طبّق التشوه على شكل مناسب، واحفظ الحروف العربية بنسبها الأصلية.'],
 ['token-bucket','حصة تنفد ثم تتعبأ','Token Bucket Gate','تمر الطلبات المتاحة، ينتظر التالي عند نفاد الحصة، ثم يمر بعد إعادة التعبئة.','bucket',10.8,'Event Driven Simulation','اعرض شروط السماح والانتظار وإعادة التعبئة نفسها، دون ادعاء أنها سياسة منصة بعينها.']
];
rows.push(
 ['photo-frame-growth','إطار ينمو من حافة الصورة','Photo Frame Growth','الصورة تبقى ثابتة، وتنمو حول حافتها طبقة الورق ثم إطارها الخارجي.','photo',8.4,'Edge Growth','احفظ قياس الصورة وهويتها؛ التغير في حدود الإطار حولها.'],
 ['window-roll-up','نافذة تلتف لتكشف التالي','Window Roll Up','ترتفع حافة نافذة ملتفة، فتُكشف الحالة التي خلفها مع حفظ نسب النص.','photo',8.4,'Clipped Roll Reveal','احجب النص بقناع بدل ضغط حروفه رأسيًا.'],
 ['gallery-scan-select','مسح مجموعة ثم اختيار عناصر','Gallery Scan Select','يمر خط فحص على مجموعة، ثم تبقى العناصر المختارة وتنتظم في صف.','gallery',9.6,'Scan + Select + Reflow','الاختيارات توضيحية؛ عند عرض أداء إعلانات استخدم نتائج فعلية وأصولًا مملوكة.'],
 ['frame-escape','عنصر يخرج من إطاره','Frame Escape','تفصيل المنتج نفسه يتجاوز حد بطاقته، مع حفظ هويته واتجاهه.','escape',7.8,'Frame Breakout','ابدأ بعنصر مفهوم داخل حدوده، ثم أبرز ما يخرج منها دون نسخه إلى عنصر ثانٍ.']
);
export const promptMotions=rows.map((r,index)=>Object.assign({id:'M'+(145+index),key:r[0],name:r[1],english:r[2],description:r[3],category:'prompt-motion',categoryName:'من Prompt Motion',index,duration:r[5],usage:r[7],motionTiming:{technique:r[6],label:r[6]+' — '+r[7]},keywords:r.slice(0,4).join(' ')+' Prompt Motion موشن مرجع جديد'},promptReference(r[4])));
export const promptUpdates={
 M007:{name:'قلم يرسم خط التأكيد',english:'Marker Underline',description:'قلم يمر تحت العبارة ثم يغادر، مع بقاء العربية متصلة.',ref:'paper'},
 M008:{description:'نقطة تصل إلى موضع الكلمة، تتمدد إلى كبسولة ثم تكشف العبارة.',ref:'dot'},
 M030:{description:'ضغط يحرك قبضة مرنة داخل المفتاح، ثم تستقر الحالة الجديدة.',ref:'ui'},
 M037:{description:'ضغط ثم زر ينكمش إلى تحميل وتأكيد، ثم يرجع بالنتيجة داخل نفس الواجهة.',ref:'ui'},
 M039:{name:'بحث وأمر سريع',english:'Command Palette Search',description:'تصفية داخل حقل، اختيار نتيجة، ثم إدخال يفتح تفاصيلها داخل نفس النافذة.',ref:'ui'},
 M042:{name:'إشعار يتمدد ويستقر',english:'Compact Notification',description:'إشارة صغيرة تتوسع إلى إشعار مقروء فوق الواجهة، ثم تستقر.',ref:'ui'},
 M047:{description:'طرفا مؤشر التبويب يتحركان بتأخر مختلف، ثم يظهر المحتوى الموافق للاختيار.',ref:'ui'},
 M118:{description:'بطاقة القيمة تصل إلى المنتج، تتأخر قليلًا عن الحركة ثم تهدأ دون فقد الرابط.',ref:'paper'}
};

const updateTiming={M007:['Marker Draw','قلم يتتبع الخط ثم يغادر بعد اكتماله.'],M008:['Dot to Pill','وصول النقطة، ثم تمدد الحاوية، ثم كشف النص.'],M030:['Elastic Toggle','ضغط فعلي، حركة قبضة مرنة، ثم استقرار الحالة.'],M037:['Morph + Load + Result','انكماش الزر، انتظار قصير، تأكيد، ثم ظهور النتيجة.'],M039:['Filter + Select + Enter','تصفية، اختيار، ثم فتح نتيجة داخل نفس المصدر.'],M042:['Compact to Expand','إشارة صغيرة تتوسع، ثم يكشف النص بعد اكتمال المساحة.'],M047:['Liquid Tab Indicator','الحافة المتقدمة تسبق الخلفية، ثم يلحق محتوى التبويب.'],M118:['Follow Through','تصل البطاقة أولًا، ثم يهدأ ميلها المتأخر مع حفظ الرابط.']};
for(const id of Object.keys(promptUpdates)){const [technique,note]=updateTiming[id];promptUpdates[id].motionTiming={technique,label:technique+' — '+note};}

export const promptRelated={M026:'photo',M064:'photo',M098:'photo',M134:'photo',M108:'gallery',M144:'dot'};
