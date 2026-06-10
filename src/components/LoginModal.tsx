import React, { useState } from 'react';
import { X, Lock, User, Eye, EyeOff, GraduationCap, AlertCircle, LogIn } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Credentials ─────────────────────────────────────────────────────────────
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'satya@2024';
const REDIRECT_URL   = 'https://sri-satya-school-admin.vercel.app/';
// ─────────────────────────────────────────────────────────────────────────────

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername]     = useState('');
  const [password, setPassword]     = useState('');
  const [showPass,  setShowPass]    = useState(false);
  const [error,     setError]       = useState('');
  const [loading,   setLoading]     = useState(false);
  const [success,   setSuccess]     = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Please fill in both fields.');
      return;
    }

    setLoading(true);
    // Simulate auth delay for UX
    setTimeout(() => {
      if (username.trim() === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        setSuccess(true);
        setTimeout(() => {
          window.location.href = REDIRECT_URL;
        }, 1200);
      } else {
        setLoading(false);
        setError('Invalid username or password. Please try again.');
      }
    }, 900);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      style={{ background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)' }}
    >
      <div
        className="relative w-full max-w-md animate-[loginSlideIn_0.4s_cubic-bezier(0.34,1.56,0.64,1)_both]"
        style={{
          background: 'linear-gradient(145deg, #0f172a, #0c1a3a)',
          border: '1px solid rgba(14, 165, 233, 0.25)',
          borderRadius: '28px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 40px rgba(14,165,233,0.15)',
          overflow: 'hidden',
        }}
      >
        {/* Top gradient bar */}
        <div
          className="h-1.5 w-full"
          style={{ background: 'linear-gradient(90deg, #0ea5e9, #10b981, #ff6b4a)' }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors p-1.5 rounded-xl hover:bg-white/10 z-10"
        >
          <X size={20} />
        </button>

        <div className="px-8 py-8">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
                boxShadow: '0 8px 24px rgba(14, 165, 233, 0.35)',
              }}
            >
              <GraduationCap size={30} className="text-white" />
            </div>
            <h2 className="font-hand font-extrabold text-2xl text-white mb-1">
              Admin <span className="text-brand-blue">Portal</span>
            </h2>
            <p className="text-white/50 text-sm text-center">
              Satya Concept School — Staff & Management Login
            </p>
          </div>

          {/* Success state */}
          {success && (
            <div
              className="flex flex-col items-center py-6 text-center"
              style={{ animation: 'fadeIn 0.3s ease' }}
            >
              <div className="w-14 h-14 rounded-full bg-green-500/20 border-2 border-green-400/40 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-400 font-bold text-lg">Login Successful!</p>
              <p className="text-white/50 text-sm mt-1">Redirecting to Admin Dashboard…</p>
            </div>
          )}

          {/* Form */}
          {!success && (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Error */}
              {error && (
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl text-sm"
                  style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', color: '#f87171' }}>
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Username */}
              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">
                  Username
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    type="text"
                    value={username}
                    onChange={e => { setUsername(e.target.value); setError(''); }}
                    placeholder="Enter username"
                    autoComplete="username"
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'rgba(14,165,233,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14,165,233,0.12)'; }}
                    onBlur={e =>  { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(''); }}
                    placeholder="Enter password"
                    autoComplete="current-password"
                    className="w-full pl-10 pr-12 py-3.5 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'rgba(14,165,233,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14,165,233,0.12)'; }}
                    onBlur={e =>  { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(p => !p)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-extrabold text-white text-sm flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                style={{
                  background: loading
                    ? 'rgba(14,165,233,0.6)'
                    : 'linear-gradient(135deg, #0ea5e9, #0369a1)',
                  boxShadow: '0 8px 20px rgba(14, 165, 233, 0.35)',
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Verifying…
                  </>
                ) : (
                  <>
                    <LogIn size={16} />
                    Sign In to Dashboard
                  </>
                )}
              </button>
            </form>
          )}

          {/* Footer note */}
          {!success && (
            <p className="text-center text-white/25 text-xs mt-6">
              Access restricted to authorized staff only
            </p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes loginSlideIn {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
