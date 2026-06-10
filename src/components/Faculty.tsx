import React from 'react';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

export const Faculty: React.FC = () => {
  const leadership = [
    {
      name: "K. Rambabu",
      role: "Secretary & Correspondent",
      credentials: "M.Sc, B.Ed",
      experience: "23 Years Academic Experience",
      subject: "Mathematics Specialist",
      bgColor: "bg-brand-blue/5 border-brand-blue",
      tagColor: "bg-brand-blue text-white",
      avatarBg: "bg-brand-blue/10 text-brand-blue"
    },
    {
      name: "B. Vijayasree",
      role: "Principal",
      credentials: "B.Sc, B.Ed",
      experience: "Veteran Administrator",
      subject: "English Literature Specialist",
      bgColor: "bg-brand-green/5 border-brand-green",
      tagColor: "bg-brand-green text-white",
      avatarBg: "bg-brand-green/10 text-brand-green"
    }
  ];

  const teachers = [
    { name: "Y. Rama Lakshmi", subject: "Mathematics", degree: "B.Sc, B.Ed" },
    { name: "K. Santosh", subject: "Academic Advisor", degree: "M.A, B.Ed" },
    { name: "K. Lavanya", subject: "Physics", degree: "M.Sc" },
    { name: "P. Santoshi Bhargavi", subject: "Social Studies", degree: "M.A, B.Ed" },
    { name: "K. Shyamala", subject: "Hindi Pandit", degree: "HPT Certified" },
    { name: "M. Ramadevi", subject: "General Subjects", degree: "B.Sc, D.Ed" },
    { name: "B. Jayagree", subject: "Telugu", degree: "B.A, D.Ed" }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section id="faculty" className="py-20 bg-brand-light relative">
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
            Our Dedicated <span className="text-brand-green">Faculty</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-bold text-sm tracking-wider uppercase">
            Qualified Educators • Veteran Academic Leadership
          </p>
        </div>

        {/* School Leadership */}
        <div className="mb-16">
          <h3 className="font-hand font-bold text-2xl text-brand-dark text-center mb-8 flex items-center justify-center gap-2">
            <Users size={20} className="text-brand-blue" /> School Leadership
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader) => (
              <div 
                key={leader.name}
                className={`bg-white border-2 ${leader.bgColor} rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center`}
              >
                {/* Avatar Placeholder */}
                <div className={`w-24 h-24 rounded-full shrink-0 flex items-center justify-center font-hand font-extrabold text-3xl shadow-inner ${leader.avatarBg}`}>
                  {getInitials(leader.name)}
                </div>

                {/* Info */}
                <div className="space-y-2 text-center sm:text-left">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${leader.tagColor}`}>
                    {leader.role}
                  </span>
                  <h4 className="font-hand font-bold text-2xl text-brand-dark pt-1">
                    {leader.name}
                  </h4>
                  <div className="space-y-1 text-sm text-gray-500 font-medium">
                    <p className="flex items-center gap-1.5 justify-center sm:justify-start">
                      <GraduationCap size={16} className="text-gray-400 shrink-0" />
                      <span>{leader.credentials}</span>
                    </p>
                    <p className="flex items-center gap-1.5 justify-center sm:justify-start">
                      <Briefcase size={16} className="text-gray-400 shrink-0" />
                      <span>{leader.experience}</span>
                    </p>
                    <p className="flex items-center gap-1.5 justify-center sm:justify-start">
                      <Award size={16} className="text-gray-400 shrink-0" />
                      <span className="text-brand-dark font-semibold">{leader.subject}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Staff Grid */}
        <div>
          <h3 className="font-hand font-bold text-2xl text-brand-dark text-center mb-8">
            Our Teaching Faculty
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => {
              // Cycle borders colors to mimic 99designs playful look
              const borderStyles = [
                'border-brand-blue hover:shadow-brand-blue/10 bg-brand-blue/5',
                'border-brand-green hover:shadow-brand-green/10 bg-brand-green/5',
                'border-brand-orange hover:shadow-brand-orange/10 bg-brand-orange/5',
                'border-brand-yellow hover:shadow-brand-yellow/10 bg-brand-yellow/5'
              ];
              const textColors = [
                'text-brand-blue-dark',
                'text-brand-green-dark',
                'text-brand-orange-dark',
                'text-brand-yellow-dark'
              ];
              const borderClass = borderStyles[index % borderStyles.length];
              const textColorClass = textColors[index % textColors.length];

              return (
                <div 
                  key={teacher.name}
                  className={`bg-white border-2 ${borderClass} rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
                >
                  <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center font-hand font-extrabold text-lg bg-white shadow-inner mb-4 text-gray-500`}>
                    {getInitials(teacher.name)}
                  </div>
                  <h4 className="font-hand font-bold text-lg text-brand-dark line-clamp-1 mb-1">
                    {teacher.name}
                  </h4>
                  <p className={`text-xs font-extrabold tracking-wide uppercase mb-3 ${textColorClass}`}>
                    {teacher.subject}
                  </p>
                  <div className="bg-gray-50 border border-gray-100 rounded-xl py-1.5 px-3 inline-block">
                    <span className="text-xs text-gray-500 font-bold">{teacher.degree}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
