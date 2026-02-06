"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // <--- أضف هذا السطر الجديد والمهم
import { 
  BookOpen, Share2, Layers, CheckCircle, Brain, Lightbulb, Box, 
  Activity, Quote, ArrowRight, Sun, Moon, Sprout, Droplets, 
  Microscope, Globe, MonitorPlay, Zap, FlaskConical, Scale, 
  AlertTriangle, Target, MousePointerClick, Network, Split, GitGraph, ShieldCheck, Briefcase, Trophy, RefreshCw,
  Rabbit, Cat, Leaf, Utensils, Pencil, Search, Library, X, UserCheck, Users,
  History as HistoryIcon, Database, User, Info, GraduationCap
} from 'lucide-react';

// ------------------- TYPES -------------------
type Section = 'formulation' | 'conceptMap' | 'didacticMeans' | 'exam' | 'glossary' | 'simulator' | 'triangle' | 'timeline';

// ------------------- MAIN COMPONENT -------------------
function DidacticModulePage() {
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
            <NavButton label="5. القاموس" icon={<Library size={18} />} isActive={activeSection === 'glossary'} onClick={() => setActiveSection('glossary')} activeColor="bg-orange-500" />
            <NavButton label="6. الوضعيات" icon={<Briefcase size={18} />} isActive={activeSection === 'simulator'} onClick={() => setActiveSection('simulator')} activeColor="bg-indigo-500" />
            <NavButton label="7. المثلث" icon={<Network size={18} />} isActive={activeSection === 'triangle'} onClick={() => setActiveSection('triangle')} activeColor="bg-teal-500" />
            <NavButton label="8. التاريخ" icon={<HistoryIcon size={18} />} isActive={activeSection === 'timeline'} onClick={() => setActiveSection('timeline')} activeColor="bg-purple-500" />
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
        {/* ================= القسم 5: القاموس ================= */}
        {activeSection === 'glossary' && (
          <div className="animate-fade-in">
             <SectionHeader 
               title="القاموس الديدكتيكي" 
               subtitle="مصطلحات ومفاهيم أساسية مشروحة ببساطة"
               icon={<Library className="text-orange-500" size={32} />}
               colorClass="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
             />
             <DidacticGlossary />
          </div>
        )}
        {/* ================= القسم 6: محاكي الوضعيات ================= */}
        {activeSection === 'simulator' && (
          <div className="animate-fade-in">
             <SectionHeader 
               title="مختبر الوضعيات المهنية" 
               subtitle="كيف تتصرف داخل القسم؟ اختبر ردود أفعالك التربوية"
               icon={<Briefcase className="text-indigo-500" size={32} />}
               colorClass="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
             />
             <ProfessionalSimulator />
          </div>
        
        )}
        {/* ================= القسم 7: المثلث الديدكتيكي ================= */}
        {activeSection === 'triangle' && (
          <div className="animate-fade-in">
             <SectionHeader 
               title="المثلث الديدكتيكي" 
               subtitle="فهم العلاقات والتفاعلات بين أقطاب العملية التعليمية"
               icon={<Network className="text-teal-500" size={32} />}
               colorClass="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
             />
             <DidacticTriangle />
          </div>
        )}
        {/* ================= القسم 8: خط الزمن ================= */}
        {activeSection === 'timeline' && (
          <div className="animate-fade-in">
             <SectionHeader 
               title="كرونولوجيا التربية" 
               subtitle="تاريخ تطور نظريات التعلم عبر الزمن"
               icon={<HistoryIcon className="text-purple-500" size={32} />}
               colorClass="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
             />
             <TheoriesTimeline />
          </div>
        )}
      </main>
      
      <footer className="bg-slate-900 text-slate-400 py-12 mt-24 border-t border-slate-800 text-center">
         <p>© {new Date().getFullYear()} بوابة عبد الله الطلال.AET</p>
         {/* الزر العائم (FAB) - انسخ هذا الكود وضعه بدلاً من القديم */}
      
      </footer>
    </div>
  );
}

export default DidacticModulePage;

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
function QuickQuiz({ section }: { section: string }) {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setCurrentQIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  }, [section]);

  const quizzes: any = {
    formulation: [
      {
        question: "ما المقصود بمفهوم 'النوسفير' (Noosphère)؟",
        options: ["طبقة الغلاف الجوي المحيطة بالأرض", "الهيئة التي تختار المعرفة الواجب تدريسها", "طريقة لتبسيط الدروس للأطفال"],
        correct: 1,
        feedback: "أحسنت! النوسفير هم الخبراء والمفتشون الذين يقررون المناهج."
      },
      {
        question: "أي مرحلة تلي مباشرة 'المعرفة العالمة' في النقل الديدكتيكي؟",
        options: ["المعرفة المكتسبة", "المعرفة المدرسة", "المعرفة الواجب تدريسها"],
        correct: 2,
        feedback: "صحيح! يتم تحويل المعرفة العالمة أولاً إلى معرفة واجب تدريسها."
      },
      {
        question: "ماذا نعني بـ 'نزع الطابع الشخصي' عن المعرفة؟",
        options: ["فصل المعرفة عن الباحث وظروف اكتشافها", "منع التلاميذ من التعبير عن آرائهم", "جعل الدرس مملاً وبدون روح"],
        correct: 0,
        feedback: "ممتاز! العلم موضوعي، لذلك يجب فصله عن ذاتية العالم."
      }
    ],
    conceptMap: [
      {
        question: "ما الفرق الجوهري بين الخريطة المفهومية والذهنية؟",
        options: ["الخريطة المفهومية تعتمد على الروابط المنطقية (أفعال)", "الخريطة الذهنية تستخدم الألوان فقط", "لا يوجد فرق، هما نفس الشيء"],
        correct: 0,
        feedback: "ممتاز! الخريطة المفهومية تتطلب 'قضايا' (جمل مفيدة)."
      },
      {
        question: "من هو مؤسس نظرية الخرائط المفهومية؟",
        options: ["توني بوزان (Tony Buzan)", "جوزيف نوفاك (Joseph Novak)", "جان بياجيه (Jean Piaget)"],
        correct: 1,
        feedback: "صحيح! نوفاك هو المؤسس."
      },
      {
        question: "ما هي البنية الهندسية للخريطة المفهومية؟",
        options: ["إشعاعية (من المركز للأطراف)", "هرمية (من العام إلى الخاص)", "عشوائية (بدون نظام)"],
        correct: 1,
        feedback: "أحسنت! تبدأ بالمفهوم الأكثر شمولاً في الأعلى."
      }
    ],
    didacticMeans: [
      {
        question: "متى تصبح حبة البطاطس 'وسيلة ديدكتيكية'؟",
        options: ["عندما نأكلها في الاستراحة", "عندما نستخدمها للكشف عن النشا في الدرس", "عندما نرسمها على السبورة"],
        correct: 1,
        feedback: "صحيح! الوسيلة تكتسب صفتها من وظيفتها البيداغوجية."
      },
      {
        question: "لماذا تعتبر الوسائل ضرورية في المرحلة الابتدائية؟",
        options: ["لأن الأطفال يحبون اللعب فقط", "لأن الطفل يمر بمرحلة العمليات المحسوسة", "لأنها تزين القسم"],
        correct: 1,
        feedback: "بالضبط! حسب بياجيه، الطفل يحتاج للملموس ليدرك المجرد."
      },
      {
        question: "أي من التالي يعتبر معياراً أساسياً لاختيار الوسيلة؟",
        options: ["أن تكون غالية الثمن", "أن تكون معقدة التركيب", "الأمان والمتانة"],
        correct: 2,
        feedback: "طبعاً! سلامة المتعلم هي الأولوية القصوى."
      }
    ],
    exam: [
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
        feedback: "أحسنت. المثلث يربط بين الفواعل الثلاثة الأساسية."
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
      {
        question: "6. ما الفرق بين الديدكتيك والبيداغوجيا؟",
        options: ["لا يوجد فرق", "الديدكتيك يهتم بالمادة، والبيداغوجيا تهتم بالعلاقة التربوية", "البيداغوجيا فرع من الديدكتيك"],
        correct: 1,
        feedback: "رائع. الديدكتيك 'موضوعاتي'، والبيداغوجيا 'عامة'."
      },
      {
        question: "7. ماذا نقصد بـ 'العقد الديدكتيكي'؟",
        options: ["عقد عمل يوقعه المدرس", "مجموع القواعد الضمنية التي تحدد الأدوار", "اتفاقية بين المدرسة والآباء"],
        correct: 1,
        feedback: "صحيح (Brousseau). هو التوقعات المتبادلة بين الطرفين."
      },
      {
        question: "8. لماذا نعتبر 'التمثلات' (Representations) مهمة؟",
        options: ["لأنها أخطاء يجب مسحها", "لأنها بنية تفكير المتعلم التي يجب الانطلاق منها", "لأنها تدل على ذكاء التلميذ"],
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
        options: ["أن لا ينام المدرس في القسم", "قدرة المدرس على الانتباه للصعوبات وتعديل خطته", "مراقبة المدير للمدرسين"],
        correct: 1,
        feedback: "صحيح. هي وعي المدرس المستمر بما يحدث لحظياً أثناء الدرس."
      },
      {
        question: "11. تلميذ أجاب إجابة خاطئة، لكنها منطقية من وجهة نظره. هذا يسمى:",
        options: ["غباء", "عائقاً إبستيمولوجياً", "قلة انتباه"],
        correct: 1,
        feedback: "صحيح (Bachelard). الخطأ هنا جزء من مسار المعرفة."
      },
      {
        question: "12. عندما يقوم المدرس بحل التمرين بدلاً من التلميذ، فهذا يعتبر:",
        options: ["مساعدة مشكورة", "انزلاقاً ديدكتيكياً (أثر جوردان)", "تدبيراً جيداً للوقت"],
        correct: 1,
        feedback: "ممتاز. المدرس يتنازل عن هدف التعلم لإنهاء الدرس."
      },
      {
        question: "13. في 'نظرية الوضعيات'، مرحلة 'الصياغة' تتطلب:",
        options: ["العمل الفردي الصامت", "العمل في مجموعات لتبادل الرسائل", "كتابة الدرس في الدفتر"],
        correct: 1,
        feedback: "أحسنت. الصياغة تتطلب مرسلاً ومستقبلاً ولغة مشتركة."
      },
      {
        question: "14. عملية 'نزع السياق' (Décontextualisation) تعني:",
        options: ["إعطاء أمثلة من الواقع", "تجريد المعلومة من ظروف اكتشافها", "نسيان الدرس"],
        correct: 1,
        feedback: "صحيح. هي الخطوة الثانية في النقل الديدكتيكي."
      },
      {
        question: "15. المدرس الذي يعتمد فقط على الكتاب المدرسي دون تصرف، يغفل مرحلة:",
        options: ["المعرفة العالمة", "المعرفة المدرسة (تخطيط المدرس)", "المعرفة المكتسبة"],
        correct: 1,
        feedback: "بالضبط. الكتاب هو 'معرفة واجب تدريسها'."
      },
      {
        question: "16. مفهوم 'التفويض' (Dévolution) يعني:",
        options: ["أن يشرح المدرس كل شيء", "نقل مسؤولية الحل للمتعلم", "أن يفوض المدرس تلميذاً للشرح"],
        correct: 1,
        feedback: "رائع. الديفوليوسيون هو توريط المتعلم في الوضعية."
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
        feedback: "أحسنت. لا يمكن فهم التفاعل دون استحضار 'الوضعية'."
      },
      {
        question: "19. 'أثر توباز' (Effet Topaze) يحدث عندما:",
        options: ["يصعب المدرس الأسئلة", "يلمح المدرس للإجابة حتى لا يحرج التلميذ", "يغادر التلميذ القسم"],
        correct: 1,
        feedback: "ممتاز. المدرس يقوم بالعمل بدلاً من التلميذ بشكل خفي."
      },
      {
        question: "20. الغاية القصوى من الديدكتيك هي الوصول بالمتعلم إلى:",
        options: ["الحفظ التام", "الاستقلالية والقدرة على إعادة استثمار المعرفة", "الحصول على نقطة جيدة"],
        correct: 1,
        feedback: "ختامها مسك! الهدف هو أن يصبح المتعلم قادراً على استخدام المعرفة."
      }
    ]
  };

  const currentQuestions = quizzes[section];

  // هذا السطر مهم جداً لمنع الشاشة البيضاء إذا حدث خطأ في الاسم
  if (!currentQuestions) return <div className="p-8 text-center text-red-500">حدث خطأ في تحميل الأسئلة.</div>;
  
  const currentQ = currentQuestions[currentQIndex];

  const handleOptionClick = (idx: number) => {
    setSelected(idx);
    setShowResult(true);
    if (idx === currentQ.correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQIndex < currentQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="mt-16 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg text-center animate-fade-in">
         <div className="inline-block p-4 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 mb-4">
           <Zap size={40} />
         </div>
         <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">أتممت الاختبار!</h3>
         <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
           نتيجتك: <span className="font-bold text-blue-600">{score}</span> من <span className="font-bold">{currentQuestions.length}</span>
         </p>
         <button onClick={handleRestart} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all">
           إعادة المحاولة
         </button>
      </div>
    );
  }

  return (
    <div className="mt-16 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-serif">?</div>
      
      <div className="flex justify-between items-center mb-6">
        <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">
          سؤال {currentQIndex + 1} / {currentQuestions.length}
        </span>
        <span className="text-xs text-slate-400 font-bold">نقاطك: {score}</span>
      </div>

      <h3 className="text-xl font-bold mb-8 text-slate-800 dark:text-white leading-relaxed">
        {currentQ.question}
      </h3>

      <div className="space-y-3">
        {currentQ.options.map((opt: string, idx: number) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(idx)}
            disabled={showResult}
            className={`w-full text-right p-4 rounded-xl border transition-all relative overflow-hidden ${
              showResult 
                ? idx === currentQ.correct 
                  ? "bg-green-100 border-green-500 text-green-900 dark:bg-green-900/40 dark:text-green-100 font-bold"
                  : idx === selected 
                    ? "bg-red-100 border-red-500 text-red-900 dark:bg-red-900/40 dark:text-red-100"
                    : "opacity-50"
                : "bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700"
            }`}
          >
            <div className="flex justify-between items-center relative z-10">
              <span>{opt}</span>
              {showResult && idx === currentQ.correct && <CheckCircle className="text-green-600 dark:text-green-400" size={20}/>}
              {showResult && idx === selected && idx !== currentQ.correct && <AlertTriangle className="text-red-600 dark:text-red-400" size={20}/>}
            </div>
          </button>
        ))}
      </div>

      {showResult && (
        <div className="mt-6 animate-fade-in space-y-4">
          <div className={`p-4 rounded-xl text-sm font-bold ${selected === currentQ.correct ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300' : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300'}`}>
            {selected === currentQ.correct ? currentQ.feedback : `خطأ! الإجابة الصحيحة هي: ${currentQ.options[currentQ.correct]}`}
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              {currentQIndex < currentQuestions.length - 1 ? 'السؤال التالي' : 'إظهار النتيجة'} 
              <ArrowRight className="rotate-180" size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
// ------------------- GLOSSARY COMPONENT (مع إصلاح النافذة المنبثقة) -------------------
function DidacticGlossary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTerm, setSelectedTerm] = useState<any>(null);

  // قائمة المصطلحات (كما هي)
  const terms = [
    // ... (نفس القائمة السابقة التي وضعناها، لا داعي لتغييرها) ...
    { term: "الديدكتيك (Didactique)", def: "الدراسة العلمية لمحتويات التدريس وطرق نقلها واستيعابها، مع التركيز على طبيعة المعرفة والصعوبات الخاصة بكل مادة دراسية." },
    { term: "المثلث الديدكتيكي", def: "نسق يربط بين ثلاثة أقطاب رئيسية: المدرس، المتعلم، والمعرفة. وتتولد عنه ثلاثة محاور: المحور الإبستيمولوجي، المحور البيداغوجي، ومحور التعلم." },
    { term: "النقل الديدكتيكي", def: "سيرورة تحويل 'المعرفة العالمة' (الأكاديمية) إلى 'معرفة واجب تدريسها' (المنهاج)، ثم إلى 'معرفة مُدرَّسة' (القسم)، وأخيراً 'معرفة مكتسبة'." },
    { term: "العقد الديدكتيكي", def: "مجموع القواعد الضمنية والصريحة التي تحدد واجبات وحقوق كل من المدرس والمتعلم تجاه المعرفة." },
    { term: "التمثلات (Représentations)", def: "بنيات معرفية قبلية يحملها المتعلم لتفسير الظواهر، قد تكون خاطئة، ويعتبر الانطلاق منها شرطاً أساسياً لبناء المعرفة الجديدة." },
    { term: "العائق الإبستيمولوجي", def: "صعوبات تعترض المتعلم ليست ناتجة عن ضعف قدراته، بل تكمن في طبيعة المعرفة نفسها أو تطورها التاريخي." },
    { term: "الصراع المعرفي", def: "حالة اضطراب تحدث عندما تصطدم مكتسبات المتعلم السابقة بمعلومات جديدة تناقضها، مما يدفعه للبحث عن توازن جديد (التعلم)." },
    { term: "منطقة النمو القريب (ZPD)", def: "المسافة الفاصلة بين ما يستطيع المتعلم إنجازه بمفرده، وما يستطيع إنجازه بمساعدة راشد أو أقران (فيجوتسكي)." },
    { term: "الوضعية المشكلة", def: "سياق تعليمي يضع المتعلم أمام عائق معرفي لا يملك حلاً جاهزاً له، مما يدفعه للبحث وبناء المعرفة." },
    { term: "الوضعية أ-ديدكتيكية", def: "مرحلة ينسحب فيها المدرس مؤقتاً، ويترك المتعلم يواجه المشكلة بمفرده ليتحمل مسؤولية الحل." },
    { term: "التفويض (Dévolution)", def: "العملية التي يسلم بها المدرس مسؤولية حل المشكلة للمتعلم ليتبناها كقضية شخصية." },
    { term: "المأسسة (Institutionnalisation)", def: "تثبيت النتائج الصحيحة وإعطائها صبغة رسمية لتصبح معرفة مشتركة في القسم." },
    { term: "القدرة (Capacité)", def: "نشاط ذهني مستعرض وقابل للتطوير (مثل التحليل، التركيب) لا يرتبط بمحتوى محدد." },
    { term: "الكفالة (Compétence)", def: "قدرة المتعلم على تعبئة مجموعة مدمجة من الموارد لحل وضعية معقدة." },
    { term: "التقويم التكويني", def: "إجراء عملي يرافق العملية التعليمية بهدف اكتشاف التعثرات وتصحيحها فوراً." },
    { term: "البيداغوجيا الفارقية", def: "مقاربة تربوية تأخذ بعين الاعتبار الفروق الفردية بين المتعلمين (الذكاء، الإيقاع، الميول)." },
    { term: "أثر توباز (Effet Topaze)", def: "عندما يلمح المدرس للإجابة حتى لا يحرج التلميذ، فيضيع التعلم الحقيقي." },
    { term: "أثر جوردان (Effet Jourdain)", def: "عندما يفسر المدرس إجابة تافهة من التلميذ على أنها دليل فهم عميق." },
    { term: "النوسفير (Noosphère)", def: "الغلاف الجوي المعرفي (الخبراء والمفتشون) الذين يختارون المعرفة الواجب تدريسها." },
    { term: "المعرفة العالمة (Savoir Savant)", def: "المعرفة الأكاديمية الخام كما أنتجها العلماء والباحثون المتخصصون، وتتسم بالتجريد والتعقيد وخلوها من السياق البيداغوجي." },
    { term: "المعرفة الاجتماعية", def: "الممارسات والخبرات الموجودة في المجتمع والتي تُتخذ كمرجع لبناء المحتويات التعليمية لربط المدرسة بمحيطها." },
    { term: "اليقظة الديدكتيكية", def: "قدرة المدرس المستمرة على الانتباه ومراقبة المسافة الفاصلة بين المعرفة العالمة والمعرفة المدرسة لتجنب تشويه المعرفة." },
    { term: "وضعية الفعل (Action)", def: "المرحلة الأولى في الوضعية الديدكتيكية حيث يتفاعل المتعلم مباشرة مع البيئة المادية أو المشكلة لتجريب حلول عملية." },
    { term: "وضعية الصياغة (Formulation)", def: "مرحلة تتطلب من المتعلم صياغة استراتيجيته في رسالة لغوية واضحة ومشاركتها مع متعلم آخر." },
    { term: "وضعية التصديق (Validation)", def: "مرحلة يقدم فيها المتعلم البراهين والحجج لإقناع زملائه بصحة الحل المقترح." },
    { term: "المتغير الديدكتيكي", def: "عنصر من عناصر الوضعية (مثل حجم الأرقام، الوقت) يتحكم فيه المدرس لتغيير درجة صعوبة المهمة." },
    { term: "العائق الديدكتيكي", def: "صعوبة ناتجة عن الطريقة التي قُدمت بها المعرفة أو المنهجية المتبعة من طرف المدرس." },
    { term: "العائق النشوئي", def: "صعوبة مرتبطة بدرجة النضج البيولوجي والذهني للمتعلم." },
    { term: "القطيعة الإبستيمولوجية", def: "فعل فكري يقوم على هدم المعرفة العامية أو التمثلات الخاطئة لبناء معرفة علمية جديدة." },
    { term: "الاستيعاب والملاءمة", def: "آليتان للتكيف عند بياجيه: الاستيعاب هو دمج الخبرة الجديدة، والملاءمة هي تعديل البنية الذهنية لتناسبها." },
    { term: "الميتا-معرفة", def: "وعي المتعلم بطرق تفكيره الخاصة، وقدرته على التخطيط والمراقبة وتقييم استراتيجيات التعلم." },
    { term: "الشيخوخة البيولوجية للمعرفة", def: "ظاهرة تقادم المعرفة المدرسية وعدم مواكبتها للتطورات العلمية الحديثة." },
    { term: "الانزلاق الميتا-معرفي", def: "عندما يتحول اهتمام المدرس من موضوع المعرفة إلى الوسيلة أو التقنية المستخدمة في الشرح." },
    { term: "الهدف التعلمي", def: "وصف دقيق للنتيجة المنتظرة من المتعلم بعد نهاية نشاط تعليمي، ويجب أن يكون قابلاً للملاحظة والقياس." },
    { term: "التقويم التشخيصي", def: "إجراء تقويمي ينجز في بداية التعلم لرصد المكتسبات القبلية والتمثلات." },
    { term: "التقويم الإشهادي", def: "تقويم ختامي يتم في نهاية مرحلة دراسية لإصدار حكم على مستوى المتعلم." },
    // ================== 8. مفاهيم متقدمة (إضافات جديدة) ==================
    { 
      term: "الهندسة الديدكتيكية (Ingénierie Didactique)", 
      def: "منهجية بحثية وتخطيطية تقوم على أربع مراحل: التصور (تحليل قبلي)، الإنجاز (التجريب في القسم)، الملاحظة، والتحليل البعدي لمقارنة ما كان متوقعاً بما حدث فعلاً." 
    },
    { 
      term: "الوسط الديدكتيكي (Le Milieu)", 
      def: "مفهوم مركزي عند 'بروسو'، وهو الجزء من البيئة (أدوات، تعليمات، معارف سابقة) الذي يتفاعل معه المتعلم مباشرة لحل المشكلة، ويجب أن يكون خالياً من نوايا المدرس في اللحظات أ-ديدكتيكية." 
    },
    { 
      term: "الإقدار / السقالة (Étayage)", 
      def: "مفهوم لـ 'برونر'، يشير إلى الدعم المؤقت الذي يقدمه الراشد (المدرس) للمتعلم ليساعده على تجاوز منطقة النمو القريب، ويتم سحبه تدريجياً حين يصبح المتعلم مستقلاً." 
    },
    { 
      term: "الدويمولوجيا (Docimologie)", 
      def: "علم الامتحانات والتقويم، يدرس العوامل الذاتية والموضوعية التي تؤثر في عملية التنقيط (مثل أثر الهالة، وتأثير الترتيب) ويسعى لجعله أكثر عدالة." 
    },
    { 
      term: "بيداغوجيا الخطأ", 
      def: "تصور يعتبر الخطأ استراتيجية للتعليم وليس فشلاً، فهو مؤشر على سيرورة تفكير المتعلم، ومنطلقة ضروري لتصحيح التمثلات وبناء المعرفة الصحيحة (باشلار)." 
    },
    { 
      term: "المنهاج اللولبي (Curriculum Spiralaire)", 
      def: "طريقة في تنظيم المحتويات (برونر) بحيث يتم تقديم نفس المفاهيم في مستويات دراسية مختلفة، لكن بدرجة متزايدة من التعقيد والتجريد في كل مرة." 
    },
    { 
      term: "سجلات التمثيل السيميائي", 
      def: "نظرية (ريفال دوفال) تؤكد أن لا تعلم بدون تمثيلات (لغة، رسوم، رموز)، وأن الفهم الحقيقي يحدث حين يستطيع المتعلم التحويل من سجل لآخر (مثلاً تحويل نص إلى مبيان)." 
    },
    { 
      term: "الحمل المعرفي (Charge Cognitive)", 
      def: "كمية الجهد الذهني المستخدم في الذاكرة العاملة. يجب على المدرس مراعاة محدوديتها، وتجنب الحشو الذي يعيق معالجة المعلومات الأساسية." 
    },
    { 
      term: "التناوب اللغوي (Alternance Linguistique)", 
      def: "مقاربة بيداغوجية تستخدم لغتين (اللغة الأم ولغة التدريس) بشكل متناوب ومخطط له لتيسير استيعاب المفاهيم العلمية، خاصة في السياقات متعددة اللغات." 
    },
    { 
      term: "التعليم الصريح (Enseignement Explicite)", 
      def: "نموذج تعليمي مباشر ومنظم يقوم على: النمذجة (أنا أفعل)، الممارسة الموجهة (نحن نفعل)، والممارسة المستقلة (أنت تفعل)، وهو فعال جداً في تعلم المهارات الأساسية." 
    },
    { 
      term: "النسق البيداغوجي (Paradigme)", 
      def: "مجموع المعتقدات والنظريات والقيم التي توجه الممارسات التربوية في حقبة معينة (مثلاً الانتقال من بيداغوجيا الأهداف إلى المقاربة بالكفايات)." 
    },
    { 
      term: "التحليل القبلي (Analyse a priori)", 
      def: "مرحلة يحلل فيها المدرس الوضعية قبل تقديمها: ما هي الاستراتيجيات المتوقعة من التلاميذ؟ ما هي الأخطاء المحتملة؟ وكيف سأتدخل لمعالجتها؟" 
    }
  ].sort((a, b) => a.term.localeCompare(b.term, 'ar'));

  const filteredTerms = terms.filter(item => 
    item.term.includes(searchTerm) || item.def.includes(searchTerm)
  );

  return (
    <div className="animate-fade-in max-w-5xl mx-auto min-h-[500px]">
       {/* شريط البحث */}
       <div className="relative mb-8 sticky top-4 z-10">
         <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
           <Search className="text-orange-500" size={24} />
         </div>
         <input 
           type="text" 
           placeholder="ابحث عن مصطلح..." 
           className="w-full p-4 pr-12 rounded-2xl border-2 border-orange-100 dark:border-slate-700 bg-white/90 backdrop-blur-md dark:bg-slate-800/90 shadow-lg focus:outline-none focus:border-orange-500 transition-all text-lg"
           onChange={(e) => setSearchTerm(e.target.value)}
         />
       </div>

       {/* شبكة البطاقات */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
         {filteredTerms.map((item, idx) => (
           <div 
             key={idx} 
             onClick={() => setSelectedTerm(item)}
             className="cursor-pointer group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
           >
             <div className="absolute top-0 left-0 w-16 h-16 bg-orange-50 dark:bg-orange-900/20 rounded-full -translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
             <div className="relative z-10">
               <h3 className="font-bold text-lg text-slate-800 dark:text-orange-100 mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                 {item.term}
               </h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                 {item.def}
               </p>
             </div>
           </div>
         ))}
       </div>

       {/* ======================= السحر هنا (PORTAL) ======================= */}
       {selectedTerm && typeof document !== 'undefined' && createPortal(
         <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
           {/* الخلفية المعتمة */}
           <div 
             className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm animate-fade-in"
             onClick={() => setSelectedTerm(null)}
           ></div>

           {/* محتوى النافذة */}
           <div className="bg-white dark:bg-slate-900 w-full max-w-lg p-8 rounded-3xl shadow-2xl relative animate-scale-in border-t-8 border-orange-500 z-10 max-h-[90vh] overflow-y-auto">
             <button 
               onClick={() => setSelectedTerm(null)}
               className="absolute top-4 left-4 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
             >
               <X size={20} />
             </button>

             <div className="mb-6">
               <div className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-xs font-bold mb-3">
                 مصطلح ديدكتيكي
               </div>
               <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
                 {selectedTerm.term}
               </h2>
               <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
             </div>
             
             <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
               <p className="text-lg text-slate-700 dark:text-slate-300 leading-8 text-justify">
                 {selectedTerm.def}
               </p>
             </div>

             <div className="mt-6 text-center">
                <button 
                  onClick={() => setSelectedTerm(null)}
                  className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg"
                >
                  حسناً، فهمت
                </button>
             </div>
           </div>
         </div>,
         document.body // هذا يضمن ظهور النافذة في جسم الصفحة مباشرة
       )}
    </div>
  );
}
// ------------------- SIMULATOR COMPONENT (نظام الدفعات - وضعيات جديدة) -------------------
function ProfessionalSimulator() {
  // الحالة (State)
  const [round, setRound] = useState(0); // رقم الجولة (0 = العشرة الأولى، 1 = العشرة الثانية)
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0); // رقم السؤال داخل الجولة
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRoundFinished, setIsRoundFinished] = useState(false);
  const [score, setScore] = useState(0);

  // === قاعدة البيانات الكبرى (20 وضعية) ===
  const allDatabase = [
    // --- المجموعة 1 (الوضعيات الكلاسيكية) ---
    {
      id: 1,
      title: "العنف المدرسي",
      situation: "أثناء شرحك للدرس، قام تلميذ بضرب زميله بشكل مفاجئ، مما أحدث فوضى عارمة. كيف تتصرف فوراً؟",
      options: [
        { text: "أقوم بطرد التلميذ المعتدي فوراً لاستعادة الهدوء.", isCorrect: false },
        { text: "أوقف الدرس، أتدخل لفك النزاع بحزم، أطمئن الضحية، وأحيل المعتدي للإدارة لاحقاً.", isCorrect: true },
        { text: "أتجاهل الأمر وأستمر في الشرح.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). الطرد ممنوع قانونياً. الأولوية هي حماية المتعلمين (الأمن الجسدي) ثم اتخاذ الإجراءات الإدارية."
    },
    {
      id: 2,
      title: "رفض التعلم",
      situation: "تلميذ يرفض الكتابة ويضع رأسه على الطاولة طوال الحصة، رغم تنبيهك له.",
      options: [
        { text: "أجبره على الكتابة بالتهديد بخصم النقط.", isCorrect: false },
        { text: "أتركه وشأنه ما دام هادئاً.", isCorrect: false },
        { text: "أحاول فهم السبب بهدوء (قد يكون مريضاً) وأشركه شفهياً كبداية.", isCorrect: true }
      ],
      feedback: "الجواب الصحيح هو (3). التهديد يولد العناد. يجب البحث عن العائق (نفسي/صحي) وتنويع البيداغوجيا لاحتوائه."
    },
    {
      id: 3,
      title: "الغش في الامتحان",
      situation: "ضبطت تلميذاً يستعمل الهاتف النقال للنقل أثناء فرض مراقب.",
      options: [
        { text: "أسحب الورقة والهاتف، أمنحه صفراً وأطرده.", isCorrect: false },
        { text: "أسحب الهاتف ووسيلة الغش، أترك له الورقة ليكمل، وأكتب تقريراً للإدارة.", isCorrect: true },
        { text: "أنبهه شفوياً فقط.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). حرمان التلميذ من إكمال الفرض غير قانوني. الإجراء هو حجز الأداة ورفع تقرير لمجلس الانضباط."
    },
    {
      id: 4,
      title: "التأخر المتكرر",
      situation: "تلميذ يصل دائماً متأخراً بـ 15 دقيقة ويطرق الباب ليدخل.",
      options: [
        { text: "أمنعه من الدخول ليتعلم الانضباط.", isCorrect: false },
        { text: "أقبله بشرط إحضار إذن الدخول، وأناقش حالته مع الإدارة والولي لاحقاً.", isCorrect: true },
        { text: "أدخله دون أي تعليق.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). لا يجوز حرمان التلميذ من الحصة (الحق في التمدرس)، لكن يجب ضبط الغياب إدارياً ومعالجة الأسباب."
    },
    {
      id: 5,
      title: "اقتحام ولي أمر",
      situation: "اقتحم أب غاضب القسم وبدأ يصرخ محتجاً على نقطة ابنه أمام التلاميذ.",
      options: [
        { text: "أصرخ في وجهه وأطرده من القسم.", isCorrect: false },
        { text: "أطلب منه بهدوء وحزم التوجه للإدارة لمناقشة الأمر، حفاظاً على حرمة القسم.", isCorrect: true },
        { text: "أناقشه أمام التلاميذ لأبرر النقطة.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). يجب الحفاظ على هدوء القسم وعدم الدخول في مشاداة. الإدارة هي المكان الطبيعي للنقاش."
    },
    {
      id: 6,
      title: "الفوارق التعلمية",
      situation: "لاحظت أن فئة من القسم تنهي التمارين بسرعة وتصاب بالملل، بينما فئة أخرى لم تبدأ بعد.",
      options: [
        { text: "أنتظر الفئة المتعثرة حتى تنتهي.", isCorrect: false },
        { text: "أعتمد البيداغوجيا الفارقية: أنشطة إضافية للمتفوقين ودعم فوري للمتعثرين.", isCorrect: true },
        { text: "أطلب من المتفوقين الخروج للاستراحة.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). تدبير الفوارق يتطلب تكييف الأنشطة (Differenciation) ليبقى الجميع في حالة تعلم."
    },
    {
      id: 7,
      title: "حادثة مدرسية",
      situation: "سقط تلميذ داخل القسم وأصيب بجرح في رأسه.",
      options: [
        { text: "أحمله فوراً بسيارتي إلى المستشفى.", isCorrect: false },
        { text: "أخبر المدير فوراً (للاتصال بالإسعاف) وأقدم الإسعافات الأولية البسيطة دون تحريكه.", isCorrect: true },
        { text: "أتصل بأسرته لتأتي لأخذه.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). نقل المصاب مسؤولية الوقاية المدنية. دورك هو الإشعار، الحماية، وكتابة تقرير مفصل عن الحادثة."
    },
    {
      id: 8,
      title: "الخطأ البيداغوجي",
      situation: "أجاب تلميذ إجابة خاطئة أثارت ضحك زملائه.",
      options: [
        { text: "أنهره وأطلب منه الجلوس.", isCorrect: false },
        { text: "أتجاهل الإجابة وأطلب من تلميذ نجيب تصحيحها.", isCorrect: false },
        { text: "أمنع الضحك، وأستثمر الخطأ لمعرفة تمثلاته وبناء المعرفة الصحيحة.", isCorrect: true }
      ],
      feedback: "الجواب الصحيح هو (3). الخطأ هو منطلق للتعلم وليس جريمة. يجب تثمين المحاولة وحماية التلميذ من التنمر."
    },
    {
      id: 9,
      title: "مشكل البصر",
      situation: "تلميذ يكثر من الوقوف والاقتراب من السبورة لنقل الدروس.",
      options: [
        { text: "أامره بالجلوس في مكانه.", isCorrect: false },
        { text: "أقوم بتقريبه للصفوف الأمامية وأنصح الإدارة باستدعاء ولي أمره لفحص بصره.", isCorrect: true },
        { text: "أكتب بخط كبير جداً من أجله فقط.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). هذا مؤشر على ضعف البصر. الحل البيداغوجي الفوري هو تغيير المكان، ثم الحل الطبي."
    },
    {
      id: 10,
      title: "التنمر (Bullying)",
      situation: "لاحظت أن مجموعة من التلاميذ يسخرون باستمرار من تلميذ انطوائي في الساحة.",
      options: [
        { text: "لا أتدخل، مشاكل الساحة تخص الحراسة العامة.", isCorrect: false },
        { text: "أخصص حصة للتوعية بخطورة التنمر وأطبق ميثاق القسم.", isCorrect: true },
        { text: "أعاقب المجموعة بالعنف.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). المدرس مربي قبل كل شيء. يجب معالجة الظاهرة تربوياً (التحسيس) وقانونياً (الميثاق)."
    },

    // --- المجموعة 2 (الوضعيات الجديدة - ستظهر عند الضغط على زر التجديد) ---
    {
      id: 11,
      title: "الحياد الإيديولوجي",
      situation: "طرح تلميذ سؤالاً سياسياً حساساً لا علاقة له بالدرس، وانقسم القسم بين مؤيد ومعارض.",
      options: [
        { text: "أبدي رأيي الشخصي بصراحة وأقنعهم به.", isCorrect: false },
        { text: "أذكرهم بضرورة احترام الاختلاف، وأوضح بلباقة أن المكان مخصص للعلم وليس للنقاش السياسي.", isCorrect: true },
        { text: "أطرد التلميذ الذي طرح السؤال لأنه يثير الفتنة.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). المدرس ملزم بالحياد (Neutralité). دورك هو تعليم قيم الحوار وقبول الآخر دون الانجرار لنقاشات إيديولوجية."
    },
    {
      id: 12,
      title: "السرقة داخل القسم",
      situation: "اشتكى تلميذ من سرقة أدواته المدرسية أثناء الاستراحة، واتهم تلميذاً آخر.",
      options: [
        { text: "أفتش محفظة المتهم بالقوة أمام الجميع.", isCorrect: false },
        { text: "أطلب من الجميع إفراغ محافظهم.", isCorrect: false },
        { text: "أعالج الأمر بحكمة: أتحدث عن الأمانة، وأطلب ممن أخذها (دون تحديد) إعادتها سراً أو وضعها فوق المكتب لاحقاً.", isCorrect: true }
      ],
      feedback: "الجواب الصحيح هو (3). التفتيش الذاتي ليس من اختصاص المدرس (إجراء قانوني حساس). الحل التربوي هو منح فرصة للتراجع وحفظ ماء الوجه."
    },
    {
      id: 13,
      title: "الهدية",
      situation: "جاءك ولي أمر تلميذ بهدية قيمة جداً بمناسبة نهاية الأسدس.",
      options: [
        { text: "أقبل الهدية لأنها تعبير عن الامتنان.", isCorrect: false },
        { text: "أعتذر بلباقة عن قبولها موضحاً أنني أقوم بواجبي المهني، تفادياً لأي شبهة أو إحراج.", isCorrect: true },
        { text: "أقبلها وأخفيها حتى لا يراها أحد.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). أخلاقيات المهنة تمنع قبول الهدايا التي قد تُفسر على أنها رشوة أو محاباة (Rapport d'autorité)."
    },
    {
      id: 14,
      title: "انقطاع التكنولوجيا",
      situation: "خططت لدرس يعتمد كلياً على جهاز العرض (Data show)، لكنه تعطل فجأة.",
      options: [
        { text: "ألغي الحصة وأطلق سراح التلاميذ.", isCorrect: false },
        { text: "أنتقل فوراً للخطة البديلة (Plan B) واستعمل السبورة والكتاب المدرسي.", isCorrect: true },
        { text: "أقضي الحصة في محاولة إصلاحه.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). التخطيط الجيد يفترض دائماً وجود بديل. لا يجب أن يتوقف التعلم بسبب عطل تقني."
    },
    {
      id: 15,
      title: "العقاب الجماعي",
      situation: "صدر ضجيج مجهول المصدر من القسم، ولم يعترف أحد.",
      options: [
        { text: "أعاقب القسم كاملاً بتمارين إضافية أو خصم نقط.", isCorrect: false },
        { text: "أوقف الدرس وأشرح أن هذا السلوك يضيع حقهم في التعلم، وأرفض مبدأ العقاب الجماعي.", isCorrect: true },
        { text: "أطرد المشاغبين المحتملين.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). العقاب الجماعي ممنوع قانونياً وتربوياً (لأنه يظلم البريء). الحل هو المسؤولية الأخلاقية."
    },
    {
      id: 16,
      title: "المدير والبيداغوجيا",
      situation: "طلب منك المدير تغيير طريقة جلوس التلاميذ، لكنك ترى أن طريقتك (المجموعات) أنسب لنشاطك.",
      options: [
        { text: "أرفض طلبه بحدة لأنه تدخل في اختصاصي.", isCorrect: false },
        { text: "أشرح له مبرراتي البيداغوجية بلباقة، فالأستاذ هو المسؤول عن اختياراته البيداغوجية داخل الفصل.", isCorrect: true },
        { text: "أغير الطريقة فوراً طاعة لرئيسي.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). السلطة البيداغوجية داخل الفصل هي للأستاذ (حرية التدريس)، مع احترام التوجيهات الرسمية."
    },
    {
      id: 17,
      title: "عدم إحضار اللوازم",
      situation: "تلميذ يأتي باستمرار دون دفتر ولا كتاب بسبب فقر أسرته المدقع.",
      options: [
        { text: "أطرده حتى يحضر أدواته.", isCorrect: false },
        { text: "أنسق مع الإدارة أو جمعية الآباء لتوفير اللوازم له في إطار الدعم الاجتماعي.", isCorrect: true },
        { text: "أوبخه أمام زملائه ليتحرك.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). المدرسة يجب أن تكون دامجة. دورك هو تفعيل الشراكات والمساعدة الاجتماعية لضمان تكافؤ الفرص."
    },
    {
      id: 18,
      title: "الهاتف يرن",
      situation: "رن هاتفك الشخصي بصوت عالٍ أثناء الشرح، ونسيت وضعه على الصامت.",
      options: [
        { text: "أجيب على المكالمة أمام التلاميذ.", isCorrect: false },
        { text: "أعتذر للتلاميذ، أغلقه فوراً، وأتمم الدرس، لأكون قدوة في احترام الوقت.", isCorrect: true },
        { text: "أغلقه وأتظاهر بأن شيئاً لم يحدث.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). الاعتذار يعلم التلاميذ ثقافة الاعتراف بالخطأ. أنت القدوة (Role Model)."
    },
    {
      id: 19,
      title: "الطفل الانعزالي",
      situation: "تلميذ يرفض العمل في مجموعات ويفضل العمل بمفرده دائماً.",
      options: [
        { text: "أجبره على الاندماج بالقوة.", isCorrect: false },
        { text: "أحترم رغبته في البداية، ثم أدمجه تدريجياً عبر مهام بسيطة تتطلب ثنائيات.", isCorrect: true },
        { text: "أخصم له نقط المشاركة.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). الدمج القسري قد يؤدي لنتائج عكسية. التدرج (Progressivité) هو المفتاح."
    },
    {
      id: 20,
      title: "السؤال المحرج",
      situation: "طرح عليك تلميذ سؤالاً في الدرس ولم تعرف الإجابة عنه.",
      options: [
        { text: "أخترع إجابة حتى لا تهتز صورتي.", isCorrect: false },
        { text: "أعترف بصدق أنني لست متأكداً الآن، وأعدهم بالبحث عن الجواب للحصة القادمة (أو نبحث جماعة).", isCorrect: true },
        { text: "أتجاهل السؤال وأغير الموضوع.", isCorrect: false }
      ],
      feedback: "الجواب الصحيح هو (2). الأستاذ ليس موسوعة شاملة. هذا يعلم التلاميذ الأمانة العلمية ومنهجية البحث."
    }
  ];

  // تحديد عدد الأسئلة في كل جولة
  const QUESTIONS_PER_ROUND = 10;
  
  // استخراج الأسئلة الحالية بناءً على الجولة
  const currentBatch = allDatabase.slice(
    round * QUESTIONS_PER_ROUND, 
    (round + 1) * QUESTIONS_PER_ROUND
  );

  // هل انتهت كل الأسئلة في قاعدة البيانات؟
  const isGameOver = currentBatch.length === 0;

  // التعامل مع اختيار الجواب
  const handleSelect = (idx: number, isCorrect: boolean) => {
    if (showFeedback) return;
    setSelectedOption(idx);
    setShowFeedback(true);
    if (isCorrect) setScore(prev => prev + 1);
  };

  // الانتقال للسؤال التالي
  const nextScenario = () => {
    if (currentScenarioIndex < currentBatch.length - 1) {
      setCurrentScenarioIndex(curr => curr + 1);
      setShowFeedback(false);
      setSelectedOption(null);
    } else {
      setIsRoundFinished(true);
    }
  };

  // تحميل دفعة جديدة من الأسئلة
  const loadNextBatch = () => {
    setRound(prev => prev + 1);
    setCurrentScenarioIndex(0);
    setShowFeedback(false);
    setSelectedOption(null);
    setIsRoundFinished(false);
    // يمكن تصفير النقاط أو تركها تراكمية، هنا سنصفرها للجولة الجديدة
    setScore(0);
    window.scrollTo(0, 0);
  };

  // إعادة البدء من الصفر
  const restartGame = () => {
    setRound(0);
    setCurrentScenarioIndex(0);
    setShowFeedback(false);
    setSelectedOption(null);
    setIsRoundFinished(false);
    setScore(0);
  };

  // شاشة النهاية (عندما تنتهي قاعدة البيانات بالكامل)
  if (isGameOver) {
    return (
      <div className="max-w-3xl mx-auto animate-scale-in p-8 text-center bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 mt-8">
        <div className="mb-6 inline-block p-6 rounded-full bg-yellow-100 text-yellow-600">
          <Trophy size={64} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">ختمت اللعبة! 👑</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          لقد أتممت جميع الوضعيات المهنية المتوفرة ({allDatabase.length} وضعية).
        </p>
        <button onClick={restartGame} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold">
          العودة للبداية
        </button>
      </div>
    );
  }

  // شاشة نهاية الجولة (زر للمرور للمستوى التالي)
  if (isRoundFinished) {
    const isLastRound = (round + 1) * QUESTIONS_PER_ROUND >= allDatabase.length;

    return (
      <div className="max-w-3xl mx-auto animate-scale-in p-8 text-center bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 mt-8">
        <div className="mb-6 inline-block p-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">أحسنت العمل!</h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
          نتيجتك في هذه الجولة: <span className="font-bold text-indigo-600 text-2xl">{score}</span> / {currentBatch.length}
        </p>
        
        {isLastRound ? (
           <button 
             onClick={restartGame}
             className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg shadow-lg transition-all"
           >
             <RefreshCw className="inline ml-2" size={20}/>
             إعادة التدريب من البداية
           </button>
        ) : (
           <button 
             onClick={loadNextBatch}
             className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-lg rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1"
           >
             <span className="mr-2"><Activity size={20}/></span>
             تحميل وضعيات جديدة ومختلفة
             <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40 animate-pulse"></div>
           </button>
        )}
      </div>
    );
  }

  const currentData = currentBatch[currentScenarioIndex];

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* بطاقة الوضعية */}
      <div 
        key={currentData.id} // المفتاح لتفعيل الأنيميشن عند كل سؤال جديد
        className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border-2 border-slate-100 dark:border-slate-700 animate-fade-in"
      >
        
        {/* الرأس */}
        <div className="bg-slate-900 text-white p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="relative z-10 flex items-center justify-between">
             <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
               <Briefcase className="text-orange-400" />
               {currentData.title}
             </h2>
             <div className="flex gap-2 items-center">
                <span className="text-xs bg-indigo-600 px-2 py-1 rounded">المستوى {round + 1}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-mono">
                  {currentScenarioIndex + 1} / {currentBatch.length}
                </span>
             </div>
          </div>
        </div>

        {/* جسم الوضعية */}
        <div className="p-6 md:p-8">
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-8">
            {currentData.situation}
          </p>

          {/* الخيارات */}
          <div className="space-y-4">
            {currentData.options.map((opt: any, idx: number) => (
              <button
                key={idx}
                disabled={showFeedback}
                onClick={() => handleSelect(idx, opt.isCorrect)}
                className={`w-full text-right p-5 rounded-xl border-2 transition-all flex items-center gap-4 group relative overflow-hidden
                  ${showFeedback 
                    ? (opt.isCorrect 
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                        : (selectedOption === idx ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-slate-200 opacity-50')
                      )
                    : 'border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:shadow-md bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }
                `}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors
                  ${showFeedback && opt.isCorrect ? 'bg-green-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 group-hover:bg-indigo-100 group-hover:text-indigo-600'}
                `}>
                  {idx + 1}
                </div>
                <span className="text-base md:text-lg font-medium text-slate-800 dark:text-slate-200 relative z-10">
                  {opt.text}
                </span>
              </button>
            ))}
          </div>

          {/* التغذية الراجعة (التصحيح) */}
          {showFeedback && (
            <div className="mt-8 animate-scale-in">
              <div className={`p-6 rounded-2xl border-r-4 shadow-sm ${currentData.options[selectedOption!].isCorrect ? 'bg-green-50 dark:bg-green-900/10 border-green-500' : 'bg-red-50 dark:bg-red-900/10 border-red-500'}`}>
                <h4 className={`font-bold text-lg mb-2 flex items-center gap-2 ${currentData.options[selectedOption!].isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                   {currentData.options[selectedOption!].isCorrect ? <CheckCircle size={20}/> : <AlertTriangle size={20}/>}
                   {currentData.options[selectedOption!].isCorrect ? 'تصرف سليم تربوياً ✅' : 'تصرف يحتاج مراجعة ❌'}
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-7 text-justify">
                  {currentData.feedback}
                </p>
              </div>
              
              <button 
                onClick={nextScenario}
                className="mt-6 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 dark:shadow-none transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                {currentScenarioIndex < currentBatch.length - 1 ? 'الوضعية التالية' : 'عرض النتيجة'} 
                <ArrowRight className="rotate-180" size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// ------------------- COMPONENT: INTERACTIVE TRIANGLE (المثلث الديدكتيكي - مصحح) -------------------

function DidacticTriangle() {
  const [activePart, setActivePart] = useState<string | null>(null);

  const info = {
    // الأقطاب
    teacher: { title: "المدرس (Enseignant)", desc: "القطب البيداغوجي. دوره: النقل الديدكتيكي، تدبير العقد، وتيسير التعلم." },
    student: { title: "المتعلم (Apprenant)", desc: "القطب السيكولوجي. يبني المعرفة انطلاقاً من تمثلاته (النظرية البنائية)." },
    knowledge: { title: "المعرفة (Savoir)", desc: "القطب الإبستمولوجي. المادة الدراسية التي خضعت للنقل لتصبح قابلة للتدريس." },
    
    // المحاور (العلاقات)
    transposition: { title: "النقل الديدكتيكي (Transposition)", desc: "العلاقة بين (المدرس ↔ المعرفة). هي عملية تحويل 'المعرفة العالمة' (Savoir savant) إلى 'معرفة مدرسة' (Savoir enseigné) لتناسب مستوى المتعلمين." },
    contract: { title: "العقد الديدكتيكي (Contrat)", desc: "العلاقة بين (المدرس ↔ المتعلم). مجموع القواعد الضمنية والصريحة التي تحدد واجبات وحقوق كل طرف في العملية التعليمية." },
    representations: { title: "التمثلات / التعلم (Représentations)", desc: "العلاقة بين (المتعلم ↔ المعرفة). هنا يحدث الصراع المعرفي. المتعلم لا يأتي بذهن فارغ، بل بتمثلات سابقة يجب هدمها لبناء معرفة جديدة." }
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border-2 border-slate-100 dark:border-slate-700 overflow-hidden relative">
        
        {/* رأس البطاقة */}
        <div className="bg-slate-100 dark:bg-slate-800 p-6 flex justify-between items-center">
           <div>
             <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">المثلث الديدكتيكي (Jean Houssaye)</h2>
             <p className="text-slate-500 dark:text-slate-400 text-sm">اضغط على العناصر لفهم التفاعلات</p>
           </div>
           <Info className="text-slate-400" />
        </div>

        <div className="p-8 relative min-h-[550px] flex flex-col items-center">
          
          {/* حاوية الرسم البياني */}
          <div className="relative w-full max-w-[400px] h-[350px] mx-auto mb-8 select-none mt-8">
            
            {/* 1. خطوط الربط (SVG) خلف العناصر */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 350">
               {/* المثلث */}
               <path d="M200,40 L40,310 L360,310 Z" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" className="dark:stroke-slate-600"/>
            </svg>

            {/* ================= الأقطاب (الرؤوس) ================= */}
            
            {/* قمة: المعرفة (Top Center) */}
            <button 
              onClick={() => setActivePart('knowledge')}
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 shadow-lg flex flex-col items-center justify-center transition-all z-20 hover:scale-110 
                ${activePart === 'knowledge' ? 'bg-blue-100 border-blue-600 scale-110' : 'bg-white dark:bg-slate-800 border-blue-500 hover:bg-blue-50'}
              `}
            >
              <BookOpen size={24} className="text-blue-600 mb-1" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">المعرفة</span>
            </button>

            {/* أسفل اليسار: المدرس (Bottom Left) */}
            <button 
              onClick={() => setActivePart('teacher')}
              className={`absolute bottom-0 left-0 w-24 h-24 rounded-full border-4 shadow-lg flex flex-col items-center justify-center transition-all z-20 hover:scale-110
                ${activePart === 'teacher' ? 'bg-red-100 border-red-600 scale-110' : 'bg-white dark:bg-slate-800 border-red-500 hover:bg-red-50'}
              `}
            >
              <UserCheck size={24} className="text-red-600 mb-1" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">المدرس</span>
            </button>

            {/* أسفل اليمين: المتعلم (Bottom Right) */}
            <button 
              onClick={() => setActivePart('student')}
              className={`absolute bottom-0 right-0 w-24 h-24 rounded-full border-4 shadow-lg flex flex-col items-center justify-center transition-all z-20 hover:scale-110
                ${activePart === 'student' ? 'bg-green-100 border-green-600 scale-110' : 'bg-white dark:bg-slate-800 border-green-500 hover:bg-green-50'}
              `}
            >
              <Users size={24} className="text-green-600 mb-1" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">المتعلم</span>
            </button>


            {/* ================= المحاور (الأزرار الجانبية) ================= */}

            {/* اليسار: النقل الديدكتيكي (بين المدرس والمعرفة) */}
            <div 
               onClick={() => setActivePart('transposition')}
               className="absolute top-1/2 left-[10%] -translate-y-1/2 cursor-pointer z-10 hover:scale-110 transition-transform group"
            >
               <div className={`px-3 py-2 rounded-xl shadow-md border text-sm font-bold rotate-[-55deg] whitespace-nowrap backdrop-blur-sm
                 ${activePart === 'transposition' ? 'bg-purple-600 text-white border-purple-600' : 'bg-white/90 dark:bg-slate-800/90 text-purple-600 border-purple-200 dark:border-purple-900'}
               `}>
                 النقل الديدكتيكي ⚡
               </div>
            </div>

            {/* اليمين: التمثلات (بين المتعلم والمعرفة) */}
            <div 
               onClick={() => setActivePart('representations')}
               className="absolute top-1/2 right-[10%] -translate-y-1/2 cursor-pointer z-10 hover:scale-110 transition-transform group"
            >
               <div className={`px-3 py-2 rounded-xl shadow-md border text-sm font-bold rotate-[55deg] whitespace-nowrap backdrop-blur-sm
                 ${activePart === 'representations' ? 'bg-orange-600 text-white border-orange-600' : 'bg-white/90 dark:bg-slate-800/90 text-orange-600 border-orange-200 dark:border-orange-900'}
               `}>
                 التمثلات / التعلم 🧠
               </div>
            </div>

            {/* الأسفل: العقد الديدكتيكي (بين المدرس والمتعلم) */}
            <div 
               onClick={() => setActivePart('contract')}
               className="absolute bottom-[20px] left-1/2 -translate-x-1/2 cursor-pointer z-10 hover:scale-110 transition-transform group"
            >
               <div className={`px-4 py-2 rounded-xl shadow-md border text-sm font-bold whitespace-nowrap backdrop-blur-sm
                 ${activePart === 'contract' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white/90 dark:bg-slate-800/90 text-teal-600 border-teal-200 dark:border-teal-900'}
               `}>
                 📜 العقد الديدكتيكي
               </div>
            </div>

          </div>

          {/* صندوق الشرح الديناميكي */}
          <div className="w-full mt-4 h-32 flex items-center justify-center">
             {activePart ? (
               <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-600 text-center animate-scale-in w-full shadow-inner">
                 <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                   {info[activePart as keyof typeof info].title}
                 </h3>
                 <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                   {info[activePart as keyof typeof info].desc}
                 </p>
               </div>
             ) : (
               <div className="text-center text-slate-400 animate-pulse bg-slate-50 dark:bg-slate-900/30 p-4 rounded-xl w-full border border-dashed border-slate-300">
                 👈 انقر على أي جزء من المثلث لإظهار التفاصيل العلمية
               </div>
             )}
          </div>

        </div>
      </div>
    </div>
  );
}

// ------------------- COMPONENT: ADVANCED TIMELINE (خط الزمن الموسوعي) -------------------
function TheoriesTimeline() {
  const [selectedTheory, setSelectedTheory] = useState<any>(null);

  // === قاعدة بيانات النظريات المفصلة ===
  const theories = [
    {
      id: 1,
      year: "1913",
      title: "المدرسة السلوكية (Behaviorism)",
      pioneers: "واطسن، بافلوف، ثورندايك، سكينر",
      icon: <Activity />,
      color: "blue",
      shortDesc: "التعلم هو تغير في السلوك الخارجي نتيجة مثير واستجابة.",
      details: {
        principle: "تعتبر العقل 'علبة سوداء' لا يمكن دراسة ما بداخله. تركز فقط على السلوك القابل للملاحظة والقياس.",
        concepts: [
          "المثير والاستجابة (Stimulus-Response)",
          "التعزيز (Renforcement): إيجابي أو سلبي لتقوية السلوك",
          "العقاب (Punition): لإطفاء السلوك غير المرغوب",
          "الدافعية: خارجية (طمعاً في الجائزة أو خوفاً من العقاب)",
          "الخطأ: فشل يجب تجنبه ومعاقبته"
        ],
        teacherRole: "المالك للمعرفة، الملقن، والمتحكم في بيئة القسم والمثيرات.",
        studentRole: "سلبي، متلقي، صفحة بيضاء (Tabula Rasa) يتم ملؤها بالمعلومات.",
        application: "بيداغوجيا الأهداف، التدريس المبرمج، التمارين التكرارية (Drill and Practice)."
      }
    },
    {
      id: 2,
      year: "1920s",
      title: "المدرسة الجشطالتية (Gestalt)",
      pioneers: "كوهلر، فورتيمر، كوفكا",
      icon: <Layers />,
      color: "purple",
      shortDesc: "الكل أكبر من مجموع الأجزاء. التعلم يحدث بالاستبصار.",
      details: {
        principle: "التعلم لا يحدث بالتجزئة بل بإدراك البنية الكلية للموقف. العقل البشري يميل لتنظيم المدركات في شكل كليات (Gestalts).",
        concepts: [
          "الاستبصار (Insight): الإدراك الفجائي للحل بعد تأمل",
          "البنية (Structure): العناصر المترابطة التي تحكم الموقف",
          "إعادة التنظيم: تغيير النظرة لعناصر الموقف للوصول للحل",
          "انتقال أثر التعلم: القدرة على تطبيق الحل في مواقف مشابهة"
        ],
        teacherRole: "ميسر، يساعد المتعلم على إدراك العلاقات بين عناصر الدرس.",
        studentRole: "نشط عقلياً، يبحث عن الروابط والعلاقات لفهم 'البنية'.",
        application: "طريقة القراءة الكلية (من الجملة للحرف)، حل المشكلات الرياضية والهندسية."
      }
    },
    {
      id: 3,
      year: "1950s",
      title: "المدرسة البنائية (Constructivism)",
      pioneers: "جان بياجيه (Jean Piaget)",
      icon: <Database />,
      color: "green",
      shortDesc: "المتعلم يبني المعرفة ذاتياً من خلال التفاعل وتجاوز التوازن.",
      details: {
        principle: "المعرفة لا تُنقل بل تُبنى. النمو المعرفي يحدث عبر مراحل عمرية محددة (حس-حركي، ما قبل العمليات، العمليات المادية، المجردة).",
        concepts: [
          "التمثلات (Représentations): البنيات الذهنية السابقة",
          "الاستيعاب (Assimilation): دمج معلومات جديدة في بنيات موجودة",
          "التلاءم (Accommodation): تعديل البنيات الذهنية لتناسب الواقع الجديد",
          "التوازن (Équilibration): المحرك الأساسي للتعلم",
          "الخطأ: ضروري للتعلم، دليل على وجود تمثل يحتاج للتصحيح"
        ],
        teacherRole: "يوفر الوضعيات المشكلة، لا يعطي الحلول الجاهزة، يحترم إيقاع النمو.",
        studentRole: "محور العملية، يبني معرفته بنفسه عبر الصراع مع الموضوع.",
        application: "الوضعيات المشكلة، التعلم الذاتي، التجارب العلمية."
      }
    },
    {
      id: 4,
      year: "1970s",
      title: "السوسيوبنائية (Socio-constructivism)",
      pioneers: "فيجوتسكي، برونر",
      icon: <Users />,
      color: "orange",
      shortDesc: "التعلم بناء اجتماعي. يحدث في سياق التفاعل مع الآخرين.",
      details: {
        principle: "الطفل يبني معرفته ليس وحيداً (ضد بياجيه) بل بمساعدة الآخرين. كل وظيفة عليا تظهر مرتين: اجتماعياً ثم فردياً.",
        concepts: [
          "منطقة النمو القريب (ZPD): المسافة بين ما ينجزه المتعلم وحده وما ينجزه بمساعدة",
          "السقالات (Étayage): الدعم المؤقت الذي يقدمه الراشد ثم يسحبه تدريجياً",
          "الصراع السوسيومعرفي: اختلاف وجهات النظر مع الأقران يولد التعلم",
          "الوساطة الاجتماعية"
        ],
        teacherRole: "وسيط، موجه، ومنظم للتفاعلات الاجتماعية داخل القسم.",
        studentRole: "يتفاعل مع أقرانه، يناقش، يفاوض المعنى، ويبني المعرفة جماعياً.",
        application: "العمل بالمجموعات، التعلم التعاوني، تعليم الأقران."
      }
    },
    {
      id: 5,
      year: "1983",
      title: "الذكاءات المتعددة",
      pioneers: "هاوارد جاردنر",
      icon: <Zap />,
      color: "yellow",
      shortDesc: "لا يوجد ذكاء واحد، بل ذكاءات متعددة تختلف من شخص لآخر.",
      details: {
        principle: "اختبارات الـ IQ ظالمة لأنها تقيس فقط الذكاء اللغوي والمنطقي. كل إنسان يمتلك 8 أنواع من الذكاء بنسب متفاوتة.",
        concepts: [
          "الذكاء اللغوي، المنطقي-الرياضي",
          "الذكاء البصري-المكاني",
          "الذكاء الجسدي-الحركي",
          "الذكاء الموسيقي",
          "الذكاء الاجتماعي (التعامل مع الآخرين)",
          "الذكاء الذاتي (فهم النفس)",
          "الذكاء الطبيعي"
        ],
        teacherRole: "ينوع طرق التدريس (بصري، سمعي، حركي...) لتخاطب كل أنواع الذكاءات.",
        studentRole: "يتعلم بالطريقة التي تناسب ملفه الذكائي الخاص.",
        application: "البيداغوجيا الفارقية، تنويع الأنشطة المدرسية."
      }
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 animate-fade-in relative">
      
      {/* 1. قائمة خط الزمن */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6 md:p-8 border-2 border-slate-100 dark:border-slate-700">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">تطور نظريات التعلم</h2>
          <p className="text-slate-500">اضغط على أي نظرية لعرض التفاصيل الكاملة</p>
        </div>

        <div className="relative border-r-4 border-slate-200 dark:border-slate-700 mr-4 space-y-8">
          {theories.map((theory) => (
            <div key={theory.id} className="relative pr-8 md:pr-12 group">
              
              {/* النقطة الزمنية */}
              <button 
                onClick={() => setSelectedTheory(theory)}
                className={`absolute -right-[1.1rem] top-0 w-8 h-8 rounded-full border-4 border-white dark:border-slate-800 shadow-sm flex items-center justify-center transition-transform group-hover:scale-125
                  ${theory.color === 'blue' ? 'bg-blue-500' : ''}
                  ${theory.color === 'purple' ? 'bg-purple-500' : ''}
                  ${theory.color === 'green' ? 'bg-green-500' : ''}
                  ${theory.color === 'orange' ? 'bg-orange-500' : ''}
                  ${theory.color === 'yellow' ? 'bg-yellow-500' : ''}
                `}
              ></button>

              {/* البطاقة المختصرة */}
              <div 
                onClick={() => setSelectedTheory(theory)}
                className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all cursor-pointer hover:-translate-x-2 relative overflow-hidden group-hover:border-indigo-200 dark:group-hover:border-indigo-900"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    {theory.title}
                  </h3>
                  <span className="text-xs font-mono font-bold px-2 py-1 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600">
                    {theory.year}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                  {theory.shortDesc}
                </p>
                <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-bold">
                  <BookOpen size={14} />
                  <span>انقر للتفاصيل الكاملة...</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. النافذة المنبثقة (MODAL) للتفاصيل */}
      {selectedTheory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div 
            className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-scale-in border border-slate-200 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* رأس النافذة */}
            <div className={`p-6 text-white flex justify-between items-start shrink-0
               ${selectedTheory.color === 'blue' ? 'bg-blue-600' : ''}
               ${selectedTheory.color === 'purple' ? 'bg-purple-600' : ''}
               ${selectedTheory.color === 'green' ? 'bg-green-600' : ''}
               ${selectedTheory.color === 'orange' ? 'bg-orange-600' : ''}
               ${selectedTheory.color === 'yellow' ? 'bg-yellow-600' : ''}
            `}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-1 flex items-center gap-2">
                  {selectedTheory.icon} {selectedTheory.title}
                </h2>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <HistoryIcon size={16} />
                  <span>تاريخ الظهور: {selectedTheory.year}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedTheory(null)}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* محتوى النافذة (قابل للتمرير) */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              
              {/* الرواد */}
              <div className="mb-6 flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-200">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white mb-1">أبرز الرواد</h4>
                  <p className="text-slate-600 dark:text-slate-300">{selectedTheory.pioneers}</p>
                </div>
              </div>

              {/* المبدأ العام */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2 border-b pb-2 dark:border-slate-700">
                  <Lightbulb className="text-yellow-500" /> المبدأ الأساسي
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg text-justify">
                  {selectedTheory.details.principle}
                </p>
              </div>

              {/* المفاهيم المفتاحية */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2 border-b pb-2 dark:border-slate-700">
                  <Database className="text-indigo-500" /> المفاهيم المركزية
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedTheory.details.concepts.map((concept: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                      <span className="text-indigo-500 mt-1">•</span> {concept}
                    </li>
                  ))}
                </ul>
              </div>

              {/* أدوار المدرس والمتعلم */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-xl border border-green-100 dark:border-green-800/30">
                  <h4 className="font-bold text-green-800 dark:text-green-400 mb-2 flex items-center gap-2">
                    <UserCheck size={18} /> دور المدرس
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-300 leading-relaxed">
                    {selectedTheory.details.teacherRole}
                  </p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
                  <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <GraduationCap size={18} /> دور المتعلم
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                    {selectedTheory.details.studentRole}
                  </p>
                </div>
              </div>

              {/* التطبيق التربوي */}
              <div className="bg-slate-900 text-slate-300 p-4 rounded-xl text-sm">
                <strong className="text-white block mb-1">🏗️ تطبيقات في الفصل:</strong>
                {selectedTheory.details.application}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}