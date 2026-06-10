import React, { useState } from 'react';
import { FileText, ClipboardList, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    studentName: '',
    studentClass: 'Nursery',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const classes = ['Nursery', 'KG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];
  
  const documents = [
    "Child's Birth Certificate (Original & Photocopy)",
    "Aadhar Card copies of child and parents",
    "Previous school Transfer Certificate (TC) (For Class 2 to 7)",
    "Previous Class Report Card / Progress Card",
    "4 recent Passport-size photographs of the child"
  ];

  const steps = [
    {
      num: "1",
      title: "Submit Enquiry Form",
      desc: "Fill the enquiry details below or visit our Jarajapupeta campus in person."
    },
    {
      num: "2",
      title: "Principal Interaction",
      desc: "A friendly, concept-mapping interview with the child to gauge general aptitude."
    },
    {
      num: "3",
      title: "Document Verification",
      desc: "Submit Aadhar, birth certificates, and photographs for physical ledger logs."
    },
    {
      num: "4",
      title: "Confirm Enrollment",
      desc: "Complete basic admission fees structure and collect school kit books and calendar."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || !formData.studentName) {
      setFormStatus('error');
      return;
    }
    
    // Simulate successful form submission
    setFormStatus('success');
    // Clear form
    setFormData({
      parentName: '',
      phone: '',
      studentName: '',
      studentClass: 'Nursery',
      message: ''
    });
  };

  return (
    <section id="admissions" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-hand font-extrabold text-3xl sm:text-4xl text-brand-dark mb-4">
            Admissions <span className="text-brand-blue">Open 2026-27</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-blue mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-bold text-sm tracking-wider uppercase">
            Simple Process • Nursery to Class 7 Admissions
          </p>
        </div>

        {/* Top: Process & Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Process steps */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-hand font-bold text-2xl text-brand-dark flex items-center gap-2">
              <ClipboardList className="text-brand-blue" /> Admission Process
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div 
                  key={step.num}
                  className="bg-brand-light border border-gray-100 p-5 rounded-2xl flex gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center shrink-0">
                    {step.num}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-brand-dark">{step.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="lg:col-span-5 bg-brand-blue/5 border-2 border-brand-blue/20 rounded-3xl p-8 space-y-6">
            <h3 className="font-hand font-bold text-xl text-brand-dark flex items-center gap-2">
              <FileText className="text-brand-blue" /> Required Documents
            </h3>
            <p className="text-xs text-gray-500 font-medium">
              Please carry photocopy duplicates along with originals during campus verification.
            </p>
            <ul className="space-y-3">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-xs text-gray-600">
                  <div className="bg-brand-blue text-white p-0.5 rounded-full shrink-0 mt-0.5">
                    <CheckCircle2 size={12} />
                  </div>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Enquiry Form Panel */}
        <div className="bg-brand-light rounded-3xl p-6 md:p-10 border border-gray-100 shadow-lg max-w-3xl mx-auto">
          <div className="text-center mb-8 space-y-2">
            <h4 className="font-hand font-bold text-2xl text-brand-dark">
              Admission Fee & Eligibility Enquiry
            </h4>
            <p className="text-sm text-gray-500">
              Submit details below and our Admissions Correspondent will contact you within 24 hours.
            </p>
          </div>

          {formStatus === 'success' && (
            <div className="mb-6 bg-brand-green/10 border border-brand-green/20 text-brand-green-dark p-5 rounded-2xl flex items-start gap-3 animate-pulse-subtle">
              <CheckCircle2 className="shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm">Enquiry Registered Successfully!</h5>
                <p className="text-xs mt-1">
                  Thank you for your interest in Satya Concept School. Our Secretary & Principal team will contact you shortly on the provided phone number.
                </p>
              </div>
            </div>
          )}

          {formStatus === 'error' && (
            <div className="mb-6 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange-dark p-5 rounded-2xl flex items-start gap-3">
              <AlertCircle className="shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm">Required Fields Missing!</h5>
                <p className="text-xs mt-1">Please ensure you fill in Parent Name, Phone number, and Student Name fields before submitting.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Parent Name */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Parent / Guardian Name *
                </label>
                <input 
                  type="text" 
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  placeholder="e.g. K. Srinivas"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Contact Number *
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit mobile number"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                  required
                />
              </div>

              {/* Student Name */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Student Name *
                </label>
                <input 
                  type="text" 
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  placeholder="Child's full name"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                  required
                />
              </div>

              {/* Student Class */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Seeking Admission Class
                </label>
                <select 
                  name="studentClass"
                  value={formData.studentClass}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue cursor-pointer"
                >
                  {classes.map(cls => (
                    <option key={cls} value={cls}>{cls} Standard</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                Additional Queries / Comments
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Ask about fee structures, transport availability, uniform, etc."
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-extrabold px-8 py-3.5 rounded-2xl shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2 mx-auto cursor-pointer transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Submit Fee Enquiry <Send size={16} />
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
