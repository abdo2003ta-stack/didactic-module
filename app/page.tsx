"use client";

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Share2, Layers, CheckCircle, Brain, Lightbulb, Box, 
  Activity, Quote, ArrowRight, Sun, Moon, Sprout, Droplets, 
  Microscope, Globe, MonitorPlay, Zap, FlaskConical, Scale, 
  AlertTriangle, Target, MousePointerClick, Network, Split, GitGraph, ShieldCheck,
  Rabbit, Cat, Leaf, Apple, Utensils
} from 'lucide-react';

// ------------------- TYPES -------------------
type Section = 'formulation' | 'conceptMap' | 'didacticMeans';

// ------------------- MAIN COMPONENT -------------------
export default function DidacticModulePage() {
  const [activeSection, setActiveSection] = useState<Section>('conceptMap'); // Default to concept map as requested
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-800'}`} dir="rtl">
      
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
            تطوير الممارسة الصفية: من التخطيط المنهجي إلى هندسة التعلمات
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <NavButton label="1. صياغة المفهوم" icon={<Brain size={18} />} isActive={activeSection === 'formulation'} onClick={() => setActiveSection('formulation')} activeColor="bg-blue-600" />
            <NavButton label="2. الخريطة المفهومية" icon={<Share2 size={18} />} isActive={activeSection === 'conceptMap'} onClick={() => setActiveSection('conceptMap')} activeColor="bg-purple-600" />
            <NavButton label="3. الوسائل الديدكتيكية" icon={<Box size={18} />} isActive={activeSection === 'didacticMeans'} onClick={() => setActiveSection('didacticMeans')} activeColor="bg-teal-600" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl min-h-[600px]">
        
        {/* ================= SECTION 1: FORMULATION (Brief for context) ================= */}
        {activeSection === 'formulation' && (
          <div className="space-y-12 animate-fade-in">
             <SectionHeader title="صياغة المفهوم" subtitle="النقل الديدكتيكي في المدرسة الابتدائية" icon={<Brain className="text-blue-600" size={32} />} colorClass="bg-blue-100 dark:bg-blue-900/30 text-blue-700" />
             <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm text-center">
               <p>تم التركيز في هذا المحور على تكييف المعرفة العالمة لتناسب النمو المعرفي للطفل (مرحلة العمليات المحسوسة).</p>
             </div>
          </div>
        )}

        {/* ================= SECTION 2: CONCEPT MAP (DEEP DIVE & COMPARISON) ================= */}
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
                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Lightbulb className="text-purple-600"/> التعريف العميق</h3>
                 <p className="text-gray-600 dark:text-gray-300 leading-8 text-justify">
                   هي تمثيل تخطيطي للعلاقات ذات المعنى بين المفاهيم في صورة <strong>قضايا (Propositions)</strong>. تستند إلى نظرية <strong>ديفيد أوزوبل</strong> التي تؤكد أن التعلم الحقيقي يحدث عندما ترتبط المعرفة الجديدة (المفهوم الثانوي) بشكل غير تعسفي بالمعرفة السابقة (المفهوم الجوهري) في البنية المعرفية للمتعلم، مما يحقق "التعلم ذو المعنى" بدلاً من "التعلم الصم".
                 </p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
                 <h3 className="text-xl font-bold mb-4">المعادلة البنيوية للخريطة</h3>
                 <div className="flex flex-col items-center justify-center h-full gap-4">
                    <div className="flex items-center gap-2 w-full justify-center">
                      <div className="px-4 py-2 bg-white dark:bg-slate-700 rounded-lg shadow font-bold">مفهوم (أ)</div>
                      <ArrowRight className="text-purple-500" />
                      <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm font-bold">رابط (فعل)</div>
                      <ArrowRight className="text-purple-500" />
                      <div className="px-4 py-2 bg-white dark:bg-slate-700 rounded-lg shadow font-bold">مفهوم (ب)</div>
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
                        <p className="text-sm">توني بوزان (Tony Buzan). تركز على فيزيولوجيا الدماغ (الفص الأيمن: الخيال).</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">البنية</span>
                        <p className="text-sm font-bold">إشعاعية (Radial)</p>
                        <p className="text-xs text-slate-500">فكرة مركزية واحدة تتفرع منها الأفكار في جميع الاتجاهات (مثل الشمس).</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">الروابط</span>
                        <p className="text-sm">تداعي الأفكار (Association). لا يشترط وجود أفعال رابطة. تعتمد على الصور والألوان.</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">الهدف</span>
                        <p className="text-sm">العصف الذهني، الإبداع، تدوين الملاحظات.</p>
                     </div>
                  </div>

                  {/* Column 3: Concept Map */}
                  <div className="p-6 space-y-6 relative bg-purple-50/50 dark:bg-purple-900/10">
                     <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
                     <h4 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4 text-center">الخريطة المفهومية (Concept Map)</h4>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">المؤسس</span>
                        <p className="text-sm">جوزيف نوفاك (Novak). تركز على علم النفس المعرفي (البنية المعرفية).</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">البنية</span>
                        <p className="text-sm font-bold">هرمية (Hierarchical)</p>
                        <p className="text-xs text-slate-500">من المفهوم الأكثر شمولية (في الأعلى) إلى الأكثر خصوصية (في الأسفل).</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">الروابط</span>
                        <p className="text-sm">منطقية (Logical). <span className="underline decoration-purple-400">يجب</span> وجود كلمات ربط (أفعال) لتكوين جمل مفيدة.</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">الهدف</span>
                        <p className="text-sm">تنظيم المعرفة، التقويم، تشخيص التمثلات الخاطئة.</p>
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
          </div>
        )}

        {/* ================= SECTION 3: DIDACTIC MEANS (PRIMARY SCHOOL EXAMPLES) ================= */}
        {activeSection === 'didacticMeans' && (
          <div className="space-y-16 animate-fade-in">
            <SectionHeader 
              title="الوسائل الديدكتيكية" 
              subtitle="دعامات النقل الديدكتيكي في التعليم الابتدائي"
              icon={<Box className="text-teal-600" size={32} />}
              colorClass="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
            />

            {/* Concept */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border-l-8 border-teal-500">
               <h3 className="text-2xl font-bold mb-4">الدور الوظيفي في الابتدائي</h3>
               <p className="text-gray-600 dark:text-slate-300 leading-8">
                 الطفل في المرحلة الابتدائية (7-12 سنة) يمر بمرحلة <strong>العمليات المحسوسة</strong> (بياجيه). لذلك، فإن الوسيلة الديدكتيكية ليست خياراً بل ضرورة حتمية لنقل المعرفة من مستواها المجرد إلى مستوى ملموس يدركه الطفل بحواسه.
               </p>
            </div>

            {/* Primary School Scenarios */}
            <div className="space-y-8">
               <div className="text-center mb-8">
                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white">سيناريوهات تطبيقية من القسم</h3>
                 <p className="text-gray-500">كيف نعالج المفاهيم المجردة بأدوات بسيطة؟</p>
               </div>
               
               <PrimaryDidacticScenarios />
            </div>

            {/* Selection Criteria */}
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
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 mt-24 border-t border-slate-800 text-center">
         <p>© {new Date().getFullYear()} بوابة الديدكتيك الرقمية - نسخة التعليم الابتدائي.</p>
      </footer>
    </div>
  );
}

// =================== COMPONENT: EXPANDED PRIMARY CONCEPT MAP ===================

function ExpandedConceptMap() {
  const [highlight, setHighlight] = useState<string | null>(null);

  return (
    <div className="relative w-full min-h-[600px] bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col items-center p-8 select-none">
      
      {/* Level 1: Root */}
      <div className="relative z-20 mb-16 mt-8">
        <div className="px-8 py-4 bg-purple-600 text-white rounded-2xl shadow-xl text-xl font-bold border-4 border-purple-400/50">
          الحيوانات (حسب التغذية)
        </div>
        {/* Connector Line Down */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full h-12 w-1 bg-slate-300 dark:bg-slate-700"></div>
        {/* Linking Word */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-500 border border-slate-300 z-30">
          تنقسم إلى
        </div>
      </div>

      {/* Level 2: Categories */}
      <div className="relative z-10 w-full max-w-4xl flex justify-between gap-4 mb-16">
         {/* Connector Horizontal */}
         <div className="absolute top-0 left-[16%] right-[16%] h-1 bg-slate-300 dark:bg-slate-700 -mt-4 rounded-full"></div>
         {/* Vertical Connectors */}
         <div className="absolute top-0 left-[16%] h-4 w-1 bg-slate-300 dark:bg-slate-700 -mt-4"></div>
         <div className="absolute top-0 left-1/2 h-4 w-1 bg-slate-300 dark:bg-slate-700 -mt-4 -translate-x-1/2"></div>
         <div className="absolute top-0 right-[16%] h-4 w-1 bg-slate-300 dark:bg-slate-700 -mt-4"></div>

         {/* Node 1: Herbivores */}
         <div className="flex flex-col items-center w-1/3 group">
            <div className={`p-4 rounded-2xl border-2 transition-all ${highlight === 'herb' ? 'bg-green-100 border-green-500 scale-105' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`} onMouseEnter={() => setHighlight('herb')} onMouseLeave={() => setHighlight(null)}>
               <div className="flex items-center gap-2 font-bold text-green-700 dark:text-green-400"><Leaf size={20}/> عاشبة</div>
            </div>
            <div className="h-12 w-0.5 bg-slate-300 dark:bg-slate-700"></div>
            <div className="bg-white dark:bg-slate-800 px-2 py-0.5 text-[10px] font-bold border rounded-full relative z-20 -mt-8">تتغذى على</div>
            <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-center w-3/4">
               <span className="block text-sm font-bold text-green-800 dark:text-green-300">العشب / النبات</span>
               <div className="mt-2 flex justify-center gap-2">
                  <span className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded shadow-sm">أرنب</span>
                  <span className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded shadow-sm">بقرة</span>
               </div>
            </div>
         </div>

         {/* Node 2: Omnivores */}
         <div className="flex flex-col items-center w-1/3 group">
            <div className={`p-4 rounded-2xl border-2 transition-all ${highlight === 'omni' ? 'bg-orange-100 border-orange-500 scale-105' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`} onMouseEnter={() => setHighlight('omni')} onMouseLeave={() => setHighlight(null)}>
               <div className="flex items-center gap-2 font-bold text-orange-700 dark:text-orange-400"><Utensils size={20}/> قارتة</div>
            </div>
            <div className="h-12 w-0.5 bg-slate-300 dark:bg-slate-700"></div>
            <div className="bg-white dark:bg-slate-800 px-2 py-0.5 text-[10px] font-bold border rounded-full relative z-20 -mt-8">تتغذى على</div>
            <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl text-center w-3/4">
               <span className="block text-sm font-bold text-orange-800 dark:text-orange-300">كل شيء (نبات+لحم)</span>
               <div className="mt-2 flex justify-center gap-2">
                  <span className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded shadow-sm">دب</span>
                  <span className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded shadow-sm">إنسان</span>
               </div>
            </div>
         </div>

         {/* Node 3: Carnivores */}
         <div className="flex flex-col items-center w-1/3 group">
            <div className={`p-4 rounded-2xl border-2 transition-all ${highlight === 'carn' ? 'bg-red-100 border-red-500 scale-105' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`} onMouseEnter={() => setHighlight('carn')} onMouseLeave={() => setHighlight(null)}>
               <div className="flex items-center gap-2 font-bold text-red-700 dark:text-red-400"><Rabbit size={20} className="text-red-500"/> لاحمة</div>
            </div>
            <div className="h-12 w-0.5 bg-slate-300 dark:bg-slate-700"></div>
            <div className="bg-white dark:bg-slate-800 px-2 py-0.5 text-[10px] font-bold border rounded-full relative z-20 -mt-8">تصطاد</div>
            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl text-center w-3/4">
               <span className="block text-sm font-bold text-red-800 dark:text-red-300">الفرائس (اللحم)</span>
               <div className="mt-2 flex justify-center gap-2">
                  <span className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded shadow-sm">أسد</span>
                  <span className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded shadow-sm">نمر</span>
               </div>
            </div>
         </div>
      </div>
      
      <div className="text-center text-slate-400 text-sm mt-4 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
         <span className="font-bold">قضية مثال:</span> الحيوانات اللاحمة --تصطاد{'->'} الفرائس
      </div>
    </div>
  );
}

// =================== COMPONENT: PRIMARY SCHOOL SCENARIOS ===================

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
        <button onClick={() => setActiveScenario('math')} className={`flex items-center gap-3 p-4 rounded-xl transition-all ${activeScenario === 'math' ? 'bg-white shadow-md border-r-4 border-blue-500' : 'hover:bg-slate-200'}`}>
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Split size={20}/></div>
          <div className="text-right">
             <span className="block font-bold text-slate-800 text-sm">الرياضيات</span>
             <span className="text-xs text-slate-500">الكسور</span>
          </div>
        </button>
        <button onClick={() => setActiveScenario('science')} className={`flex items-center gap-3 p-4 rounded-xl transition-all ${activeScenario === 'science' ? 'bg-white shadow-md border-r-4 border-red-500' : 'hover:bg-slate-200'}`}>
          <div className="bg-red-100 p-2 rounded-lg text-red-600"><FlaskConical size={20}/></div>
          <div className="text-right">
             <span className="block font-bold text-slate-800 text-sm">النشاط العلمي</span>
             <span className="text-xs text-slate-500">حالات المادة</span>
          </div>
        </button>
        <button onClick={() => setActiveScenario('geo')} className={`flex items-center gap-3 p-4 rounded-xl transition-all ${activeScenario === 'geo' ? 'bg-white shadow-md border-r-4 border-green-500' : 'hover:bg-slate-200'}`}>
          <div className="bg-green-100 p-2 rounded-lg text-green-600"><Globe size={20}/></div>
          <div className="text-right">
             <span className="block font-bold text-slate-800 text-sm">الجغرافيا</span>
             <span className="text-xs text-slate-500">الاتجاهات</span>
          </div>
        </button>
      </div>
      
      <div className="flex-1 p-8 flex flex-col justify-center animate-in fade-in zoom-in-95 duration-300">
        <div className="inline-block bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-500 mb-4 w-fit">{current.subject}</div>
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

// =================== HELPER COMPONENTS ===================

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