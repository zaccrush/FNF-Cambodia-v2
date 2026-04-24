
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { fighters } from '../data/fighters';
import { Play, Trophy, Calendar, MapPin, Ruler, Weight, User, ChevronRight, ArrowLeft, Scale, X, ArrowRight, ArrowUp, Facebook, Instagram, Twitter, Share2, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import { translations, Language } from '../data/translations';
import { LazyImage } from '../components/LazyImage';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.13-1.31-.12-.07-.26-.18-.33-.15-.453 1.11-.29 2.506.402 3.412.316.417.74.757 1.218 1.002.404.207.854.341 1.312.395v4.11c-.5-.04-1.01-.1-1.51-.22-1.39-.33-2.61-1.2-3.41-2.39-.12-.17-.26-.41-.44-.33-.04.09-.03.21-.03.31v6.98c-.01 1.83-.56 3.61-1.61 5.1-1.2 1.71-3.08 2.92-5.12 3.32-1.42.28-2.92.17-4.29-.31-1.74-.61-3.23-1.87-4.14-3.5C.13 18.06-.11 16.32.05 14.59c.2-2.18 1.22-4.26 2.87-5.71 1.51-1.33 3.49-2.09 5.51-2.12 1.28-.02 2.56.2 3.73.74.13.06.29.18.38.11.08-.1.05-.26.05-.38V.02z" />
  </svg>
);

export default function FighterProfile() {
  const { id } = useParams();
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language];
  const urlLang = language === "KH" ? "km" : "en";
  const fighter = fighters[id || ''];
  
  const [showCompare, setShowCompare] = useState(false);
  const [comparisonId, setComparisonId] = useState<string | null>(null);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const opponent = comparisonId ? fighters[comparisonId] : null;
  const otherFighters = Object.values(fighters).filter(f => f.id !== id);

  if (!fighter) {
    return (
      <div className="pt-32 pb-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-light mb-4 text-brand-light">{t.fighter.fighterNotFound}</h1>
        <Link to={`/${urlLang}/fighters`} className="text-brand-gold hover:underline">
          {t.fighter.returnToRoster}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 sm:pt-40 pb-24 bg-brand-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <LazyImage 
            src={fighter.image} 
            alt={fighter.name}
            className="w-full h-full opacity-20 grayscale brightness-50"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 pt-8 sm:pt-12 pb-12 sm:pb-16">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-10 sm:mb-8">
            <Link 
              to={`/${urlLang}/fighters`} 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-[#888] hover:text-brand-gold hover:bg-white/10 transition-all"
            >
              <ArrowLeft size={14} />
              {t.fighter.backToRoster}
            </Link>

            <button 
              onClick={() => setShowCompare(true)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-brand-gold text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <Scale size={14} />
              {t.fighter.compare}
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center md:items-end text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-shrink-0 w-52 h-64 sm:w-64 sm:h-80 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl relative group rotate-2 bg-[#0a0a0a]"
            >
              <LazyImage 
                src={fighter.image} 
                alt={fighter.name}
                className="w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale"
              />
              <div className="absolute top-4 left-4 inline-flex px-3 py-1 bg-brand-gold text-black text-[9px] font-bold rounded-full uppercase tracking-widest">
                {fighter.style}
              </div>
            </motion.div>

            <div className="flex-1 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex flex-col gap-2 mb-4">
                  <h1 className="text-4xl xs:text-5xl md:text-7xl font-display font-medium text-brand-light tracking-tighter uppercase leading-none">
                    {fighter.name}
                  </h1>
                  {fighter.nameKhmer && (
                    <h2 className="font-khmer text-3xl xs:text-4xl md:text-6xl font-medium text-brand-light/60 tracking-tighter leading-none mt-1">
                      {fighter.nameKhmer}
                    </h2>
                  )}
                </div>
                <p className="text-lg md:text-2xl text-brand-gold font-light italic mb-8 sm:mb-6">
                  "{fighter.nickname}"
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4">
                  <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-4">
                    <p className="text-[9px] text-[#555] uppercase tracking-widest font-bold mb-1">Record</p>
                    <p className="text-xl sm:text-2xl font-display text-brand-light">
                      {fighter.record.wins}-{fighter.record.losses}-{fighter.record.draws}
                    </p>
                    <p className="text-[9px] text-brand-gold font-bold">({fighter.record.ko} KO)</p>
                  </div>
                  <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-4">
                    <p className="text-[9px] text-[#555] uppercase tracking-widest font-bold mb-1">Weight</p>
                    <p className="text-xl sm:text-2xl font-display text-brand-light">{fighter.weightClass}</p>
                    <p className="text-[9px] text-[#555] font-medium">{fighter.weight}</p>
                  </div>
                  <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-4">
                    <p className="text-[9px] text-[#555] uppercase tracking-widest font-bold mb-1">Age</p>
                    <p className="text-xl sm:text-2xl font-display text-brand-light">{fighter.age}</p>
                    <p className="text-[9px] text-[#555] font-medium">Years</p>
                  </div>
                  <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-4">
                    <p className="text-[9px] text-[#555] uppercase tracking-widest font-bold mb-1">Height</p>
                    <p className="text-xl sm:text-2xl font-display text-brand-light">{fighter.height}</p>
                    <p className="text-[9px] text-[#555] font-medium">Metric</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16">
        {/* Biography & Attributes */}
        <div className="lg:col-span-1 space-y-12">
          <section>
            <h3 className="text-sm font-bold text-brand-gold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-gold/30"></span> Biography
            </h3>
            <p className="text-[#888] leading-relaxed font-medium">
              {fighter.bio}
            </p>
          </section>

          <section>
            <h3 className="text-sm font-bold text-brand-gold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-gold/30"></span> Digital Presence
            </h3>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {fighter.socials ? (
                <>
                  {fighter.socials.instagram && (
                    <a href={fighter.socials.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold/30 hover:scale-110 active:scale-95 transition-all">
                      <Instagram size={20} />
                    </a>
                  )}
                  {fighter.socials.facebook && (
                    <a href={fighter.socials.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold/30 hover:scale-110 active:scale-95 transition-all">
                      <Facebook size={20} />
                    </a>
                  )}
                  {fighter.socials.tiktok && (
                    <a href={fighter.socials.tiktok} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold/30 hover:scale-110 active:scale-95 transition-all">
                      <TikTokIcon size={20} />
                    </a>
                  )}
                  {fighter.socials.twitter && (
                    <a href={fighter.socials.twitter} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold/30 hover:scale-110 active:scale-95 transition-all">
                      <Twitter size={20} />
                    </a>
                  )}
                  {fighter.socials.youtube && (
                    <a href={fighter.socials.youtube} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold/30 hover:scale-110 active:scale-95 transition-all">
                      <Youtube size={20} />
                    </a>
                  )}
                </>
              ) : (
                <div className="w-full p-6 rounded-2xl bg-white/5 border border-dashed border-white/10 text-center">
                  <p className="text-[10px] text-[#555] uppercase tracking-widest font-bold mb-3">No personal socials yet</p>
                  <p className="text-xs text-[#888] mb-4">Follow FNF Official for updates on {fighter.name}</p>
                  <div className="flex justify-center gap-3">
                    <a href="https://facebook.com/fridaynightfights" className="text-[#555] hover:text-brand-gold transition-colors"><Facebook size={16} /></a>
                    <a href="#" className="text-[#555] hover:text-brand-gold transition-colors"><Instagram size={16} /></a>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: `${fighter.name} | FNF Roster`,
                    text: `Check out ${fighter.name}'s professional record at Friday Night Fights.`,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Profile link copied to clipboard!');
                }
              }}
              className="w-full py-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#888] hover:text-brand-gold hover:bg-white/10 active:scale-[0.98] transition-all"
            >
              <Share2 size={16} />
              Share Profile
            </button>
          </section>

          <section>
            <h3 className="text-sm font-bold text-brand-gold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-gold/30"></span> Tale of the Tape
            </h3>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Hometown', value: fighter.hometown },
                { icon: Ruler, label: 'Reach', value: fighter.reach || 'N/A' },
                { icon: Weight, label: 'Weight Class', value: fighter.weightClass },
                { icon: User, label: 'Status', value: 'Active' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 group">
                  <div className="flex items-center gap-3 text-[#555] group-hover:text-brand-gold transition-colors">
                    <item.icon size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-brand-light">{item.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Fight History Table */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-bold text-brand-gold uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-gold/30"></span> Fight History
            </h3>
            <div className="text-[10px] font-bold text-[#555] uppercase tracking-widest">
              Last {fighter.history.length} Outings
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/5 bg-[#1a1a1a]/40 backdrop-blur-md">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-6 py-4 text-[10px] font-bold text-[#555] uppercase tracking-widest">Outcome</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-[#555] uppercase tracking-widest">Opponent</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-[#555] uppercase tracking-widest">Event</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-[#555] uppercase tracking-widest text-center">Video</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {fighter.history.map((fight) => (
                  <tr key={fight.id} className="group hover:bg-white/5 transition-colors">
                    <td className="px-6 py-6">
                      <div className="flex flex-col">
                        <span className={`text-sm font-bold uppercase ${
                          fight.outcome === 'Win' ? 'text-green-500' : 
                          fight.outcome === 'Loss' ? 'text-red-500' : 'text-brand-gold'
                        }`}>
                          {fight.outcome}
                        </span>
                        <span className="text-[10px] text-[#555] font-bold">{fight.method}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-brand-light group-hover:text-brand-gold transition-colors">
                          {fight.opponent}
                        </span>
                        <span className="text-[10px] text-[#555] font-bold uppercase tracking-widest">
                          {fight.date}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[#888]">{fight.event}</span>
                        <span className="text-[10px] text-[#555] font-bold uppercase">
                          Rd {fight.round} • {fight.time}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      {fight.videoUrl ? (
                        <a 
                          href={fight.videoUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex w-10 h-10 items-center justify-center bg-brand-gold text-black rounded-full hover:scale-110 transition-transform shadow-lg shadow-brand-gold/20"
                        >
                          <Play size={16} fill="currentColor" />
                        </a>
                      ) : (
                        <span className="text-[#555] text-[10px] font-bold uppercase">N/A</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <p className="text-[#555] text-xs font-medium max-w-sm text-center">
              Detailed technical breakdowns and punch-by-punch data for sanctioned bouts are available to <span className="text-brand-gold font-bold">FNF+</span> subscribers.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Overlay */}
      <AnimatePresence>
        {showCompare && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-2xl overflow-y-auto px-6 py-12"
          >
            <div className="max-w-6xl mx-auto relative">
              <button 
                onClick={() => {
                  setShowCompare(false);
                  setComparisonId(null);
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-brand-light hover:text-brand-gold border border-white/5 transition-all z-20"
              >
                <X size={24} />
              </button>

              <header className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Scale className="text-brand-gold" size={24} />
                  <span className="text-sm font-bold text-brand-gold uppercase tracking-[0.4em]">{t.fighter.battleAnalyzer}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-medium text-white uppercase tracking-tighter">
                  Tale of the <span className="text-brand-gold">Tape</span>
                </h2>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                
                {/* PRIMARY FIGHTER */}
                <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-8">
                  <div className="w-48 h-60 rounded-[32px] overflow-hidden border border-white/10 bg-[#0a0a0a]">
                    <LazyImage src={fighter.image} alt={fighter.name} className="w-full h-full grayscale" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-medium text-white uppercase tracking-tight leading-none mb-1">{fighter.name}</h3>
                    {fighter.nameKhmer && <h4 className="font-khmer text-2xl font-medium text-white/50 mb-2">{fighter.nameKhmer}</h4>}
                    <p className="text-brand-gold italic">"{fighter.nickname}"</p>
                  </div>
                  <div className="w-full bg-[#1a1a1a]/40 rounded-2xl p-6 border border-white/5">
                    <p className="text-[10px] font-bold text-[#555] uppercase tracking-widest mb-2">Primary Record</p>
                    <p className="text-3xl font-display text-white">{fighter.record.wins}-{fighter.record.losses}-{fighter.record.draws}</p>
                    <p className="text-xs font-bold text-brand-gold mt-1">WIN RATE: {Math.round((fighter.record.wins / (fighter.record.wins + fighter.record.losses + fighter.record.draws)) * 100)}%</p>
                  </div>
                </div>

                {/* COMPARISON DATA HUB */}
                <div className="bg-[#0a0a0a] rounded-[40px] border border-white/5 p-10 flex flex-col items-center relative overflow-hidden">
                   {!opponent ? (
                     <div className="w-full space-y-8 py-12">
                        <p className="text-brand-gold font-bold uppercase tracking-widest text-xs text-center">Select Challenger</p>
                        <div className="grid grid-cols-1 gap-4">
                           {otherFighters.map(f => (
                             <button
                               key={f.id}
                               onClick={() => setComparisonId(f.id)}
                               className="flex items-center justify-between p-4 bg-[#1a1a1a] border border-white/5 rounded-2xl hover:border-brand-gold/40 transition-all group"
                             >
                                <div className="flex items-center gap-4">
                                   <div className="w-10 h-10 rounded-xl overflow-hidden bg-brand-dark flex-shrink-0">
                                      <LazyImage src={f.image} alt={f.name} className="w-full h-full grayscale" />
                                   </div>
                                   <div className="flex flex-col text-left">
                                     <span className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors">{f.name}</span>
                                     {f.nameKhmer && <span className="font-khmer text-xs text-brand-gold/80">{f.nameKhmer}</span>}
                                   </div>
                                </div>
                                <ChevronRight className="text-[#333] group-hover:text-brand-gold" size={16} />
                             </button>
                           ))}
                        </div>
                     </div>
                   ) : (
                     <div className="w-full space-y-12">
                        <div className="space-y-6">
                           {[
                             { label: t.fighter.stats.height, f1: fighter.height, f2: opponent.height },
                             { label: t.fighter.stats.reach, f1: fighter.reach || 'N/A', f2: opponent.reach || 'N/A' },
                             { label: t.fighter.stats.age, f1: fighter.age, f2: opponent.age },
                             { label: t.fighter.stats.ko, f1: fighter.record.ko, f2: opponent.record.ko },
                             { label: t.fighter.stats.weight, f1: fighter.weight, f2: opponent.weight },
                             { label: t.fighter.stats.style, f1: fighter.style, f2: opponent.style },
                           ].map((stat, i) => (
                             <div key={i} className="flex flex-col gap-3">
                                <div className="text-[10px] font-bold text-center text-[#555] uppercase tracking-widest">{stat.label}</div>
                                <div className="flex items-center justify-between bg-[#1a1a1a]/60 rounded-xl px-6 py-4 border border-white/5">
                                   <span className="text-lg font-display text-white">{stat.f1}</span>
                                   <span className="w-px h-6 bg-white/10" />
                                   <span className="text-lg font-display text-white">{stat.f2}</span>
                                </div>
                             </div>
                           ))}
                        </div>
                        <button 
                          onClick={() => setComparisonId(null)}
                          className="w-full py-4 bg-[#1a1a1a] border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-[#888] hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                          {t.fighter.selectChallenger}
                        </button>
                     </div>
                   )}
                </div>

                {/* CHALLENGER FIGHTER */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                  {opponent ? (
                    <>
                      <div className="w-48 h-60 rounded-[32px] overflow-hidden border border-white/10 bg-[#0a0a0a]">
                        <LazyImage src={opponent.image} alt={opponent.name} className="w-full h-full grayscale brightness-75" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-display font-medium text-white uppercase tracking-tight leading-none mb-1">{opponent.name}</h3>
                        {opponent.nameKhmer && <h4 className="font-khmer text-2xl font-medium text-white/50 mb-2">{opponent.nameKhmer}</h4>}
                        <p className="text-brand-gold italic">"{opponent.nickname}"</p>
                      </div>
                      <div className="w-full bg-[#1a1a1a]/40 rounded-2xl p-6 border border-white/5">
                        <p className="text-[10px] font-bold text-[#555] uppercase tracking-widest mb-2">{t.fighter.stats.record}</p>
                        <p className="text-3xl font-display text-white">{opponent.record.wins}-{opponent.record.losses}-{opponent.record.draws}</p>
                        <p className="text-xs font-bold text-brand-gold mt-1">WIN RATE: {Math.round((opponent.record.wins / (opponent.record.wins + opponent.record.losses + opponent.record.draws)) * 100)}%</p>
                      </div>
                    </>
                  ) : (
                    <div className="w-48 h-60 rounded-[32px] border border-dashed border-white/10 flex flex-col items-center justify-center text-[#333]">
                      <User size={48} className="opacity-20 mb-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{language === 'EN' ? 'Awaiting Challenger' : 'កំពុងរង់ចាំអ្នកប្រជែង'}</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[90] w-12 h-12 bg-brand-gold text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:bg-white hover:scale-110 active:scale-95 transition-all outline-none"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
