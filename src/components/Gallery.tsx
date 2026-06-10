import React, { useState } from 'react';
import { Sparkles, Calendar, Award, Compass, Eye, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'celebrations' | 'activities' | 'competitions'>('all');
  const [lightboxItem, setLightboxItem] = useState<{ title: string; desc: string; date: string; category: string; color: string; icon: React.ComponentType<any> } | null>(null);

  const galleryItems = [
    {
      title: "Annual Day Celebrations",
      desc: "An evening of dance, drama, and musical stage performances showcasing our students' creative talents.",
      category: "celebrations",
      date: "December 2025",
      color: "from-brand-orange/20 to-brand-yellow/20 border-brand-orange",
      icon: Sparkles
    },
    {
      title: "Science Lab Discovery Day",
      desc: "Middle primary students conducting hands-on chemistry and light spectrum refraction experiments.",
      category: "activities",
      date: "October 2025",
      color: "from-brand-blue/20 to-brand-purple/20 border-brand-blue",
      icon: Compass
    },
    {
      title: "Mental Math Championship",
      desc: "SCS student winners of the regional abacus speed round and mathematical logical analysis.",
      category: "competitions",
      date: "November 2025",
      color: "from-brand-green/20 to-brand-blue/20 border-brand-green",
      icon: Award
    },
    {
      title: "Independence Day Festivities",
      desc: "Patriotic parade, flag hoisting, and national songs choral presentations by classes 3 to 7.",
      category: "celebrations",
      date: "August 2025",
      color: "from-brand-orange/20 to-brand-yellow/20 border-brand-orange",
      icon: Calendar
    },
    {
      title: "Clay Art & Craft Workshop",
      desc: "Our Nursery and KG kids molding clay shapes, basic houses, and animals to develop fine motor skills.",
      category: "activities",
      date: "September 2025",
      color: "from-brand-yellow/20 to-brand-orange/20 border-brand-yellow",
      icon: Sparkles
    },
    {
      title: "Inter-School Spelling Bee",
      desc: "Our primary class champions spelling compound vocabulary words in a spelling face-off.",
      category: "competitions",
      date: "January 2026",
      color: "from-brand-purple/20 to-brand-green/20 border-brand-purple",
      icon: Award
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-hand font-extrabold text-3xl sm:text-4xl text-brand-dark mb-4">
            School <span className="text-brand-blue">Gallery</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-blue mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-bold text-sm tracking-wider uppercase">
            Celebrations • Event logs • Academics Competitions
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {([
            { id: 'all', label: 'All Media' },
            { id: 'celebrations', label: 'Celebrations' },
            { id: 'activities', label: 'Activities' },
            { id: 'competitions', label: 'Competitions' }
          ] as const).map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                filter === btn.id
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15 scale-102'
                  : 'bg-brand-light hover:bg-gray-100 text-gray-600'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative rounded-3xl overflow-hidden border-2 border-dashed border-gray-200/80 bg-white p-3 hover:shadow-xl hover:border-solid transition-all duration-300 flex flex-col h-full"
              >
                {/* Visual card mimicking photo placeholder but beautifully styled */}
                <div className={`relative h-48 w-full rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center overflow-hidden shrink-0`}>
                  {/* Decorative background grid */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  {/* Icon */}
                  <Icon size={48} className="text-brand-dark/30 transform group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Category tag */}
                  <span className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase text-gray-700 shadow-sm">
                    {item.category}
                  </span>

                  {/* Hover Eye Overlay */}
                  <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setLightboxItem(item)}
                      className="bg-white text-brand-dark p-3 rounded-full hover:scale-110 transition-transform shadow-lg cursor-pointer"
                    >
                      <Eye size={20} />
                    </button>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-bold text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {item.date}
                      </span>
                    </div>
                    <h4 className="font-hand font-bold text-lg text-brand-dark leading-snug group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <button
                      onClick={() => setLightboxItem(item)}
                      className="text-xs font-bold text-brand-blue hover:text-brand-blue-dark flex items-center gap-1 cursor-pointer"
                    >
                      View Details &gt;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-brand-dark/75 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative border-4 border-brand-blue animate-float">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-brand-light hover:bg-gray-100 text-gray-500 hover:text-brand-dark transition-colors z-10 cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className={`h-48 bg-gradient-to-tr ${lightboxItem.color} relative flex items-center justify-center`}>
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <lightboxItem.icon size={64} className="text-brand-dark/20" />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="bg-brand-blue/15 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {lightboxItem.category}
                </span>
                <span className="text-xs text-gray-400 font-bold flex items-center gap-1">
                  <Calendar size={14} /> {lightboxItem.date}
                </span>
              </div>
              <h3 className="font-hand font-bold text-2xl text-brand-dark">
                {lightboxItem.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {lightboxItem.desc}
              </p>
              <div className="bg-brand-light p-4 rounded-xl border border-gray-100/60 text-xs text-brand-orange-dark font-semibold">
                Event details logged for parents directory review.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
