"use client";

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Share2, Layers, CheckCircle, Brain, Lightbulb, Box, 
  Activity, Quote, ArrowRight, Sun, Moon, Sprout, Droplets, 
  Microscope, Globe, MonitorPlay, Zap, FlaskConical, Scale, 
  AlertTriangle, Target, MousePointerClick, Network, Split, GitGraph, ShieldCheck
} from 'lucide-react';

// ------------------- TYPES -------------------
type Section = 'formulation' | 'conceptMap' | 'didacticMeans';

// ------------------- MAIN COMPONENT -------------------
export default function DidacticModulePage() {
  const [activeSection, setActiveSection] = useState<Section>('formulation');
  const [isDark, setIsDark] = useState(false);

  // Toggle Theme Logic
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-800'}`} dir="rtl">
      
      {/* Theme Toggle Button (Fixed) */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 left-4 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform"
      >
        {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
      </button>

      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 opacity-[0.1] rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-20 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg ring-4 ring-white/5">
              <BookOpen size={48} className="text-indigo-200" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            مجزوءة الديدكتيك وتطوير الممارسة المهنية
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 font-light max-w-3xl mx-auto leading-relaxed opacity-90">
            مقاربة تحليلية شاملة: من النقل الديدكتيكي إلى هندسة التعلمات وبناء الأدوات
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <NavButton 
              label="1. صياغة المفهوم" 
              icon={<Brain size={18} />}
              isActive={activeSection === 'formulation'} 
              onClick={() => setActiveSection('formulation')}
              activeColor="bg-blue-600 border-blue-400"
            />
            <NavButton 
              label="2. الخريطة المفهومية" 
              icon={<Share2 size={18} />}
              isActive={activeSection === 'conceptMap'} 
              onClick={() => setActiveSection('conceptMap')}
              activeColor="bg-purple-600 border-purple-400"
            />
            <NavButton 
              label="3. الوسائل الديدكتيكية" 
              icon={<Box size={18} />}
              isActive={activeSection === 'didacticMeans'} 
              onClick={() => setActiveSection('didacticMeans')}
              activeColor="bg-teal-600 border-teal-400"
            />
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
                            <div className="mt-1"><Activity size={18} /></div>
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
          </div>
        )}

        {/* ================= SECTION 2: CONCEPT MAP ================= */}
        {activeSection === 'conceptMap' && (
          <div className="space-y-16 animate-fade-in">
            <SectionHeader 
              title="الخريطة المفهومية" 
              subtitle="استراتيجية ما وراء معرفية: من الحفظ الميكانيكي إلى التعلم ذي المعنى"
              icon={<Share2 className="text-purple-600" size={32} />}
              colorClass="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
            />

            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 border-r-4 border-purple-500 shadow-sm">
                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                   <Lightbulb className="text-purple-600" />
                   التعريف والعمق النظري (أوزوبل)
                 </h3>
                 <p className="text-gray-600 dark:text-gray-300 leading-8 text-justify mb-6">
                   تستند نظرياً إلى <span className="text-purple-700 dark:text-purple-400 font-bold">علم النفس المعرفي لأوزوبل</span>:
                 </p>
                 <div className="space-y-3">
                    <div className="flex gap-3 bg-green-50 dark:bg-green-900/20 p-3 rounded-xl border border-green-100 dark:border-green-800">
                       <CheckCircle className="text-green-600 mt-1" size={20} />
                       <div>
                         <strong className="block text-green-800 dark:text-green-300">التعلم ذو المعنى</strong>
                         <span className="text-sm text-green-700/80 dark:text-green-400">ربط المعلومات الجديدة بالبنية المعرفية للمتعلم.</span>
                       </div>
                    </div>
                    <div className="flex gap-3 bg-red-50 dark:bg-red-900/20 p-3 rounded-xl border border-red-100 dark:border-red-800 opacity-70">
                       <div className="mt-1"><AlertTriangle className="text-red-500" size={20} /></div>
                       <div>
                         <strong className="block text-red-800 dark:text-red-300">التعلم الميكانيكي</strong>
                         <span className="text-sm text-red-700/80 dark:text-red-400">الحفظ الحرفي دون فهم العلاقات (يُنسى بسرعة).</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="md:col-span-5 bg-slate-900 text-slate-200 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
                 <h4 className="font-bold text-white mb-6 text-center">وحدة بناء الخريطة: "القضية"</h4>
                 <div className="flex flex-col items-center gap-2">
                    <div className="w-full bg-white/10 p-3 rounded-lg text-center font-bold">مفهوم 1 (الكل)</div>
                    <ArrowIcon className="rotate-90 text-purple-400" />
                    <div className="px-4 py-1 bg-purple-600 text-white rounded-full text-xs font-bold shadow-lg">كلمة ربط</div>
                    <ArrowIcon className="rotate-90 text-purple-400" />
                    <div className="w-full bg-white/10 p-3 rounded-lg text-center font-bold">مفهوم 2 (الجزء)</div>
                 </div>
              </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                   <Network className="text-purple-600" />
                   التشريح البنيوي للخريطة
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-4"><GitGraph /></div>
                      <h4 className="font-bold text-lg mb-2">1. التفاضل التدريجي (هرمي)</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                         تنظيم المعرفة عمودياً من الأكثر شمولية إلى الأكثر تحديداً.
                      </p>
                      <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded overflow-hidden"><div className="h-full w-2/3 bg-blue-500"></div></div>
                   </div>

                   <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-4"><Split /></div>
                      <h4 className="font-bold text-lg mb-2">2. التوفيق التكاملي (أفقي)</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                         الروابط العرضية بين فرعين مختلفين. هي مؤشر على الفهم العميق والإبداع.
                      </p>
                      <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded overflow-hidden"><div className="h-full w-1/3 bg-purple-500"></div></div>
                   </div>
                </div>
            </div>

            <div className="space-y-8 mt-6">
               <div className="text-center">
                 <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">
                   نموذج تطبيقي
                 </h3>
                 <p className="text-gray-500 dark:text-gray-400">لاحظ التفرع العمودي والترابط.</p>
               </div>
               <SimpleConceptMap />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">منهجية الصياغة</h3>
                  <div className="space-y-4">
                     <ConstructionStep num="1" title="الجرد" desc="استخراج جميع المفاهيم." />
                     <ConstructionStep num="2" title="الترتيب" desc="من العام إلى الخاص." />
                     <ConstructionStep num="3" title="الربط" desc="رسم الخطوط وكلمات الربط." highlight />
                  </div>
               </div>

               <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                     <Target className="text-purple-500"/> معايير التقويم
                  </h3>
                  <ul className="space-y-3">
                     <li className="flex justify-between p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                        <span className="text-sm font-medium">صحة القضايا</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">1 نقطة</span>
                     </li>
                     <li className="flex justify-between p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                        <span className="text-sm font-medium">التسلسل الهرمي</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">5 نقاط</span>
                     </li>
                     <li className="flex justify-between p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-purple-200 dark:border-purple-900">
                        <span className="text-sm font-medium">الروابط العرضية</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded font-bold">10 نقاط (إبداع)</span>
                     </li>
                  </ul>
               </div>
            </div>
          </div>
        )}

        {/* ================= SECTION 3: DIDACTIC MEANS ================= */}
        {activeSection === 'didacticMeans' && (
          <div className="space-y-16 animate-fade-in">
            <SectionHeader 
              title="الوسائل الديدكتيكية" 
              subtitle="هندسة الأدوات: من الدعامات المادية إلى الوساطة الرقمية"
              icon={<Box className="text-teal-600" size={32} />}
              colorClass="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
            />

            <div className="grid md:grid-cols-2 gap-8 items-center">
               <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border-r-4 border-teal-500">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">المفهوم الجوهري</h3>
                  <p className="text-gray-600 dark:text-slate-300 leading-8 text-justify">
                    الوسيلة الديدكتيكية هي <strong>وسيط بيداغوجي</strong> (Médiateur) وظيفته تقليص المسافة بين <span className="text-teal-600 dark:text-teal-400 font-bold">المتعلم</span> وبين <span className="text-teal-600 dark:text-teal-400 font-bold">المعرفة</span>.
                  </p>
               </div>
               
               <div className="relative h-64 bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden flex items-center justify-center p-6 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-4 relative z-10 w-full justify-between max-w-md">
                     <div className="text-center">
                        <div className="bg-slate-200 dark:bg-slate-700 p-4 rounded-full mb-2"><Brain size={32} className="text-slate-600 dark:text-slate-300"/></div>
                        <span className="font-bold text-sm">المتعلم</span>
                     </div>
                     <div className="flex-1 flex flex-col items-center">
                        <div className="h-1 w-full bg-gradient-to-r from-slate-300 via-teal-500 to-slate-300 rounded-full relative">
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                             <Box size={12} /> الوسيط
                           </div>
                        </div>
                     </div>
                     <div className="text-center">
                        <div className="bg-slate-200 dark:bg-slate-700 p-4 rounded-full mb-2"><BookOpen size={32} className="text-slate-600 dark:text-slate-300"/></div>
                        <span className="font-bold text-sm">المعرفة</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="space-y-6">
               <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                 <Layers className="text-teal-600" />
                 أنواع الوسائل
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <TypeCard 
                    title="الوسائل الواقعية" 
                    sub="(Objets Réels)"
                    desc="الأشياء الحقيقية."
                    examples={['عينات صخور', 'نباتات حية']}
                    icon={<FlaskConical size={24} />}
                    color="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700"
                  />
                  <TypeCard 
                    title="النماذج" 
                    sub="(Modèles)"
                    desc="مجسمات تحاكي الواقع."
                    examples={['مجسم الكرة الأرضية', 'هيكل عظمي']}
                    icon={<Globe size={24} />}
                    color="bg-teal-100 dark:bg-teal-900/30 text-teal-700"
                  />
                  <TypeCard 
                    title="التكنولوجيا" 
                    sub="(TICE)"
                    desc="أدوات المحاكاة."
                    examples={['Phet', 'الواقع المعزز']}
                    icon={<MonitorPlay size={24} />}
                    color="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700"
                  />
               </div>
            </div>

            <div className="bg-slate-900 text-slate-200 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Target className="text-teal-400" /> معايير الاختيار
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                   <CriteriaMetric title="الملاءمة" desc="هل تخدم الهدف؟" icon={<CheckCircle />} />
                   <CriteriaMetric title="الأمان" desc="خلوها من المخاطر." icon={<ShieldCheck />} />
                   <CriteriaMetric title="الاقتصاد" desc="الوقت والجهد." icon={<Scale />} />
                   <CriteriaMetric title="الصحة العلمية" desc="معلومة صحيحة." icon={<Brain />} />
                </div>
            </div>

            <DidacticScenarios />
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 mt-24 border-t border-slate-800 text-center">
         <p>© {new Date().getFullYear()} بوابة الديدكتيك الرقمية.</p>
      </footer>
    </div>
  );
}

// =================== HELPER COMPONENTS ===================

function SimpleConceptMap() {
  const [highlight, setHighlight] = useState<string | null>(null);

  return (
    <div className="relative w-full min-h-[500px] bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col items-center justify-center p-8 select-none">
      <div className="relative z-10 mb-12">
        <div className="w-40 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-lg text-xl font-bold border-2 border-green-400">
          النبات الأخضر
        </div>
      </div>
      <div className="relative z-0 w-full max-w-2xl h-20 mb-4 flex justify-between px-16">
        <div className={`absolute top-0 right-1/2 w-[40%] h-full border-t-2 border-r-2 rounded-tr-3xl -translate-y-4 translate-x-1 ${highlight === 'parts' ? 'border-green-500' : 'border-slate-300 dark:border-slate-700'}`}></div>
        <div className={`absolute top-0 left-1/2 w-[40%] h-full border-t-2 border-l-2 rounded-tl-3xl -translate-y-4 -translate-x-1 ${highlight === 'needs' ? 'border-blue-500' : 'border-slate-300 dark:border-slate-700'}`}></div>
        <div className="absolute top-4 right-[25%] bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-500 border">يتكون من</div>
        <div className="absolute top-4 left-[25%] bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-500 border">يحتاج إلى</div>
      </div>
      <div className="relative z-10 w-full max-w-3xl flex justify-between items-start gap-8">
        <div className="flex flex-col items-center gap-4 w-1/2 p-4 cursor-pointer group" onMouseEnter={() => setHighlight('parts')} onMouseLeave={() => setHighlight(null)}>
          <div className="bg-green-100 dark:bg-green-900/40 text-green-700 p-4 rounded-2xl"><Sprout size={32} /></div>
          <h4 className="font-bold text-lg text-slate-700 dark:text-slate-200">أعضاء رئيسية</h4>
          <div className="flex gap-2">
             <div className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm border">جذور</div>
             <div className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm border">أوراق</div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-1/2 p-4 cursor-pointer group" onMouseEnter={() => setHighlight('needs')} onMouseLeave={() => setHighlight(null)}>
          <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 p-4 rounded-2xl"><Sun size={32} /></div>
          <h4 className="font-bold text-lg text-slate-700 dark:text-slate-200">حاجيات</h4>
          <div className="flex gap-2">
             <div className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm border flex gap-1"><Droplets size={12}/>ماء</div>
             <div className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm border flex gap-1"><Sun size={12}/>ضوء</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DidacticScenarios() {
  const [activeScenario, setActiveScenario] = useState<string>('electricity');
  const scenarios: any = {
    electricity: { title: "الفيزياء: التيار الكهربائي", problem: "مفهوم مجرد لا يرى.", solution: "برمجية محاكاة (PhET).", value: "نمذجة" },
    geo: { title: "الجغرافيا: التضاريس", problem: "صعوبة تخيل الأبعاد (3D).", solution: "جوجل إيرث أو مجسم.", value: "تمثيل" },
    bio: { title: "البيولوجيا: الخلية", problem: "بنية مجهرية دقيقة.", solution: "المجهر الضوئي.", value: "ملاحظة" }
  };
  const current = scenarios[activeScenario];

  return (
    <div className="bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900/30 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row min-h-[300px]">
      <div className="md:w-1/3 bg-slate-50 dark:bg-slate-950 p-6 flex flex-col gap-4 border-l dark:border-slate-800">
        <button onClick={() => setActiveScenario('electricity')} className={`flex items-center gap-3 p-4 rounded-xl ${activeScenario === 'electricity' ? 'bg-white shadow-md border-r-4 border-yellow-400' : ''}`}><Zap size={20} className="text-yellow-600"/> <span className="text-slate-800">الكهرباء</span></button>
        <button onClick={() => setActiveScenario('geo')} className={`flex items-center gap-3 p-4 rounded-xl ${activeScenario === 'geo' ? 'bg-white shadow-md border-r-4 border-green-500' : ''}`}><Globe size={20} className="text-green-600"/> <span className="text-slate-800">الجغرافيا</span></button>
        <button onClick={() => setActiveScenario('bio')} className={`flex items-center gap-3 p-4 rounded-xl ${activeScenario === 'bio' ? 'bg-white shadow-md border-r-4 border-red-500' : ''}`}><Microscope size={20} className="text-red-600"/> <span className="text-slate-800">البيولوجيا</span></button>
      </div>
      <div className="flex-1 p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">{current.title}</h3>
        <p className="mb-2 text-slate-600 dark:text-slate-300"><strong>العائق:</strong> {current.problem}</p>
        <p className="mb-4 text-slate-600 dark:text-slate-300"><strong>الوسيلة:</strong> {current.solution}</p>
        <div className="bg-teal-50 text-teal-800 p-3 rounded-lg font-bold">الوظيفة: {current.value}</div>
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
    <div className="flex flex-col md:flex-row items-center gap-5 border-b pb-8 border-gray-200 dark:border-gray-800">
      <div className={`p-5 rounded-2xl shadow-inner ${colorClass}`}>{icon}</div>
      <div><h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">{title}</h2><p className="text-gray-500 dark:text-gray-400 mt-2">{subtitle}</p></div>
    </div>
  );
}
function TranspositionStep({ title, sub, icon, step, color }: any) {
  return (
    <div className="flex flex-col items-center text-center relative z-10 flex-1 min-w-[150px]">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4 ${color}`}>{icon}</div>
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border flex items-center justify-center font-bold text-xs">{step}</div>
      <h4 className="font-bold text-gray-900 dark:text-white">{title}</h4>
      <span className="text-xs font-mono text-blue-600 block">{sub}</span>
    </div>
  );
}
function MechanismCard({ title, desc }: any) { return <div className="flex gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm"><div className="text-blue-500 shrink-0"><CheckCircle size={20} /></div><div><h4 className="font-bold text-gray-800 dark:text-white">{title}</h4><p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p></div></div>; }
function ConstructionStep({ num, title, desc, highlight }: any) { return <div className={`flex items-center gap-4 p-4 rounded-xl border ${highlight ? 'bg-purple-50 border-purple-200 dark:bg-purple-900/20' : 'border-transparent'}`}><div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">{num}</div><div><h5 className="font-bold text-gray-800 dark:text-white">{title}</h5><p className="text-sm text-gray-500">{desc}</p></div></div>; }
function TypeCard({ title, sub, desc, examples, icon, color }: any) { return <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"><div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>{icon}</div><h4 className="font-bold text-gray-800 dark:text-white">{title}</h4><span className="text-xs text-gray-400 block mb-2">{sub}</span><p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{desc}</p><div className="flex flex-wrap gap-2">{examples.map((ex:string, i:number)=><span key={i} className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{ex}</span>)}</div></div>; }
function CriteriaMetric({ title, desc, icon }: any) { return <div className="bg-white/5 p-4 rounded-xl border border-white/10"><div className="text-teal-400 mb-2">{icon}</div><h4 className="font-bold text-white">{title}</h4><p className="text-xs text-slate-300">{desc}</p></div>; }
function ArrowIcon({ className }: any) { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>; }