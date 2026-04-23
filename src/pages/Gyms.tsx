
import { MapPin, Users, Award, Shield, ChevronRight, Facebook, Send, Phone, Mail, Youtube, Star } from "lucide-react";
import { useOutletContext, Link } from "react-router-dom";
import { motion } from "motion/react";
import { gyms } from "../data/gyms";
import { fighters } from "../data/fighters";
import { translations, Language } from "../data/translations";

export default function Gyms() {
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language];
  const urlLang = language === "KH" ? "km" : "en";
  const gymList = Object.values(gyms);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center md:text-left w-full md:w-auto"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Shield className="text-brand-gold" size={18} />
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">{t.gyms.sourceOfPower}</span>
            </div>
            <h1 className="text-4xl xs:text-5xl md:text-6xl font-display font-medium text-white tracking-tighter uppercase leading-none">
              {t.gyms.title}
            </h1>
          </motion.div>
        </div>

        {/* GYMS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {gymList.map((gym, i) => (
            <motion.div
              key={gym.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-[#0a0a0a] rounded-[40px] border border-white/5 overflow-hidden hover:border-brand-gold/30 transition-all duration-500 shadow-2xl"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={gym.image} 
                  alt={gym.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
                
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="text-brand-gold" size={16} />
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">{gym.location}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-medium text-white leading-none uppercase">{gym.name}</h3>
                </div>
              </div>
              
              <div className="p-10 flex flex-col gap-8 flex-grow">
                <p className="text-[#888] font-medium leading-relaxed text-lg italic">
                  "{gym.description}"
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="text-brand-gold" size={16} />
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">{t.gyms.headCoach}</span>
                    </div>
                    <span className="text-xl font-display text-white">{gym.headCoach}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="text-brand-gold" size={16} />
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">{t.gyms.contactSocial}</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {gym.facebook && (
                        <a href={gym.facebook} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-brand-gold transition-colors">
                          <Facebook size={20} />
                        </a>
                      )}
                      {gym.telegram && (
                        <a href={gym.telegram} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-brand-gold transition-colors">
                          <Send size={20} />
                        </a>
                      )}
                      {gym.youtube && (
                        <a href={gym.youtube} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-brand-gold transition-colors">
                          <Youtube size={20} />
                        </a>
                      )}
                      {gym.phone && (
                        <a href={`tel:${gym.phone}`} className="text-[#444] hover:text-brand-gold transition-colors">
                          <Phone size={20} />
                        </a>
                      )}
                      {gym.email && (
                        <a href={`mailto:${gym.email}`} className="text-[#444] hover:text-brand-gold transition-colors">
                          <Mail size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="text-brand-gold fill-brand-gold" size={14} />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{t.gyms.notableFighters}</span>
                  </div>
                  
                  {gym.notableFighters && gym.notableFighters.length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                      {gym.notableFighters.map(fighterId => {
                        const fighter = fighters[fighterId];
                        if (!fighter) return null;
                        return (
                          <Link 
                            key={fighterId}
                            to={`/${urlLang}/fighters/${fighterId}`}
                            className="bg-white/5 hover:bg-brand-gold/10 border border-white/10 hover:border-brand-gold/30 px-4 py-2 rounded-xl transition-all group/fighter"
                          >
                            <span className="text-sm font-display text-white group-hover/fighter:text-brand-gold transition-colors uppercase tracking-tight">{fighter.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-[#444] text-[10px] uppercase font-bold tracking-widest italic">
                      {t.gyms.noFightersListed}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-8 border-t border-white/5 flex items-center justify-between">
                   <div className="flex flex-wrap gap-4">
                      {gym.facilities.map(facility => (
                        <span key={facility} className="text-[10px] font-bold text-[#444] uppercase tracking-widest">{facility}</span>
                      ))}
                   </div>
                   <Link 
                    to={`/${urlLang}/contact`} 
                    className="flex items-center gap-2 text-brand-gold text-xs font-black uppercase tracking-widest hover:text-white transition-colors"
                  >
                    {t.gyms.inquire} <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ECOSYSTEM CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 bg-brand-gold rounded-[40px] text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-2xl">
             <h2 className="text-brand-dark font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-6">
                {t.gyms.onboardingTitle}
             </h2>
             <p className="text-brand-dark/70 font-medium text-lg leading-relaxed">
                {t.gyms.onboardingSubtitle}
             </p>
          </div>
          <Link 
            to={`/${urlLang}/contact`} 
            className="w-full lg:w-auto px-12 py-6 bg-black text-white rounded-3xl font-bold text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-3"
          >
            {t.gyms.requestOnboarding}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
