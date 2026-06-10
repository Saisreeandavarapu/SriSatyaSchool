import React, { useState } from 'react';
import {
  X, User, Phone, Mail, MapPin, Calendar, BookOpen,
  FileText, ChevronRight, ChevronLeft, CheckCircle2, Send,
  Heart, School, AlertCircle
} from 'lucide-react';

interface AdmissionFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CLASSES = ['Nursery', 'KG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];
const GENDERS = ['Male', 'Female', 'Other'];
const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'Not Known'];

const STEPS = ['Student Info', 'Parent / Guardian', 'Documents & Submit'];

interface FormData {
  // Step 1 – Student
  studentName: string;
  dob: string;
  gender: string;
  bloodGroup: string;
  religion: string;
  classApplying: string;
  previousSchool: string;
  medicalInfo: string;
  // Step 2 – Parent
  fatherName: string;
  motherName: string;
  primaryPhone: string;
  alternatePhone: string;
  email: string;
  address: string;
  city: string;
  occupation: string;
  // Step 3 – Documents
  docBirth: boolean;
  docAadhar: boolean;
  docTC: boolean;
  docReport: boolean;
  docPhotos: boolean;
  declaration: boolean;
}

const INIT: FormData = {
  studentName: '', dob: '', gender: '', bloodGroup: '', religion: '',
  classApplying: 'Nursery', previousSchool: '', medicalInfo: '',
  fatherName: '', motherName: '', primaryPhone: '', alternatePhone: '',
  email: '', address: '', city: '', occupation: '',
  docBirth: false, docAadhar: false, docTC: false, docReport: false, docPhotos: false,
  declaration: false,
};

export const AdmissionFormModal: React.FC<AdmissionFormModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep]         = useState(0);
  const [formData, setFormData] = useState<FormData>(INIT);
  const [errors, setErrors]     = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const set = (field: keyof FormData, value: string | boolean) => {
    setFormData(p => ({ ...p, [field]: value }));
    setErrors(p => ({ ...p, [field]: undefined }));
  };

  const validateStep = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (step === 0) {
      if (!formData.studentName.trim()) e.studentName = 'Required';
      if (!formData.dob)               e.dob         = 'Required';
      if (!formData.gender)            e.gender      = 'Required';
      if (!formData.classApplying)     e.classApplying = 'Required';
    }
    if (step === 1) {
      if (!formData.fatherName.trim() && !formData.motherName.trim())
        e.fatherName = 'At least one parent name is required';
      if (!formData.primaryPhone.trim()) e.primaryPhone = 'Required';
      if (!formData.address.trim())      e.address      = 'Required';
    }
    if (step === 2) {
      if (!formData.declaration) e.declaration = 'You must accept the declaration';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validateStep()) setStep(s => Math.min(s + 1, 2)); };
  const prev = () => setStep(s => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setStep(0); setFormData(INIT); setErrors({}); setSubmitted(false); }, 400);
  };

  const handleBackdropClick = (ev: React.MouseEvent) => {
    if (ev.target === ev.currentTarget) handleClose();
  };

  // Field helpers
  const inputCls = (err?: string) =>
    `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border ${
      err ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white focus:border-brand-blue'
    } focus:ring-2 focus:ring-brand-blue/20`;

  const labelCls = 'block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5';

  return (
    <div
      className="fixed inset-0 z-[8900] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(8px)' }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
        style={{
          background: 'white',
          animation: 'admSlideIn 0.45s cubic-bezier(0.34,1.56,0.64,1) both',
        }}
      >
        {/* Gradient header */}
        <div
          className="relative px-8 pt-8 pb-6 shrink-0"
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0369a1 100%)' }}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/40 hover:text-white/80 p-1.5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <School size={20} className="text-brand-blue" />
            </div>
            <div>
              <h2 className="font-hand font-extrabold text-xl text-white">Admission Application</h2>
              <p className="text-white/50 text-xs">Satya Concept School · 2026-27</p>
            </div>
          </div>

          {/* Step indicator */}
          <div className="flex items-center gap-0">
            {STEPS.map((label, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                      i < step
                        ? 'bg-brand-green border-brand-green text-white'
                        : i === step
                        ? 'bg-white border-white text-brand-dark'
                        : 'bg-transparent border-white/30 text-white/40'
                    }`}
                  >
                    {i < step ? <CheckCircle2 size={14} /> : i + 1}
                  </div>
                  <span
                    className={`text-[9px] font-bold mt-1 uppercase tracking-wide whitespace-nowrap ${
                      i === step ? 'text-white' : i < step ? 'text-brand-green' : 'text-white/30'
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="flex-1 h-0.5 mx-2 mb-4 transition-all duration-500"
                    style={{ background: i < step ? '#10b981' : 'rgba(255,255,255,0.2)' }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">
          {submitted ? (
            // Success screen
            <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #10b981, #047857)' }}
              >
                <CheckCircle2 size={36} className="text-white" />
              </div>
              <h3 className="font-hand font-extrabold text-2xl text-brand-dark mb-3">
                Application Submitted! 🎉
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Thank you, <strong className="text-brand-dark">{formData.fatherName || formData.motherName}</strong>!
                Your application for <strong className="text-brand-blue">{formData.studentName}</strong>{' '}
                (Class {formData.classApplying}) has been received.
              </p>
              <p className="text-gray-400 text-xs mt-3">
                Our admissions team will contact you at <strong>{formData.primaryPhone}</strong> within 24 hours.
              </p>
              <div className="flex gap-4 mt-8">
                <button
                  onClick={handleClose}
                  className="px-6 py-3 rounded-2xl bg-brand-blue text-white font-bold text-sm hover:bg-brand-blue-dark transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">

              {/* ─── STEP 0: Student Info ─── */}
              {step === 0 && (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <User size={16} className="text-brand-blue" />
                    <h3 className="font-bold text-brand-dark text-sm">Student Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className={labelCls}>Student Full Name *</label>
                      <input
                        className={inputCls(errors.studentName)}
                        value={formData.studentName}
                        onChange={e => set('studentName', e.target.value)}
                        placeholder="e.g. Sai Krishna Rao"
                      />
                      {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName}</p>}
                    </div>

                    <div>
                      <label className={labelCls}>Date of Birth *</label>
                      <input
                        type="date"
                        className={inputCls(errors.dob)}
                        value={formData.dob}
                        onChange={e => set('dob', e.target.value)}
                      />
                      {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
                    </div>

                    <div>
                      <label className={labelCls}>Gender *</label>
                      <select
                        className={inputCls(errors.gender)}
                        value={formData.gender}
                        onChange={e => set('gender', e.target.value)}
                      >
                        <option value="">Select gender</option>
                        {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                      {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                    </div>

                    <div>
                      <label className={labelCls}>Class Applying For *</label>
                      <select
                        className={inputCls(errors.classApplying)}
                        value={formData.classApplying}
                        onChange={e => set('classApplying', e.target.value)}
                      >
                        {CLASSES.map(c => <option key={c} value={c}>{c} Standard</option>)}
                      </select>
                    </div>

                    <div>
                      <label className={labelCls}>Blood Group</label>
                      <select
                        className={inputCls()}
                        value={formData.bloodGroup}
                        onChange={e => set('bloodGroup', e.target.value)}
                      >
                        <option value="">Select blood group</option>
                        {BLOOD_GROUPS.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className={labelCls}>Religion</label>
                      <input
                        className={inputCls()}
                        value={formData.religion}
                        onChange={e => set('religion', e.target.value)}
                        placeholder="e.g. Hindu"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className={labelCls}>Previous School (if any)</label>
                      <input
                        className={inputCls()}
                        value={formData.previousSchool}
                        onChange={e => set('previousSchool', e.target.value)}
                        placeholder="Name of previous school"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className={labelCls}>Medical Conditions / Allergies</label>
                      <textarea
                        rows={2}
                        className={`${inputCls()} resize-none`}
                        value={formData.medicalInfo}
                        onChange={e => set('medicalInfo', e.target.value)}
                        placeholder="Any known medical conditions or special needs (optional)"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* ─── STEP 1: Parent Info ─── */}
              {step === 1 && (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <Heart size={16} className="text-brand-orange" />
                    <h3 className="font-bold text-brand-dark text-sm">Parent / Guardian Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Father's Name</label>
                      <input
                        className={inputCls(errors.fatherName)}
                        value={formData.fatherName}
                        onChange={e => set('fatherName', e.target.value)}
                        placeholder="Father's full name"
                      />
                      {errors.fatherName && <p className="text-red-500 text-xs mt-1">{errors.fatherName}</p>}
                    </div>

                    <div>
                      <label className={labelCls}>Mother's Name</label>
                      <input
                        className={inputCls()}
                        value={formData.motherName}
                        onChange={e => set('motherName', e.target.value)}
                        placeholder="Mother's full name"
                      />
                    </div>

                    <div>
                      <label className={labelCls}>Primary Phone *</label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          className={`${inputCls(errors.primaryPhone)} pl-10`}
                          value={formData.primaryPhone}
                          onChange={e => set('primaryPhone', e.target.value)}
                          placeholder="10-digit mobile"
                        />
                      </div>
                      {errors.primaryPhone && <p className="text-red-500 text-xs mt-1">{errors.primaryPhone}</p>}
                    </div>

                    <div>
                      <label className={labelCls}>Alternate Phone</label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          className={`${inputCls()} pl-10`}
                          value={formData.alternatePhone}
                          onChange={e => set('alternatePhone', e.target.value)}
                          placeholder="Optional"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className={labelCls}>Email Address</label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          className={`${inputCls()} pl-10`}
                          value={formData.email}
                          onChange={e => set('email', e.target.value)}
                          placeholder="parent@email.com (optional)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelCls}>Parent's Occupation</label>
                      <input
                        className={inputCls()}
                        value={formData.occupation}
                        onChange={e => set('occupation', e.target.value)}
                        placeholder="e.g. Farmer, Teacher, Business"
                      />
                    </div>

                    <div>
                      <label className={labelCls}>City / Town</label>
                      <div className="relative">
                        <MapPin size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          className={`${inputCls()} pl-10`}
                          value={formData.city}
                          onChange={e => set('city', e.target.value)}
                          placeholder="e.g. Vizianagaram"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className={labelCls}>Full Address *</label>
                      <textarea
                        rows={2}
                        className={`${inputCls(errors.address)} resize-none`}
                        value={formData.address}
                        onChange={e => set('address', e.target.value)}
                        placeholder="House No., Street, Village / Town, District"
                      />
                      {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                    </div>
                  </div>
                </>
              )}

              {/* ─── STEP 2: Documents ─── */}
              {step === 2 && (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText size={16} className="text-brand-green" />
                    <h3 className="font-bold text-brand-dark text-sm">Required Documents Checklist</h3>
                  </div>
                  <p className="text-xs text-gray-400 mb-4">
                    Please confirm the documents you will bring during campus verification. Carry originals + photocopies.
                  </p>

                  {([
                    { key: 'docBirth',   label: "Child's Birth Certificate (Original & Photocopy)", icon: Calendar },
                    { key: 'docAadhar',  label: "Aadhar Card of child and both parents",            icon: User },
                    { key: 'docTC',      label: "Transfer Certificate — TC (For Class 2 to 7)",      icon: School },
                    { key: 'docReport',  label: "Previous Class Report Card / Progress Card",        icon: BookOpen },
                    { key: 'docPhotos',  label: "4 recent Passport-size photographs of the child",   icon: FileText },
                  ] as { key: keyof FormData; label: string; icon: React.ElementType }[]).map(({ key, label, icon: Icon }) => (
                    <label
                      key={key}
                      className={`flex items-start gap-3 p-4 rounded-2xl cursor-pointer border transition-all duration-200 mb-3 ${
                        formData[key]
                          ? 'bg-brand-green/5 border-brand-green/30'
                          : 'bg-gray-50 border-gray-200 hover:border-brand-blue/30'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="mt-0.5 w-4 h-4 rounded accent-brand-green cursor-pointer"
                        checked={formData[key] as boolean}
                        onChange={e => set(key, e.target.checked)}
                      />
                      <div className="flex items-start gap-2.5">
                        <Icon size={15} className={formData[key] ? 'text-brand-green mt-0.5' : 'text-gray-400 mt-0.5'} />
                        <span className={`text-sm font-medium ${formData[key] ? 'text-brand-green-dark' : 'text-gray-600'}`}>
                          {label}
                        </span>
                      </div>
                    </label>
                  ))}

                  {/* Declaration */}
                  <div
                    className={`mt-4 p-4 rounded-2xl border transition-all duration-200 ${
                      errors.declaration
                        ? 'bg-red-50 border-red-300'
                        : formData.declaration
                        ? 'bg-brand-blue/5 border-brand-blue/30'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-0.5 w-4 h-4 rounded accent-brand-blue cursor-pointer"
                        checked={formData.declaration}
                        onChange={e => set('declaration', e.target.checked)}
                      />
                      <span className="text-xs text-gray-500 leading-relaxed">
                        I hereby declare that all information provided in this admission application is true and correct to the best of my knowledge. I agree to abide by the rules and regulations of Satya Concept School.
                      </span>
                    </label>
                    {errors.declaration && (
                      <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.declaration}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={prev}
                  className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    step === 0
                      ? 'invisible'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <ChevronLeft size={16} /> Back
                </button>

                {step < 2 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #0ea5e9, #0369a1)', boxShadow: '0 6px 18px rgba(14,165,233,0.3)' }}
                  >
                    Next <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-7 py-2.5 rounded-xl font-extrabold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #10b981, #047857)', boxShadow: '0 6px 18px rgba(16,185,129,0.3)' }}
                  >
                    Submit Application <Send size={14} />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes admSlideIn {
          from { opacity: 0; transform: scale(0.9) translateY(30px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};
