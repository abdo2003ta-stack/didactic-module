"use client";

import React, { useState } from 'react';
import ThemeToggle from "@/components/ThemeToggle"; // تأكد من وجود هذا المكون أو احذفه إذا لم يكن لديك
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
  Sun,
  Cloud,
  CloudRain,
  Wind,
  Waves
} from 'lucide-react';

// ------------------- TYPES -------------------
type Section = 'formulation' | 'conceptMap' | 'didacticMeans';

// ------------------- MAIN COMPONENT -------------------
export default function DidacticModulePage() {
  const [activeSection, setActiveSection] = useState<Section>('formulation');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300" dir="rtl">
      
      {/* زر الوضع الليلي */}
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

            {/* Didactic Transposition Chain */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 dark:border-slate-800">
              <div className="bg-slate-900 dark:bg-black p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-black opacity-40"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">سلسلة النقل الديدكتيكي</h3>
                <p className="text-blue-200 relative z-10 text-sm font-mono tracking-widest uppercase">Yves Chevallard</p>
              </div>
              
              <div className="p-8 md:p-12 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-slate-800 -z-0 rounded-full"></div>
                  <TranspositionStep 
                    title="المعرفة العالمة" 
                    sub="(Savoir Savant)"
                    desc="المعرفة في مهدها (الجامعات، المختبرات)."
                    icon={<Brain size={24} />}
                    step="1"
                    color="bg-slate-800 text-white"
                  />
                  <ArrowIcon className="hidden md:block text-gray-300 dark:text-slate-600 relative z-10 bg-slate-50 dark:bg-slate-900 p-1 rounded-full" />
                  <TranspositionStep 
                    title="المعرفة الواجب تدريسها" 
                    sub="(Savoir à Enseigner)"
                    desc="المعرفة المقررة في المنهاج (النوسفير)."
                    icon={<BookOpen size={24} />}
                    step="2"
                    color="bg-blue-600 text-white"
                  />
                  <ArrowIcon className="hidden md:block text-gray-300 dark:text-slate-600 relative z-10 bg-slate-50 dark:bg-slate-900 p-1 rounded-full" />
                  <TranspositionStep 
                    title="المعرفة المُدَرَّسة" 
                    sub="(Savoir Enseigné)"
                    desc="المعرفة الفعلية التي يقدمها المدرس داخل القسم."
                    icon={<Activity size={24} />}
                    step="3"
                    color="bg-indigo-600 text-white"
                  />
                  <ArrowIcon className="hidden md:block text-gray-300 dark:text-slate-600 relative z-10 bg-slate-50 dark:bg-slate-900 p-1 rounded-full" />
                  <TranspositionStep 
                    title="المعرفة المُكتسبة" 
                    sub="(Savoir Appris)"
                    desc="ما تبقى في ذهن المتعلم (التمثلات الجديدة)."
                    icon={<CheckCircle size={24} />}
                    step="4"
                    color="bg-green-600 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Mechanisms & Vigilance */}
            <div className="grid md:grid-cols-12 gap-8">
               <div className="md:col-span-4 bg-blue-50 dark:bg-blue-950/40 p-8 rounded-3xl h-full border border-blue-100 dark:border-blue-900 relative overflow-hidden">
                 <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 blur-2xl"></div>
                 <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6 relative z-10">مفهوم النوسفير</h3>
                 <p className="text-blue-800 dark:text-blue-200 leading-relaxed mb-4 relative z-10">
                   "Noosphère" هي طبقة التفكير أو الهيئة (مفتشون، خبراء) التي تختار ما يجب تدريسه وتقوم بالخطوة الأولى من النقل.
                 </p>
               </div>
               <div className="md:col-span-8 grid gap-4">
                  <MechanismCard title="1. نزع الطابع الشخصي" desc="فصل المعرفة عن الباحث وظروف الاكتشاف." />
                  <MechanismCard title="2. نزع الطابع السياقي" desc="إخراج المعلومة من سياقها الأصلي لتصبح عامة." />
                  <MechanismCard title="3. القابلية للبرمجة" desc="تقطيع المعرفة لتتناسب مع الزمن المدرسي." />
                  <MechanismCard title="4. الإشهار أو العلنية" desc="تحديد واضح لما هو مطلوب (العقد الديدكتيكي)." />
               </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-r-4 border-amber-500 p-8 rounded-2xl shadow-sm flex items-center gap-6">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-md text-amber-500 shrink-0"><Eye size={32} /></div>
              <div>
                 <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">اليقظة الديدكتيكية</h3>
                 <p className="text-gray-700 dark:text-gray-300">الانتباه المستمر للمسافة بين المعرفة العالمة والمعرفة المدرسة لتجنب "الخيانة العلمية".</p>
              </div>
            </div>
          </section>
        )}

        {/* ================= SECTION 2: CONCEPT MAP ================= */}
        {activeSection === 'conceptMap' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
            
            <SectionHeader 
              title="الخريطة المفهومية (La carte conceptuelle)" 
              subtitle="من التمثيل البصري إلى البناء المنطقي للمعرفة"
              icon={<Share2 className="text-purple-600" size={32} />}
              colorClass="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
            />

            {/* 1. Definition */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-10 shadow-lg border-r-8 border-purple-500 relative overflow-hidden group hover:shadow-xl transition-shadow">
               <div className="absolute top-0 left-0 w-full h-full bg-purple-50 dark:bg-purple-900/5 -z-10 group-hover:bg-purple-100/50 dark:group-hover:bg-purple-900/10 transition-colors"></div>
               <div className="absolute -right-6 -top-6 text-purple-200 dark:text-purple-900/20 opacity-50 transform rotate-12">
                 <Quote size={120} />
               </div>
               
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                   <Lightbulb className="text-purple-600" fill="currentColor" fillOpacity={0.2} />
                   التعريف الاصطلاحي
                 </h3>
                 <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-loose text-justify font-light">
                   الخريطة المفهومية هي <span className="font-bold text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/50 px-2 py-0.5 rounded">تمثيل تخطيطي</span> لمجموعة من المفاهيم المترابطة ضمن <span className="font-bold text-purple-700 dark:text-purple-400">بنية قضايا</span> (Structure propositionnelle). 
                   وهي أداة بيداغوجية تهدف إلى تنظيم المعرفة بشكل هرمي (من العام إلى الخاص) لإبراز العلاقات المنطقية بين المفاهيم، مما يسهل حدوث <span className="underline decoration-purple-400 decoration-2 underline-offset-4 font-medium">التعلم ذي المعنى</span> بدلاً من التعلم الآلي الصم.
                 </p>
               </div>
            </div>

            {/* 2. Deep Comparison */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                 <GitCommit className="text-purple-600" />
                 التفكيك المفاهيمي: الفرق الجوهري
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Mind Map */}
                <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-red-100 dark:border-red-900/30 rounded-3xl p-8 shadow-sm group hover:shadow-md transition-all">
                   <div className="absolute top-0 right-0 w-2 h-full bg-red-400"></div>
                   <div className="flex justify-between items-start mb-6">
                      <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-2xl text-red-500"><Brain size={32} /></div>
                      <span className="text-xs font-bold bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 px-3 py-1 rounded-full">توني بوزان</span>
                   </div>
                   <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">الخريطة الذهنية (Mind Map)</h4>
                   <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                      <ComparisonPoint text="بنية إشعاعية (Radial): تنطلق من مركز وتتفرع." icon={<ArrowLeft size={16} className="text-red-400" />} />
                      <ComparisonPoint text="تعتمد التداعي الحر، الصور، والألوان للإبداع." icon={<ArrowLeft size={16} className="text-red-400" />} />
                      <ComparisonPoint text="تخاطب النصف الأيمن للدماغ (الخيال والعاطفة)." icon={<ArrowLeft size={16} className="text-red-400" />} />
                   </ul>
                </div>

                {/* Concept Map */}
                <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900/30 rounded-3xl p-8 shadow-lg ring-1 ring-purple-100 dark:ring-purple-900 transform md:-translate-y-2">
                   <div className="absolute top-0 right-0 w-2 h-full bg-purple-600"></div>
                   <div className="flex justify-between items-start mb-6">
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-2xl text-purple-600"><Share2 size={32} /></div>
                      <span className="text-xs font-bold bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full">جوزيف نوفاك</span>
                   </div>
                   <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">الخريطة المفهومية (Concept Map)</h4>
                   <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                      <ComparisonPoint text="بنية هرمية: من المفاهيم الشاملة إلى الدقيقة." icon={<CheckCircle size={16} className="text-purple-600" />} highlight />
                      <ComparisonPoint text="تعتمد الروابط المنطقية وكلمات الربط لبناء قضايا." icon={<CheckCircle size={16} className="text-purple-600" />} highlight />
                      <ComparisonPoint text="تخاطب النصف الأيسر للدماغ (التحليل والمنطق)." icon={<CheckCircle size={16} className="text-purple-600" />} highlight />
                   </ul>
                </div>
              </div>
            </div>

            {/* 3. The "Proposition" Formula */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
               <h3 className="relative z-10 text-center text-xl font-bold mb-8 text-indigo-200">الجوهر الديدكتيكي: معادلة بناء "القضية"</h3>
               <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
                  <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 text-center">
                    <span className="block text-xs text-indigo-300 mb-1">المفهوم 1</span>
                    <strong className="text-lg">النبات</strong>
                  </div>
                  <ArrowRight className="text-indigo-400 rotate-90 md:rotate-180" />
                  <div className="bg-indigo-500 px-4 py-2 rounded-full shadow-lg text-sm font-bold">يحتاج إلى (رابط)</div>
                  <ArrowRight className="text-indigo-400 rotate-90 md:rotate-180" />
                  <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 text-center">
                    <span className="block text-xs text-indigo-300 mb-1">المفهوم 2</span>
                    <strong className="text-lg">الضوء</strong>
                  </div>
                  <div className="hidden md:block text-2xl font-bold text-indigo-300 mx-4">=</div>
                  <div className="border-2 border-dashed border-indigo-400/50 px-6 py-4 rounded-xl text-center">
                     <span className="block text-xs text-indigo-300 mb-1">النتيجة</span>
                     <strong className="text-indigo-100">معنى علمي (قضية)</strong>
                  </div>
               </div>
            </div>

            {/* 4. Vivid Interactive Example: The Water Cycle (NEW!) */}
            <div className="space-y-8 mt-12">
               <div className="text-center space-y-3">
                 <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                   مثال حيوي: دورة الماء (نظام مفاهيمي مغلق)
                 </h3>
                 <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                   هنا ننتقل من الترتيب الهرمي إلى <span className="text-blue-600 dark:text-blue-400 font-bold">التفكير النسقي</span>. 
                   حرك الفأرة فوق المراحل لترى كيف تتحول المفاهيم الجامدة إلى عملية حية.
                 </p>
               </div>
               
               {/* Water Cycle Component */}
               <InteractiveWaterCycle />
            </div>

            {/* 5. Construction Steps */}
            <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-8">
               <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">منهجية الصياغة (كيف تبنيها في الفصل؟)</h3>
               <div className="space-y-4">
                  <ConstructionStep num="01" title="قائمة الجرد (Listing)" desc="استخراج جميع المفاهيم المرتبطة بالموضوع دون ترتيب." />
                  <ConstructionStep num="02" title="الترتيب والتصنيف (Ordering)" desc="ترتيب المفاهيم من الأكثر شمولية إلى الأكثر تحديداً." />
                  <ConstructionStep num="03" title="بناء الروابط (Linking)" desc="رسم خطوط بين المفاهيم المترابطة لتحويل القائمة إلى شبكة." />
                  <ConstructionStep num="04" title="صياغة القضايا (Propositions)" desc="أهم خطوة: كتابة 'فعل' أو 'كلمة ربط' على كل خط لتوضيح طبيعة العلاقة." highlight />
               </div>
            </div>

          </section>
        )}

        {/* ================= SECTION 3: DIDACTIC MEANS ================= */}
        {activeSection === 'didacticMeans' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
            <SectionHeader 
              title="الوسائل الديدكتيكية (Les moyens didactiques)" 
              subtitle="الدعامات والأدوات الميسرة للتعليم والتعلم"
              icon={<Box className="text-teal-600" size={32} />}
              colorClass="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
            />
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border-l-8 border-teal-500">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">المفهوم الشامل</h3>
                  <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-lg text-justify">
                    هي جميع الحوامل (Supports) المادية أو الرقمية، والأدوات المخبرية التي يوظفها المدرس. ليست "كماليات"، بل هي <strong>جزء عضوي</strong> من استراتيجية التدريس.
                  </p>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-3xl p-8 border border-teal-100 dark:border-teal-900">
                   <h3 className="text-lg font-bold text-teal-900 dark:text-teal-300 mb-6 flex items-center gap-2"><Layers size={20} /> الوظائف البيداغوجية</h3>
                   <div className="grid grid-cols-1 gap-4">
                      <FunctionCard icon={<Activity />} title="وظيفة التحفيز" desc="إثارة فضول المتعلم وخلق الدافعية." />
                      <FunctionCard icon={<Eye />} title="وظيفة النمذجة" desc="تقريب الظواهر المعقدة والمجردة." />
                      <FunctionCard icon={<MousePointer2 />} title="وظيفة أداتية" desc="تدريب المتعلم على المهارات الحس-حركية." />
                      <FunctionCard icon={<ListChecks />} title="وظيفة التقويم" desc="الكشف عن تعثرات وتمثلات المتعلمين." />
                   </div>
                </div>
              </div>
              <div className="h-full">
                <div className="bg-slate-800 text-white rounded-3xl p-8 h-full flex flex-col relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 blur-[80px] opacity-20"></div>
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10"><ShieldCheck className="text-teal-400" size={28} /> شبكة معايير الاختيار</h3>
                  <div className="space-y-5 relative z-10 flex-grow">
                    <CriteriaItem title="الملاءمة" question="هل تخدم الهدف التعلمي مباشرة؟" />
                    <CriteriaItem title="المستوى" question="هل تناسب القدرات الإدراكية للمتعلمين؟" />
                    <CriteriaItem title="الأمان" question="هل تخلو الوسيلة من أي خطر؟" />
                    <CriteriaItem title="المقروئية" question="هل الوسيلة واضحة للجميع (صوت، صورة)؟" />
                  </div>
                </div>
              </div>
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

// =================== INTERACTIVE WATER CYCLE COMPONENT ===================

function InteractiveWaterCycle() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  const cycleData = {
    sun: { title: "الشمس", desc: "المحرك الحراري للنظام", color: "from-orange-400 to-red-500", shadow: "shadow-orange-500/50" },
    ocean: { title: "المسطحات المائية", desc: "خزان المياه الرئيسي", color: "from-blue-600 to-indigo-700", shadow: "shadow-blue-600/50" },
    vapor: { title: "بخار الماء", desc: "الحالة الغازية", color: "from-slate-300 to-slate-400", shadow: "shadow-slate-400/50" },
    clouds: { title: "السحب", desc: "تجمع قطيرات الماء", color: "from-indigo-200 to-blue-300", shadow: "shadow-indigo-300/50" },
    rain: { title: "التساقطات", desc: "عودة الماء للأرض", color: "from-cyan-400 to-blue-500", shadow: "shadow-cyan-400/50" },
  };

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-b from-sky-100 to-blue-50 dark:from-slate-900 dark:to-slate-950 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl group select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-600/20 to-transparent blur-xl"></div>

      {/* SVG CONNECTIONS */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" className="fill-slate-400 dark:fill-slate-600" />
          </marker>
        </defs>
        <path d="M 650 100 Q 600 300 500 480" className={`transition-all duration-700 ${activeStage === 'sun' || activeStage === 'ocean' ? 'stroke-orange-400 stroke-[3] opacity-100' : 'stroke-slate-300 dark:stroke-slate-700 stroke-[2] opacity-30'}`} fill="none" markerEnd="url(#arrowhead)" strokeDasharray="10,5" />
        <path d="M 400 480 Q 300 400 250 300" className={`transition-all duration-700 ${activeStage === 'ocean' || activeStage === 'vapor' ? 'stroke-blue-400 stroke-[3] opacity-100' : 'stroke-slate-300 dark:stroke-slate-700 stroke-[2] opacity-30'}`} fill="none" markerEnd="url(#arrowhead)" />
        <path d="M 250 240 L 250 180" className={`transition-all duration-700 ${activeStage === 'vapor' || activeStage === 'clouds' ? 'stroke-gray-400 stroke-[3] opacity-100' : 'stroke-slate-300 dark:stroke-slate-700 stroke-[2] opacity-30'}`} fill="none" markerEnd="url(#arrowhead)" />
        <path d="M 320 150 Q 500 150 550 250" className={`transition-all duration-700 ${activeStage === 'clouds' || activeStage === 'rain' ? 'stroke-indigo-400 stroke-[3] opacity-100' : 'stroke-slate-300 dark:stroke-slate-700 stroke-[2] opacity-30'}`} fill="none" markerEnd="url(#arrowhead)" />
        <path d="M 550 320 Q 550 400 500 480" className={`transition-all duration-700 ${activeStage === 'rain' || activeStage === 'ocean' ? 'stroke-cyan-500 stroke-[3] opacity-100' : 'stroke-slate-300 dark:stroke-slate-700 stroke-[2] opacity-30'}`} fill="none" markerEnd="url(#arrowhead)" />
      </svg>

      {/* LABELS */}
      <div className="absolute inset-0 z-10 pointer-events-none">
         <Label pos="top-[35%] right-[25%]" text="تسخن (طاقة)" active={activeStage === 'sun'} color="bg-orange-100 text-orange-700 border-orange-200" />
         <Label pos="bottom-[35%] left-[25%]" text="تبخر" active={activeStage === 'ocean'} color="bg-blue-100 text-blue-700 border-blue-200" />
         <Label pos="top-[38%] left-[20%]" text="تكاثف" active={activeStage === 'vapor'} color="bg-slate-100 text-slate-700 border-slate-200" />
         <Label pos="top-[25%] right-[40%]" text="تساقط" active={activeStage === 'clouds'} color="bg-indigo-100 text-indigo-700 border-indigo-200" />
         <Label pos="bottom-[25%] right-[30%]" text="جريان" active={activeStage === 'rain'} color="bg-cyan-100 text-cyan-700 border-cyan-200" />
      </div>

      {/* NODES */}
      <div className="relative z-20 w-full h-full">
        {/* SUN */}
        <div className="absolute top-10 right-10 cursor-pointer transition-transform hover:scale-110" onMouseEnter={() => setActiveStage('sun')} onMouseLeave={() => setActiveStage(null)}>
           <CycleNode data={cycleData.sun} icon={<Sun className="animate-spin-slow w-8 h-8 md:w-10 md:h-10" />} isActive={activeStage === 'sun'} />
        </div>
        {/* OCEAN */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer transition-transform hover:scale-105" onMouseEnter={() => setActiveStage('ocean')} onMouseLeave={() => setActiveStage(null)}>
           <div className={`relative overflow-hidden w-64 h-24 rounded-3xl bg-gradient-to-r ${cycleData.ocean.color} flex items-center justify-center text-white font-bold shadow-lg border-4 border-white dark:border-slate-800 transition-all ${activeStage === 'ocean' ? cycleData.ocean.shadow + ' scale-105' : ''}`}>
             <span className="relative z-10 text-xl flex items-center gap-2"><Waves /> {cycleData.ocean.title}</span>
           </div>
        </div>
        {/* VAPOR */}
        <div className="absolute bottom-40 left-20 cursor-pointer transition-transform hover:scale-110" onMouseEnter={() => setActiveStage('vapor')} onMouseLeave={() => setActiveStage(null)}>
           <CycleNode data={cycleData.vapor} icon={<Wind className="w-8 h-8 md:w-10 md:h-10" />} isActive={activeStage === 'vapor'} />
        </div>
        {/* CLOUDS */}
        <div className="absolute top-20 left-32 cursor-pointer transition-transform hover:scale-110" onMouseEnter={() => setActiveStage('clouds')} onMouseLeave={() => setActiveStage(null)}>
           <CycleNode data={cycleData.clouds} icon={<Cloud className="w-8 h-8 md:w-10 md:h-10" />} isActive={activeStage === 'clouds'} />
        </div>
        {/* RAIN */}
        <div className="absolute top-48 right-1/3 cursor-pointer transition-transform hover:scale-110" onMouseEnter={() => setActiveStage('rain')} onMouseLeave={() => setActiveStage(null)}>
           <CycleNode data={cycleData.rain} icon={<CloudRain className="w-8 h-8 md:w-10 md:h-10" />} isActive={activeStage === 'rain'} />
        </div>
      </div>

      {/* INFO PANEL */}
      <div className="absolute bottom-6 right-6 z-30 max-w-xs">
        <div className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-white/20 transition-all duration-300 transform ${activeStage ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
           <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{activeStage ? cycleData[activeStage as keyof typeof cycleData].title : '...'}</h4>
           <p className="text-sm text-slate-600 dark:text-slate-300">{activeStage ? cycleData[activeStage as keyof typeof cycleData].desc : ''}</p>
        </div>
      </div>
    </div>
  );
}

// =================== HELPER COMPONENTS ===================

function CycleNode({ data, icon, isActive }: any) {
  return (
    <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${data.color} flex flex-col items-center justify-center text-white shadow-lg border-4 border-white dark:border-slate-800 transition-all duration-300 ${isActive ? data.shadow + ' scale-110 ring-4 ring-white/30' : 'grayscale-[0.2]'}`}>
      <div className="mb-1">{icon}</div>
      <span className="text-xs md:text-sm font-bold text-center leading-tight px-1">{data.title}</span>
    </div>
  );
}

function Label({ pos, text, active, color }: any) {
  return (
    <div className={`absolute ${pos} px-3 py-1 rounded-full text-xs font-bold shadow-sm border transition-all duration-500 ${active ? `${color} scale-110 opacity-100` : 'bg-white/50 text-slate-400 border-transparent opacity-60'}`}>
      {text}
    </div>
  );
}

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