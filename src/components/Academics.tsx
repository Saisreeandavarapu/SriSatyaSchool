import React, { useState } from 'react';
import { Baby, BookOpen, Layers, Award, Sparkles, Activity } from 'lucide-react';

export const Academics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nursery' | 'primary' | 'curriculum' | 'methodology'>('nursery');

  const tabs = [
    { id: 'nursery', label: 'Nursery & Play', icon: Baby },
    { id: 'primary', label: 'Primary School (1st-7th)', icon: BookOpen },
    { id: 'curriculum', label: 'Our Curriculum', icon: Layers },
    { id: 'methodology', label: 'Methodology', icon: Activity },
  ];

  return (
    <section id="academics" className="py-20 bg-brand-light relative">
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[40px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120H321.39Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-6xl mt-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-hand font-extrabold text-3xl sm:text-4xl text-brand-dark mb-4">
            Our <span className="text-brand-green">Academics</span> Programs
          </h2>
          <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-bold text-sm tracking-wider uppercase">
            Nursery to Class 7 • Age-Appropriate Milestones
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm sm:text-base font-extrabold transition-all duration-200 cursor-pointer shadow-sm ${
                  isActive 
                    ? 'bg-brand-green text-white scale-105 shadow-md shadow-brand-green/20' 
                    : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-brand-dark'
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border-2 border-gray-100 shadow-xl transition-all duration-300">
          
          {/* TAB 1: NURSERY */}
          {activeTab === 'nursery' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-brand-yellow/15 text-brand-yellow-dark px-3 py-1 rounded-full text-xs font-bold uppercase">
                  <Sparkles size={12} fill="currentColor" /> Play & Growth
                </div>
                <h3 className="font-hand font-bold text-2xl md:text-3xl text-brand-dark">
                  Early Years Foundation (Nursery & KG)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We introduce our tiny tots to school life through sensory, motor, and speech-driven developmental tasks. In a warm and safe classroom setting, children learn to socialize, share, and express themselves creatively.
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-brand-dark text-sm tracking-wide uppercase">Core Areas of Focus</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow-dark shrink-0 font-bold text-xs">1</div>
                      <p className="text-sm text-gray-600"><strong className="text-gray-800">Sensory Activities:</strong> Sorting beads, water play, finger painting, and clay modelling.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0 font-bold text-xs">2</div>
                      <p className="text-sm text-gray-600"><strong className="text-gray-800">Language Readiness:</strong> Phonics, storytelling, rhymes, and visual word identification.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green shrink-0 font-bold text-xs">3</div>
                      <p className="text-sm text-gray-600"><strong className="text-gray-800">Motor Skills:</strong> Paper cutting, building blocks, hopping games, and tracing.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0 font-bold text-xs">4</div>
                      <p className="text-sm text-gray-600"><strong className="text-gray-800">Social Skills:</strong> Story circles, group playtime, eating manners, and classroom helper roles.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-brand-yellow/5 border-2 border-brand-yellow p-6 rounded-2xl flex flex-col justify-center text-center items-center">
                <div className="w-20 h-20 rounded-full bg-brand-yellow/15 flex items-center justify-center text-brand-yellow-dark mb-4">
                  <Baby size={44} />
                </div>
                <h4 className="font-hand font-bold text-lg text-brand-dark mb-2">Age Eligibility</h4>
                <p className="text-gray-600 text-sm mb-4">Children aged 2.5 to 4 years can apply for Nursery and KG entry points.</p>
                <div className="bg-white px-4 py-2.5 rounded-xl border border-gray-100 text-xs font-bold text-brand-orange">
                  Admissions Open for 2026 Academic Year
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRIMARY */}
          {activeTab === 'primary' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase">
                  <Award size={12} /> Analytical Learning
                </div>
                <h3 className="font-hand font-bold text-2xl md:text-3xl text-brand-dark">
                  Primary Classes (Class 1 to Class 7)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As kids progress to Class 1 through Class 7, we build their analytical depth. Subjects are unpacked logically, helping students map science formulas, mathematical fractions, and grammar rules to real-world objects.
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-brand-dark text-sm tracking-wide uppercase">Core Academic Subjects</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl">
                      <h5 className="font-bold text-brand-blue text-sm mb-1">Mathematics</h5>
                      <p className="text-xs text-gray-500">Number analysis, logic bonds, spatial geometry, and early word problem breakdown.</p>
                    </div>
                    <div className="p-4 bg-brand-green/5 border border-brand-green/10 rounded-2xl">
                      <h5 className="font-bold text-brand-green text-sm mb-1">Science & Physics</h5>
                      <p className="text-xs text-gray-500">Properties of matter, biological models, environment systems, and experiment tables.</p>
                    </div>
                    <div className="p-4 bg-brand-yellow/5 border border-brand-yellow-dark/10 rounded-2xl">
                      <h5 className="font-bold text-brand-yellow-dark text-sm mb-1">Languages & Lit</h5>
                      <p className="text-xs text-gray-500">Structure skills in English, Telugu, and Hindi. Vocabulary logs and speech clubs.</p>
                    </div>
                    <div className="p-4 bg-brand-purple/5 border border-brand-purple/10 rounded-2xl">
                      <h5 className="font-bold text-brand-purple text-sm mb-1">Social Studies & Values</h5>
                      <p className="text-xs text-gray-500">History, geographical scales, civic values, moral stories, and character classes.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-brand-blue/5 border-2 border-brand-blue p-6 rounded-2xl flex flex-col justify-center text-center items-center">
                <div className="w-20 h-20 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                  <BookOpen size={40} />
                </div>
                <h4 className="font-hand font-bold text-lg text-brand-dark mb-2">Primary Schooling Goals</h4>
                <ul className="text-left text-xs text-gray-600 space-y-2 mb-4">
                  <li className="flex items-center gap-1.5">✓ Preparing for National Talent Olympiads</li>
                  <li className="flex items-center gap-1.5">✓ Concept checks instead of exams memorization</li>
                  <li className="flex items-center gap-1.5">✓ Public speaking & lab activity reports</li>
                </ul>
                <div className="bg-white px-4 py-2 border border-gray-100 text-xs font-bold text-brand-green">
                  Weekly personalized doubt resolution slots
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CURRICULUM */}
          {activeTab === 'curriculum' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs font-bold uppercase">
                  <Layers size={12} /> Rich Learning Framework
                </div>
                <h3 className="font-hand font-bold text-2xl md:text-3xl text-brand-dark">
                  Blended Upgraded Curriculum
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  While our syllabus strictly aligns with national educational standards and the state curriculum structure, we augment it. We embed concept-based exercises, interactive reasoning worksheets, and global Olympiad preparatory modules into daily schedules.
                </p>

                <div className="space-y-3">
                  <h4 className="font-bold text-brand-dark text-sm tracking-wide uppercase">Curriculum Highlights</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5 text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-brand-green mt-1.5 shrink-0" />
                      <span><strong className="text-gray-800">Specialized Workbooks:</strong> Self-developed learning resources focusing on logic, puzzles, and comprehension.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-brand-green mt-1.5 shrink-0" />
                      <span><strong className="text-gray-800">Concept Map Sheets:</strong> Visual diagrams that summarize large lessons into singular maps.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-brand-green mt-1.5 shrink-0" />
                      <span><strong className="text-gray-800">Graduated Exercises:</strong> Three tier problem sets (Basic, Concept Build, and Olympiad Level).</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-5 bg-brand-green/5 border-2 border-brand-green p-6 rounded-2xl flex flex-col justify-center text-center items-center">
                <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-4">
                  <Layers size={40} />
                </div>
                <h4 className="font-hand font-bold text-lg text-brand-dark mb-2">Subject Coverage</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Math', 'Environmental Science', 'Physics', 'Biology', 'English Grammar', 'Telugu', 'Hindi'].map((subj) => (
                    <span key={subj} className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-600 border border-gray-100">
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: METHODOLOGY */}
          {activeTab === 'methodology' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full text-xs font-bold uppercase">
                  <Activity size={12} /> Interactive Methods
                </div>
                <h3 className="font-hand font-bold text-2xl md:text-3xl text-brand-dark">
                  How We Teach: Our Concept Methodology
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We utilize concrete learning blocks prior to introducing abstract theories. Under our methodology, a child learns fractions by dividing actual play blocks or circles, and learns electrical currents by connecting a basic LED battery loop.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-gray-100 p-4 rounded-2xl bg-brand-light">
                    <h5 className="font-bold text-brand-dark text-sm mb-1.5">Concrete to Abstract</h5>
                    <p className="text-xs text-gray-500">First touch, see, and interact with objects; then map them to mathematical signs and variables.</p>
                  </div>
                  <div className="border border-gray-100 p-4 rounded-2xl bg-brand-light">
                    <h5 className="font-bold text-brand-dark text-sm mb-1.5">Discovery Lab Approach</h5>
                    <p className="text-xs text-gray-500">Encouraging children to question outcomes and discover rules rather than copying notes from the board.</p>
                  </div>
                  <div className="border border-gray-100 p-4 rounded-2xl bg-brand-light">
                    <h5 className="font-bold text-brand-dark text-sm mb-1.5">Iterative Mastery</h5>
                    <p className="text-xs text-gray-500">We do not move to the next chapter unless 90% of class registers core concept checklist completion.</p>
                  </div>
                  <div className="border border-gray-100 p-4 rounded-2xl bg-brand-light">
                    <h5 className="font-bold text-brand-dark text-sm mb-1.5">Active Inquiry Loops</h5>
                    <p className="text-xs text-gray-500">Encouraging class debates, doubt boards, and student-led teaching sessions.</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-brand-purple/5 border-2 border-brand-purple p-6 rounded-2xl flex flex-col justify-center text-center items-center">
                <div className="w-20 h-20 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-4">
                  <Activity size={40} />
                </div>
                <h4 className="font-hand font-bold text-lg text-brand-dark mb-2">Key Metric</h4>
                <p className="text-brand-purple font-hand font-extrabold text-3xl mb-1">0%</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">Rote Memorization Tolerated</p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
