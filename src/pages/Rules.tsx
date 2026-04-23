
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Target, Clock, Award, Info, Zap, AlertTriangle } from 'lucide-react';

export default function Rules() {
  const { lang } = useParams();
  const safeLang = lang || 'en';

  const sections = [
    {
      title: "Core Format",
      icon: Clock,
      items: [
        { label: "Rounds", value: "5 Rounds" },
        { label: "Round Duration", value: "3 Minutes" },
        { label: "Rest Period", value: "2 Minutes" },
        { label: "Gloves", value: "8-10 oz Sanctioned Gloves" }
      ]
    },
    {
      title: "Valid Weapons",
      icon: Target,
      items: [
        { label: "Stance", value: "Traditional Kun Khmer Stance" },
        { label: "Strikes", value: "Punches, Kicks, Knees, Elbows" },
        { label: "Clinching", value: "Allowed (Continuous Activity)" },
        { label: "Throws", value: "Traditional Khmer Wrestling Throws Allowed" }
      ]
    }
  ];

  const scoringCriteria = [
    {
      title: "Aggression & Control",
      desc: "Scorers favor fighters who maintain the center of the ring and dictate the pace of the collision."
    },
    {
      title: "Technical Execution",
      desc: "Clean strikes, particularly those utilizing 'The Eight Weapons' (Hands, Feet, Knees, Elbows), are weighed heavily."
    },
    {
      title: "Impact & Damage",
      desc: "Significant strikes that visibly affect the opponent take priority over volume of contact."
    }
  ];

  const fouls = [
    "Headbutting",
    "Eye gouging",
    "Biting or spitting",
    "Striking the groin",
    "Attacking a downed opponent",
    "Holding the ring ropes"
  ];

  return (
    <div className="pt-24 pb-24 bg-brand-dark min-h-screen">
      {/* Header section with Vantablack aesthetic */}
      <section className="relative py-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-brand-dark to-brand-dark opacity-50" />
        <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-[#272727] rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-2xl rotate-45"
          >
            <div className="rotate-[-45deg] text-brand-gold">
              <Zap size={32} fill="currentColor" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-brand-light mb-4 tracking-tighter uppercase">
            Kun Khmer <span className="text-brand-gold">Ruleset</span>
          </h1>
          <p className="text-[#888] font-medium max-w-2xl leading-relaxed text-lg">
            Preserving the ancient Khmer boxing tradition while implementing international standards for athlete safety and professional combat sports integrity.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <section.icon size={20} />
                </div>
                <h2 className="text-2xl font-display font-medium text-brand-light uppercase tracking-tight">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 group">
                    <span className="text-xs font-bold text-[#555] uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-brand-light">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scoring & Logic */}
        <section className="mb-24 px-8 py-12 bg-[#1a1a1a]/50 rounded-[32px] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-brand-gold/30"></span> Scoring Philosophy
                </h2>
                <h3 className="text-4xl font-display font-medium text-brand-light uppercase tracking-tight">The Ten point must system</h3>
              </div>
              <div className="px-6 py-3 bg-[#272727] rounded-xl border border-white/5 text-xs font-bold text-[#888] uppercase tracking-widest">
                Official Sanctioning
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {scoringCriteria.map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-[#272727] flex items-center justify-center text-brand-gold font-display font-bold">
                    {i + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-brand-light">{item.title}</h4>
                  <p className="text-sm text-[#888] leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fouls & Prohibited Actions */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
              <AlertTriangle size={20} />
            </div>
            <h2 className="text-2xl font-display font-medium text-brand-light uppercase tracking-tight">Prohibited Actions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fouls.map((foul, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-[#1a1a1a]/30 border border-white/5 rounded-2xl hover:border-red-500/30 transition-colors group">
                <div className="w-2 h-2 rounded-full bg-red-500/40 group-hover:bg-red-500" />
                <span className="text-sm font-semibold text-[#888] group-hover:text-brand-light transition-colors">{foul}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 flex flex-col items-center">
          <div className="p-8 bg-brand-gold/5 border border-brand-gold/10 rounded-[32px] max-w-3xl w-full text-center">
            <Info className="mx-auto mb-6 text-brand-gold" size={32} />
            <h3 className="text-2xl font-display font-medium text-brand-light mb-4 uppercase tracking-tight">Hybrid MMA Consideration</h3>
            <p className="text-[#888] font-medium leading-relaxed mb-8">
              In FNF Cambodia's special hybrid showcase bouts, specific Kun Khmer scoring is blended with Unified Rules of MMA. Note that in these formats, elbows are allowed even on the ground unless specified otherwise by the technical commission.
            </p>
            <Link to={`/${safeLang}/contact`} className="inline-flex px-8 py-4 bg-brand-gold text-black rounded-xl font-bold text-sm hover:bg-[#e6be38] transition-all transform hover:scale-105">
              Contact Commission for Inquiries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
