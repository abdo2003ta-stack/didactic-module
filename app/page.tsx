"use client";

import React, { useState } from 'react';
import ThemeToggle from "@/components/ThemeToggle"; // زر الوضع الليلي
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
  ArrowRight
} from 'lucide-react';

// ------------------- TYPES -------------------
type Section = 'formulation' | 'conceptMap' | 'didacticMeans';

// ------------------- MAIN COMPONENT -------------------
export default function DidacticModulePage() {
  const [activeSection, setActiveSection] = useState<Section>('formulation');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300" dir="rtl">
      
      {/* ⭐ زر الوضع الليلي ⭐ */}
      <ThemeToggle />

      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white shadow-2xl relative overflow-hidden">
        {/* خلفية زخرفية */}
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
          
          {/* NAVIGATION TABS */}
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
        
        {/* ================= SECTION 1: FORMULATION (DEEP DIVE + DARK MODE) ================= */}
        {activeSection === 'formulation' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
            
            {/* 1. Header & Intro */}
            <SectionHeader 
              title="مستوى صياغة المفهوم (Niveau de formulation)" 
              subtitle="التفكيك المنهجي: من المعرفة العالمة إلى المعرفة المكتسبة"
              icon={<Brain className="text-blue-600" size={32} />}
              colorClass="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            />

            {/* 2. The Core Concept: Didactic Transposition Chain */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 dark:border-slate-800">
              <div className="bg-slate-900 dark:bg-black p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-black opacity-40"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">سلسلة النقل الديدكتيكي</h3>
                <p className="text-blue-200 relative z-10 text-sm font-mono tracking-widest uppercase">Yves Chevallard</p>
              </div>
              
              <div className="p-8 md:p-12 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
                  {/* Connecting Line (Horizontal for Desktop) */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-slate-800 -z-0 rounded-full"></div>

                  <TranspositionStep 
                    title="المعرفة العالمة" 
                    sub="(Savoir Savant)"
                    desc="المعرفة في مهدها (الجامعات، المختبرات). تتسم بالتعقيد وعدم الاستقرار."
                    icon={<Brain size={24} />}
                    step="1"
                    color="bg-slate-800 text-white"
                  />
                  
                  <ArrowIcon className="hidden md:block text-gray-300 dark:text-slate-600 relative z-10 bg-slate-50 dark:bg-slate-900 p-1 rounded-full" />
                  
                  <TranspositionStep 
                    title="المعرفة الواجب تدريسها" 
                    sub="(Savoir à Enseigner)"
                    desc="المعرفة المقررة في المنهاج (عمل واضعي البرامج / النوسفير)."
                    icon={<BookOpen size={24} />}
                    step="2"
                    color="bg-blue-600 text-white"
                  />
                  
                  <ArrowIcon className="hidden md:block text-gray-300 dark:text-slate-600 relative z-10 bg-slate-50 dark:bg-slate-900 p-1 rounded-full" />

                  <TranspositionStep 
                    title="المعرفة المُدَرَّسة" 
                    sub="(Savoir Enseigné)"
                    desc="المعرفة الفعلية التي يقدمها المدرس داخل القسم (تخضع لتأويل المدرس)."
                    icon={<Activity size={24} />}
                    step="3"
                    color="bg-indigo-600 text-white"
                  />

                  <ArrowIcon className="hidden md:block text-gray-300 dark:text-slate-600 relative z-10 bg-slate-50 dark:bg-slate-900 p-1 rounded-full" />

                  <TranspositionStep 
                    title="المعرفة المُكتسبة" 
                    sub="(Savoir Appris)"
                    desc="ما تبقى في ذهن المتعلم بعد الدرس (التمثلات الجديدة)."
                    icon={<CheckCircle size={24} />}
                    step="4"
                    color="bg-green-600 text-white"
                  />
                </div>
              </div>
            </div>

            {/* 3. Deep Dive: Mechanisms of Transformation */}
            <div className="grid md:grid-cols-12 gap-8">
               <div className="md:col-span-4 bg-blue-50 dark:bg-blue-950/40 p-8 rounded-3xl h-full border border-blue-100 dark:border-blue-900 relative overflow-hidden">
                 <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 blur-2xl"></div>
                 <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6 relative z-10">ماذا يحدث للمعرفة؟</h3>
                 <p className="text-blue-800 dark:text-blue-200 leading-relaxed mb-8 relative z-10">
                   عندما ننقل مفهوماً من المختبر إلى المدرسة، فإنه يخضع لعمليات "تعرية" و"إعادة إلباس" لكي يصبح قابلاً للتدريس. هذه العمليات تسمى <strong>قواعد النقل الديدكتيكي</strong>.
                 </p>
                 <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-blue-200 dark:border-slate-700 relative z-10">
                    <strong className="block text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
                        <Lightbulb size={18} className="text-amber-500" />
                        مفهوم "النوسفير" (Noosphère):
                    </strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                      هي "طبقة التفكير" أو الهيئة التي تختار ما يجب تدريسه (المفتشون، الخبراء، السياسيون). هم من يقومون بالخطوة الأولى من النقل (من العالمة إلى المقررة).
                    </p>
                 </div>
               </div>

               <div className="md:col-span-8 grid gap-4">
                  <MechanismCard 
                    title="1. نزع الطابع الشخصي (Dépersonnalisation)"
                    desc="فصل المعرفة عن الباحث الذي اكتشفها وعن ظروف الاكتشاف (المعاناة، الأخطاء، الصدفة) لتقديمها كحقيقة مطلقة وجاهزة."
                  />
                  <MechanismCard 
                    title="2. نزع الطابع السياقي (Décontextualisation)"
                    desc="إخراج المعلومة من سياقها المعقد الأصلي لكي تصبح صالحة للتعميم في سياق مدرسي."
                  />
                  <MechanismCard 
                    title="3. القابلية للبرمجة (Programmation)"
                    desc="تقطيع المعرفة إلى وحدات زمنية (فصول، حصص) لتتناسب مع الإيقاع المدرسي، وهو ما قد يتعارض مع طبيعة المعرفة المتشابكة."
                  />
                  <MechanismCard 
                    title="4. الإشهار أو العلنية (Publicité)"
                    desc="تحديد واضح لما هو مطلوب من التلميذ تعلمه (العقد الديدكتيكي)، عكس البحث العلمي الذي يتميز بالغموض والمجهول."
                  />
               </div>
            </div>

            {/* 4. Didactic Vigilance */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-r-4 border-amber-500 p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-center">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-md text-amber-500 shrink-0">
                <Eye size={32} />
              </div>
              <div>
                 <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">اليقظة الديدكتيكية (La Vigilance Didactique)</h3>
                 <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                   هي قدرة المدرس على الانتباه المستمر للمسافة الفاصلة بين المعرفة العالمة والمعرفة المدرسة. 
                   <span className="block mt-2 font-semibold text-amber-900 dark:text-amber-400 text-sm md:text-base">
                     ⚠️ الخطر: إذا ابتعدت المعرفة المدرسة كثيراً عن المعرفة العالمة، نسقط في "الخيانة العلمية". وإذا بقيت قريبة جداً، تصبح "غير قابلة للفهم" من طرف التلميذ.
                   </span>
                 </p>
              </div>
            </div>

          </section>
        )}

        {/* ================= SECTION 2: CONCEPT MAP (ADVANCED VIVID) ================= */}
        {activeSection === 'conceptMap' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
            
            <SectionHeader 
              title="الخريطة المفهومية (La carte conceptuelle)" 
              subtitle="من التمثيل البصري إلى البناء المنطقي للمعرفة"
              icon={<Share2 className="text-purple-600" size={32} />}
              colorClass="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
            />

            {/* Deep Comparison */}
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
                      <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-2xl text-red-500">
                        <Brain size={32} />
                      </div>
                      <span className="text-xs font-bold bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 px-3 py-1 rounded-full">توني بوزان</span>
                   </div>
                   <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">الخريطة الذهنية (Mind Map)</h4>
                   <ul className="space-y-4">
                      <ComparisonPoint 
                        text="بنية إشعاعية (Radial): تنطلق من مركز واحد وتتفرع في جميع الاتجاهات." 
                        icon={<ArrowLeft size={16} className="text-red-400" />} 
                      />
                      <ComparisonPoint 
                        text="تعتمد التداعي الحر (Associations)، الصور، والألوان لإثارة الإبداع." 
                        icon={<ArrowLeft size={16} className="text-red-400" />} 
                      />
                      <ComparisonPoint 
                        text="تخاطب النصف الأيمن للدماغ (الخيال، العاطفة، الصورة الكلية)." 
                        icon={<ArrowLeft size={16} className="text-red-400" />} 
                      />
                   </ul>
                </div>

                {/* Concept Map */}
                <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900/30 rounded-3xl p-8 shadow-lg ring-1 ring-purple-100 dark:ring-purple-900 transform md:-translate-y-2">
                   <div className="absolute top-0 right-0 w-2 h-full bg-purple-600"></div>
                   <div className="flex justify-between items-start mb-6">
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-2xl text-purple-600">
                        <Share2 size={32} />
                      </div>
                      <span className="text-xs font-bold bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full">جوزيف نوفاك</span>
                   </div>
                   <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">الخريطة المفهومية (Concept Map)</h4>
                   <ul className="space-y-4">
                      <ComparisonPoint 
                        text="بنية هرمية (Hierarchical): من المفاهيم الأكثر شمولية (في الأعلى) إلى الأكثر دقة." 
                        icon={<CheckCircle size={16} className="text-purple-600" />} 
                        highlight
                      />
                      <ComparisonPoint 
                        text="تعتمد الروابط المنطقية وكلمات الربط (أفعال) لبناء قضايا علمية." 
                        icon={<CheckCircle size={16} className="text-purple-600" />} 
                        highlight
                      />
                      <ComparisonPoint 
                        text="تخاطب النصف الأيسر للدماغ (التحليل، المنطق، التسلسل)." 
                        icon={<CheckCircle size={16} className="text-purple-600" />} 
                        highlight
                      />
                   </ul>
                </div>
              </div>
            </div>

            {/* The "Proposition" Formula */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
               <h3 className="relative z-10 text-center text-xl font-bold mb-8 text-indigo-200">الجوهر الديدكتيكي: معادلة بناء "القضية"</h3>
               
               <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
                  <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 text-center">
                    <span className="block text-xs text-indigo-300 mb-1">المفهوم 1</span>
                    <strong className="text-lg">النبات</strong>
                  </div>
                  <ArrowRight className="text-indigo-400 rotate-90 md:rotate-180" />
                  <div className="bg-indigo-500 px-4 py-2 rounded-full shadow-lg shadow-indigo-500/50 text-sm font-bold">
                    يحتاج إلى (رابط)
                  </div>
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

            {/* Vivid Interactive Example */}
            <div className="space-y-8">
               <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center">مثال حيوي تفاعلي (Vivid Example)</h3>
               <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                 مرر الفأرة فوق خطوط الربط لقراءة "الجمل العلمية". الخريطة المفهومية ليست مجرد رسم، بل هي مجموعة من الجمل المترابطة.
               </p>

               <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-8 md:p-12 relative min-h-[500px] flex justify-center shadow-inner overflow-hidden">
                  {/* Background Grid */}
                  <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800/[0.3] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

                  <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
                      
                      {/* Level 1 */}
                      <div className="mb-24 w-full flex justify-center">
                        <VividNode text="النبات الأخضر" type="root" id="root" />
                      </div>

                      {/* Level 2 */}
                      <div className="w-full flex justify-between gap-4 md:gap-12 relative">
                         
                         {/* Left Branch */}
                         <div className="flex flex-col items-center w-1/3">
                            <VividNode text="الضوء" type="child" id="light" />
                            <div className="h-16 w-0.5 bg-slate-300 dark:bg-slate-700 my-2 relative group">
                                <VividLink text="مصدره" />
                            </div>
                            <VividNode text="الشمس" type="leaf" id="sun" />
                         </div>

                         {/* Center Branch */}
                         <div className="flex flex-col items-center w-1/3">
                            <VividNode text="الماء والأملاح" type="child" id="water" />
                            <div className="h-16 w-0.5 bg-slate-300 dark:bg-slate-700 my-2 relative">
                                <VividLink text="تمتصه" />
                            </div>
                            <VividNode text="الجذور" type="leaf" id="roots" />
                         </div>

                         {/* Right Branch */}
                         <div className="flex flex-col items-center w-1/3">
                            <VividNode text="غاز CO2" type="child" id="gas" />
                            <div className="h-16 w-0.5 bg-slate-300 dark:bg-slate-700 my-2 relative">
                                <VividLink text="يمتص عبر" />
                            </div>
                            <VividNode text="الأوراق" type="leaf" id="leaves" />
                         </div>
                      </div>

                      {/* SVG Connections */}
                      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
                         {/* Connection to Light */}
                         <path d="M 384 55 C 384 120, 100 80, 100 160" stroke="#94a3b8" strokeWidth="2" fill="none" className="opacity-30 dark:opacity-50" />
                         <rect x="180" y="85" width="100" height="26" rx="13" fill="#1e293b" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" />
                         <text x="230" y="102" textAnchor="middle" fontSize="11" className="fill-slate-600 dark:fill-slate-400 font-bold">يحتاج إلى</text>

                         {/* Connection to Water */}
                         <path d="M 384 55 L 384 160" stroke="#94a3b8" strokeWidth="2" fill="none" className="opacity-30 dark:opacity-50" />

                         {/* Connection to Gas */}
                         <path d="M 384 55 C 384 120, 660 80, 660 160" stroke="#94a3b8" strokeWidth="2" fill="none" className="opacity-30 dark:opacity-50" />
                         <rect x="490" y="85" width="100" height="26" rx="13" fill="#1e293b" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" />
                         <text x="540" y="102" textAnchor="middle" fontSize="11" className="fill-slate-600 dark:fill-slate-400 font-bold">يحتاج إلى</text>
                      </svg>
                  </div>
               </div>
            </div>

            {/* Construction Steps */}
            <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-8">
               <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">منهجية الصياغة (كيف تبنيها في الفصل؟)</h3>
               <div className="space-y-4">
                  <ConstructionStep 
                    num="01" 
                    title="قائمة الجرد (Listing)" 
                    desc="استخراج جميع المفاهيم المرتبطة بالموضوع دون ترتيب (Brainstorming)." 
                  />
                   <ConstructionStep 
                    num="02" 
                    title="الترتيب والتصنيف (Ordering)" 
                    desc="ترتيب المفاهيم من الأكثر شمولية (General) إلى الأكثر تحديداً (Specific)." 
                  />
                   <ConstructionStep 
                    num="03" 
                    title="بناء الروابط (Linking)" 
                    desc="رسم خطوط بين المفاهيم المترابطة. هذه الخطوة تحول القائمة إلى شبكة." 
                  />
                   <ConstructionStep 
                    num="04" 
                    title="صياغة القضايا (Propositions)" 
                    desc="أهم خطوة: كتابة 'فعل' أو 'كلمة ربط' على كل خط لتوضيح طبيعة العلاقة." 
                    highlight
                  />
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
              {/* Definition & Functions */}
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border-l-8 border-teal-500">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">المفهوم الشامل</h3>
                  <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-lg text-justify">
                    هي جميع الحوامل (Supports) المادية أو الرقمية، والأدوات المخبرية، والوضعيات التي يوظفها المدرس والمنهاج لتسهيل عملية التعلم. وهي ليست "كماليات" لتزيين الدرس، بل هي <strong>جزء عضوي</strong> من استراتيجية التدريس.
                  </p>
                </div>

                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-3xl p-8 border border-teal-100 dark:border-teal-900">
                   <h3 className="text-lg font-bold text-teal-900 dark:text-teal-300 mb-6 flex items-center gap-2">
                     <Layers size={20} />
                     الوظائف البيداغوجية المتقدمة
                   </h3>
                   <div className="grid grid-cols-1 gap-4">
                      <FunctionCard icon={<Activity />} title="وظيفة التحفيز" desc="إثارة فضول المتعلم وخلق الدافعية (مثل وضعية مشكلة)." />
                      <FunctionCard icon={<Eye />} title="وظيفة النمذجة" desc="تقريب الظواهر المعقدة والمجردة (الذرة، البراكين)." />
                      <FunctionCard icon={<MousePointer2 />} title="وظيفة أداتية" desc="تدريب المتعلم على المهارات الحس-حركية (استعمال المجهر)." />
                      <FunctionCard icon={<ListChecks />} title="وظيفة التقويم" desc="الكشف عن تعثرات وتمثلات المتعلمين." />
                   </div>
                </div>
              </div>

              {/* Selection Criteria */}
              <div className="h-full">
                <div className="bg-slate-800 text-white rounded-3xl p-8 h-full flex flex-col relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 blur-[80px] opacity-20"></div>
                  
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                    <ShieldCheck className="text-teal-400" size={28} />
                    شبكة معايير الاختيار
                  </h3>
                  <p className="text-slate-300 mb-8 text-sm relative z-10 leading-relaxed">
                    لضمان نجاح النقل الديدكتيكي، يجب إخضاع الوسيلة للأسئلة التالية قبل اعتمادها في الفصل:
                  </p>
                  
                  <div className="space-y-5 relative z-10 flex-grow">
                    <CriteriaItem 
                      title="الملاءمة (Pertinence)" 
                      question="هل تخدم الهدف التعلمي مباشرة أم تشتت الانتباه؟"
                    />
                    <CriteriaItem 
                      title="المستوى (Niveau)" 
                      question="هل تناسب القدرات الإدراكية والنفسية للمتعلمين؟"
                    />
                    <CriteriaItem 
                      title="الأمان (Sécurité)" 
                      question="هل تخلو الوسيلة من أي خطر يهدد سلامة المتعلمين؟"
                    />
                    <CriteriaItem 
                      title="المقروئية (Lisibilité)" 
                      question="هل الوسيلة واضحة لجميع المتعلمين (صوت، صورة، خط)؟"
                    />
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-slate-400">
                    * استناداً إلى الصفحة 43 من المطبوع الرسمي
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-24 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <BookOpen size={32} className="text-slate-600" />
          </div>
          <p className="mb-3 text-slate-300 font-medium">تم إعداد المحتوى بدقة علمية استناداً إلى المرجعيات الرسمية لمراكز مهن التربية والتكوين</p>
          <p className="text-sm opacity-60">© {new Date().getFullYear()} بوابة الديدكتيك الرقمية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
//                          HELPER COMPONENTS
// ============================================================================

function NavButton({ label, icon, isActive, onClick, activeColor }: any) {
  return (
    <button 
      onClick={onClick}
      className={`
        flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-bold tracking-wide
        ${isActive 
          ? `${activeColor} text-white shadow-lg transform scale-105 ring-2 ring-offset-2 ring-offset-indigo-900` 
          : 'bg-white/5 text-indigo-100 hover:bg-white/10 backdrop-blur-sm border border-white/10'}
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function SectionHeader({ title, subtitle, icon, colorClass }: any) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-5 border-b pb-8 border-gray-200 dark:border-gray-800">
      <div className={`p-5 rounded-2xl shadow-inner ${colorClass}`}>
        {icon}
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-gray-500 dark:text-gray-400 mt-2 text-xl font-light">{subtitle}</p>}
      </div>
    </div>
  );
}

// --- Deep Dive Helpers ---
function TranspositionStep({ title, sub, desc, icon, step, color }: any) {
  return (
    <div className="flex flex-col items-center text-center group relative z-10 flex-1 min-w-[200px]">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4 transition-transform group-hover:scale-110 ${color}`}>
        {icon}
      </div>
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-gray-700 flex items-center justify-center font-bold text-xs text-gray-400 shadow-sm">
        {step}
      </div>
      <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{title}</h4>
      <span className="text-xs font-mono text-blue-600 dark:text-blue-400 block mb-3 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded inline-block">{sub}</span>
      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-2">{desc}</p>
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
      className={`rotate-180 transform ${className}`} 
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

function MechanismCard({ title, desc }: any) {
  return (
    <div className="flex gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow hover:border-blue-200 dark:hover:border-blue-800">
      <div className="mt-1 text-blue-500 shrink-0">
        <CheckCircle size={20} />
      </div>
      <div>
        <h4 className="font-bold text-gray-800 dark:text-white mb-2 text-lg">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// --- Advanced Concept Map Helpers ---

function ComparisonPoint({ text, icon, highlight }: any) {
  return (
    <li className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${highlight ? 'bg-purple-50 dark:bg-purple-900/10' : ''}`}>
      <div className="mt-1 shrink-0">{icon}</div>
      <span className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">{text}</span>
    </li>
  );
}

function VividNode({ text, type, id }: any) {
  const styles: any = {
    root: "bg-purple-600 text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.3)] border-4 border-purple-400/50 z-20 relative animate-pulse-slow",
    child: "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold px-6 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-lg z-20 relative hover:border-purple-400 transition-colors",
    leaf: "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 z-20 relative"
  };

  return (
    <div id={id} className={`${styles[type]} transition-transform hover:scale-110 cursor-default select-none`}>
      {text}
    </div>
  );
}

function VividLink({ text }: any) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold px-2 py-1 rounded-full border border-slate-300 dark:border-slate-600 whitespace-nowrap z-30 shadow-sm group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
      {text}
    </div>
  );
}

function ConstructionStep({ num, title, desc, highlight }: any) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${highlight ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800' : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
       <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${highlight ? 'bg-purple-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
         {num}
       </div>
       <div>
         <h5 className="font-bold text-gray-800 dark:text-white mb-1">{title}</h5>
         <p className="text-sm text-gray-600 dark:text-slate-400">{desc}</p>
       </div>
    </div>
  );
}

// --- Didactic Means Helpers ---

function FunctionCard({ icon, title, desc }: any) {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-teal-50 dark:border-teal-900 shadow-sm hover:border-teal-300 hover:shadow-md transition-all">
      <div className="text-teal-600 bg-teal-50 dark:bg-teal-900/30 p-3 rounded-xl">{icon}</div>
      <div>
        <strong className="block text-gray-800 dark:text-white text-base mb-1">{title}</strong>
        <span className="text-xs text-gray-500 dark:text-gray-400 leading-tight block">{desc}</span>
      </div>
    </div>
  );
}

function CriteriaItem({ title, question }: any) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 backdrop-blur-sm">
      <div className="mt-1 text-teal-400"><CheckCircle size={20} /></div>
      <div>
        <h4 className="font-bold text-white mb-1 text-base">{title}</h4>
        <p className="text-slate-300 text-sm leading-relaxed font-light">{question}</p>
      </div>
    </div>
  );
}