# مكتبة مصادر الموشن | Motion Sources

آخر تحقق: 14 أكتوبر 2026. الأسماء التقنية إنجليزية والشرح عربي. التقييم تحريري يستند إلى README والبيانات الرسمية، ولم يجر اختبار تصدير عربي لهذه المكتبات. النجوم مؤشر اهتمام بالمستودع وليست دليل نجاح ريل.

[طريقة الاختيار](docs/selection.ar.md) · [وصفات المشاهد](PATTERNS.md) · [قواعد العربية](docs/arabic-rtl.ar.md) · [دليل التراخيص](docs/licenses.ar.md)

## محركات الفيديو

### Remotion

إنتاج فيديو مبرمج من مكونات React مع تحكم بالإطارات والصوت.

- **المصدر:** [remotion-dev/remotion](https://github.com/remotion-dev/remotion) · [README](https://github.com/remotion-dev/remotion/blob/main/README.md) · [معاينة المصدر](https://www.remotion.dev/showcase)
- **الاهتمام:** 63,936 نجمة، 5,039 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** أولوية تجربة أساسية.
- **حركات مفيدة:** captions، counters، comparison، transitions، ui.
- **العربية وRTL:** عرض العربية بعناصر DOM وخط عربي محمل قبل التصدير، وتخطيط RTL وعزل الأرقام.
- **طريق الفيديو:** مسار فيديو أصلي أو قالب له؛ تحقق من التصدير للمكون المختار.
- **الحدود:** ترخيص خاص؛ تحقق من أهلية الشركة وإصدار الحزمة قبل الاستخدام التجاري.
- **الترخيص:** [Remotion License](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).

### Motion Canvas

محرك رسوم تفسيرية بمتجهات TypeScript وتتابع مرتبط بالتعليق الصوتي.

- **المصدر:** [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) · [README](https://github.com/motion-canvas/motion-canvas/blob/main/README.md) · [معاينة المصدر](https://motioncanvas.io/)
- **الاهتمام:** 19,317 نجمة، 840 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** أولوية تجربة أساسية.
- **حركات مفيدة:** semantic-flow، reveal، timeline، morph.
- **العربية وRTL:** اختبار النص العربي كاملًا في Canvas، وتخطيط المشهد RTL يدويًا؛ لا تفترض وجود تعريب تلقائي.
- **طريق الفيديو:** مسار فيديو أصلي أو قالب له؛ تحقق من التصدير للمكون المختار.
- **الحدود:** يحتاج تجهيز مسار تصدير ومحاذاة؛ دعم العربية الفعلي لم يختبر هنا.
- **الترخيص:** [MIT](https://github.com/motion-canvas/motion-canvas/blob/main/README.md#license).

### Manim Community

إنتاج رسوم تفسيرية دقيقة للحسابات والبيانات والعلاقات.

- **المصدر:** [ManimCommunity/manim](https://github.com/ManimCommunity/manim) · [README](https://github.com/ManimCommunity/manim/blob/main/README.md) · [معاينة المصدر](https://docs.manim.community/en/stable/examples.html)
- **الاهتمام:** 41,510 نجمة، 3,186 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** لاستخدام متخصص.
- **حركات مفيدة:** chart، arithmetic، transform، semantic-flow.
- **العربية وRTL:** نص عربي بخط مناسب مع اختبار تشكيله، وعزل المعادلات والأرقام باتجاه LTR.
- **طريق الفيديو:** مسار فيديو أصلي أو قالب له؛ تحقق من التصدير للمكون المختار.
- **الحدود:** مناسب للحسبة، أقل مباشرة لواجهات المتجر؛ لا تستعمل TeX الافتراضي كضمان للعربية.
- **الترخيص:** [MIT](https://github.com/ManimCommunity/manim/blob/main/README.md#license).

## تتابع الحركة

### Anime.js

تحريك DOM وSVG وكائنات البيانات مع تتابع وتخفيف السرعة.

- **المصدر:** [juliangarnier/anime](https://github.com/juliangarnier/anime) · [README](https://github.com/juliangarnier/anime/blob/master/README.md) · [معاينة المصدر](https://animejs.com/)
- **الاهتمام:** 73,585 نجمة، 4,972 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** أولوية تجربة أساسية.
- **حركات مفيدة:** stagger، path، svg، counter، timeline.
- **العربية وRTL:** اتجاه التخطيط RTL مستقل عن حركة العنصر؛ حرّك الكلمات كوحدات ولا تفصل الحروف المتصلة.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** مكتبة ويب؛ يحتاج الفيديو ساعة إطارات حتمية بدل التشغيل حسب وقت الشاشة.
- **الترخيص:** [MIT](https://github.com/juliangarnier/anime/blob/master/README.md#license).

### GSAP

تحكم دقيق بتتابع الحركات ومسارات العناصر وإعادة توزيعها.

- **المصدر:** [greensock/GSAP](https://github.com/greensock/GSAP) · [README](https://github.com/greensock/GSAP/blob/master/README.md) · [معاينة المصدر](https://gsap.com/demos/)
- **الاهتمام:** 29,182 نجمة، 2,255 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** أولوية تجربة أساسية.
- **حركات مفيدة:** flip، path، reveal، timeline، svg.
- **العربية وRTL:** استخدم FLIP لإخلاء مكان العنصر الجديد، ثم إعادة حساب هدف المؤشر بعد RTL.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** ترخيص GSAP خاص وليس MIT؛ لا تحول ScrollTrigger إلى ساعة فيديو.
- **الترخيص:** [GSAP Standard No Charge](https://gsap.com/community/standard-license/).

### Motion

حركة React وDOM وانتقالات التخطيط مع springs.

- **المصدر:** [motiondivision/motion](https://github.com/motiondivision/motion) · [README](https://github.com/motiondivision/motion/blob/main/README.md) · [معاينة المصدر](https://motion.dev/examples)
- **الاهتمام:** 34,079 نجمة، 1,425 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** layout، comparison، reveal، exit.
- **العربية وRTL:** التخطيط RTL وعزل النص المختلط؛ اربط حالة المقارنة بمشهدها.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** الافتراضات التفاعلية والوقت الحقيقي تحتاج تكييفًا لإنتاج الإطارات.
- **الترخيص:** [MIT](https://github.com/motiondivision/motion/blob/main/README.md#license).

### React Spring

حركة قائمة على springs لتغيير الحجم والموقع والتركيز.

- **المصدر:** [pmndrs/react-spring](https://github.com/pmndrs/react-spring) · [README](https://github.com/pmndrs/react-spring/blob/next/README.md) · [معاينة المصدر](https://react-spring.dev/)
- **الاهتمام:** 29,165 نجمة، 1,223 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** spring، comparison، emphasis.
- **العربية وRTL:** spring محدود يحفظ سطر العربية والحدود؛ لا ارتداد يعطل قراءة الرقم.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** يحتاج ربطًا صريحًا بالإطارات والتحقق من seek في مسار التصدير.
- **الترخيص:** [MIT](https://github.com/pmndrs/react-spring/blob/next/README.md#license).

### Theatre.js

محرر حركة وكاميرا مع تحكم بخصائص المشهد عبر timeline.

- **المصدر:** [theatre-js/theatre](https://github.com/theatre-js/theatre) · [README](https://github.com/theatre-js/theatre/blob/main/README.md) · [معاينة المصدر](https://www.theatrejs.com/)
- **الاهتمام:** 12,760 نجمة، 480 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** لاستخدام متخصص.
- **حركات مفيدة:** camera، keyframe، product.
- **العربية وRTL:** تخطيط العربية في طبقة نص منفصلة؛ الحفاظ على الموقع والكابتشن خارج الكاميرا.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** Core Apache-2.0 وStudio AGPL-3.0 حسب README؛ شروط مختلفة، والتطوير العام يحتاج متابعة.
- **الترخيص:** [Apache-2.0 core / AGPL-3.0 studio](https://github.com/theatre-js/theatre/blob/main/README.md#license).

## تشغيل أصول الأنيميشن

### Lottie Web

تشغيل ملفات أنيميشن مصدرة من After Effects عبر Lottie.

- **المصدر:** [airbnb/lottie-web](https://github.com/airbnb/lottie-web) · [README](https://github.com/airbnb/lottie-web/blob/master/README.md) · [معاينة المصدر](https://airbnb.io/lottie/)
- **الاهتمام:** 32,224 نجمة، 2,950 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** icon، state-change، success، delivery.
- **العربية وRTL:** الأفضل أصل بلا كتابة أجنبية، مع وضع العربية في طبقة DOM مستقلة واختبار الخط.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** ترخيص المشغل لا يمنح حق استخدام كل ملف Lottie؛ التشغيل وحده لا يصدر MP4.
- **الترخيص:** [MIT](https://github.com/airbnb/lottie-web/blob/master/README.md#license).

### dotLottie Web

مشغل Lottie وdotLottie مع تحكم بالثيمات والإطارات.

- **المصدر:** [LottieFiles/dotlottie-web](https://github.com/LottieFiles/dotlottie-web) · [README](https://github.com/LottieFiles/dotlottie-web/blob/main/README.md) · [معاينة المصدر](https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-web/)
- **الاهتمام:** 903 نجمة، 55 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** state-change، icon، segment، themes.
- **العربية وRTL:** تعريب الأصل أو فصل الكتابة في DOM؛ فحص الرموز والأرقام دون انعكاس.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** ترخيص الأصل مستقل، وWASM يحتاج تحميلًا كاملًا وتحكمًا ثابتًا أثناء التصدير.
- **الترخيص:** [MIT](https://github.com/LottieFiles/dotlottie-web/blob/main/README.md#license).

### Rive Web

تشغيل رسوم Rive بحالات وتفاعلات داخل Canvas.

- **المصدر:** [rive-app/rive-wasm](https://github.com/rive-app/rive-wasm) · [README](https://github.com/rive-app/rive-wasm/blob/master/README.md) · [معاينة المصدر](https://rive.app/docs/runtimes/web/web)
- **الاهتمام:** 987 نجمة، 90 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** لاستخدام متخصص.
- **حركات مفيدة:** state-machine، character، interaction.
- **العربية وRTL:** ابدأ برسم بلا نص أو اختبر النص والخط في النسخة المستخدمة؛ لا تفترض RTL من دعم Unicode.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** أصول riv وشروط المحرر مستقلة عن ترخيص runtime؛ ثبّت تحديث الزمن للتصدير.
- **الترخيص:** [MIT](https://github.com/rive-app/rive-wasm/blob/master/README.md#license).

## المنتج والعمق 3D

### Three.js

مشاهد ثلاثية الأبعاد للمنتج والعمق والإضاءة وحركة الكاميرا.

- **المصدر:** [mrdoob/three.js](https://github.com/mrdoob/three.js) · [README](https://github.com/mrdoob/three.js/blob/dev/README.md) · [معاينة المصدر](https://threejs.org/examples/)
- **الاهتمام:** 116,371 نجمة، 36,639 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** لاستخدام متخصص.
- **حركات مفيدة:** product، camera، lighting، parallax.
- **العربية وRTL:** يبقى النص العربي بطبقة DOM عند الإمكان؛ لا تعكس texture المنتج أو الشعار.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** ليس قالب فيديو؛ يحتاج أصل منتج جيدًا وتحكمًا بالإطارات وتكلفة رسم أعلى.
- **الترخيص:** [MIT](https://github.com/mrdoob/three.js/blob/dev/README.md#license).

### React Three Fiber

بناء Three.js ضمن React لدمج المنتج ثلاثي الأبعاد مع المشهد.

- **المصدر:** [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) · [README](https://github.com/pmndrs/react-three-fiber/blob/master/readme.md) · [معاينة المصدر](https://r3f.docs.pmnd.rs/getting-started/examples)
- **الاهتمام:** 32,957 نجمة، 2,023 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** لاستخدام متخصص.
- **حركات مفيدة:** product، camera، depth.
- **العربية وRTL:** النص العربي DOM فوق المشهد، وتحديث الرسم من إطار الفيديو بدل delta الوقت الحقيقي.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** الجودة تتوقف على الموديل والإضاءة؛ لا يعالج ضعف الأصل وحده.
- **الترخيص:** [MIT](https://github.com/pmndrs/react-three-fiber/blob/master/readme.md#license).

### Drei

أدوات مساعدة لمشاهد React Three Fiber والكاميرا والبيئة.

- **المصدر:** [pmndrs/drei](https://github.com/pmndrs/drei) · [README](https://github.com/pmndrs/drei/blob/master/README.md) · [معاينة المصدر](https://drei.docs.pmnd.rs/)
- **الاهتمام:** 9,941 نجمة، 847 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** لاستخدام متخصص.
- **حركات مفيدة:** camera، environment، product.
- **العربية وRTL:** استخدم الأدوات البصرية مع طبقة نص عربية مستقلة وتحقق من تحميل الأصول.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** تفحص تراخيص صور البيئة والموديلات؛ أدوات النص ثلاثي الأبعاد تحتاج تجربة عربية منفصلة.
- **الترخيص:** [MIT](https://github.com/pmndrs/drei/blob/master/README.md#license).

## رسم 2D

### PixiJS

رسم 2D سريع بطبقات وصور وحركة في WebGL.

- **المصدر:** [pixijs/pixijs](https://github.com/pixijs/pixijs) · [README](https://github.com/pixijs/pixijs/blob/dev/README.md) · [معاينة المصدر](https://pixijs.com/8.x/examples)
- **الاهتمام:** 48,368 نجمة، 5,093 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** لاستخدام متخصص.
- **حركات مفيدة:** sprite، particle، product، layer.
- **العربية وRTL:** النص العربي HTML عند الإمكان أو اختبار تشكيل Canvas والخط، مع عزل الأرقام.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** ticker الافتراضي ليس ساعة فيديو؛ أوقفه واستخدم زمن إطار ثابت.
- **الترخيص:** [MIT](https://github.com/pixijs/pixijs/blob/dev/README.md#license).

### Konva

رسم Canvas بطبقات وعناصر يمكن تغيير حالتها ومواقعها.

- **المصدر:** [konvajs/konva](https://github.com/konvajs/konva) · [README](https://github.com/konvajs/konva/blob/master/README.md) · [معاينة المصدر](https://konvajs.org/docs/sandbox.html)
- **الاهتمام:** 14,867 نجمة، 1,067 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** semantic-flow، card، state-change.
- **العربية وRTL:** اختبار العربية والخط في Canvas وحساب عرضها المرئي، وتخطيط RTL يدوي.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** يفيد الرسم المخصص لكنه يحتاج مصدر إطارات ومسار تصدير للفيديو.
- **الترخيص:** [MIT (license text checked)](https://github.com/konvajs/konva/blob/master/LICENSE).

## مكونات الويب الملهمة

### React Bits

مكتبة واسعة من مكونات React المتحركة والتأثيرات البصرية.

- **المصدر:** [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) · [README](https://github.com/DavidHDev/react-bits/blob/main/README.md) · [معاينة المصدر](https://reactbits.dev/)
- **الاهتمام:** 49,103 نجمة، 2,410 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مرجع إلهام.
- **حركات مفيدة:** text، background، card، shader.
- **العربية وRTL:** اختيار تأثيرات تكشف المعنى؛ استبدال split-character بكلمات كاملة وتغيير الألوان والخط.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** MIT مع Commons Clause؛ كثير من المؤثرات زخرفية أو تفاعلية وتحتاج إعادة بناء للفيديو.
- **الترخيص:** [MIT + Commons Clause](https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md).

### Magic UI

مكونات واجهة متحركة ومراجع للكشف والأرقام وإبراز التغير.

- **المصدر:** [magicuidesign/magicui](https://github.com/magicuidesign/magicui) · [README](https://github.com/magicuidesign/magicui/blob/main/README.md) · [معاينة المصدر](https://magicui.design/docs)
- **الاهتمام:** 22,658 نجمة، 1,174 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** counter، beam، card، reveal.
- **العربية وRTL:** تكييف المحاذاة RTL والوحدة بجانب الرقم؛ تقليل اللمعان والخلفيات.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** الإشارات المعتمدة على hover أو scroll ليست مناسبة تلقائيًا لملف فيديو.
- **الترخيص:** [MIT](https://github.com/magicuidesign/magicui/blob/main/README.md#license).

### Motion Primitives

مكونات حركة صغيرة مبنية على Motion وTailwind.

- **المصدر:** [ibelick/motion-primitives](https://github.com/ibelick/motion-primitives) · [README](https://github.com/ibelick/motion-primitives/blob/main/README.md) · [معاينة المصدر](https://motion-primitives.com/docs)
- **الاهتمام:** 6,549 نجمة، 282 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** text، reveal، layout، transition.
- **العربية وRTL:** تكييف split-text للكلمات العربية وتحميل الخط، ثم قياس المسافات وقت الحركة.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** المصدر يصف المشروع بأنه beta؛ ثبّت الإصدار واختبر المكون المختار.
- **الترخيص:** [MIT](https://github.com/ibelick/motion-primitives/blob/main/README.md#license).

### AutoAnimate

انتقالات تلقائية لإضافة وحذف وإعادة ترتيب عناصر الواجهة.

- **المصدر:** [formkit/auto-animate](https://github.com/formkit/auto-animate) · [README](https://github.com/formkit/auto-animate/blob/master/README.md) · [معاينة المصدر](https://auto-animate.formkit.com/)
- **الاهتمام:** 13,931 نجمة، 264 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مرجع إلهام.
- **حركات مفيدة:** reflow، list، enter، exit.
- **العربية وRTL:** مرجع ممتاز لإفساح مكان عنصر جديد داخل RTL دون تغيير ترتيب المعنى.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** يستجيب لتغير DOM وقت التشغيل؛ اقتبس السلوك وابنه بحساب الإطارات للفيديو.
- **الترخيص:** [MIT](https://github.com/formkit/auto-animate/blob/master/README.md#license).

## حركة SVG

### mo.js

أشكال واندفاعات حركية قصيرة للتأكيد والتفاعل.

- **المصدر:** [mojs/mojs](https://github.com/mojs/mojs) · [README](https://github.com/mojs/mojs/blob/main/README.md) · [معاينة المصدر](https://mojs.github.io/)
- **الاهتمام:** 18,810 نجمة، 894 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مرجع إلهام.
- **حركات مفيدة:** burst، success، shape.
- **العربية وRTL:** لا نص داخل burst؛ لون هوية مناسب وتأكيد واحد عند النتيجة.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** المبالغة بالاندفاعات مشتتة؛ لا تستخدم مؤثرًا عند كل كلمة.
- **الترخيص:** [MIT](https://github.com/mojs/mojs/blob/main/README.md#license).

### Vivus

كشف مسارات SVG تدريجيًا بما يشبه رسم الخط.

- **المصدر:** [maxwellito/vivus](https://github.com/maxwellito/vivus) · [README](https://github.com/maxwellito/vivus/blob/master/readme.md) · [معاينة المصدر](https://maxwellito.github.io/vivus/)
- **الاهتمام:** 15,482 نجمة، 1,121 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** draw-on، svg، reveal.
- **العربية وRTL:** ارسم مخططًا أو عنصرًا وظيفيًا، وأبق العربية نصًا صحيحًا منفصلًا.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** رسم شعار بالعرب لا يستبدل اللوجو الملون الأصلي في الخاتمة.
- **الترخيص:** [MIT](https://github.com/maxwellito/vivus/blob/master/readme.md#license).

### Flubber

حساب انتقالات سلسة بين أشكال SVG مختلفة.

- **المصدر:** [veltman/flubber](https://github.com/veltman/flubber) · [README](https://github.com/veltman/flubber/blob/master/README.md) · [معاينة المصدر](https://veltman.github.io/flubber/)
- **الاهتمام:** 6,940 نجمة، 168 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** morph، shape، transform.
- **العربية وRTL:** حوّل جسمًا منطقيًا لا حروف العربية، واحفظ هوية العنصر أثناء التحول.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** ليس كل تحول مفيدًا؛ لا تحوّل منتجًا إلى مال إذا أخفى سبب العلاقة.
- **الترخيص:** [MIT](https://github.com/veltman/flubber/blob/master/README.md#license).

### Rough.js

رسوم بخط يدوي لتبسيط الأشكال والمخططات.

- **المصدر:** [rough-stuff/rough](https://github.com/rough-stuff/rough) · [README](https://github.com/rough-stuff/rough/blob/master/README.md) · [معاينة المصدر](https://roughjs.com/)
- **الاهتمام:** 21,262 نجمة، 664 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مرجع إلهام.
- **حركات مفيدة:** illustration، diagram، sketch.
- **العربية وRTL:** النص بخط بالعرب، مع درجة roughness صغيرة إن خدمت الشرح.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** أسلوب الرسم الخشن لا يستبدل الرسم المبسط المعتمد أو يوحد نفسه معه تلقائيًا.
- **الترخيص:** [MIT](https://github.com/rough-stuff/rough/blob/master/README.md#license).

## مؤثرات اختيارية

### tsParticles

أنظمة جزيئات وخلفيات واحتفال حركي.

- **المصدر:** [tsparticles/tsparticles](https://github.com/tsparticles/tsparticles) · [README](https://github.com/tsparticles/tsparticles/blob/main/README.md) · [معاينة المصدر](https://particles.js.org/)
- **الاهتمام:** 8,992 نجمة، 945 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مرجع إلهام.
- **حركات مفيدة:** particle، confetti، background.
- **العربية وRTL:** تأكيد قصير بلا كتابة، بعيد عن الكابتشن وبألوان مناسبة.
- **طريق الفيديو:** مسار ويب أو رسوم؛ يلزم تحكم بالإطارات ثم التقاطها أو إدماجها في محرك فيديو.
- **الحدود:** أولوية منخفضة لشرح المتاجر؛ كثافة الجزيئات تشتت وتزيد تكلفة الرسم.
- **الترخيص:** [MIT](https://github.com/tsparticles/tsparticles/blob/main/README.md#license).

## مكونات ومشاهد جاهزة

### Motion Canvas Examples

أمثلة رسمية لدراسة استمرارية العناصر والعمق والحركة داخل شرح متصل.

- **المصدر:** [motion-canvas/examples](https://github.com/motion-canvas/examples) · [README](https://github.com/motion-canvas/examples/blob/master/README.md) · [معاينة المصدر](https://github.com/motion-canvas/examples)
- **الاهتمام:** 1,167 نجمة، 81 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** parallax، camera، continuous-story، reveal.
- **العربية وRTL:** إعادة بناء التسميات بالعربية والمحاذاة، واستخدام الفكرة الحركية مع أصول بالعرب.
- **طريق الفيديو:** مسار فيديو أصلي أو قالب له؛ تحقق من التصدير للمكون المختار.
- **الحدود:** أمثلة أجنبية وليست قالب ريل عمودي؛ راجع تراخيص أصول كل مثال.
- **الترخيص:** [MIT](https://github.com/motion-canvas/examples/blob/master/README.md#license).

### Curvable Motion

مشاهد Remotion جاهزة للنصوص والبطاقات وإظهار البيانات.

- **المصدر:** [Curvable/motion](https://github.com/Curvable/motion) · [README](https://github.com/Curvable/motion/blob/main/README.md) · [معاينة المصدر](https://curvable.ai/library)
- **الاهتمام:** 19 نجمة، 1 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** floating-stack، stats-grid، prompt-input، text-reveal.
- **العربية وRTL:** استبدال خط Geist بخط عربي، وتعريب التخطيط؛ كتابة الحرف حرفًا تحتاج فحص اتصال العربية.
- **طريق الفيديو:** مسار فيديو أصلي أو قالب له؛ تحقق من التصدير للمكون المختار.
- **الحدود:** المكتبة صغيرة الاهتمام نسبيًا؛ ألوانها ومدة مشاهدها ليست هوية أو توقيت بالعرب.
- **الترخيص:** [MIT](https://github.com/Curvable/motion/blob/main/README.md#license).

### Remotion Scenes

مجموعة واسعة من مشاهد الأرقام والواجهات والانتقالات داخل Remotion.

- **المصدر:** [lifeprompt-team/remotion-scenes](https://github.com/lifeprompt-team/remotion-scenes) · [README](https://github.com/lifeprompt-team/remotion-scenes/blob/main/README.md) · [معاينة المصدر](https://lifeprompt-team.github.io/remotion-scenes/)
- **الاهتمام:** 58 نجمة، 5 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** chart، counter، comparison، cursor، reveal.
- **العربية وRTL:** أعد تكوين المشهد لعمودي 9:16 وRTL، واختر وظيفته دون نقل ثيمه.
- **طريق الفيديو:** مسار فيديو أصلي أو قالب له؛ تحقق من التصدير للمكون المختار.
- **الحدود:** عدد 201 ادعاء README لم يعد مستقلًا؛ السينمائي وglitch ليسا افتراضيًا لبالعرب.
- **الترخيص:** [MIT](https://github.com/lifeprompt-team/remotion-scenes/blob/main/README.md#license).

### Remotion Bits

مكونات فيديو ورسوم وانتقالات جاهزة لبيئة Remotion.

- **المصدر:** [av/remotion-bits](https://github.com/av/remotion-bits) · [README](https://github.com/av/remotion-bits/blob/master/README.md) · [معاينة المصدر](https://github.com/av/remotion-bits)
- **الاهتمام:** 489 نجمة، عدد fork غير محفوظ؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مرجع حتى حسم الترخيص.
- **حركات مفيدة:** chart، transition، text-reveal، card.
- **العربية وRTL:** إعادة تخطيط النصوص RTL واختبار المكون منفردًا بالعربية.
- **طريق الفيديو:** مسار فيديو أصلي أو قالب له؛ تحقق من التصدير للمكون المختار.
- **الحدود:** README يذكر MIT لكن endpoint الترخيص أعاد 404؛ مرجع سلوكي حتى تثبيت ملف ترخيص الإصدار.
- **الترخيص:** [MIT claimed in README; license endpoint 404](https://github.com/av/remotion-bits/blob/master/README.md#license).

### RVE Remotion Templates

قوالب رسوم بيانية ونصوص وصور وانتقالات تعتمد إطار Remotion.

- **المصدر:** [reactvideoeditor/remotion-templates](https://github.com/reactvideoeditor/remotion-templates) · [README](https://github.com/reactvideoeditor/remotion-templates/blob/main/README.md) · [معاينة المصدر](https://www.reactvideoeditor.com/remotion-templates)
- **الاهتمام:** 261 نجمة، عدد fork غير محفوظ؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مرجع حتى حسم الترخيص.
- **حركات مفيدة:** bar-chart، line-chart، counter، ken-burns، parallax.
- **العربية وRTL:** عزل قيم الرسم LTR وتسميات RTL، وتغيير اتجاه الكشف عندما يخدم القراءة.
- **طريق الفيديو:** مسار فيديو أصلي أو قالب له؛ تحقق من التصدير للمكون المختار.
- **الحدود:** README يذكر MIT لكن endpoint الترخيص أعاد 404؛ لا نسخ كود قبل تأكيد ترخيص النسخة.
- **الترخيص:** [MIT claimed in README; license endpoint 404](https://github.com/reactvideoeditor/remotion-templates/blob/main/README.md#license).

### Onda

مكونات Remotion بمفردات حركة مشتركة وكشف هادئ وواجهات وأرقام.

- **المصدر:** [degueba/onda](https://github.com/degueba/onda) · [README](https://github.com/degueba/onda/blob/main/README.md) · [معاينة المصدر](https://remotion.onda.video/components)
- **الاهتمام:** 26 نجمة، 2 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مفيد بعد التكييف.
- **حركات مفيدة:** cursor، counter، reflow، highlight، parallax، transition.
- **العربية وRTL:** استبدال خطوطه وألوانه بهوية بالعرب وتكييف RTL؛ لا إطار هاتف افتراضي.
- **طريق الفيديو:** مسار فيديو أصلي أو قالب له؛ تحقق من التصدير للمكون المختار.
- **الحدود:** التوقيت والثيم الثابتان فيه مجرد بداية تقنية؛ يتبع الموشن تسجيل ناصر.
- **الترخيص:** [MIT](https://github.com/degueba/onda/blob/main/README.md#license).

## مراجع سير الإنتاج

### MotionCraft

مرجع لسير إنتاج فيديو بصوت متزامن ورسوم ومراجعة بكسلات التصدير.

- **المصدر:** [ahmdd4vd/MotionCraft](https://github.com/ahmdd4vd/MotionCraft) · [README](https://github.com/ahmdd4vd/MotionCraft/blob/main/README.md) · [معاينة المصدر](https://github.com/ahmdd4vd/MotionCraft)
- **الاهتمام:** 14 نجمة، عدد fork غير محفوظ؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مرجع إلهام.
- **حركات مفيدة:** captions، sound-design، qa، storyboard.
- **العربية وRTL:** احتفظ بسير بالعرب وناصر والتسجيل الواحد؛ استبدل styles والخط والمحاذاة بكلمات عربية.
- **طريق الفيديو:** مسار فيديو أصلي أو قالب له؛ تحقق من التصدير للمكون المختار.
- **الحدود:** لم تثبت ملاءمته العربية أو جودة فيديو منه؛ لا تثبيت مهارته أو اعتماد قوالبه تلقائيًا.
- **الترخيص:** [MIT](https://github.com/ahmdd4vd/MotionCraft/blob/main/README.md#license).

### Montage

مرجع فيديوهات منتج بـRemotion وspring وواجهات وانتقالات متصلة.

- **المصدر:** [simplexlabs/montage](https://github.com/simplexlabs/montage) · [README](https://github.com/simplexlabs/montage/blob/main/README.md) · [معاينة المصدر](https://github.com/simplexlabs/montage)
- **الاهتمام:** 27 نجمة، 1 fork؛ التحقق 2026-10-14.
- **الاختيار لبالعرب:** مرجع إلهام.
- **حركات مفيدة:** storyboard، ui، camera، transition، spring.
- **العربية وRTL:** تكييف المصدر والفعل والنتيجة بالعربية و9:16 دون نسخ البراند أو المنطوق.
- **طريق الفيديو:** مسار فيديو أصلي أو قالب له؛ تحقق من التصدير للمكون المختار.
- **الحدود:** مرجع منخفض النجوم؛ تعليمات الوكيل التابعة له لا تستبدل قواعد بالعرب.
- **الترخيص:** [MIT](https://github.com/simplexlabs/montage/blob/main/README.md#license).

