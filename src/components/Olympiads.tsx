import React, { useState } from 'react';
import { Trophy, Star, CheckCircle2, ChevronRight } from 'lucide-react';

export const Olympiads: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>('3rd');
  const [activeOlympiad, setActiveOlympiad] = useState<'IMO' | 'NSO' | 'IEO'>('IMO');

  const classesList = ['Nursery', 'KG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];

  const olympiadsDetails = {
    IMO: {
      title: "IMO - International Mathematics Olympiad",
      focus: "Logical Reasoning, Mathematical Reasoning, Everyday Mathematics, Achievers Section.",
      benefits: "Unlocks critical problem solving speed, number bond logic, and algebraic thinking patterns early on.",
      classes: "Classes 3rd to 7th",
      badgeColor: "bg-brand-orange/10 text-brand-orange border-brand-orange/20"
    },
    NSO: {
      title: "NSO / ISO - National & International Science Olympiad",
      focus: "Motion, Force, Plants & Animals, Chemical Reactions, Earth Systems, Scientific Inquiry.",
      benefits: "Trains young minds to observe, formulate hypotheses, test deductions, and draw structured analytical conclusions.",
      classes: "Classes 3rd to 7th",
      badgeColor: "bg-brand-blue/10 text-brand-blue border-brand-blue/20"
    },
    IEO: {
      title: "IEO - International English Olympiad",
      focus: "Word and Structure Knowledge, Reading Comprehension, Spoken and Written Expression.",
      benefits: "Accelerates structural grammar comprehension, context-driven vocabulary lists, and reading comprehension speed.",
      classes: "Classes 3rd to 7th",
      badgeColor: "bg-brand-green/10 text-brand-green border-brand-green/20"
    }
  };

  const checkEligibility = (selected: string) => {
    const nonEligible = ['Nursery', 'KG', '1st', '2nd'];
    if (nonEligible.includes(selected)) {
      return {
        eligible: false,
        message: "Not yet eligible for official Olympiad registries. However, at SCS, we start laying foundations for early logic, mental arithmetic, and visual vocabulary starting from Nursery!",
        classes: "Pre-Primary & Primary Foundation"
      };
    } else {
      return {
        eligible: true,
        message: `Eligible for IMO, NSO, and IEO! Weekly coaching and mock exam preparation are seamlessly integrated into the regular timetable for ${selected} class students.`,
        classes: "Classes 3rd to 7th"
      };
    }
  };

  const eligibilityResult = checkEligibility(selectedClass);

  return (
    <section id="olympiads" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-hand font-extrabold text-3xl sm:text-4xl text-brand-dark mb-4">
            National & International <span className="text-brand-orange">Olympiads</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-bold text-sm tracking-wider uppercase">
            IMO • NSO / ISO • IEO • Shaping Competitive Success
          </p>
        </div>

        {/* Top Split: Programs Info & Success Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Olympiad tabs */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-hand font-bold text-2xl text-brand-dark flex items-center gap-2">
              <Trophy className="text-brand-orange" /> Official Preparatory Programs
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              At Satya Concept School, we believe starting competitive readiness early removes future test-anxiety. We are a registered prep-center, equipping students with logical skills to excel at state and national competitive tables.
            </p>

            {/* Sub Tabs */}
            <div className="flex gap-2 border-b border-gray-100 pb-2">
              {(['IMO', 'NSO', 'IEO'] as const).map((olympiad) => (
                <button
                  key={olympiad}
                  onClick={() => setActiveOlympiad(olympiad)}
                  className={`px-4 py-2 font-bold text-sm rounded-t-xl transition-all duration-200 cursor-pointer ${
                    activeOlympiad === olympiad
                      ? 'border-b-4 border-brand-orange text-brand-orange'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {olympiad} Program
                </button>
              ))}
            </div>

            {/* Tab Panel */}
            <div className="bg-brand-light p-6 rounded-2xl border border-gray-100 space-y-4">
              <div className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold border ${olympiadsDetails[activeOlympiad].badgeColor}`}>
                <Star size={12} fill="currentColor" />
                <span>{olympiadsDetails[activeOlympiad].classes}</span>
              </div>
              <h4 className="font-hand font-bold text-xl text-brand-dark">
                {olympiadsDetails[activeOlympiad].title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-brand-dark">Focus Areas:</strong> {olympiadsDetails[activeOlympiad].focus}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-brand-dark">SCS Benefit:</strong> {olympiadsDetails[activeOlympiad].benefits}
              </p>
            </div>
          </div>

          {/* Right Column: Benefits list */}
          <div className="lg:col-span-5 bg-brand-orange/5 border-2 border-brand-orange/20 rounded-3xl p-8 space-y-6">
            <h4 className="font-hand font-bold text-xl text-brand-dark">
              Key Success Benefits
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="bg-brand-orange text-white p-1 rounded-lg shrink-0 h-fit mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-brand-dark">Analytical Thinking</h5>
                  <p className="text-xs text-gray-500 mt-0.5">Trains students to think outside textbook layouts and apply logic to complex variables.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-brand-orange text-white p-1 rounded-lg shrink-0 h-fit mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-brand-dark">Early Foundation Building</h5>
                  <p className="text-xs text-gray-500 mt-0.5">Forms the bedrock of logical understanding needed for IIT-JEE, NEET, NTSE, and Olympiads in high school.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-brand-orange text-white p-1 rounded-lg shrink-0 h-fit mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-brand-dark">Removes Exam Phobia</h5>
                  <p className="text-xs text-gray-500 mt-0.5">Exposure to external competitive testing patterns builds self-esteem and structured time-management skills.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Eligibility Checker */}
        <div className="bg-brand-light rounded-3xl p-6 md:p-10 border border-gray-100 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Checker Text */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-hand font-bold text-2xl text-brand-dark">
                Olympiad Eligibility Checker
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                We prepare kids across multiple age milestones. Select your child's standard from the options on the right to discover which competitive programs they can participate in.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-orange">
                <span>Find out the SCS curriculum map</span>
                <ChevronRight size={14} />
              </div>
            </div>

            {/* Checker Widget */}
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                  Select Class / Grade
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {classesList.map((cls) => (
                    <button
                      key={cls}
                      onClick={() => setSelectedClass(cls)}
                      className={`py-2 px-1 text-xs font-bold rounded-xl border transition-all duration-150 cursor-pointer ${
                        selectedClass === cls
                          ? 'bg-brand-orange text-white border-brand-orange shadow-md shadow-brand-orange/10'
                          : 'bg-brand-light border-gray-100 text-gray-600 hover:bg-gray-100 hover:text-brand-dark'
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic result panel */}
              <div className={`p-4 rounded-xl border transition-all duration-300 ${
                eligibilityResult.eligible
                  ? 'bg-brand-green/5 border-brand-green/20'
                  : 'bg-brand-yellow/5 border-brand-yellow/20'
              }`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                    eligibilityResult.eligible
                      ? 'bg-brand-green text-white'
                      : 'bg-brand-yellow-dark text-white'
                  }`}>
                    {eligibilityResult.eligible ? 'Eligible' : 'Foundation Prep Only'}
                  </span>
                  <span className="text-xs text-gray-400 font-bold">
                    {eligibilityResult.classes}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-gray-600">
                  {eligibilityResult.message}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
