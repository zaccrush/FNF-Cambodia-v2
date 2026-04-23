
import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { motion } from 'motion/react';
import { Globe, Building2, Workflow, Users2, Shirt, Radio, Tv, Camera, Laptop, GraduationCap, Heart, ExternalLink, Plus } from 'lucide-react';
import { translations, Language } from '../data/translations';

interface Partner {
  name: string;
  category: string;
  logo?: string;
  icon: React.ReactNode;
  description: string;
  cta?: {
    label: string;
    link: string;
  };
}

export default function Partners() {
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language];
  const urlLang = language === "KH" ? "km" : "en";

  const nationalPartners: Partner[] = [
    {
      name: "Sabay Digital",
      category: "Digital Broadcast",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sabay_Digital_Logo.svg/1200px-Sabay_Digital_Logo.svg.png",
      icon: <Globe className="text-brand-gold" size={24} />,
      description: "Our digital partner, with events broadcasted across the most visited Khmer website featuring over 20 million page views and nearly 2 million unique visitors monthly."
    },
    {
      name: "Ministry of Interior",
      category: "Venue & Gov",
      icon: <Building2 className="text-brand-gold" size={24} />,
      description: "Our logistics and government partner, allowing FNF to host events in the center of BKK1, the lively cultural hub of Cambodia's Capital."
    },
    {
      name: "Khmer Flow",
      category: "Official Apparel",
      icon: <Shirt className="text-brand-gold" size={24} />,
      description: "Our official merchandise and apparel partner, bridging elite combat sports aesthetics with modern lifestyle clothing.",
      cta: { label: "Shop Apparel", link: "#" }
    },
    {
      name: "Canon Cambodia",
      category: "Official Camera Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Canon_logo.svg/2560px-Canon_logo.svg.png",
      icon: <Camera className="text-brand-gold" size={24} />,
      description: "Provides high-end broadcast gear at zero capital expenditure to FNF, eliminating equipment rental costs and ensuring premium cinematic quality."
    },
    {
      name: "Cemtes International",
      category: "Tech & Marketing Solutions",
      icon: <Laptop className="text-brand-gold" size={24} />,
      description: "Hadiyyah M Khan's team facilitates the B2B ecosystem, ensuring the hardware, broadcast, and marketing strategies integrate seamlessly for massive exposure to beverage sponsors and VIPs."
    },
    {
      name: "PSE Film School",
      category: "Production Training",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pour_un_Sourire_d%27Enfants_%28France%29_logo.svg/1200px-Pour_un_Sourire_d%27Enfants_%28France%29_logo.svg.png",
      icon: <GraduationCap className="text-brand-gold" size={24} />,
      description: "Provides highly motivated interns to capture 'viral/narrative' camera angles, giving Cambodia's poorest youth a real-world, high-stakes training ground."
    },
    {
      name: "Smart Axiata",
      category: "Mentorship Sponsor",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Smart_Axiata_logo.svg/1200px-Smart_Axiata_logo.svg.png",
      icon: <Heart className="text-brand-gold" size={24} />,
      description: "Steps in to directly fund the 'Mentorship Kicker' that pays professional livestream crews to train PSE students, aligning perfectly with Smart's youth-empowerment brand."
    }
  ];

  const internationalPartners: Partner[] = [
    {
      name: "ISKA World",
      category: "Global Pipeline",
      logo: "https://iska.org.uk/wp-content/uploads/2018/11/ISKA-Logo.png",
      icon: <Workflow className="text-brand-gold" size={24} />,
      description: "FNF serves as a direct pipeline to ISKA international championship events, creating pathways for our high-tier professional fighters."
    },
    {
      name: "Crush Combat",
      category: "Talent Management",
      icon: <Users2 className="text-brand-gold" size={24} />,
      description: "A world-class MMA championship series and talent management agency representing some of the world's top professional fighters."
    },
    {
      name: "SEACOMBAT",
      category: "Media Partner",
      icon: <Radio className="text-brand-gold" size={24} />,
      description: "Led by Leo Commentator, Vietnam's most significant and impactful sports media figure driving regional engagement."
    },
    {
      name: "VN The Thao",
      category: "Vietnam Broadcast",
      icon: <Tv className="text-brand-gold" size={24} />,
      description: "Alongside Tinh Hoa Vo Thuat, Vietnam's leading sports broadcast network tailored to directly reach local audiences, with events broadcasted live."
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-brand-dark min-h-screen">
      {/* Header section */}
      <section className="py-20 border-b border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h2 className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-6">{t.partners.subtitle}</h2>
            <h1 className="text-6xl md:text-7xl font-display font-medium text-white mb-8 tracking-tighter uppercase leading-none">
              {language === 'EN' ? (
                <>Strategic <br /><span className="text-[#444]">Alliances</span></>
              ) : (
                <>{t.partners.title}</>
              )}
            </h1>
            <p className="text-[#888] text-xl font-medium leading-relaxed">
              {t.partners.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* National Partners section */}
      <section className="pt-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-display font-medium text-white uppercase tracking-tight">{t.partners.nationalTitle}</h2>
            <div className="h-[1px] bg-white/10 flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalPartners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 bg-[#0e0e0e] border border-white/5 rounded-3xl hover:border-brand-gold/20 transition-all flex flex-col h-full"
              >
                <div className="mb-8 flex items-center justify-between">
                  {partner.logo ? (
                    <div className="h-12 w-auto flex items-center opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                      <img src={partner.logo} alt={partner.name} className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-2xl bg-[#1a1a1a] flex items-center justify-center border border-white/5 group-hover:bg-brand-gold group-hover:text-black transition-colors">
                      {partner.icon}
                    </div>
                  )}
                  <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest bg-black px-3 py-1 rounded-full border border-white/5">
                    {partner.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-brand-gold transition-colors italic">
                  {partner.name}
                </h3>
                
                <p className="text-[#888] text-sm font-medium leading-relaxed mb-8 flex-grow">
                  {partner.description}
                </p>

                {partner.cta ? (
                  <a 
                    href={partner.cta.link} 
                    className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    {partner.cta.label} <ExternalLink size={12} />
                  </a>
                ) : (
                  <div className="h-4" /> 
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Partners section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-display font-medium text-white uppercase tracking-tight">{t.partners.internationalTitle}</h2>
            <div className="h-[1px] bg-white/10 flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalPartners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 bg-[#0e0e0e] border border-white/5 rounded-3xl hover:border-brand-gold/20 transition-all flex flex-col h-full"
              >
                <div className="mb-8 flex items-center justify-between">
                  {partner.logo ? (
                    <div className="h-12 w-auto flex items-center opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                      <img src={partner.logo} alt={partner.name} className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-2xl bg-[#1a1a1a] flex items-center justify-center border border-white/5 group-hover:bg-brand-gold group-hover:text-black transition-colors">
                      {partner.icon}
                    </div>
                  )}
                  <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest bg-black px-3 py-1 rounded-full border border-white/5">
                    {partner.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-brand-gold transition-colors italic">
                  {partner.name}
                </h3>
                
                <p className="text-[#888] text-sm font-medium leading-relaxed mb-8 flex-grow">
                  {partner.description}
                </p>

                {partner.cta ? (
                  <a 
                    href={partner.cta.link} 
                    className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    {partner.cta.label} <ExternalLink size={12} />
                  </a>
                ) : (
                  <div className="h-4" /> 
                )}
              </motion.div>
            ))}

            {/* Become a partner card */}
            <div className="p-8 border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-brand-gold/40 transition-colors">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-[#444] group-hover:text-brand-gold group-hover:border-brand-gold/40 transition-colors">
                  <Plus size={24} />
               </div>
               <h4 className="text-white font-display text-xl mb-2">{t.partners.becomePartnerTitle}</h4>
               <p className="text-[#555] text-xs mb-6">{t.partners.becomePartnerSubtitle}</p>
               <Link to={`/${urlLang}/contact`} className="px-6 py-2 bg-[#1a1a1a] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all">
                  {t.partners.inquireNow}
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="py-24 bg-brand-gold">
         <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
               <h2 className="text-black font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-4">
                  {t.partners.elevateBrandTitle}
               </h2>
               <p className="text-black/70 font-medium">
                  {t.partners.elevateBrandSubtitle}
               </p>
            </div>
            <Link to={`/${urlLang}/contact`} className="w-full lg:w-auto px-12 py-5 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-transform text-center shadow-2xl">
               {t.partners.corporateDeck}
            </Link>
         </div>
      </section>
    </div>
  );
}
