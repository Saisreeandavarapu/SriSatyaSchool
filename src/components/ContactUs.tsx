import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('success');
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Enquiry',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-brand-light relative">
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
            Contact <span className="text-brand-orange">SCS</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-bold text-sm tracking-wider uppercase">
            Visit Campus • Send a Message • Phone Contacts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info Cards & Mock Map */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-hand font-bold text-2xl text-brand-dark">
              Reach Out To Us
            </h3>
            
            {/* Cards */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 flex gap-4 shadow-sm">
                <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-xl shrink-0 h-fit">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-brand-dark">Campus Address</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Satya Concept School (SCS), Jarajapupeta,<br />
                    Nellimarla Mandal, Vizianagaram District,<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 flex gap-4 shadow-sm">
                <div className="bg-brand-green/10 text-brand-green p-3 rounded-xl shrink-0 h-fit">
                  <Phone size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-brand-dark">Call Support</h4>
                  <p className="text-xs text-gray-500 font-medium">
                    Secretary Office: <a href="tel:9059809228" className="hover:underline font-bold text-brand-dark">9059809228</a>
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    Principal Office: <a href="tel:6303975664" className="hover:underline font-bold text-brand-dark">6303975664</a>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 flex gap-4 shadow-sm">
                <div className="bg-brand-yellow/15 text-brand-yellow-dark p-3 rounded-xl shrink-0 h-fit">
                  <Clock size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-brand-dark">Working Hours</h4>
                  <p className="text-xs text-gray-500 font-medium">Monday to Saturday: 8:30 AM to 4:30 PM</p>
                  <p className="text-xs text-gray-500 font-medium">Sunday: Closed (Except during examinations)</p>
                </div>
              </div>
            </div>

            {/* Stylized Vector Mock Map */}
            <div className="bg-white rounded-3xl p-4 border-2 border-dashed border-gray-200 overflow-hidden shadow-inner h-[240px] relative flex flex-col justify-between">
              {/* Map Layout Art */}
              <div className="absolute inset-0 bg-brand-blue/5 -z-0 opacity-80">
                {/* SVG mock map drawing */}
                <svg className="w-full h-full text-gray-300/40" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="100" y2="25" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="0" y1="65" x2="100" y2="60" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="30" y1="0" x2="40" y2="100" stroke="currentColor" strokeWidth="2.5" />
                  <line x1="75" y1="0" x2="70" y2="100" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="37" cy="45" r="3" fill="#ff6b4a" className="animate-ping" />
                  <circle cx="37" cy="45" r="2" fill="#ff6b4a" />
                </svg>
              </div>

              {/* Tag */}
              <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase text-gray-700 shadow-sm border border-gray-100">
                Campus Location
              </div>

              <div className="mt-auto relative z-10 bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-gray-100/60 shadow-sm text-center">
                <h5 className="font-bold text-xs text-brand-dark">Satya Concept School (SCS)</h5>
                <p className="text-[10px] text-gray-500 font-semibold mt-0.5">Located beside Nellimarla road, Jarajapupeta, AP</p>
                <a 
                  href="https://maps.google.com/?q=Jarajapupeta+Nellimarla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[10px] font-extrabold text-white bg-brand-blue px-3 py-1 rounded-lg hover:bg-brand-blue-dark transition-colors cursor-pointer"
                >
                  Open Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-lg space-y-6">
            <div className="space-y-1">
              <h3 className="font-hand font-bold text-2xl text-brand-dark">
                Send Us A Message
              </h3>
              <p className="text-xs text-gray-500">
                Ask a general question, request a principal callback, or submit feedback details.
              </p>
            </div>

            {formStatus === 'success' && (
              <div className="bg-brand-green/10 border border-brand-green/20 text-brand-green-dark p-5 rounded-2xl flex items-start gap-3 animate-pulse-subtle">
                <CheckCircle2 className="shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-sm">Message Sent Successfully!</h5>
                  <p className="text-xs mt-1">
                    Your query has been logged. Our office correspondent will respond to you via email or phone call as soon as possible.
                  </p>
                </div>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="bg-brand-orange/10 border border-brand-orange/20 text-brand-orange-dark p-5 rounded-2xl flex items-start gap-3">
                <AlertCircle className="shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-sm">Required Fields Missing!</h5>
                  <p className="text-xs mt-1">Please fill in Name, Phone number, and Message content prior to sending.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    className="w-full bg-brand-light border border-gray-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-brand-blue"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Mobile number"
                    className="w-full bg-brand-light border border-gray-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-brand-blue"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address (Optional)"
                    className="w-full bg-brand-light border border-gray-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                    Subject / Department
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-brand-light border border-gray-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-brand-blue cursor-pointer"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Principal Callback">Principal Callback</option>
                    <option value="Admin Office">Admin Office</option>
                    <option value="Complaints / Feedback">Complaints / Feedback</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                  Message Content *
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full bg-brand-light border border-gray-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-brand-blue resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-md shadow-brand-blue/15 flex items-center justify-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message <Send size={12} />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
