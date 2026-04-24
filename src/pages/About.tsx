
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Target, Award, Users, MapPin, Landmark, ChevronRight, Plus, Minus } from 'lucide-react';
import React, { useState } from 'react';

export default function About() {
  const { lang } = useParams();
  const safeLang = lang || 'en';

  const stats = [
    { label: "Founded", value: "2026" },
    { label: "Events/Year", value: "46" },
    { label: "Elite Athletes", value: "200+" },
    { label: "Broadcast Reach", value: "20M+" }
  ];

  return (
    <div className="pt-24 pb-24 bg-brand-dark min-h-screen">
      {/* Editorial Style Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-transparent to-transparent opacity-40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-display font-medium text-white mb-6 uppercase tracking-tighter leading-none">
              The Standard of <br />
              <span className="text-brand-gold">Combat Excellence</span>
            </h1>
            <p className="text-[#888] text-xl font-medium leading-relaxed max-w-2xl">
              FNF Cambodia is the premier destination for striking arts in Southeast Asia, bridging the gap between ancient Kun Khmer tradition and modern professional sports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Stats */}
      <section className="py-20 border-b border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-sm font-bold text-brand-gold uppercase tracking-[0.2em] mb-2">{stat.label}</span>
                <span className="text-4xl font-display text-white">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Spectacle Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-brand-gold/30"></span> What is Friday Night Fights?
              </h2>
              <h3 className="text-5xl md:text-6xl font-display font-medium text-white mb-8 mb-8 uppercase tracking-tighter leading-tight">
                More Than a Sport. <br />
                It’s a <span className="text-brand-gold">Cultural Spectacle</span>.
              </h3>
              
              <div className="relative mt-12 mb-12 lg:mb-0 group">
                <div className="absolute -inset-4 bg-brand-gold/10 blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-[#1a1a1a]">
                  <img 
                    src="/hero-kick.jpg" 
                    alt="Kun Khmer Action"
                    className="w-full h-full object-cover grayscale brightness-110 contrast-125 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
                      Phnom Penh Arena • Live Action
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:pt-[240px]"
            >
              <p className="text-white text-xl font-medium leading-relaxed italic">
                "You don’t need to be a martial arts fan to fall in love with Friday Night Fights—you just need a pulse."
              </p>
              <div className="text-[#888] text-lg font-medium leading-relaxed space-y-6">
                <p>
                  Friday Night Fights is Phnom Penh’s premier live sporting event, serving as a vibrant, high-energy crash course in Kun Khmer, Cambodia’s ancient and revered kickboxing art.
                </p>
                <p>
                  Far from a sterile sporting match, this is a roaring, culturally rich festival broadcast on live national television. Picture an electric atmosphere filled with passionate locals, flowing ice-cold beers, and an incredibly welcoming, tourist-friendly environment.
                </p>
                <p>
                  You’ll sit right in the splash zone of the action with premium ringside seats, soaking up the kind of raw, unfiltered excitement you simply can't find back home.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.2em] mb-12 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-brand-gold/30"></span> Our Philosophy
              </h2>
              <div className="space-y-12">
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-brand-gold border border-white/5">
                      <Shield size={20} />
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white uppercase tracking-tight">Preservation</h3>
                  </div>
                  <p className="text-[#888] font-medium leading-relaxed">
                    We are dedicated to the preservation and global promotion of Kun Khmer, Cambodia's ancestral martial art. Every event is a tribute to the warriors of the past.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-brand-gold border border-white/5">
                      <Award size={20} />
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white uppercase tracking-tight">Innovation</h3>
                  </div>
                  <p className="text-[#888] font-medium leading-relaxed">
                    By implementing the unified rules of striking and local Kun Khmer traditions, we create a hybrid showcase that challenges athletes and thrills global audiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[40px] overflow-hidden border border-white/5 bg-[#1a1a1a] relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 bg-brand-dark rounded-3xl border border-white/10 flex items-center justify-center rotate-45 group-hover:scale-110 transition-transform">
                      <Landmark className="-rotate-45 text-brand-gold" size={40} />
                   </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 p-12 bg-brand-gold rounded-[40px] hidden lg:block">
                <p className="text-black font-display font-bold text-4xl italic">EST 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Detail Section */}
      <section className="py-32 bg-[#0e0e0e]/50 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">Deeper Insight</h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium text-white uppercase tracking-tighter">
              League <span className="text-brand-gold">Architecture</span>
            </h3>
          </motion.div>

          <div className="space-y-4">
            <AccordionItem 
              question="Our Founding Mission" 
              answer={
                <div className="space-y-4 whitespace-pre-line">
                  <p>
                    FNF was built to shatter the status quo of combat sports. We are a promotion engineered from the ground up to empower the athletes who bleed in the ring, driven by three uncompromising pillars:
                  </p>
                  <p>
                    <strong className="text-brand-gold">Pioneering the Fighter-First Economy:</strong> We are introducing a revolutionary financial model to the world, setting an entirely new standard for MMA promotions and events. At FNF, the athletes are the franchise. We are dismantling the old system to ensure that the fighters finally reap the true, equitable rewards of their sacrifice and skill.
                  </p>
                  <p>
                    <strong className="text-brand-gold">Elevating Kun Khmer Globally:</strong> We are taking the ancient, devastating art of Kun Khmer and thrusting it onto the international stage. Every strike thrown is a testament to a rich historical lineage, and we are here to command the global respect this ancestral martial art has always deserved.
                  </p>
                  <p>
                    <strong className="text-brand-gold">Broadcasting Raw, Cinematic Storytelling:</strong> The battle in the ring is only half the narrative. FNF serves as an unfiltered platform dedicated to showcasing the raw, gritty truths of our warriors. Through premium, high-quality production—spanning immersive podcasts, intimate deep-dive interviews, and electrifying event livestreams—we broadcast the scars, the struggles, and the profoundly human journeys behind every fighter.
                  </p>
                </div>
              } 
            />
            <AccordionItem 
              question="The FNF Legacy & History" 
              answer="Starting in 2026, Friday Night Fights quickly became the cornerstone of Phnom Penh's weekend culture. Rising from local club matches to nationally televised championship spectacles, our history is written in the blood, sweat, and glory of Cambodia's premier warriors." 
            />
            <AccordionItem 
              question="Unique Strategic Advantages" 
              answer="What sets FNF apart is our fusion of tradition and technology. From our hybrid octagon-ring setups to our AI-driven matchmaking and global streaming partnerships through ISKA, we offer a professional ecosystem that no other regional promotion can match." 
            />
          </div>
        </div>
      </section>

      {/* Arena Section - The Battleground */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 img-placeholder opacity-5 z-0"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
             <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-[4/5] bg-[#1a1a1a] rounded-3xl border border-white/5 p-8 flex flex-col justify-end group hover:border-brand-gold/30 transition-all">
                      <Users className="text-brand-gold mb-4" size={32} />
                      <h4 className="text-white font-display text-2xl">3,000</h4>
                      <p className="text-[#555] text-xs font-bold uppercase tracking-widest mt-1">Capacity</p>
                   </div>
                   <div className="aspect-[4/5] bg-[#1a1a1a] rounded-3xl border border-white/5 p-8 flex flex-col justify-end mt-12 group hover:border-brand-gold/30 transition-all">
                      <MapPin className="text-brand-gold mb-4" size={32} />
                      <h4 className="text-white font-display text-2xl">Phnom Penh</h4>
                      <p className="text-[#555] text-xs font-bold uppercase tracking-widest mt-1">Global Hub</p>
                   </div>
                </div>
             </div>
             
             <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-brand-gold/30"></span> The Battleground
                </h2>
                <h3 className="text-5xl md:text-6xl font-display font-medium text-white mb-8 uppercase tracking-tighter leading-tight">
                  Phnom Penh <br />
                  <span className="text-brand-gold">Grand Arena</span>
                </h3>
                <p className="text-[#888] font-medium leading-relaxed mb-10 text-lg">
                  Located in the vibrant heart of Phnom Penh, Cambodia, the Phnom Penh Grand Arena is the spiritual home of FNF. Engineered for maximum acoustic impact and visual clarity, it provides an unparalleled atmosphere for 3,000 live spectators and our global broadcast audience.
                </p>
                <ul className="space-y-4">
                   {[
                     "State-of-the-art 360° LED Broadcast Rigging",
                     "VIP Gold Seating with Private Lounge Access",
                     "Hybrid Octagon-Ring Configuration",
                     "International Press & Media Center"
                   ].map((feature, i) => (
                     <li key={i} className="flex items-center gap-3 text-brand-light text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                        {feature}
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-display font-medium text-white mb-8 uppercase tracking-tight">Join the FNF Journey</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to={`/${safeLang}/register`} className="px-8 py-4 bg-brand-gold text-black rounded-xl font-bold text-sm hover:bg-white transition-colors">
              Fighter Registration
            </Link>
            <Link to={`/${safeLang}/about/sponsors`} className="px-8 py-4 bg-[#1a1a1a] text-white border border-white/5 rounded-xl font-bold text-sm hover:bg-[#272727] transition-colors leading-none flex items-center justify-center">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function AccordionItem({ question, answer }: { question: string, answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border border-white/5 rounded-2xl overflow-hidden transition-all ${isOpen ? 'bg-[#1a1a1a] border-brand-gold/20' : 'bg-[#0a0a0a] hover:border-white/10'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-7 flex items-center justify-between text-left group"
      >
        <span className={`text-xl font-display font-medium transition-colors uppercase tracking-tight ${isOpen ? 'text-brand-gold' : 'text-brand-light'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isOpen ? 'border-brand-gold text-brand-gold rotate-180' : 'border-white/10 text-[#555]'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-8 pb-8 text-[#888] font-medium leading-relaxed text-lg border-t border-white/5 pt-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
