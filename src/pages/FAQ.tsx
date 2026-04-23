
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { translations, Language } from '../data/translations';

export default function FAQ() {
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language];
  const urlLang = language === "KH" ? "km" : "en";

  return (
    <div className="pt-24 pb-24 bg-brand-dark min-h-screen">
      <section className="relative py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
            <div className="w-16 h-16 bg-[#272727] rounded-2xl flex items-center justify-center mb-8 border border-white/10 mx-auto rotate-12">
               <HelpCircle className="text-brand-gold -rotate-12" size={32} />
            </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 uppercase tracking-tighter">
            {t.faq.title}
          </h1>
          <p className="text-[#888] text-xl font-medium max-w-2xl mx-auto">
            {t.faq.description}
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-8 py-20">
        <div className="space-y-4">
          {t.faq.items.map((faq, i) => (
            <AccordionItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </section>
      
      <section className="mt-12 text-center pb-20">
         <p className="text-[#555] text-sm mb-8">{t.faq.notShowing}</p>
         <Link to={`/${urlLang}/contact`} className="inline-flex px-8 py-3 bg-[#272727] text-white rounded-xl border border-white/5 font-bold text-sm hover:bg-brand-gold hover:text-black transition-all">
            {t.faq.contactSupport}
         </Link>
      </section>
    </div>
  );
}

function AccordionItem({ question, answer, index }: { question: string, answer: string, index: number, key?: any }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className={`border border-white/5 rounded-2xl overflow-hidden transition-all ${isOpen ? 'bg-[#1a1a1a] border-brand-gold/20' : 'bg-[#0e0e0e] hover:border-white/10'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-brand-gold' : 'text-brand-light'}`}>
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
            <div className="px-8 pb-8 text-[#888] font-medium leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
