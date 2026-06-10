import React, { useState } from 'react';
import { Quote, Star, MessageCircle, User } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeType, setActiveType] = useState<'parents' | 'students'>('parents');

  const parentReviews = [
    {
      name: "R. Srinivasa Rao",
      role: "Parent of Class 5 Student",
      review: "SCS has completely changed how my son studies. Earlier he used to spend hours memorizing paragraphs without understanding. Now, because of concept-based teaching, he explains science concepts with real examples at home. Excellent faculty!",
      stars: 5,
      color: "border-brand-blue bg-brand-blue/5 text-brand-blue"
    },
    {
      name: "T. Lakshmi Devi",
      role: "Parent of Class 2 Student",
      review: "The individual care here is outstanding. The teacher identified that my daughter was struggling with basic letter sounds and gave special attention after classes. She is now reading small storybooks easily! Highly recommended.",
      stars: 5,
      color: "border-brand-green bg-brand-green/5 text-brand-green"
    },
    {
      name: "M. Satyanarayana",
      role: "Parent of Class 6 Student",
      review: "Very pleased with the Olympiad coaching at SCS. Standard math syllabus is upgraded with logical reasoning sheets. My daughter participated in IMO and scored very high ranks. The coaching is highly systematic.",
      stars: 5,
      color: "border-brand-orange bg-brand-orange/5 text-brand-orange"
    }
  ];

  const studentReviews = [
    {
      name: "K. Charitha",
      role: "Class 7 Student",
      review: "I love the Science lab activities at SCS. In science classes, we do not just copy definitions; we actually perform experiments using refraction prisms or magnets. Learning is like playing games here!",
      stars: 5,
      color: "border-brand-purple bg-brand-purple/5 text-brand-purple"
    },
    {
      name: "P. Rakesh",
      role: "Class 5 Student",
      review: "Math was my scariest subject. But the concept mapping at Satya School helped me picture fractions and division using blocks. The math quizzes are super fun and we get nice rewards.",
      stars: 5,
      color: "border-brand-blue bg-brand-blue/5 text-brand-blue"
    }
  ];

  const reviewsToRender = activeType === 'parents' ? parentReviews : studentReviews;

  return (
    <section id="testimonials" className="py-20 bg-brand-light relative">
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
            Hear From Our <span className="text-brand-orange">SCS Family</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-bold text-sm tracking-wider uppercase">
            Parent Reviews • Student Testimonies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveType('parents')}
            className={`px-5 py-3 rounded-2xl font-extrabold text-sm flex items-center gap-2 cursor-pointer shadow-sm ${
              activeType === 'parents'
                ? 'bg-brand-orange text-white scale-102 shadow-md shadow-brand-orange/15'
                : 'bg-white hover:bg-gray-50 text-gray-600'
            }`}
          >
            <User size={18} />
            <span>Parent Reviews</span>
          </button>
          <button
            onClick={() => setActiveType('students')}
            className={`px-5 py-3 rounded-2xl font-extrabold text-sm flex items-center gap-2 cursor-pointer shadow-sm ${
              activeType === 'students'
                ? 'bg-brand-orange text-white scale-102 shadow-md shadow-brand-orange/15'
                : 'bg-white hover:bg-gray-50 text-gray-600'
            }`}
          >
            <MessageCircle size={18} />
            <span>Student Feedback</span>
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsToRender.map((rev, index) => (
            <div 
              key={index}
              className={`bg-white border-2 ${rev.color.split(' ')[0]} rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative`}
            >
              {/* Quote Mark */}
              <div className="absolute -top-4 -right-2 text-gray-100 -z-0">
                <Quote size={80} fill="currentColor" className="opacity-40" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" className="text-brand-yellow" />
                  ))}
                </div>

                {/* Body Text */}
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 border-t border-gray-100 pt-4 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${rev.color.split(' ').slice(1).join(' ')}`}>
                  {rev.name.split(' ').slice(-2).map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">{rev.name}</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
