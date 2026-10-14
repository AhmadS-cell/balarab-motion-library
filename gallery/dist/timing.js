const clamp=t=>Math.max(0,Math.min(1,t));
// Quintic easing has zero velocity and acceleration at both stops.
export function easing(t){t=clamp(t);return t*t*t*(t*(t*6-15)+10);}
export function pressEnvelope(p,start,end){const t=clamp((p-start)/(end-start));return Math.sin(Math.PI*easing(t))**2;}
export const replayGap=.8;
export const previewPeriod=item=>item.duration+replayGap;
export function previewState(item,seconds){
 const t=((seconds%previewPeriod(item))+previewPeriod(item))%previewPeriod(item);
 if(t<item.duration)return {time:t,cover:0};
 const gap=(t-item.duration)/replayGap;
 return gap<.5?{time:item.duration-.00001,cover:easing(gap*2)}:{time:0,cover:1-easing((gap-.5)*2)};
}
export const motionDurations={M015:6.4,M024:7.2,M035:7.2,M058:7.2,M061:6.4,M065:6.4,M081:6.4};
export function motionProfile(item){
 const special={
  M018:['Sequential Add','بند يصل، ثم يضاف، ثم وقفة لقراءة المجموع.'],
  M024:['Linear Timer','عدّ بالثواني الفعلية مع حلقة مرتبطة بنفس الوقت.'],
  M035:['Staged Reorder','إفساح مسار، تغيير الترتيب، ثم استقرار دون تداخل.'],
  M081:['Fade Reorder','خروج هادئ، ترتيب جديد يحفظ القيم، ثم وقفة قراءة.'],
  M091:['Discrete Choice','اختيارات لون واضحة، مع وقفة مستقلة لكل خيار.'],
  M121:['Damped Rebound','هبوط ناعم، ارتداد محدود للأعلى، ثم استقرار.'],
  M122:['Arc Length + Ease In Out','تسارع وتباطؤ على طول المسار، مع توجيه السيارة حسب المماس.'],
  M129:['Node Stops','تباطؤ عند كل مرحلة، ثم استمرار في دورة كاملة.'],
  M135:['Inertia Stop','حركة سريعة بعد انطلاق قصير، ثم تباطؤ طويل وتوقف.'],
  M136:['Stagger + Collapse','دخول متتابع، انتهاء إشعار، ثم إغلاق الفراغ.'],
  M141:['J-cut','صوت اللقطة التالية يسبق قطع الصورة؛ القطع مقصود.'],
  M142:['Handheld + Settle','اهتزاز محدود يتلاشى ثم يستقر.'],
  M143:['Continuous Kashida','تمدد متصل لوصلة الكلمة، مع ثبات شكل الحروف العربية.']
 };
 const [technique,note]=special[item.id]||['Ease In Out','بداية هادئة، تسارع في الوسط، تباطؤ عند الوصول، ثم وقفة للنتيجة.'];
 return {technique,label:technique+' — '+note};
}
