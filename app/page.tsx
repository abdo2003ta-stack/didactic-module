"use client";

import React, { useState } from 'react';
import ThemeToggle from "@/components/ThemeToggle"; 
import { 
  BookOpen, 
  Share2, 
  Layers, 
  CheckCircle, 
  ArrowLeft, 
  Brain, 
  Lightbulb, 
  Box, 
  Activity, 
  ListChecks, 
  ShieldCheck, 
  Eye, 
  GitCommit, 
  MousePointer2,
  ArrowRight,
  Quote,
  Leaf,
  Droplets,
  Sun,
  Sprout,
  Flower,
  Microscope,
  Globe,
  MonitorPlay,
  Zap,
  FlaskConical,
  Scale,
  AlertTriangle,
  Target,
  MousePointerClick,
  Network,
  Split,
  GitGraph
} from 'lucide-react';

// ------------------- TYPES -------------------
type Section = 'formulation' | 'conceptMap' | 'didacticMeans';

// ------------------- MAIN COMPONENT -------------------
export default function DidacticModulePage() {
  const [activeSection, setActiveSection] = useState<Section>('formulation');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300" dir="rtl">
      
      <ThemeToggle />

      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 opacity-[0.1] rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-20 text-center relative z-10">
          <div className="mb-8 flex justify-center animate-fade-in-up">
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
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
            
            <SectionHeader 
              title="مستوى صياغة المفهوم (Niveau de formulation)" 
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
                        وهي لا تعني "التبسيط المخل" للمعرفة، بل تعني <strong>تكييف</strong> المعرفة العالمة لتناسب البنية المعرفية للمتعلم في مرحلة عمرية محددة.
                    </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg text-blue-600"><Lightbulb size={24} /></div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">مثال تطبيقي: مفهوم "التنفس"</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 opacity-60">
                            <div className="mt-1"><Activity size={18} /></div>
                            <div>
                                <strong className="block text-sm text-gray-900 dark:text-gray-200">المستوى الجامعي (العالم):</strong>
                                <span className="text-xs text-gray-600 dark:text-gray-400">أكسدة خلوية، حلقة كريبس، ATP (معقد ومجرد).</span>
                            </div>
                        </div>
                        <div className="flex justify-center text-blue-500"><ArrowRight className="rotate-90" size={20} /></div>
                        <div className="flex items-start gap-4 bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm border border-blue-200 dark:border-blue-900/30">
                            <div className="mt-1 text-blue-600"><CheckCircle size={18} /></div>
                            <div>
                                <strong className="block text-sm text-blue-700 dark:text-blue-300">المستوى الابتدائي (المدرسي):</strong>
                                <span className="text-sm text-gray-700 dark:text-gray-300">حركات تنفسية (شهيق/زفير) وتبادلات غازية تضمن تزويد الجسم بالطاقة.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 dark:border-slate-800">
              <div className="bg-slate-900 dark:bg-black p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-black opacity-40"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">سلسلة النقل الديدكتيكي</h3>
                <p className="text-blue-200 relative z-10 text-sm font-mono tracking-widest uppercase">Yves Chevallard</p>
              </div>
              <div className="p-8 md:p-12 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-slate-800 -z-0 rounded-full"></div>
                  <TranspositionStep title="المعرفة العالمة" sub="(Savoir Savant)" desc="المعرفة في مهدها (الجامعات)." icon={<Brain size={24} />} step="1" color="bg-slate-800 text-white" />
                  <ArrowIcon className="hidden md:block text-gray-300 dark:text-slate-600 relative z-10 bg-slate-50 dark:bg-slate-900 p-1 rounded-full" />
                  <TranspositionStep title="المعرفة الواجب تدريسها" sub="(Savoir à Enseigner)" desc="المعرفة المقررة (المنهاج)." icon={<BookOpen size={24} />} step="2" color="bg-blue-600 text-white" />
                  <ArrowIcon className="hidden md:block text-gray-300 dark:text-slate-600 relative z-10 bg-slate-50 dark:bg-slate-900 p-1 rounded-full" />
                  <TranspositionStep title="المعرفة المُدَرَّسة" sub="(Savoir Enseigné)" desc="ما يقدمه المدرس فعلياً." icon={<Activity size={24} />} step="3" color="bg-indigo-600 text-white" />
                  <ArrowIcon className="hidden md:block text-gray-300 dark:text-slate-600 relative z-10 bg-slate-50 dark:bg-slate-900 p-1 rounded-full" />
                  <TranspositionStep title="المعرفة المُكتسبة" sub="(Savoir Appris)" desc="ما يترسخ في ذهن المتعلم." icon={<CheckCircle size={24} />} step="4" color="bg-green-600 text-white" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
               <div className="md:col-span-4 bg-blue-50 dark:bg-blue-950/40 p-8 rounded-3xl h-full border border-blue-100 dark:border-blue-900 relative overflow-hidden">
                 <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 blur-2xl"></div>
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
          </section>
        )}

        {/* ================= SECTION 2: CONCEPT MAP (RESTORED DEPTH) ================= */}
        {activeSection === 'conceptMap' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
            
            <SectionHeader 
              title="الخريطة المفهومية (La carte conceptuelle)" 
              subtitle="استراتيجية ما وراء معرفية: من الحفظ الميكانيكي إلى التعلم ذي المعنى"
              icon={<Share2 className="text-purple-600" size={32} />}
              colorClass="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
            />

            {/* 1. Definition & Theoretical Framework (Ausubel) */}
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 border-r-4 border-purple-500 shadow-sm">
                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                   <Lightbulb className="text-purple-600" />
                   التعريف والعمق النظري
                 </h3>
                 <p className="text-gray-600 dark:text-gray-300 leading-8 text-justify mb-6">
                   الخريطة المفهومية (نوفاك 1970) هي تمثيل تخطيطي للعلاقات بين المفاهيم في شكل قضايا (Propositions). 
                   تستند نظرياً إلى <span className="text-purple-700 dark:text-purple-400 font-bold">علم النفس المعرفي لأوزوبل (David Ausubel)</span>، الذي يميز بين نوعين من التعلم:
                 </p>
                 <div className="space-y-3">
                    <div className="flex gap-3 bg-green-50 dark:bg-green-900/20 p-3 rounded-xl border border-green-100 dark:border-green-800">
                       <CheckCircle className="text-green-600 mt-1" size={20} />
                       <div>
                         <strong className="block text-green-800 dark:text-green-300">التعلم ذو المعنى (Meaningful Learning)</strong>
                         <span className="text-sm text-green-700/80 dark:text-green-400">ربط المعلومات الجديدة بالمفاهيم السابقة الموجودة في البنية المعرفية للمتعلم.</span>
                       </div>
                    </div>
                    <div className="flex gap-3 bg-red-50 dark:bg-red-900/20 p-3 rounded-xl border border-red-100 dark:border-red-800 opacity-70">
                       <div className="mt-1"><AlertTriangle className="text-red-500" size={20} /></div>
                       <div>
                         <strong className="block text-red-800 dark:text-red-300">التعلم الميكانيكي (Rote Learning)</strong>
                         <span className="text-sm text-red-700/80 dark:text-red-400">حفظ المعلومات حرفياً دون ربطها بالبنية المعرفية (تُنسى بسرعة).</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Proposition Formula */}
              <div className="md:col-span-5 bg-slate-900 text-slate-200 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 blur-[80px] opacity-20"></div>
                 <h4 className="font-bold text-white mb-6 text-center">وحدة بناء الخريطة: "القضية"</h4>
                 <div className="flex flex-col items-center gap-2">
                    <div className="w-full bg-white/10 p-3 rounded-lg text-center font-bold">مفهوم 1 (الكل)</div>
                    <ArrowIcon className="rotate-90 text-purple-400" />
                    <div className="px-4 py-1 bg-purple-600 text-white rounded-full text-xs font-bold shadow-lg shadow-purple-900/50">كلمة ربط (فعل)</div>
                    <ArrowIcon className="rotate-90 text-purple-400" />
                    <div className="w-full bg-white/10 p-3 rounded-lg text-center font-bold">مفهوم 2 (الجزء)</div>
                 </div>
                 <p className="text-center text-xs text-slate-400 mt-4">مثال: النبات (م1) --يستهلك--> الماء (م2)</p>
              </div>
            </div>

            {/* 2. Structural Analysis (Hierarchy vs Cross-links) */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                   <Network className="text-purple-600" />
                   التشريح البنيوي للخريطة
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-4"><GitGraph /></div>
                      <h4 className="font-bold text-lg mb-2">1. التفاضل التدريجي (Hierarchical)</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                         تنظيم المعرفة عمودياً من المفاهيم الأكثر شمولية (في الأعلى) إلى المفاهيم الأكثر تحديداً (في الأسفل). هذا يعكس كيفية تخزين الدماغ للمعلومات.
                      </p>
                      <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded overflow-hidden">
                         <div className="h-full w-2/3 bg-blue-500"></div>
                      </div>
                   </div>

                   <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-4"><Split /></div>
                      <h4 className="font-bold text-lg mb-2">2. التوفيق التكاملي (Cross-links)</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                         الروابط العرضية (الأفقية) بين فرعين مختلفين من الخريطة. هي <strong>أهم مؤشر</strong> على الفهم العميق والإبداع، لأنها تظهر قدرة المتعلم على دمج مجالات معرفية مختلفة.
                      </p>
                      <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded overflow-hidden">
                         <div className="h-full w-1/3 bg-purple-500"></div>
                      </div>
                   </div>
                </div>
            </div>

            {/* 3. Comparison Table */}
            <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <table className="w-full text-sm text-right bg-white dark:bg-slate-900">
                 <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                    <tr>
                       <th className="p-4">وجه المقارنة</th>
                       <th className="p-4 text-purple-700 dark:text-purple-400">الخريطة المفهومية (Concept Map)</th>
                       <th className="p-4 text-red-600 dark:text-red-400">الخريطة الذهنية (Mind Map)</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr>
                       <td className="p-4 font-bold">البنية</td>
                       <td className="p-4">هرمية / شجرية (Hierarchical)</td>
                       <td className="p-4">إشعاعية / شمسية (Radial)</td>
                    </tr>
                    <tr>
                       <td className="p-4 font-bold">التركيز</td>
                       <td className="p-4">العلاقات المنطقية والقضايا العلمية.</td>
                       <td className="p-4">التداعي الحر للأفكار والصور والألوان.</td>
                    </tr>
                    <tr>
                       <td className="p-4 font-bold">الاستعمال</td>
                       <td className="p-4">بناء المعرفة، التقويم، التشخيص.</td>
                       <td className="p-4">العصف الذهني، تدوين الملاحظات السريع.</td>
                    </tr>
                 </tbody>
              </table>
            </div>

            {/* 4. Plant Example (Visual) */}
            <div className="space-y-8 mt-6">
               <div className="text-center space-y-3">
                 <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">
                   نموذج تطبيقي: التفاضل والترابط
                 </h3>
                 <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    لاحظ كيف تتفرع المفاهيم (عمودياً) وكيف يمكن أن تترابط (أفقياً).
                 </p>
               </div>
               
               <SimpleConceptMap />
            </div>

            {/* 5. Construction Steps & Assessment */}
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">منهجية الصياغة (البناء)</h3>
                  <div className="space-y-4">
                     <ConstructionStep num="01" title="قائمة الجرد (Listing)" desc="استخراج جميع المفاهيم المرتبطة بالموضوع دون ترتيب." />
                     <ConstructionStep num="02" title="الترتيب (Ordering)" desc="ترتيب المفاهيم من الأكثر شمولية إلى الأكثر تحديداً." />
                     <ConstructionStep num="03" title="الربط (Linking)" desc="رسم خطوط وكتابة 'أفعال' لتوضيح العلاقة." highlight />
                  </div>
               </div>

               <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                     <Target className="text-purple-500"/> معايير التقويم
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">كيف يصحح الأستاذ خريطة المتعلم؟</p>
                  <ul className="space-y-3">
                     <li className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                        <span className="text-sm font-medium">صحة القضايا (Propositions)</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">1 نقطة لكل علاقة</span>
                     </li>
                     <li className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                        <span className="text-sm font-medium">التسلسل الهرمي (Hierarchy)</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">5 نقاط لكل مستوى</span>
                     </li>
                     <li className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-purple-200 dark:border-purple-900">
                        <span className="text-sm font-medium">الروابط العرضية (Cross-links)</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded font-bold">10 نقاط (إبداع)</span>
                     </li>
                  </ul>
               </div>
            </div>
          </section>
        )}

        {/* ================= SECTION 3: DIDACTIC MEANS (DEEP DIVE) ================= */}
        {activeSection === 'didacticMeans' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
            
            {/* 1. Header */}
            <SectionHeader 
              title="الوسائل الديدكتيكية (Les moyens didactiques)" 
              subtitle="هندسة الأدوات: من الدعامات المادية إلى الوساطة الرقمية"
              icon={<Box className="text-teal-600" size={32} />}
              colorClass="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
            />

            {/* 2. The Concept (Bridge Metaphor) */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
               <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border-r-4 border-teal-500">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">المفهوم الجوهري</h3>
                  <p className="text-gray-600 dark:text-slate-300 leading-8 text-justify">
                    الوسيلة الديدكتيكية ليست مجرد "أداة إيضاح"، بل هي <strong>وسيط بيداغوجي</strong> (Médiateur) وظيفته تقليص المسافة بين <span className="text-teal-600 dark:text-teal-400 font-bold">المتعلم</span> (بتمثلاته وقدراته) وبين <span className="text-teal-600 dark:text-teal-400 font-bold">المعرفة</span> (بتجريدها وتعقيدها). 
                    وهي تشمل كل ما يوظفه المدرس لهندسة مواقف التعلم، سواء كان مادياً (مجهر) أو رقمياً (برمجية) أو رمزياً (مبيان).
                  </p>
               </div>
               
               {/* Bridge Visual */}
               <div className="relative h-64 bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden flex items-center justify-center p-6 border border-slate-200 dark:border-slate-700">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <div className="flex items-center gap-4 relative z-10 w-full justify-between max-w-md">
                     <div className="text-center">
                        <div className="bg-slate-200 dark:bg-slate-700 p-4 rounded-full mb-2"><Brain size={32} className="text-slate-600 dark:text-slate-300"/></div>
                        <span className="font-bold text-sm">المتعلم</span>
                     </div>
                     <div className="flex-1 flex flex-col items-center">
                        <div className="h-1 w-full bg-gradient-to-r from-slate-300 via-teal-500 to-slate-300 rounded-full relative">
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                             <Box size={12} /> الوسيلة
                           </div>
                        </div>
                        <span className="text-xs text-teal-600 dark:text-teal-400 mt-2 font-medium">جسر النقل الديدكتيكي</span>
                     </div>
                     <div className="text-center">
                        <div className="bg-slate-200 dark:bg-slate-700 p-4 rounded-full mb-2"><BookOpen size={32} className="text-slate-600 dark:text-slate-300"/></div>
                        <span className="font-bold text-sm">المعرفة</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* 3. Classification (Types of Means) */}
            <div className="space-y-6">
               <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                 <Layers className="text-teal-600" />
                 أنواع الوسائل (تدرج من المحسوس إلى المجرد)
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <TypeCard 
                    title="الوسائل الواقعية" 
                    sub="(Objets Réels)"
                    desc="الأشياء الحقيقية في طبيعتها دون تعديل."
                    examples={['عينات صخور', 'نباتات حية', 'أدوات مخبرية']}
                    icon={<FlaskConical size={24} />}
                    color="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700"
                  />
                  <TypeCard 
                    title="الوسائل البديلة/النماذج" 
                    sub="(Modèles & Maquettes)"
                    desc="مجسمات تحاكي الواقع (عندما يصعب إحضار الأصل)."
                    examples={['مجسم الكرة الأرضية', 'هيكل عظمي', 'نموذج الذرة']}
                    icon={<Globe size={24} />}
                    color="bg-teal-100 dark:bg-teal-900/30 text-teal-700"
                  />
                  <TypeCard 
                    title="الوسائل التكنولوجية" 
                    sub="(TICE)"
                    desc="أدوات المحاكاة والعرض الرقمي التفاعلي."
                    examples={['المحاكاة (Phet)', 'الواقع المعزز', 'الفيديوهات']}
                    icon={<MonitorPlay size={24} />}
                    color="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700"
                  />
               </div>
            </div>

            {/* 4. Criteria of Selection */}
            <div className="bg-slate-900 text-slate-200 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 blur-[100px] opacity-20"></div>
                <div className="relative z-10">
                   <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                     <Target className="text-teal-400" />
                     شبكة معايير اختيار الوسيلة
                   </h3>
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <CriteriaMetric title="الملاءمة (Pertinence)" desc="هل تخدم الهدف التعلمي مباشرة أم أنها مشتتة للانتباه؟" icon={<CheckCircle />} />
                      <CriteriaMetric title="الأمان (Sécurité)" desc="خلوها من المخاطر (مواد كيميائية، كهرباء) وتناسبها مع سن المتعلم." icon={<ShieldCheck />} />
                      <CriteriaMetric title="الاقتصاد (Coût)" desc="ألا تتطلب وقتاً طويلاً للإعداد على حساب زمن التعلم." icon={<Scale />} />
                      <CriteriaMetric title="القابلية (Validité)" desc="أن تكون المعلومة التي تقدمها صحيحة علمياً ومحينة." icon={<Brain />} />
                   </div>
                </div>
            </div>

            {/* 5. PRACTICAL EXAMPLES (Interactive Scenarios) */}
            <div className="space-y-8">
               <div className="text-center mb-8">
                 <h3 className="text-3xl font-bold text-gray-800 dark:text-white">أمثلة تطبيقية: القيمة المضافة</h3>
                 <p className="text-gray-500 dark:text-gray-400">كيف تغير الوسيلة الديدكتيكية مسار بناء الدرس؟</p>
               </div>
               
               <DidacticScenarios />
            </div>

          </section>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 mt-24 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-slate-300 font-medium">تم إعداد المحتوى بدقة علمية استناداً إلى المرجعيات الرسمية لمراكز مهن التربية والتكوين</p>
          <p className="text-sm opacity-60">© {new Date().getFullYear()} بوابة الديدكتيك الرقمية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}

// =================== COMPONENT: SIMPLE CONCEPT MAP (TREE) ===================

function SimpleConceptMap() {
  const [highlight, setHighlight] = useState<string | null>(null);

  return (
    <div className="relative w-full min-h-[500px] bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col items-center justify-center p-8 select-none">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>

      {/* LEVEL 1: ROOT CONCEPT */}
      <div className="relative z-10 mb-12">
        <div className="w-40 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-600/30 text-xl font-bold border-2 border-green-400">
          النبات الأخضر
        </div>
      </div>

      {/* CONNECTIONS & LINKING WORDS LEVEL */}
      <div className="relative z-0 w-full max-w-2xl h-20 mb-4 flex justify-between px-16">
        {/* Left Connection Line */}
        <div className={`absolute top-0 right-1/2 w-[40%] h-full border-t-2 border-r-2 rounded-tr-3xl -translate-y-4 translate-x-1 ${highlight === 'parts' ? 'border-green-500' : 'border-slate-300 dark:border-slate-700'}`}></div>
        {/* Right Connection Line */}
        <div className={`absolute top-0 left-1/2 w-[40%] h-full border-t-2 border-l-2 rounded-tl-3xl -translate-y-4 -translate-x-1 ${highlight === 'needs' ? 'border-blue-500' : 'border-slate-300 dark:border-slate-700'}`}></div>

        {/* Linking Word Left */}
        <div className="absolute top-4 right-[25%] -translate-y-1/2 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-500 border border-slate-200 dark:border-slate-700 shadow-sm z-10">
          يتكون من
        </div>
        {/* Linking Word Right */}
        <div className="absolute top-4 left-[25%] -translate-y-1/2 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-500 border border-slate-200 dark:border-slate-700 shadow-sm z-10">
          يحتاج إلى
        </div>
      </div>

      {/* LEVEL 2: SUB CONCEPTS */}
      <div className="relative z-10 w-full max-w-3xl flex justify-between items-start gap-8">
        
        {/* BRANCH 1: PARTS */}
        <div className="flex flex-col items-center gap-4 w-1/2 p-4 rounded-3xl transition-colors hover:bg-green-50 dark:hover:bg-green-900/10 cursor-pointer group"
             onMouseEnter={() => setHighlight('parts')}
             onMouseLeave={() => setHighlight(null)}>
          <div className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 p-4 rounded-2xl border-2 border-green-200 dark:border-green-800 mb-2">
            <Sprout size={32} />
          </div>
          <h4 className="font-bold text-lg text-slate-700 dark:text-slate-200 mb-2">أعضاء رئيسية</h4>
          
          {/* Sub-sub concepts */}
          <div className="flex gap-2">
             <div className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-sm border border-slate-200 dark:border-slate-700">جذور</div>
             <div className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-sm border border-slate-200 dark:border-slate-700">ساق</div>
             <div className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-sm border border-slate-200 dark:border-slate-700">أوراق</div>
          </div>
          <p className="text-xs text-center text-slate-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">قضية: النبات يتكون من جذور وساق وأوراق</p>
        </div>

        {/* BRANCH 2: NEEDS */}
        <div className="flex flex-col items-center gap-4 w-1/2 p-4 rounded-3xl transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/10 cursor-pointer group"
             onMouseEnter={() => setHighlight('needs')}
             onMouseLeave={() => setHighlight(null)}>
          <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 p-4 rounded-2xl border-2 border-blue-200 dark:border-blue-800 mb-2">
            <Sun size={32} />
          </div>
          <h4 className="font-bold text-lg text-slate-700 dark:text-slate-200 mb-2">حاجيات اقتياتية</h4>
          
          {/* Sub-sub concepts */}
          <div className="flex gap-2">
             <div className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-sm border border-slate-200 dark:border-slate-700 flex items-center gap-1"><Droplets size={12} className="text-blue-400"/> ماء</div>
             <div className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-sm border border-slate-200 dark:border-slate-700 flex items-center gap-1"><Sun size={12} className="text-orange-400"/> ضوء</div>
             <div className="px-3 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-sm border border-slate-200 dark:border-slate-700">أملاح</div>
          </div>
          <p className="text-xs text-center text-slate-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">قضية: النبات يحتاج إلى الماء والضوء للنمو</p>
        </div>

      </div>

    </div>
  );
}

// =================== COMPONENT: DIDACTIC SCENARIOS ===================

function DidacticScenarios() {
  const [activeScenario, setActiveScenario] = useState('electricity');

  const scenarios = {
    electricity: {
      title: "الفيزياء: التيار الكهربائي",
      problem: "الكهرباء مفهوم مجرد (حركة الإلكترونات لا تُرى بالعين المجردة)، مما يصعب على المتعلم فهم قوانين الدارة.",
      solution: "استخدام برمجية محاكاة (مثل PhET) أو تمثيل مبياني.",
      value: "نمذجة",
      details: "تحويل المجرد إلى محسوس: تسمح المحاكاة برؤية الشحنات وهي تتحرك، مما يسهل بناء النموذج الذهني للتيار."
    },
    geo: {
      title: "الجغرافيا: التضاريس",
      problem: "صعوبة تخيل الأبعاد الثلاثة (الارتفاع والانحدار) من خلال خريطة مسطحة (2D).",
      solution: "استخدام الرمل الرطب (مجسم) أو برنامج Google Earth (3D).",
      value: "تمثيل",
      details: "الانتقال من التسطيح إلى التجسيم: يساعد المتعلم على إدراك مفهوم 'الارتفاع' و'خطوط التسوية' بشكل ملموس."
    },
    bio: {
      title: "البيولوجيا: الخلية",
      problem: "الخلية بنية مجهرية دقيقة جداً لا يمكن ملاحظة مكوناتها بالعين.",
      solution: "المجهر الضوئي (Microscope) + تحضير عينات طرية.",
      value: "ملاحظة",
      details: "تنمية المهارة الحس-حركية (Manipuler): تعلم ضبط العدسات ورؤية العالم الخفي، مما يرسخ حقيقة أن الكائن الحي يتكون من خلايا."
    }
  };

  const current = scenarios[activeScenario as keyof typeof scenarios];

  return (
    <div className="bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900/30 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row min-h-[400px]">
      
      {/* Sidebar / Menu */}
      <div className="md:w-1/3 bg-slate-50 dark:bg-slate-950 p-6 flex flex-col gap-4 border-l dark:border-slate-800">
        <h4 className="font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase text-xs tracking-wider">اختر المادة الدراسية</h4>
        
        <button onClick={() => setActiveScenario('electricity')} className={`flex items-center gap-3 p-4 rounded-xl transition-all ${activeScenario === 'electricity' ? 'bg-white dark:bg-slate-800 shadow-md border-r-4 border-yellow-400' : 'hover:bg-slate-200 dark:hover:bg-slate-800/50'}`}>
          <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 rounded-lg"><Zap size={20} /></div>
          <div className="text-right">
            <span className="block font-bold text-gray-800 dark:text-gray-200">الفيزياء</span>
            <span className="text-xs text-gray-500">التيار الكهربائي</span>
          </div>
        </button>

        <button onClick={() => setActiveScenario('geo')} className={`flex items-center gap-3 p-4 rounded-xl transition-all ${activeScenario === 'geo' ? 'bg-white dark:bg-slate-800 shadow-md border-r-4 border-green-500' : 'hover:bg-slate-200 dark:hover:bg-slate-800/50'}`}>
          <div className="p-2 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-lg"><Globe size={20} /></div>
          <div className="text-right">
            <span className="block font-bold text-gray-800 dark:text-gray-200">الجغرافيا</span>
            <span className="text-xs text-gray-500">تمثيل التضاريس</span>
          </div>
        </button>

        <button onClick={() => setActiveScenario('bio')} className={`flex items-center gap-3 p-4 rounded-xl transition-all ${activeScenario === 'bio' ? 'bg-white dark:bg-slate-800 shadow-md border-r-4 border-red-500' : 'hover:bg-slate-200 dark:hover:bg-slate-800/50'}`}>
          <div className="p-2 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-lg"><Microscope size={20} /></div>
          <div className="text-right">
            <span className="block font-bold text-gray-800 dark:text-gray-200">علوم الحياة</span>
            <span className="text-xs text-gray-500">ملاحظة الخلية</span>
          </div>
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 md:p-10 flex flex-col justify-center animate-in fade-in duration-300">
        <div className="flex items-center gap-3 mb-6">
           <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-bold rounded-full border border-teal-200 dark:border-teal-800">دراسة حالة</span>
           <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{current.title}</h3>
        </div>

        <div className="space-y-6">
           {/* Problem */}
           <div className="flex gap-4">
             <div className="mt-1 min-w-[24px]"><AlertTriangle className="text-orange-500" size={24} /></div>
             <div>
               <h5 className="font-bold text-gray-700 dark:text-gray-300">العائق الديدكتيكي (المشكلة):</h5>
               <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{current.problem}</p>
             </div>
           </div>

           {/* Solution */}
           <div className="flex gap-4">
             <div className="mt-1 min-w-[24px]"><Box className="text-teal-500" size={24} /></div>
             <div>
               <h5 className="font-bold text-gray-700 dark:text-gray-300">الوسيلة المقترحة:</h5>
               <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{current.solution}</p>
             </div>
           </div>

           {/* Value Added */}
           <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-2xl border border-teal-100 dark:border-teal-900 mt-4">
              <div className="flex items-center gap-2 mb-2 text-teal-700 dark:text-teal-300 font-bold">
                 <MousePointerClick size={18} /> 
                 <span>الوظيفة البيداغوجية: {current.value}</span>
              </div>
              <p className="text-gray-700 dark:text-slate-300 text-sm">{current.details}</p>
           </div>
        </div>
      </div>

    </div>
  );
}

// =================== HELPER COMPONENTS ===================

function NavButton({ label, icon, isActive, onClick, activeColor }: any) {
  return (
    <button onClick={onClick} className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-bold tracking-wide ${isActive ? `${activeColor} text-white shadow-lg transform scale-105 ring-2 ring-offset-2 ring-offset-indigo-900` : 'bg-white/5 text-indigo-100 hover:bg-white/10 backdrop-blur-sm border border-white/10'}`}>
      {icon} <span>{label}</span>
    </button>
  );
}
function SectionHeader({ title, subtitle, icon, colorClass }: any) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-5 border-b pb-8 border-gray-200 dark:border-gray-800">
      <div className={`p-5 rounded-2xl shadow-inner ${colorClass}`}>{icon}</div>
      <div><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">{title}</h2>{subtitle && <p className="text-gray-500 dark:text-gray-400 mt-2 text-xl font-light">{subtitle}</p>}</div>
    </div>
  );
}
function TranspositionStep({ title, sub, desc, icon, step, color }: any) {
  return (
    <div className="flex flex-col items-center text-center group relative z-10 flex-1 min-w-[200px]">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4 transition-transform group-hover:scale-110 ${color}`}>{icon}</div>
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-gray-700 flex items-center justify-center font-bold text-xs text-gray-400 shadow-sm">{step}</div>
      <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{title}</h4>
      <span className="text-xs font-mono text-blue-600 dark:text-blue-400 block mb-3 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded inline-block">{sub}</span>
      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-2">{desc}</p>
    </div>
  );
}
function ArrowIcon({ className }: { className?: string }) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`rotate-180 transform ${className}`}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>; }
function MechanismCard({ title, desc }: any) { return <div className="flex gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow hover:border-blue-200 dark:hover:border-blue-800"><div className="mt-1 text-blue-500 shrink-0"><CheckCircle size={20} /></div><div><h4 className="font-bold text-gray-800 dark:text-white mb-2 text-lg">{title}</h4><p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p></div></div>; }
function ComparisonPoint({ text, icon, highlight }: any) { return <li className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${highlight ? 'bg-purple-50 dark:bg-purple-900/10' : ''}`}><div className="mt-1 shrink-0">{icon}</div><span className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">{text}</span></li>; }
function ConstructionStep({ num, title, desc, highlight }: any) { return <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${highlight ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800' : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}><div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${highlight ? 'bg-purple-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>{num}</div><div><h5 className="font-bold text-gray-800 dark:text-white mb-1">{title}</h5><p className="text-sm text-gray-600 dark:text-slate-400">{desc}</p></div></div>; }
function FunctionCard({ icon, title, desc }: any) { return <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-teal-50 dark:border-teal-900 shadow-sm hover:border-teal-300 hover:shadow-md transition-all"><div className="text-teal-600 bg-teal-50 dark:bg-teal-900/30 p-3 rounded-xl">{icon}</div><div><strong className="block text-gray-800 dark:text-white text-base mb-1">{title}</strong><span className="text-xs text-gray-500 dark:text-gray-400 leading-tight block">{desc}</span></div></div>; }
function CriteriaItem({ title, question }: any) { return <div className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 backdrop-blur-sm"><div className="mt-1 text-teal-400"><CheckCircle size={20} /></div><div><h4 className="font-bold text-white mb-1 text-base">{title}</h4><p className="text-slate-300 text-sm leading-relaxed font-light">{question}</p></div></div>; }
function TypeCard({ title, sub, desc, examples, icon, color }: any) { return <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group"><div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform`}>{icon}</div><h4 className="font-bold text-gray-800 dark:text-white text-lg">{title}</h4><span className="text-xs text-gray-400 mb-3 block">{sub}</span><p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-12">{desc}</p><div className="space-y-2">{examples.map((ex: string, i: number) => (<div key={i} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-2 rounded-lg"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>{ex}</div>))}</div></div>; }
function CriteriaMetric({ title, desc, icon }: any) { return <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"><div className="text-teal-400 mb-3">{icon}</div><h4 className="font-bold text-white mb-2">{title}</h4><p className="text-xs text-slate-300 leading-relaxed opacity-80">{desc}</p></div>; }