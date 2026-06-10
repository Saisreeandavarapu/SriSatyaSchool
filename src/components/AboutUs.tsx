import React, { useState } from 'react';
import { ShieldCheck, Target, Bookmark, Star, GraduationCap, CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(0);

  const features = [
    {
      id: 0,
      title: "Concept-Based Teaching",
      desc: "Focus on understanding core concepts instead of rote memorization. We teach the 'why' and 'how' behind every topic, encouraging logical thinking.",
      color: "brand-blue",
      borderColor: "border-brand-blue",
      bgColor: "bg-brand-blue/10",
      textColor: "text-brand-blue",
      dotClass: "bg-brand-blue"
    },
    {
      id: 1,
      title: "Experienced & Dedicated Staff",
      desc: "Qualified teachers with years of teaching experience. Guided by veteran leadership to ensure academic delivery of the highest standards.",
      color: "brand-green",
      borderColor: "border-brand-green",
      bgColor: "bg-brand-green/10",
      textColor: "text-brand-green",
      dotClass: "bg-brand-green"
    },
    {
      id: 2,
      title: "Individual Care & Attention",
      desc: "Personalized guidance for every student. We maintain a healthy student-to-teacher ratio to ensure no child is left behind in their learning journey.",
      color: "brand-orange",
      borderColor: "border-brand-orange",
      bgColor: "bg-brand-orange/10",
      textColor: "text-brand-orange",
      dotClass: "bg-brand-orange"
    },
    {
      id: 3,
      title: "Activity-Based Learning",
      desc: "Practical and interactive learning methods. We integrate physical objects, experiments, games, and team projects into the syllabus.",
      color: "brand-yellow",
      borderColor: "border-brand-yellow",
      bgColor: "bg-brand-yellow/10",
      textColor: "text-brand-yellow-dark",
      dotClass: "bg-brand-yellow"
    },
    {
      id: 4,
      title: "Discipline & Values",
      desc: "Strong focus on character development. We teach integrity, respect, empathy, and social responsibility alongside academics.",
      color: "brand-purple",
      borderColor: "border-brand-purple",
      bgColor: "bg-brand-purple/10",
      textColor: "text-brand-purple",
      dotClass: "bg-brand-purple"
    },
    {
      id: 5,
      title: "Olympiad Preparation",
      desc: "Rigorous training for national and international competitions like IMO, NSO, and IEO, starting from Class 3 to build logical competence early.",
      color: "brand-orange",
      borderColor: "border-brand-orange",
      bgColor: "bg-brand-orange/15",
      textColor: "text-brand-orange",
      dotClass: "bg-brand-orange"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-hand font-extrabold text-3xl sm:text-4xl text-brand-dark mb-4">
            Welcome to <span className="text-brand-blue">Satya Concept School</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-bold text-sm tracking-wider uppercase">
            Quality Education • Concept understanding • Character Development
          </p>
        </div>

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-hand font-bold text-2xl text-brand-dark">
              Nurturing Thinkers, Not Memorizers
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Satya Concept School (SCS) at Jarajapupeta is established on the belief that education should stimulate curiosity and logical comprehension. Our modern learning spaces allow students from Nursery to Class 7 to grow at their own pace.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              We move beyond traditional book-bound learning. Through creative activities, structured games, and interactive projects, we help students visualize concepts in Science, Math, and Languages, ensuring lifelong retention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                <CheckCircle2 className="text-brand-blue shrink-0" />
                <span className="font-bold text-brand-dark text-sm">Concept-Focused Syllabus</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-brand-green/5 rounded-2xl border border-brand-green/10">
                <CheckCircle2 className="text-brand-green shrink-0" />
                <span className="font-bold text-brand-dark text-sm">National Olympiad Training</span>
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-brand-blue/5 border-2 border-brand-blue p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="bg-brand-blue text-white p-3 rounded-2xl w-fit mb-6 shadow-md shadow-brand-blue/20">
                <Target size={24} />
              </div>
              <h4 className="font-hand font-bold text-xl text-brand-dark mb-3">Our Vision</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                To raise a generation of logical thinkers, creative problem solvers, and value-driven citizens who excel in all walks of life.
              </p>
            </div>

            <div className="bg-brand-green/5 border-2 border-brand-green p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="bg-brand-green text-white p-3 rounded-2xl w-fit mb-6 shadow-md shadow-brand-green/20">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-hand font-bold text-xl text-brand-dark mb-3">Our Mission</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                To replace mechanical learning with concept comprehension, active methodologies, and individual care while instilling morals.
              </p>
            </div>

            <div className="sm:col-span-2 bg-brand-yellow/5 border-2 border-brand-yellow p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="bg-brand-yellow text-brand-yellow-dark p-3 rounded-2xl w-fit mb-6 shadow-md shadow-brand-yellow/20">
                <Bookmark size={24} />
              </div>
              <h4 className="font-hand font-bold text-xl text-brand-dark mb-3">School History</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Founded with a core goal to upgrade foundational schooling standard in Jarajapupeta, SCS has built a legacy of trust. Over the years, we have nurtured young minds to be exam-confident and logically active, blending curriculum requirements with sports and hands-on laboratory experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Wheel Section */}
        <div className="bg-brand-light rounded-3xl p-8 md:p-12 border-2 border-dashed border-gray-200">
          <div className="text-center mb-12">
            <h3 className="font-hand font-bold text-2xl md:text-3xl text-brand-dark mb-2">
              Why Parents Choose SCS?
            </h3>
            <p className="text-gray-500 text-sm font-semibold">
              Click on the orbits below to explore what makes Satya Concept School unique
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Interactive Wheel Visual (Only on large screens, on small screens it stacks as cards) */}
            <div className="hidden lg:col-span-6 lg:flex justify-center items-center relative h-[420px]">
              {/* Central Core */}
              <div className="w-36 h-36 rounded-full bg-white shadow-xl border-4 border-brand-orange flex flex-col items-center justify-center p-4 text-center z-10 animate-pulse-subtle">
                <GraduationCap size={32} className="text-brand-orange mb-1" />
                <span className="font-hand font-extrabold text-sm text-brand-dark">The SCS Way</span>
              </div>

              {/* Orbiting Nodes */}
              {features.map((feat, index) => {
                const angle = (index * 60 * Math.PI) / 180;
                const radius = 150; // pixels
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                const isActive = activeFeature === feat.id;

                return (
                  <div
                    key={feat.id}
                    onClick={() => setActiveFeature(feat.id)}
                    className={`absolute w-24 h-24 rounded-full bg-white shadow-lg cursor-pointer flex flex-col items-center justify-center p-2 text-center border-2 transition-all duration-300 ${
                      isActive 
                        ? `${feat.borderColor} scale-110 ring-4 ring-${feat.color}/15` 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className={`w-3.5 h-3.5 rounded-full ${feat.dotClass} mb-2 shadow-inner`} />
                    <span className="text-[10px] font-bold leading-tight text-gray-700">
                      {feat.title}
                    </span>
                  </div>
                );
              })}

              {/* SVG Connector Lines */}
              <svg className="absolute inset-0 w-full h-full -z-0 pointer-events-none" style={{ minWidth: '400px' }}>
                <circle cx="50%" cy="50%" r="150" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
                {features.map((feat, index) => {
                  const angle = (index * 60 * Math.PI) / 180;
                  const radius = 150;
                  return (
                    <line
                      key={feat.id}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + (radius / 400) * 100 * Math.cos(angle)}%`}
                      y2={`${50 + (radius / 400) * 100 * Math.sin(angle)}%`}
                      stroke={activeFeature === feat.id ? '#ff6b4a' : '#cbd5e1'}
                      strokeWidth={activeFeature === feat.id ? '2' : '1'}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Right side: Feature Details panel (interactive on desktop, list of cards on mobile) */}
            <div className="lg:col-span-6 flex flex-col justify-center gap-6">
              {/* Desktop Dynamic Panel */}
              <div className="hidden lg:block bg-white border-2 border-brand-orange p-8 rounded-3xl shadow-lg transition-all duration-300">
                {activeFeature !== null && (
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-1 rounded-full text-xs font-bold uppercase">
                      <Star size={12} fill="currentColor" />
                      Key Core Strength
                    </div>
                    <h4 className="font-hand font-extrabold text-2xl text-brand-dark">
                      {features[activeFeature].title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {features[activeFeature].desc}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 pt-3">
                      <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Highly Monitored
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" /> Child Centric
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Mobile View: Render all features as cards stacked since circular wheel is too small */}
              <div className="lg:hidden space-y-4">
                {features.map((feat) => (
                  <div 
                    key={feat.id}
                    className={`bg-white border-2 p-5 rounded-2xl shadow-sm transition-all duration-200 ${
                      activeFeature === feat.id ? `${feat.borderColor} ring-2 ring-${feat.color}/10` : 'border-gray-100'
                    }`}
                    onClick={() => setActiveFeature(feat.id)}
                  >
                    <h4 className={`font-hand font-bold text-lg mb-2 ${feat.textColor}`}>
                      {feat.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
