import { User, Mail, Shield, UserPlus, Trophy, MapPin, Phone, Instagram, Send, CheckCircle2, Building2, Users, Facebook } from "lucide-react";
import React, { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { translations, Language } from "../data/translations";

type Role = 'FAN' | 'FIGHTER' | 'GYM';

export default function Register() {
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language];
  const [role, setRole] = useState<Role | null>(null);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const RoleCard = ({ type, title, subtitle, icon: Icon }: { type: Role, title: string, subtitle: string, icon: any }) => (
    <motion.button
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        setRole(type);
        setStep(2);
      }}
      className={`relative p-8 rounded-[32px] border-2 text-left h-full transition-all group ${
        role === type 
          ? 'bg-brand-gold border-brand-gold' 
          : 'bg-[#1a1a1a] border-white/5 hover:border-brand-gold/30'
      }`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
        role === type ? 'bg-black text-brand-gold' : 'bg-[#272727] text-brand-gold group-hover:bg-brand-gold group-hover:text-black'
      }`}>
        <Icon size={28} />
      </div>
      <h3 className={`text-2xl font-display font-medium uppercase mb-2 ${role === type ? 'text-black' : 'text-white'}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${role === type ? 'text-black/70' : 'text-[#888]'}`}>
        {subtitle}
      </p>
      {role === type && (
        <div className="absolute top-6 right-6 text-black">
          <CheckCircle2 size={24} />
        </div>
      )}
    </motion.button>
  );

  if (isSubmitted) {
    return (
      <div className="pt-32 sm:pt-40 pb-24 min-h-[80vh] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full mx-6 p-12 bg-[#1a1a1a] rounded-[40px] border border-brand-gold/20 text-center shadow-[0_0_100px_rgba(212,175,55,0.1)]"
        >
          <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(212,175,55,0.4)]">
            <Send size={40} className="text-black" />
          </div>
          <h2 className="text-4xl font-display text-white uppercase mb-4 tracking-tighter italic">Application Sent!</h2>
          <p className="text-[#888] font-medium text-lg leading-relaxed mb-10">
            {role === 'FIGHTER' 
              ? "Our matchmaking team will review your record and reach out to your gym within 48 hours."
              : "Welcome to the FNF inner circle. You'll receive early access ticket links for our next arena event."}
          </p>
          <Link 
            to={`/${language.toLowerCase()}`}
            className="inline-block bg-brand-gold text-black px-12 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl"
          >
            Return to Arena
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 sm:pt-40 pb-24 min-h-screen bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <header className="max-w-3xl mb-16 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-brand-gold rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-white/5 shadow-xl">
              <UserPlus size={14} /> Fite Your Way to Glory
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-6 uppercase tracking-tighter leading-none italic">
              Join the <span className="text-brand-gold italic">FNF Alliance</span>
            </h1>
            <p className="text-[#888] text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Whether you're a fighter hungry for the gold or a fan looking for ringside heat, the arena awaits.
            </p>
          </motion.div>
        </header>

        {/* Form Container */}
        <div className="max-w-5xl mx-auto space-y-24">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <div className="space-y-20">
                {/* 1. Individual Athletes & Fans Section */}
                <section>
                  <div className="flex flex-col items-center mb-10">
                    <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.4em] mb-4">Individual Pass</h2>
                    <div className="w-12 h-[1px] bg-brand-gold/30"></div>
                  </div>
                  <motion.div 
                    key="athletes-fans"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <RoleCard 
                      type="FIGHTER"
                      title={t.register.fighterTitle}
                      subtitle="Register as a Kun Khmer or MMA professional. Gain access to the national broadcast pipeline."
                      icon={Trophy}
                    />
                    <RoleCard 
                      type="FAN"
                      title={t.register.fanTitle}
                      subtitle="Become a verified fan. Get priority ticket access, exclusive PPV discounts, and more."
                      icon={Shield}
                    />
                  </motion.div>
                </section>

                {/* 2. Institutional Gym Network Section */}
                <section className="relative px-8 py-16 bg-[#1a1a1a]/40 backdrop-blur-md rounded-[48px] border border-white/5 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    <div className="flex-1 text-center lg:text-left">
                      <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.4em] mb-4">Official Partnerships</h2>
                      <h3 className="text-3xl md:text-5xl font-display text-white uppercase italic mb-6 leading-none tracking-tighter">
                        The Gym <span className="text-brand-gold">Alliance</span>
                      </h3>
                      <p className="text-[#888] font-medium leading-relaxed max-w-xl">
                        Scale your camp to the world stage. We provide standardized talent management, health insurance resources, and global media placement for sanctioned FNF partners.
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-full lg:w-96">
                      <RoleCard 
                        type="GYM"
                        title={t.register.gymTitle}
                        subtitle="Join the Tier-1 network of professional training camps in Cambodia."
                        icon={MapPin}
                      />
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[#1a1a1a] rounded-[40px] border border-white/5 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <button 
                  onClick={() => setStep(1)}
                  className="mb-8 text-brand-gold text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
                >
                  &larr; Change Role
                </button>

                <h2 className="text-3xl font-display text-white uppercase italic mb-10 pb-4 border-b border-white/5">
                  {role === 'FIGHTER' ? t.register.fighterTitle : role === 'GYM' ? t.register.gymTitle : t.register.fanTitle}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#555] uppercase tracking-widest ml-1">
                        {role === 'GYM' ? 'Head Coach / Manager Name' : 'Full Name'}
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] group-focus-within:text-brand-gold transition-colors" size={18} />
                        <input required type="text" className="w-full bg-brand-dark border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-brand-gold/40 transition-all font-medium" placeholder="First & Last Name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#555] uppercase tracking-widest ml-1">Email Address</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] group-focus-within:text-brand-gold transition-colors" size={18} />
                        <input required type="email" className="w-full bg-brand-dark border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-brand-gold/40 transition-all font-medium" placeholder="your@email.com" />
                      </div>
                    </div>
                    
                    {role === 'FIGHTER' ? (
                      <>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[#555] uppercase tracking-widest ml-1">Current Gym / Team</label>
                          <div className="relative group">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] group-focus-within:text-brand-gold transition-colors" size={18} />
                            <input required type="text" className="w-full bg-brand-dark border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-brand-gold/40 transition-all font-medium" placeholder="Gym Name" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[#555] uppercase tracking-widest ml-1">Fight Record (W-L-D)</label>
                          <div className="relative group">
                            <Trophy className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] group-focus-within:text-brand-gold transition-colors" size={18} />
                            <input required type="text" className="w-full bg-brand-dark border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-brand-gold/40 transition-all font-medium" placeholder="E.g. 15-2-0" />
                          </div>
                        </div>
                      </>
                    ) : role === 'GYM' ? (
                      <>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[#555] uppercase tracking-widest ml-1">Gym Name</label>
                          <div className="relative group">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] group-focus-within:text-brand-gold transition-colors" size={18} />
                            <input required type="text" className="w-full bg-brand-dark border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-brand-gold/40 transition-all font-medium" placeholder="Official Gym Name" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[#555] uppercase tracking-widest ml-1">Number of Active Fighters</label>
                          <div className="relative group">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] group-focus-within:text-brand-gold transition-colors" size={18} />
                            <input required type="number" className="w-full bg-brand-dark border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-brand-gold/40 transition-all font-medium" placeholder="E.g. 12" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[#555] uppercase tracking-widest ml-1">Phone Number</label>
                          <div className="relative group">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] group-focus-within:text-brand-gold transition-colors" size={18} />
                            <input required type="tel" className="w-full bg-brand-dark border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-brand-gold/40 transition-all font-medium" placeholder="+855 ..." />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[#555] uppercase tracking-widest ml-1">Favorite Discipline</label>
                          <select className="w-full bg-brand-dark border border-white/5 rounded-2xl py-4 px-6 text-white outline-none focus:border-brand-gold/40 transition-all font-medium appearance-none">
                            <option>Kun Khmer</option>
                            <option>MMA</option>
                            <option>Both</option>
                          </select>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-[#555] uppercase tracking-widest ml-1">Social Presence (Optional)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="relative group">
                        <Facebook className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] group-focus-within:text-brand-gold transition-colors" size={18} />
                        <input type="url" className="w-full bg-brand-dark border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-brand-gold/40 transition-all font-medium text-sm" placeholder="Facebook URL" />
                      </div>
                      <div className="relative group">
                        <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] group-focus-within:text-brand-gold transition-colors" size={18} />
                        <input type="url" className="w-full bg-brand-dark border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-brand-gold/40 transition-all font-medium text-sm" placeholder="Instagram URL" />
                      </div>
                      <div className="relative group">
                        <Send className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] group-focus-within:text-brand-gold transition-colors" size={18} />
                        <input type="text" className="w-full bg-brand-dark border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-brand-gold/40 transition-all font-medium text-sm" placeholder="Telegram @handle" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit"
                      className="w-full bg-brand-gold text-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] active:scale-95"
                    >
                      Complete Registration
                    </button>
                    <p className="text-center text-[10px] text-[#444] uppercase font-bold tracking-widest mt-6">
                      By registering, you agree to the FNF Terms of Use and Privacy Policy.
                    </p>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
