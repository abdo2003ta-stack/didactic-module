"use client";

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Share2, Layers, CheckCircle, Brain, Lightbulb, Box, 
  Activity, Quote, ArrowRight, Sun, Moon, Sprout, Droplets, 
  Microscope, Globe, MonitorPlay, Zap, FlaskConical, Scale, 
  AlertTriangle, Target, MousePointerClick, Network, Split, GitGraph, ShieldCheck,
  Rabbit, Cat, Leaf, Utensils, Pencil
} from 'lucide-react';

// ------------------- TYPES -------------------
type Section = 'formulation' | 'conceptMap' | 'didacticMeans' | 'exam';

// ------------------- MAIN COMPONENT -------------------
export default function DidacticModulePage() {
  const [activeSection, setActiveSection] = useState<Section>('didacticMeans');
  const [isDark, setIsDark] = useState(true); // يبدأ مظلم
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-800'}`} dir="rtl">
      <div className="fixed top-0 left-0 w-full h-1.5 z-[60] bg-transparent">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>
      {/* Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 left-4 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform"
      >
        {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
      </button>

      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 py-12 md:py-20 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg ring-4 ring-white/5">
              <BookOpen size={48} className="text-indigo-200" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">مجزوءة الديدكتيك (ابتدائي)</h1>
          <p className="text-lg md:text-xl text-indigo-100 font-light max-w-3xl mx-auto mt-4 opacity-90">
             مقاربة تحليلية شاملة: من النقل الديدكتيكي إلى هندسة التعلمات
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <NavButton label="1. صياغة المفهوم" icon={<Brain size={18} />} isActive={activeSection === 'formulation'} onClick={() => setActiveSection('formulation')} activeColor="bg-blue-600" />
            <NavButton label="2. الخريطة المفهومية" icon={<Share2 size={18} />} isActive={activeSection === 'conceptMap'} onClick={() => setActiveSection('conceptMap')} activeColor="bg-purple-600" />
            <NavButton label="3. الوسائل الديدكتيكية" icon={<Box size={18} />} isActive={activeSection === 'didacticMeans'} onClick={() => setActiveSection('didacticMeans')} activeColor="bg-teal-600" />
            {/* ... الأزرار الثلاثة الموجودة سابقاً ... */}
            
            <NavButton 
              label="4. الامتحان الشامل" 
              icon={<Target size={18} />} 
              isActive={activeSection === 'exam'} 
              onClick={() => setActiveSection('exam')} 
              activeColor="bg-red-600" 
            />
            
            {/* ... نهاية القائمة ... */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl min-h-[600px]">
        
        {/* ================= SECTION 1: FORMULATION ================= */}
        {activeSection === 'formulation' && (
          <div className="space-y-16 animate-fade-in">
            <SectionHeader 
              title="مستوى صياغة المفهوم" 
              subtitle="التفكيك المنهجي: من المعرفة العالمة إلى المعرفة المكتسبة"
              icon={<Brain className="text-blue-600" size={32} />}
              colorClass="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border-r-4 border-blue-500 relative overflow-hidden">
                    <div className="absolute top-0 left-0 p-4 opacity-10">
                        <Quote size={80} className="text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 relative z-10">التعريف الديدكتيكي</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-8 relative z-10 text-justify">
                        صياغة المفهوم هي سيرورة <strong>بناء ديدكتيكية</strong> تهدف إلى تحديد المستوى الذي سيُقَدَّم به المفهوم للمتعلمين. 
                        وهي لا تعني "التبسيط المخل" للمعرفة، بل تعني <strong>تكييف</strong> المعرفة العالمة لتناسب البنية المعرفية للمتعلم.
                    </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg text-blue-600"><Lightbulb size={24} /></div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">مثال: مفهوم "التنفس"</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 opacity-60">
                            <div className="mt-1 text-slate-700 dark:text-slate-300"><Activity size={18} /></div>
                            <div>
                                <strong className="block text-sm text-gray-900 dark:text-gray-200">المستوى الجامعي:</strong>
                                <span className="text-xs text-gray-600 dark:text-gray-400">أكسدة خلوية، حلقة كريبس، ATP.</span>
                            </div>
                        </div>
                        <div className="flex justify-center text-blue-500"><ArrowRight className="rotate-90" size={20} /></div>
                        <div className="flex items-start gap-4 bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm border border-blue-200 dark:border-blue-900/30">
                            <div className="mt-1 text-blue-600"><CheckCircle size={18} /></div>
                            <div>
                                <strong className="block text-sm text-blue-700 dark:text-blue-300">المستوى المدرسي:</strong>
                                <span className="text-sm text-gray-700 dark:text-gray-300">تبادلات غازية تضمن تزويد الجسم بالطاقة.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 dark:border-slate-800">
              <div className="bg-slate-900 dark:bg-black p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-800 opacity-40"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">سلسلة النقل الديدكتيكي</h3>
                <p className="text-blue-200 relative z-10 text-sm font-mono tracking-widest uppercase">Yves Chevallard</p>
              </div>
              <div className="p-8 md:p-12 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-slate-800 -z-0 rounded-full"></div>
                  <TranspositionStep title="المعرفة العالمة" sub="(Savoir Savant)" icon={<Brain size={24} />} step="1" color="bg-slate-800 text-white" />
                  <ArrowIcon className="hidden md:block text-gray-300 dark:text-slate-600 relative z-10 bg-slate-50 dark:bg-slate-900 p-1 rounded-full" />
                  <TranspositionStep title="المعرفة الواجب تدريسها" sub="(À Enseigner)" icon={<BookOpen size={24} />} step="2" color="bg-blue-600 text-white" />
                  <ArrowIcon className="hidden md:block text-gray-300 dark:text-slate-600 relative z-10 bg-slate-50 dark:bg-slate-900 p-1 rounded-full" />
                  <TranspositionStep title="المعرفة المُدَرَّسة" sub="(Savoir Enseigné)" icon={<Activity size={24} />} step="3" color="bg-indigo-600 text-white" />
                  <ArrowIcon className="hidden md:block text-gray-300 dark:text-slate-600 relative z-10 bg-slate-50 dark:bg-slate-900 p-1 rounded-full" />
                  <TranspositionStep title="المعرفة المُكتسبة" sub="(Savoir Appris)" icon={<CheckCircle size={24} />} step="4" color="bg-green-600 text-white" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
               <div className="md:col-span-4 bg-blue-50 dark:bg-blue-950/40 p-8 rounded-3xl h-full border border-blue-100 dark:border-blue-900 relative overflow-hidden">
                 <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6 relative z-10">مفهوم النوسفير</h3>
                 <p className="text-blue-800 dark:text-blue-200 leading-relaxed mb-4 relative z-10">
                   "Noosphère" هي طبقة التفكير أو الهيئة (مفتشون، خبراء) التي تختار ما يجب تدريسه.
                 </p>
               </div>
               <div className="md:col-span-8 grid gap-4">
                  <MechanismCard title="1. نزع الطابع الشخصي" desc="فصل المعرفة عن الباحث وظروف الاكتشاف." />
                  <MechanismCard title="2. نزع الطابع السياقي" desc="إخراج المعلومة من سياقها الأصلي لتصبح عامة." />
                  <MechanismCard title="3. القابلية للبرمجة" desc="تقطيع المعرفة لتتناسب مع الزمن المدرسي." />
                  <MechanismCard title="4. الإشهار أو العلنية" desc="تحديد واضح لما هو مطلوب (العقد الديدكتيكي)." />
               </div>
            </div>
            <QuickQuiz section="formulation" />
          </div>
        )}

        {/* ================= SECTION 2: CONCEPT MAP ================= */}
        {activeSection === 'conceptMap' && (
          <div className="space-y-16 animate-fade-in">
            <SectionHeader 
              title="الخريطة المفهومية (Concept Map)" 
              subtitle="أداة لبناء المعرفة المنظمة وليس مجرد رسم للتذكر"
              icon={<Share2 className="text-purple-600" size={32} />}
              colorClass="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
            />

            {/* 1. Deep Definition */}
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-r-4 border-purple-500 shadow-sm">
                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2"><Lightbulb className="text-purple-600"/> التعريف العميق</h3>
                 <p className="text-gray-600 dark:text-gray-300 leading-8 text-justify">
                   هي تمثيل تخطيطي للعلاقات ذات المعنى بين المفاهيم في صورة <strong>قضايا (Propositions)</strong>. تستند إلى نظرية <strong>ديفيد أوزوبل</strong> التي تؤكد أن التعلم الحقيقي يحدث عندما ترتبط المعرفة الجديدة (المفهوم الثانوي) بشكل غير تعسفي بالمعرفة السابقة (المفهوم الجوهري) في البنية المعرفية للمتعلم، مما يحقق "التعلم ذو المعنى" بدلاً من "التعلم الصم".
                 </p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
                 <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">المعادلة البنيوية للخريطة</h3>
                 <div className="flex flex-col items-center justify-center h-full gap-4">
                    <div className="flex items-center gap-2 w-full justify-center">
                      <div className="px-4 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-white rounded-lg shadow font-bold">مفهوم (أ)</div>
                      <ArrowRight className="text-purple-500" />
                      <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm font-bold">رابط (فعل)</div>
                      <ArrowRight className="text-purple-500" />
                      <div className="px-4 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-white rounded-lg shadow font-bold">مفهوم (ب)</div>
                    </div>
                    <div className="text-sm text-slate-500">= قضية ذات معنى (Proposition)</div>
                 </div>
               </div>
            </div>

            {/* 2. Detailed Comparison Table */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg">
               <div className="bg-slate-100 dark:bg-slate-800 p-6 text-center border-b dark:border-slate-700">
                 <h3 className="text-2xl font-bold text-slate-800 dark:text-white">مقارنة دقيقة: الخريطة المفهومية vs الخريطة الذهنية</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
                  {/* Column 1: Criteria */}
                  <div className="p-6 space-y-8 bg-slate-50 dark:bg-slate-950/50 hidden md:block">
                     <div className="h-10 font-bold text-slate-500 flex items-center">المؤسس والمرجعية</div>
                     <div className="h-20 font-bold text-slate-500 flex items-center">البنية والهندسة</div>
                     <div className="h-20 font-bold text-slate-500 flex items-center">طبيعة الروابط</div>
                     <div className="h-10 font-bold text-slate-500 flex items-center">الهدف البيداغوجي</div>
                  </div>

                  {/* Column 2: Mind Map */}
                  <div className="p-6 space-y-6 relative">
                     <div className="absolute top-0 left-0 w-full h-1 bg-red-400"></div>
                     <h4 className="text-xl font-bold text-red-600 mb-4 text-center">الخريطة الذهنية (Mind Map)</h4>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">المؤسس</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">توني بوزان (Tony Buzan). تركز على فيزيولوجيا الدماغ (الفص الأيمن: الخيال).</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">البنية</span>
                        <p className="text-sm font-bold text-slate-800 dark:text-white">إشعاعية (Radial)</p>
                        <p className="text-xs text-slate-500">فكرة مركزية واحدة تتفرع منها الأفكار في جميع الاتجاهات (مثل الشمس).</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">الروابط</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">تداعي الأفكار (Association). لا يشترط وجود أفعال رابطة. تعتمد على الصور والألوان.</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">الهدف</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">العصف الذهني، الإبداع، تدوين الملاحظات.</p>
                     </div>
                  </div>

                  {/* Column 3: Concept Map */}
                  <div className="p-6 space-y-6 relative bg-purple-50/50 dark:bg-purple-900/10">
                     <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
                     <h4 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4 text-center">الخريطة المفهومية (Concept Map)</h4>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">المؤسس</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">جوزيف نوفاك (Novak). تركز على علم النفس المعرفي (البنية المعرفية).</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">البنية</span>
                        <p className="text-sm font-bold text-slate-800 dark:text-white">هرمية (Hierarchical)</p>
                        <p className="text-xs text-slate-500">من المفهوم الأكثر شمولية (في الأعلى) إلى الأكثر خصوصية (في الأسفل).</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">الروابط</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">منطقية (Logical). <span className="underline decoration-purple-400">يجب</span> وجود كلمات ربط (أفعال) لتكوين جمل مفيدة.</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">الهدف</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300">تنظيم المعرفة، التقويم، تشخيص التمثلات الخاطئة.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* 3. Expanded Primary School Example */}
            <div className="space-y-8 mt-12">
               <div className="text-center space-y-3">
                 <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                   مثال تطبيقي (ابتدائي): الأنظمة الغذائية
                 </h3>
                 <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    نموذج لخريطة مفهومية لدرس في النشاط العلمي (المستوى الثالث). لاحظ التدرج من العام (الحيوانات) إلى الخاص (نوع الغذاء).
                 </p>
               </div>
               
               <ExpandedConceptMap />
            </div>
            <QuickQuiz section="conceptMap" />
          </div>
        )}

        {/* ================= SECTION 3: DIDACTIC MEANS ================= */}
        {activeSection === 'didacticMeans' && (
          <div className="space-y-16 animate-fade-in">
            <SectionHeader 
              title="الوسائل الديدكتيكية" 
              subtitle="دعامات النقل الديدكتيكي في التعليم الابتدائي"
              icon={<Box className="text-teal-600" size={32} />}
              colorClass="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
            />

            {/* 1. Definition Section */}
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-teal-600 text-white p-8 rounded-3xl relative overflow-hidden shadow-xl">
                  <div className="absolute -right-10 -top-10 bg-white/10 w-40 h-40 rounded-full blur-3xl"></div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                     <Pencil className="text-teal-200" size={28}/> التعريف الاصطلاحي
                  </h3>
                  <p className="leading-8 text-lg opacity-95 text-justify">
                     هي مجموع <strong>الأدوات، المواد، والأجهزة</strong> (سواء كانت بصرية، سمعية، أو لمسية) التي يوظفها المدرس أو المتعلم داخل وضعية تعليمية؛ قصد <strong>تسهيل بناء المعرفة</strong>، تقريب المفاهيم المجردة، أو تنمية مهارات محددة.
                  </p>
               </div>
               
               <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-teal-100 dark:border-teal-900/30 flex flex-col justify-center">
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
                     <MonitorPlay size={20} className="text-teal-500"/> جوهر الوسيلة
                  </h4>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 bg-teal-500 rounded-full shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                           ليست غاية في حد ذاتها بل <strong>"جسر"</strong> للعبور من الملموس إلى المجرد.
                        </span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 bg-teal-500 rounded-full shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                           الشيء العادي (مثل حبة البطاطس) يتحول إلى "وسيلة ديدكتيكية" فقط <strong>لحظة الاستعمال البيداغوجي</strong> (للكشف عن النشا مثلاً).
                        </span>
                     </li>
                  </ul>
               </div>
            </div>

            {/* 2. Function & Role */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border-l-8 border-teal-500">
               <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">الدور الوظيفي في الابتدائي</h3>
               <p className="text-gray-600 dark:text-slate-300 leading-8">
                 الطفل في المرحلة الابتدائية (7-12 سنة) يمر بمرحلة <strong>العمليات المحسوسة</strong> (بياجيه). لذلك، فإن الوسيلة الديدكتيكية ليست خياراً كمالياً بل ضرورة حتمية لنقل المعرفة من مستواها المجرد إلى مستوى ملموس يدركه الطفل بحواسه.
               </p>
            </div>

            {/* 3. Primary School Scenarios */}
            <div className="space-y-8">
               <div className="text-center mb-8">
                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white">سيناريوهات تطبيقية من القسم</h3>
                 <p className="text-gray-500">كيف نعالج المفاهيم المجردة بأدوات بسيطة؟</p>
               </div>
               
               <PrimaryDidacticScenarios />
            </div>

            {/* 4. Selection Criteria */}
            <div className="bg-slate-900 text-slate-200 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="text-teal-400" /> معايير اختيار الوسيلة (للطفل)
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                   <div className="bg-white/10 p-4 rounded-xl"><h4 className="font-bold mb-2">الأمان</h4><p className="text-xs opacity-80">خلوها من حواف حادة أو مواد سامة.</p></div>
                   <div className="bg-white/10 p-4 rounded-xl"><h4 className="font-bold mb-2">المتانة</h4><p className="text-xs opacity-80">تتحمل المناولة اليدوية من طرف المتعلمين.</p></div>
                   <div className="bg-white/10 p-4 rounded-xl"><h4 className="font-bold mb-2">البساطة</h4><p className="text-xs opacity-80">غير معقدة التركيب لتجنب التشتت.</p></div>
                   <div className="bg-white/10 p-4 rounded-xl"><h4 className="font-bold mb-2">الجاذبية</h4><p className="text-xs opacity-80">ألوان وأشكال تثير فضول الطفل.</p></div>
                </div>
            </div>
            <QuickQuiz section="didacticMeans" />
          </div>
        )}

        {/* ================= القسم 4: الامتحان الشامل ================= */}
        {activeSection === 'exam' && (
          <div className="animate-fade-in max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex p-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 mb-6 shadow-lg">
                <Target size={48} />
              </div>
              <h2 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-4">الامتحان النهائي الشامل</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                20 سؤالاً متدرج الصعوبة لاختبار ضبطك للمفاهيم الديدكتيكية.
                <br/>
                <span className="text-sm opacity-70">(تذكر: النقل الديدكتيكي، المثلث، العقد، الوضعيات...)</span>
              </p>
            </div>

            {/* هنا يتم استدعاء الأسئلة */}
            <QuickQuiz section="exam" />
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 mt-24 border-t border-slate-800 text-center">
         <p>© {new Date().getFullYear()} بوابة عبد الله الطلال.AET</p>
         {/* الزر العائم (FAB) - انسخ هذا الكود وضعه بدلاً من القديم */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-2">
        <div className="group relative">
           {/* القائمة المنبثقة */}
           <div className="absolute bottom-16 right-0 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-2 w-56 border border-slate-100 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto flex flex-col gap-1">
              
              {/* الأزرار القديمة */}
              <button onClick={() => { setActiveSection('formulation'); window.scrollTo(0,0); }} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-sm text-right flex items-center gap-2">
                 <Brain size={14} className="text-blue-500"/> صياغة المفهوم
              </button>
              <button onClick={() => { setActiveSection('conceptMap'); window.scrollTo(0,0); }} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-sm text-right flex items-center gap-2">
                 <Share2 size={14} className="text-purple-500"/> الخريطة المفهومية
              </button>
              <button onClick={() => { setActiveSection('didacticMeans'); window.scrollTo(0,0); }} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-sm text-right flex items-center gap-2">
                 <Box size={14} className="text-teal-500"/> الوسائل الديدكتيكية
              </button>

              {/* +++++ هذا هو الزر الجديد الذي أضفناه للامتحان +++++ */}
              <button onClick={() => { setActiveSection('exam'); window.scrollTo(0,0); }} className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm text-right flex items-center gap-2 border-t border-slate-100 dark:border-slate-700 mt-1 pt-2 font-bold text-red-600 dark:text-red-400">
                 <Target size={14} className="text-red-500"/> الامتحان الشامل (20 سؤال)
              </button>

           </div>

           {/* الزر الرئيسي الدائري */}
           <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center">
             <Layers size={24} />
           </button>
        </div>
      </div>
      </footer>
    </div>
  );
}

// =================== HELPER COMPONENTS ===================

function ExpandedConceptMap() {
  const [highlight, setHighlight] = useState<string | null>(null);

  return (
    <div className="relative w-full min-h-[600px] bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col items-center p-8 select-none">
      
      {/* Level 1: Root */}
      <div className="relative z-20 mb-16 mt-8">
        <div className="px-8 py-4 bg-purple-600 text-white rounded-2xl shadow-xl text-xl font-bold border-4 border-purple-400/50">
          الحيوانات (حسب التغذية)
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-full h-12 w-1 bg-slate-300 dark:bg-slate-700"></div>
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-500 border border-slate-300 z-30">
          تنقسم إلى
        </div>
      </div>

      {/* Level 2: Categories */}
      <div className="relative z-10 w-full max-w-4xl flex justify-between gap-4 mb-16">
         <div className="absolute top-0 left-[16%] right-[16%] h-1 bg-slate-300 dark:bg-slate-700 -mt-4 rounded-full"></div>
         <div className="absolute top-0 left-[16%] h-4 w-1 bg-slate-300 dark:bg-slate-700 -mt-4"></div>
         <div className="absolute top-0 left-1/2 h-4 w-1 bg-slate-300 dark:bg-slate-700 -mt-4 -translate-x-1/2"></div>
         <div className="absolute top-0 right-[16%] h-4 w-1 bg-slate-300 dark:bg-slate-700 -mt-4"></div>

         <div className="flex flex-col items-center w-1/3 group">
            <div className={`p-4 rounded-2xl border-2 transition-all ${highlight === 'herb' ? 'bg-green-100 border-green-500 scale-105' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`} onMouseEnter={() => setHighlight('herb')} onMouseLeave={() => setHighlight(null)}>
               <div className="flex items-center gap-2 font-bold text-green-700 dark:text-green-400"><Leaf size={20}/> عاشبة</div>
            </div>
            <div className="h-12 w-0.5 bg-slate-300 dark:bg-slate-700"></div>
            <div className="bg-white dark:bg-slate-800 px-2 py-0.5 text-[10px] font-bold border rounded-full relative z-20 -mt-8">تتغذى على</div>
            <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-center w-3/4">
               <span className="block text-sm font-bold text-green-800 dark:text-green-300">العشب / النبات</span>
               <div className="mt-2 flex justify-center gap-2">
                  <span className="text-xs bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded shadow-sm">أرنب</span>
                  <span className="text-xs bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded shadow-sm">بقرة</span>
               </div>
            </div>
         </div>

         <div className="flex flex-col items-center w-1/3 group">
            <div className={`p-4 rounded-2xl border-2 transition-all ${highlight === 'omni' ? 'bg-orange-100 border-orange-500 scale-105' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`} onMouseEnter={() => setHighlight('omni')} onMouseLeave={() => setHighlight(null)}>
               <div className="flex items-center gap-2 font-bold text-orange-700 dark:text-orange-400"><Utensils size={20}/> قارتة</div>
            </div>
            <div className="h-12 w-0.5 bg-slate-300 dark:bg-slate-700"></div>
            <div className="bg-white dark:bg-slate-800 px-2 py-0.5 text-[10px] font-bold border rounded-full relative z-20 -mt-8">تتغذى على</div>
            <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl text-center w-3/4">
               <span className="block text-sm font-bold text-orange-800 dark:text-orange-300">كل شيء (نبات+لحم)</span>
               <div className="mt-2 flex justify-center gap-2">
                  <span className="text-xs bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded shadow-sm">دب</span>
                  <span className="text-xs bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded shadow-sm">إنسان</span>
               </div>
            </div>
         </div>

         <div className="flex flex-col items-center w-1/3 group">
            <div className={`p-4 rounded-2xl border-2 transition-all ${highlight === 'carn' ? 'bg-red-100 border-red-500 scale-105' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`} onMouseEnter={() => setHighlight('carn')} onMouseLeave={() => setHighlight(null)}>
               <div className="flex items-center gap-2 font-bold text-red-700 dark:text-red-400"><Rabbit size={20} className="text-red-500"/> لاحمة</div>
            </div>
            <div className="h-12 w-0.5 bg-slate-300 dark:bg-slate-700"></div>
            <div className="bg-white dark:bg-slate-800 px-2 py-0.5 text-[10px] font-bold border rounded-full relative z-20 -mt-8">تصطاد</div>
            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl text-center w-3/4">
               <span className="block text-sm font-bold text-red-800 dark:text-red-300">الفرائس (اللحم)</span>
               <div className="mt-2 flex justify-center gap-2">
                  <span className="text-xs bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded shadow-sm">أسد</span>
                  <span className="text-xs bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded shadow-sm">نمر</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function PrimaryDidacticScenarios() {
  const [activeScenario, setActiveScenario] = useState<string>('math');
  
  const scenarios: any = {
    math: { 
      subject: "الرياضيات (المستوى 3)",
      title: "مفهوم الكسور (1/2, 1/4)", 
      problem: "الكسر مفهوم مجرد (كيف يكون الرقم جزءاً من شيء؟).", 
      solution: "أقراص قابلة للتقسيم (نموذج البيتزا) أو قطع الليغو.", 
      value: "تمثيل (Representation)",
      icon: <Split />
    },
    science: { 
      subject: "النشاط العلمي (المستوى 4)",
      title: "تغيرات المادة (الانصهار)", 
      problem: "صعوبة استيعاب تحول المادة من صلبة إلى سائلة.", 
      solution: "تجربة حية: إحضار قطع جليد وتركها تنصهر في القسم.", 
      value: "تجريب (Expérimentation)",
      icon: <FlaskConical />
    },
    geo: { 
      subject: "الاجتماعيات (المستوى 3)",
      title: "الاتجاهات (الشرق/الغرب)", 
      problem: "الخلط بين الاتجاهات على الورق والواقع.", 
      solution: "الخروج للساحة صباحاً وتحديد موقع الشمس (الشرق).", 
      value: "ملاحظة ميدانية",
      icon: <Globe />
    }
  };
  const current = scenarios[activeScenario];

  return (
    <div className="bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900/30 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row min-h-[350px]">
      <div className="md:w-1/3 bg-slate-50 dark:bg-slate-950 p-6 flex flex-col gap-4 border-l dark:border-slate-800">
        <button onClick={() => setActiveScenario('math')} className={`flex items-center gap-3 p-4 rounded-xl transition-all ${activeScenario === 'math' ? 'bg-white dark:bg-slate-800 shadow-md border-r-4 border-blue-500' : 'hover:bg-slate-200 dark:hover:bg-slate-900'}`}>
          <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg text-blue-600 dark:text-blue-400"><Split size={20}/></div>
          <div className="text-right">
             <span className="block font-bold text-slate-800 dark:text-slate-200 text-sm">الرياضيات</span>
             <span className="text-xs text-slate-500 dark:text-slate-400">الكسور</span>
          </div>
        </button>
        <button onClick={() => setActiveScenario('science')} className={`flex items-center gap-3 p-4 rounded-xl transition-all ${activeScenario === 'science' ? 'bg-white dark:bg-slate-800 shadow-md border-r-4 border-red-500' : 'hover:bg-slate-200 dark:hover:bg-slate-900'}`}>
          <div className="bg-red-100 dark:bg-red-900/40 p-2 rounded-lg text-red-600 dark:text-red-400"><FlaskConical size={20}/></div>
          <div className="text-right">
             <span className="block font-bold text-slate-800 dark:text-slate-200 text-sm">النشاط العلمي</span>
             <span className="text-xs text-slate-500 dark:text-slate-400">حالات المادة</span>
          </div>
        </button>
        <button onClick={() => setActiveScenario('geo')} className={`flex items-center gap-3 p-4 rounded-xl transition-all ${activeScenario === 'geo' ? 'bg-white dark:bg-slate-800 shadow-md border-r-4 border-green-500' : 'hover:bg-slate-200 dark:hover:bg-slate-900'}`}>
          <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-lg text-green-600 dark:text-green-400"><Globe size={20}/></div>
          <div className="text-right">
             <span className="block font-bold text-slate-800 dark:text-slate-200 text-sm">الجغرافيا</span>
             <span className="text-xs text-slate-500 dark:text-slate-400">الاتجاهات</span>
          </div>
        </button>
      </div>
      
      <div className="flex-1 p-8 flex flex-col justify-center animate-in fade-in zoom-in-95 duration-300">
        <div className="inline-block bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-500 dark:text-slate-400 mb-4 w-fit">{current.subject}</div>
        <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
           {current.icon} {current.title}
        </h3>
        <div className="grid gap-4">
           <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30">
              <strong className="block text-red-700 dark:text-red-400 text-sm mb-1">المشكلة (العائق):</strong>
              <p className="text-slate-700 dark:text-slate-300">{current.problem}</p>
           </div>
           <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-xl border border-green-100 dark:border-green-900/30">
              <strong className="block text-green-700 dark:text-green-400 text-sm mb-1">الوسيلة والحل:</strong>
              <p className="text-slate-700 dark:text-slate-300">{current.solution}</p>
           </div>
           <div className="flex items-center gap-2 mt-2 text-teal-600 dark:text-teal-400 font-bold text-sm">
              <CheckCircle size={16}/> القيمة المضافة: {current.value}
           </div>
        </div>
      </div>
    </div>
  );
}

function NavButton({ label, icon, isActive, onClick, activeColor }: any) {
  return (
    <button onClick={onClick} className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all font-bold ${isActive ? `${activeColor} text-white shadow-lg` : 'bg-white/5 text-indigo-100 hover:bg-white/10'}`}>
      {icon} <span>{label}</span>
    </button>
  );
}
function SectionHeader({ title, subtitle, icon, colorClass }: any) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 border-b pb-8 border-gray-200 dark:border-gray-800 text-center md:text-right">
      <div className={`p-5 rounded-2xl shadow-inner ${colorClass}`}>{icon}</div>
      <div><h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">{title}</h2><p className="text-gray-500 dark:text-gray-400 mt-2">{subtitle}</p></div>
    </div>
  );
}
function TranspositionStep({ title, sub, icon, step, color }: any) {
  return (
    <div className="flex flex-col items-center text-center relative z-10 flex-1 min-w-[150px]">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4 ${color}`}>{icon}</div>
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border flex items-center justify-center font-bold text-xs text-slate-900">{step}</div>
      <h4 className="font-bold text-gray-900 dark:text-white">{title}</h4>
      <span className="text-xs font-mono text-blue-600 dark:text-blue-400 block">{sub}</span>
    </div>
  );
}
function MechanismCard({ title, desc }: any) { return <div className="flex gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm"><div className="text-blue-500 shrink-0"><CheckCircle size={20} /></div><div><h4 className="font-bold text-gray-800 dark:text-white">{title}</h4><p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p></div></div>; }
function ArrowIcon({ className }: any) { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>; }
// ------------------- QUIZ COMPONENT -------------------
function QuickQuiz({ section }: { section: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setSelected(null);
    setShowResult(false);
  }, [section]);

  const quizzes: any = {
    formulation: {
      question: "ما المقصود بمفهوم 'النوسفير' (Noosphère)؟",
      options: [
        "طبقة الغلاف الجوي المحيطة بالأرض",
        "الهيئة التي تختار المعرفة الواجب تدريسها",
        "طريقة لتبسيط الدروس للأطفال"
      ],
      correct: 1,
      feedback: "أحسنت! النوسفير هم الخبراء والمفتشون الذين يقررون المناهج."
    },
    conceptMap: {
      question: "ما الفرق الجوهري بين الخريطة المفهومية والذهنية؟",
      options: [
        "الخريطة المفهومية تعتمد على الروابط المنطقية (أفعال)",
        "الخريطة الذهنية تستخدم الألوان فقط",
        "لا يوجد فرق، هما نفس الشيء"
      ],
      correct: 0,
      feedback: "ممتاز! الخريطة المفهومية تتطلب 'قضايا' (جمل مفيدة) وليس مجرد تداعٍ للأفكار."
    },
    didacticMeans: {
      question: "متى تصبح حبة البطاطس 'وسيلة ديدكتيكية'؟",
      options: [
        "عندما نأكلها في الاستراحة",
        "عندما نستخدمها للكشف عن النشا في الدرس",
        "عندما نرسمها على السبورة"
      ],
      correct: 1,
      feedback: "صحيح! الوسيلة تكتسب صفتها من وظيفتها البيداغوجية لحظة الاستعمال."
    },
    // ... (تأكد من وجود فاصلة بعد القائمة التي تسبق هذا الكود) ...

    exam: [
      // --- المستوى 1: تذكر ومفاهيم أساسية ---
      {
        question: "1. ما هو تعريف 'الديدكتيك' باختصار؟",
        options: ["علم التربية العام", "فن التدريس ومنهجية تدريس مادة معينة", "علم النفس التربوي"],
        correct: 1,
        feedback: "صحيح. الديدكتيك يهتم بكيفية تدريس المادة الدراسية تحديداً."
      },
      {
        question: "2. ما هي أقطاب 'المثلث الديدكتيكي'؟",
        options: ["المدرس، المتعلم، الإدارة", "المدرس، المتعلم، المعرفة", "المدرسة، الأسرة، المجتمع"],
        correct: 1,
        feedback: "أحسنت. المثلث يربط بين الفواعل الثلاثة الأساسية في العملية التعليمية."
      },
      {
        question: "3. ماذا نسمي المعرفة الموجودة في الكتب الجامعية والمراكز البحثية؟",
        options: ["المعرفة العالمة (Savoir Savant)", "المعرفة المدرسة", "المعرفة المبتذلة"],
        correct: 0,
        feedback: "صحيح. هي المعرفة الخام قبل أن تخضع للنقل الديدكتيكي."
      },
      {
        question: "4. من هو المسؤول عن تحويل المعرفة العالمة إلى معرفة واجب تدريسها؟",
        options: ["المدرس داخل القسم", "النوسفير (الخبراء والمفتشون)", "مدير المدرسة"],
        correct: 1,
        feedback: "ممتاز. النوسفير هو الغلاف الجوي الخارجي الذي يختار المنهاج."
      },
      {
        question: "5. ما هو الهدف من استخدام 'الوسائل الديدكتيكية' في الابتدائي؟",
        options: ["تزيين القسم", "إضاعة الوقت", "تجسيد المفاهيم المجردة وتقريبها"],
        correct: 2,
        feedback: "بالضبط. الطفل يحتاج للملموس ليفهم المجرد."
      },

      // --- المستوى 2: الفهم والاستيعاب ---
      {
        question: "6. ما الفرق بين الديدكتيك والبيداغوجيا؟",
        options: ["لا يوجد فرق", "الديدكتيك يهتم بالمادة (المعرفي)، والبيداغوجيا تهتم بالعلاقة (التواصلي/التربوي)", "البيداغوجيا فرع من الديدكتيك"],
        correct: 1,
        feedback: "رائع. الديدكتيك 'موضوعاتي' (Subject-specific)، والبيداغوجيا 'عامة'."
      },
      {
        question: "7. ماذا نقصد بـ 'العقد الديدكتيكي'؟",
        options: ["عقد عمل يوقعه المدرس", "مجموع القواعد الضمنية التي تحدد أدوار المدرس والمتعلم تجاه المعرفة", "اتفاقية بين المدرسة والآباء"],
        correct: 1,
        feedback: "صحيح (Brousseau). هو التوقعات المتبادلة بين الطرفين."
      },
      {
        question: "8. لماذا نعتبر 'التمثلات' (Representations) مهمة؟",
        options: ["لأنها أخطاء يجب مسحها", "لأنها بنية تفكير المتعلم التي يجب الانطلاق منها لتصحيحها", "لأنها تدل على ذكاء التلميذ"],
        correct: 1,
        feedback: "أحسنت. التعلم هو سيرورة هدم وبناء للتمثلات."
      },
      {
        question: "9. في الخريطة المفهومية، ماذا يمثل الرابط بين مفهومين؟",
        options: ["خطاً فقط", "فعلاً أو كلمة ربط توضح العلاقة", "لوناً جميلاً"],
        correct: 1,
        feedback: "ممتاز. بدون 'كلمة ربط'، لا تتكون لدينا 'قضية' ذات معنى."
      },
      {
        question: "10. ما هي 'اليقظة الديدكتيكية'؟",
        options: ["أن لا ينام المدرس في القسم", "قدرة المدرس على الانتباه للصعوبات غير المتوقعة وتعديل خطته فورياً", "مراقبة المدير للمدرسين"],
        correct: 1,
        feedback: "صحيح. هي وعي المدرس المستمر بما يحدث لحظياً أثناء الدرس."
      },

      // --- المستوى 3: التحليل والتطبيق ---
      {
        question: "11. تلميذ أجاب إجابة خاطئة، لكنها منطقية من وجهة نظره. هذا يسمى:",
        options: ["غباء", "عائقاً إبستيمولوجياً", "قلة انتباه"],
        correct: 1,
        feedback: "صحيح (Bachelard). الخطأ هنا جزء من مسار المعرفة وليس فشلاً."
      },
      {
        question: "12. عندما يقوم المدرس بحل التمرين بدلاً من التلميذ لأنه تأخر، فهذا يعتبر:",
        options: ["مساعدة مشكورة", "انزلاقاً ديدكتيكياً (أثر جوردان)", "تدبيراً جيداً للوقت"],
        correct: 1,
        feedback: "ممتاز. هذا يسمى 'أثر جوردان'، حيث يتنازل المدرس عن هدف التعلم لإنهاء الدرس."
      },
      {
        question: "13. في 'نظرية الوضعيات'، مرحلة 'الصياغة' (Formulation) تتطلب:",
        options: ["العمل الفردي الصامت", "العمل في مجموعات لتبادل الرسائل وصياغة الحل", "كتابة الدرس في الدفتر"],
        correct: 1,
        feedback: "أحسنت. الصياغة تتطلب مرسلاً ومستقبلاً ولغة مشتركة."
      },
      {
        question: "14. عملية 'نزع السياق' (Décontextualisation) تعني:",
        options: ["إعطاء أمثلة من الواقع", "تجريد المعلومة من ظروف اكتشافها لتصبح عامة", "نسيان الدرس"],
        correct: 1,
        feedback: "صحيح. هي الخطوة الثانية في النقل الديدكتيكي."
      },
      {
        question: "15. المدرس الذي يعتمد فقط على الكتاب المدرسي دون تصرف، يغفل مرحلة:",
        options: ["المعرفة العالمة", "المعرفة المدرسة (تخطيط المدرس)", "المعرفة المكتسبة"],
        correct: 1,
        feedback: "بالضبط. الكتاب هو 'معرفة واجب تدريسها'، والمدرس يجب أن يحولها لـ 'معرفة مدرسة'."
      },

      // --- المستوى 4: التركيب والوضعيات المعقدة ---
      {
        question: "16. مفهوم 'التفويض' (Dévolution) عند بروسو يعني:",
        options: ["أن يشرح المدرس كل شيء", "أن يورط المدرس المتعلم في الوضعية ليتحمل مسؤولية الحل", "أن يفوض المدرس تلميذاً للشرح"],
        correct: 1,
        feedback: "رائع. الديفوليوسيون هو نقل مسؤولية التعلم للمتعلم."
      },
      {
        question: "17. أي نوع من التقويم يهتم بـ 'توجيه' المتعلم وعلاج الثغرات أثناء الدرس؟",
        options: ["التقويم التشخيصي", "التقويم التكويني", "التقويم الإشهادي"],
        correct: 1,
        feedback: "صحيح. التقويم التكويني يلازم العملية التعليمية."
      },
      {
        question: "18. المثلث الديدكتيكي 'الموسع' يضيف قطباً رابعاً هو:",
        options: ["الأسرة", "الوضعية/السياق", "التكنولوجيا"],
        correct: 1,
        feedback: "أحسنت. لا يمكن فهم التفاعل دون استحضار 'الوضعية' أو السياق."
      },
      {
        question: "19. 'أثر توباز' (Effet Topaze) يحدث عندما:",
        options: ["يصعب المدرس الأسئلة", "يلمح المدرس للإجابة حتى لا يحرج التلميذ، فيضيع التعلم", "يغادر التلميذ القسم"],
        correct: 1,
        feedback: "ممتاز. المدرس يقوم بالعمل بدلاً من التلميذ بشكل خفي."
      },
      {
        question: "20. الغاية القصوى من الديدكتيك هي الوصول بالمتعلم إلى:",
        options: ["الحفظ التام", "الاستقلالية والقدرة على إعادة استثمار المعرفة (النقل الديدكتيكي الداخلي)", "الحصول على نقطة جيدة"],
        correct: 1,
        feedback: "ختامها مسك! الهدف هو أن يصبح المتعلم قادراً على استخدام المعرفة في سياقات جديدة."
      }
    ]
  };

  const currentQuiz = quizzes[section];
  if (!currentQuiz) return null;

  return (
    <div className="mt-16 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">?</div>
      
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-white">
        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">تقويم سريع</span>
        {currentQuiz.question}
      </h3>

      <div className="space-y-3">
        {currentQuiz.options.map((opt: string, idx: number) => (
          <button
            key={idx}
            onClick={() => { setSelected(idx); setShowResult(true); }}
            disabled={showResult}
            className={`w-full text-right p-4 rounded-xl border transition-all ${
              showResult 
                ? idx === currentQuiz.correct 
                  ? "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  : idx === selected 
                    ? "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                    : "opacity-50"
                : "bg-white dark:bg-slate-800 hover:bg-slate-50 border-slate-200 dark:border-slate-700"
            }`}
          >
            {opt}
            {showResult && idx === currentQuiz.correct && <CheckCircle className="float-left text-green-600" size={20}/>}
            {showResult && idx === selected && idx !== currentQuiz.correct && <AlertTriangle className="float-left text-red-600" size={20}/>}
          </button>
        ))}
      </div>

      {showResult && (
        <div className={`mt-6 p-4 rounded-xl text-sm font-bold animate-fade-in ${selected === currentQuiz.correct ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {selected === currentQuiz.correct ? currentQuiz.feedback : "حاول مرة أخرى! راجع الفقرة أعلاه."}
        </div>
      )}
    </div>
  );
}