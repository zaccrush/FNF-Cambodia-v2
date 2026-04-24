import { Play, ArrowRight, Star, Trophy, Users, Shield, Handshake, UserPlus, ChevronRight } from "lucide-react";
import { useOutletContext, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { fighters } from "../data/fighters";
import { translations, Language } from "../data/translations";
import { LazyImage } from "../components/LazyImage";
import { useState, useEffect } from "react";

export default function Home() {
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language];
  const urlLang = language === "KH" ? "km" : "en";
  
  useEffect(() => {
    // Scroll handling for potential other effects if needed, but not for the button presence anymore
    const handleScroll = () => {
      // ...
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const redFighter = fighters['prom-samnang'];
  const blueFighter = fighters['keo-rumchong'];

  const features = [
    { icon: <Trophy size={20} />, title: "Championship Lineage", desc: "Ancestral Kun Khmer mastered." },
    { icon: <Users size={20} />, title: "Elite Matchmaking", desc: "Global athletes collide." },
    { icon: <Shield size={20} />, title: "Verified Records", desc: "Standardized fight registry." }
  ];

  return (
    <>
      {/* HERO SECTION - HIGH OCTANE */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 min-h-[80vh] flex flex-col justify-start overflow-hidden bg-brand-dark">
        {/* Dynamic Background Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-brand-dark"
        >
          <LazyImage 
            src="/hero-kick.jpg" 
            alt="Kun Khmer Fighters in Action" 
            className="w-full h-full filter saturate-[0.7] contrast-110 brightness-[0.6] transition-opacity duration-1000"
            loading="eager"
            decoding="sync"
          />
          {/* Radial gradient and vignette for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-brand-dark/50 to-brand-dark/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/40 to-transparent z-10 w-full" />
        </motion.div>

        {/* Diagonal Marquee Ticker */}

        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="max-w-4xl text-center sm:text-left flex-1 relative z-20 mb-8 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Live broadcast badge removed per request */}
                
                <div className="mb-4 md:mb-8" />
                <h1 className="font-display font-medium tracking-tighter text-balance mb-6 uppercase leading-[0.9] text-white relative">
                  {language === "EN" ? (
                    <span className="block text-5xl xs:text-6xl sm:text-7xl md:text-8xl drop-shadow-2xl relative z-10">
                      Friday Night Fights <br />
                      <span className="text-brand-gold italic">Phnom Penh</span>
                    </span>
                  ) : (
                    <span className="block text-4xl xs:text-5xl sm:text-6xl md:text-7xl leading-tight drop-shadow-2xl relative z-10">
                      កម្មវិធីប្រដាល់ <br />
                      <span className="text-brand-gold italic">រាត្រីថ្ងៃសុក្រ ភ្នំពេញ</span>
                    </span>
                  )}
                </h1>

                <p className="text-[#a0a0a0] font-medium text-lg md:text-2xl max-w-2xl mb-12 flex-1 leading-relaxed drop-shadow-md">
                  {t.home.heroSubtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl">
                  <Link to={`/${urlLang}/register`} className="flex-1 bg-brand-gold text-black py-4 sm:py-5 px-8 font-bold rounded-2xl text-[10px] sm:text-sm uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                    <UserPlus size={20} />
                    {t.home.getRingsideSeats}
                  </Link>
                  <Link to={`/${urlLang}/about`} className="flex-1 bg-white/10 backdrop-blur-md text-white py-4 sm:py-5 px-8 font-bold rounded-2xl text-[10px] sm:text-sm uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/20 hover:-translate-y-1">
                    <ChevronRight size={20} />
                    {t.home.watchTrailer}
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ATHLETES CAROUSEL */}
      <section className="py-16 sm:py-20 bg-[#111] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                 <Star className="text-brand-gold fill-brand-gold" size={14} />
                 <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">The Roster</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-white uppercase tracking-tighter">
                {language === "EN" ? "Featured Athletes" : "អ្នកប្រដាល់លេចធ្លោ"}
              </h2>
            </div>
            <Link to={`/${urlLang}/fighters`} className="hidden sm:flex items-center gap-2 text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors group pb-2">
              Explore Roster <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="w-full relative">
          <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 sm:px-8 xl:px-[calc((100vw-1280px)/2+2rem)]">
            {Object.values(fighters).slice(0, 8).map((fighter, i) => (
              <motion.div
                key={fighter.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="snap-start shrink-0 w-[280px] sm:w-[320px]"
              >
                <Link 
                  to={`/${urlLang}/fighters/${fighter.id}`}
                  className="group block bg-[#1a1a1a] rounded-[32px] border border-white/10 overflow-hidden hover:border-brand-gold/40 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]"
                >
                  <div className="aspect-[4/5] relative overflow-hidden bg-[#0a0a0a]">
                    <LazyImage 
                      src={fighter.image} 
                      alt={fighter.name} 
                      className="w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-[9px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-2">{fighter.weightClass}</div>
                      <h3 className="text-2xl sm:text-3xl font-display font-medium text-white leading-none uppercase tracking-tight">{fighter.name}</h3>
                      {fighter.nameKhmer && (
                        <h4 className="font-khmer text-lg text-white/50 mt-1">{fighter.nameKhmer}</h4>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6 bg-[#1a1a1a]">
                    <div className="flex items-center justify-between text-[#555] mb-4">
                      <div className="text-[10px] font-bold uppercase tracking-widest">Record</div>
                      <div className="text-sm font-display text-white">{fighter.record.wins}-{fighter.record.losses}-{fighter.record.draws}</div>
                    </div>
                    <div className="flex items-center justify-between text-[#555]">
                      <div className="text-[10px] font-bold uppercase tracking-widest">Hometown</div>
                      <div className="text-[10px] font-bold text-white uppercase tracking-tight">{fighter.hometown}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-4 px-6 flex sm:hidden justify-center">
          <Link to={`/${urlLang}/fighters`} className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors px-8 py-4 border border-brand-gold/30 rounded-full hover:bg-brand-gold/10">
            Explore Roster <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* THE EXPERIENCE SECTION - CINEMATIC REDESIGN */}
      <section className="relative py-24 sm:py-40 bg-brand-dark overflow-hidden group">
        {/* Cinematic Backdrop Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] transition-opacity duration-1000 group-hover:opacity-[0.05]">
          <h2 className="text-[20vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap text-white">
            Experience
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            
            {/* Visual Column - Focal Action */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full lg:w-1/2"
            >
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden border border-white/5 shadow-[0_48px_80px_rgba(0,0,0,0.5)] bg-[#0a0a0a]">
                <LazyImage 
                  src="/section1.jpg" 
                  alt="Kun Khmer Arena Atmosphere"
                  className="w-full h-full grayscale brightness-90 contrast-125 hover:scale-110 transition-transform duration-[2000ms] ease-out"
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              {/* Decorative Accents */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/5 rounded-full blur-[100px]" />
            </motion.div>

            {/* Content Column - High Energy Copy */}
            <div className="w-full lg:w-1/2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block text-brand-gold text-[11px] font-black uppercase tracking-[0.4em] mb-4">
                  The Premium Experience
                </span>
                <h3 className="text-5xl md:text-8xl font-display font-medium text-white uppercase tracking-tighter leading-[0.85] mb-8">
                  More Than <br /> A <span className="text-brand-gold italic">Sport</span>.
                </h3>
                <p className="text-white text-xl md:text-2xl font-medium leading-tight opacity-90 italic max-w-xl">
                  "You don’t need to be a martial arts fan to fall in love with Friday Night Fights—you just need a pulse."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 max-w-xl"
              >
                <p className="text-[#888] text-lg md:text-xl font-medium leading-relaxed">
                  Friday Night Fights is Phnom Penh’s premier live sporting event, serving as a vibrant, high-energy crash course in <span className="text-white">Kun Khmer</span>, Cambodia’s ancient kickboxing art.
                </p>
                <p className="text-[#888] text-lg md:text-xl font-medium leading-relaxed">
                  Far from a sterile match, this is a roaring festival. Picture an electric atmosphere filled with passionate locals, flowing ice-cold beers, and an incredibly welcoming environment.
                </p>
                
                <div className="pt-8">
                  <Link to={`/${urlLang}/about`} className="group inline-flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-500">
                      <ArrowRight size={24} className="text-white group-hover:text-black transition-colors" />
                    </div>
                    <div className="text-left">
                       <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold mb-1">Explore</span>
                       <span className="block text-lg font-display font-medium text-white uppercase tracking-tight group-hover:text-brand-gold transition-colors">Our Full Story</span>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION - THE FIGHTER FIRST ECONOMY */}
      <section id="manifesto" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-brand-gold"></span>
              <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em]">{t.home.manifesto?.title}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white uppercase tracking-tighter leading-none mb-10">
              The <span className="text-brand-gold italic">Fighter First</span> Economy
            </h2>
          </motion.div>

          <div className="space-y-12 text-[#888] text-lg sm:text-xl font-medium leading-relaxed">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-white text-2xl font-display italic opacity-90 border-l-2 border-brand-gold pl-6">
                "{t.home.manifesto?.subtitle}"
              </p>
              <div className="whitespace-pre-line">
                {t.home.manifesto?.sections?.intro}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-12 space-y-8"
            >
              <h3 className="text-2xl font-display text-white uppercase tracking-tight">{t.home.manifesto?.sections?.zeroSumTitle}</h3>
              <div className="whitespace-pre-line">
                {t.home.manifesto?.sections?.zeroSumText}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-12 space-y-10"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-display text-white uppercase tracking-tight">{t.home.manifesto?.sections?.pillarsTitle}</h3>
                <p>{t.home.manifesto?.sections?.pillarsIntro}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.home.manifesto?.sections?.pillars?.map((pillar: any, i: number) => (
                  <div key={i} className="p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl hover:border-brand-gold/20 transition-all group">
                    <h4 className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-4 group-hover:text-white transition-colors">{pillar.title}</h4>
                    <p className="text-sm leading-relaxed text-[#666] group-hover:text-[#888] transition-colors">{pillar.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="pt-20 pb-20"
            >
              <div className="relative p-12 sm:p-20 bg-brand-gold text-black rounded-[48px] overflow-hidden group shadow-[0_0_100px_rgba(212,175,55,0.15)]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 text-center max-w-2xl mx-auto">
                  <div className="w-12 h-[2px] bg-black/20 mx-auto mb-10" />
                  <p className="text-2xl sm:text-4xl font-display font-medium leading-tight mb-10 italic">
                    "{t.home.manifesto?.sections?.quote}"
                  </p>
                  <div className="w-12 h-[2px] bg-black/20 mx-auto" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-12 space-y-12"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-display text-white uppercase tracking-tight">{t.home.manifesto?.sections?.callTitle}</h3>
                <p className="pb-8">{t.home.manifesto?.sections?.callFighters}</p>
                <p className="pb-8 border-t border-white/5 pt-8">{t.home.manifesto?.sections?.callMedia}</p>
              </div>

              <div className="pt-8 border-t border-white/5 text-center sm:text-left">
                <p className="text-white text-xl font-display italic mb-6">
                  {t.home.manifesto?.sections?.footer}
                </p>
                <p className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm">
                  {t.home.manifesto?.sections?.welcome}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BECOME A PARTNER - CORPORATE CTA */}
      <section className="relative py-20 sm:py-28 border-t border-white/5 bg-brand-dark overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center gap-3 px-4 py-2 bg-[#1a1a1a] text-brand-gold rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-white/5">
              <Handshake size={14} /> Global Strategic Partnerships
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-medium text-white tracking-tighter uppercase mb-6 drop-shadow-lg">
              {language === "EN" ? "Align With" : "គាំទ្រ"} <br/> 
              <span className="text-brand-gold italic">{language === "EN" ? "Greatness" : "ភាពអស្ចារ្យ"}</span>
            </h2>
            
            <p className="text-[#a0a0a0] text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              {language === "EN" 
                ? "Join the Friday Night Fights alliance. We are actively locking in title sponsors, broadcast distributors, and VIP corporate hospitality partners for the upcoming season. Put your brand center-ring in front of millions of active fans across Southeast Asia."
                : "ក្លាយជាដៃគូសហការជាមួយកម្មវិធីប្រដាល់ភ្នំពេញ។ យើងកំពុងស្វែងរកដៃគូឧបត្ថម្ភ ដៃគូផ្សព្វផ្សាយ និងដៃគូអាជីវកម្មសម្រាប់រដូវកាលថ្មីនេះ។ នាំយកម៉ាកសញ្ញារបស់អ្នកទៅកាន់អ្នកគាំទ្ររាប់លាននាក់។"}
            </p>

            <Link to={`/${language.toLowerCase()}/contact`} className="inline-flex items-center justify-center gap-4 bg-white text-black px-8 py-5 rounded-none font-bold uppercase tracking-[0.2em] text-xs sm:text-sm hover:scale-[1.02] hover:bg-brand-gold transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              {language === "EN" ? "Request Partner Deck" : "ស្នើសុំឯកសារដៃគូ"} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS TICKER - MOCK SCROLL */}
      <section className="py-12 sm:py-16 border-t border-white/5 bg-[#0a0a0a]">
         <div className="max-w-7xl mx-auto px-8">
            <p className="text-center text-[10px] text-[#555] uppercase font-bold tracking-[0.4em] mb-12">Global Strategic Alliances</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 gap-y-10 sm:gap-y-12 opacity-30 grayscale hover:opacity-100 group hover:grayscale-0 transition-all duration-500">
               {[
                 { name: "Sabay", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sabay_Digital_Logo.svg/1200px-Sabay_Digital_Logo.svg.png" },
                 { name: "ISKA", logo: "https://iska.org.uk/wp-content/uploads/2018/11/ISKA-Logo.png" },
                 { name: "Smart", logo: "/smart-axiata.jpg" },
                 { name: "Canon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Canon_logo.svg/2560px-Canon_logo.svg.png" },
                 { name: "PSE", logo: "/pse.jpg" },
                 { name: "SEACOMBAT", logo: "/seacombat.jpg" },
                 { name: "VN THE THAO", logo: "/vnthethao.jpeg" },
                 { name: "Khmer Flow", logo: "/khmer-flow.jpeg" },
                 { name: "Crush Combat", logo: "/crush-combat.jpeg" },
                 { name: "Cemtes International", logo: "/cemtes-international.jpeg" }
               ].map(p => (
                  <div key={p.name} className="h-6 sm:h-8 w-auto">
                    <LazyImage src={p.logo} alt={p.name} className="h-full w-auto brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all" />
                  </div>
               ))}
            </div>
         </div>
      </section>
      
      {/* PERSISTENT MOBILE CTA BAR - STICKY FOR ACTION */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden z-50 bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 p-4">
        <Link to={`/${language.toLowerCase()}/register`} className="block w-full bg-brand-gold text-black py-4 font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(212,175,55,0.3)] text-center animate-pulse">
          {t.home.bookArenaSeats}
        </Link>
      </div>

    </>
  );
}
