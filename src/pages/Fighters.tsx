import { Search, Trophy, ChevronDown, Filter } from "lucide-react";
import { useState, useMemo } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { fighters } from "../data/fighters";
import { LazyImage } from "../components/LazyImage";

type SortOption = 'name-asc' | 'name-desc' | 'wins' | 'losses' | 'age-asc' | 'age-desc';

export default function Fighters() {
  const { language } = useOutletContext<{ language: "EN" | "KH" }>();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = [
    { value: 'name-asc', label: language === 'EN' ? 'Name (A-Z)' : 'ឈ្មោះ (ក-អ)' },
    { value: 'name-desc', label: language === 'EN' ? 'Name (Z-A)' : 'ឈ្មោះ (អ-ក)' },
    { value: 'wins', label: language === 'EN' ? 'Most Wins' : 'ឈ្នះច្រើនជាងគេ' },
    { value: 'losses', label: language === 'EN' ? 'Most Losses' : 'ចាញ់ច្រើនជាងគេ' },
    { value: 'age-asc', label: language === 'EN' ? 'Age (Youngest)' : 'អាយុ (ក្មេងបំផុត)' },
    { value: 'age-desc', label: language === 'EN' ? 'Age (Oldest)' : 'អាយុ (ចាស់បំផុត)' },
  ];

  const fighterList = useMemo(() => {
    let filtered = Object.values(fighters).filter(fighter => 
      fighter.name.toLowerCase().includes(search.toLowerCase()) ||
      fighter.nickname.toLowerCase().includes(search.toLowerCase())
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc': return a.name.localeCompare(b.name);
        case 'name-desc': return b.name.localeCompare(a.name);
        case 'wins': return b.record.wins - a.record.wins;
        case 'losses': return b.record.losses - a.record.losses;
        case 'age-asc': return (a.age || 0) - (b.age || 0);
        case 'age-desc': return (b.age || 0) - (a.age || 0);
        default: return 0;
      }
    });
  }, [search, sortBy]);

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
              <Trophy className="text-brand-gold" size={18} />
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">Cambodia's Best</span>
            </div>
            <h1 className="text-4xl xs:text-5xl md:text-6xl font-display font-medium text-white tracking-tighter uppercase leading-none">
              {language === "EN" ? "Kun Khmer Fighters" : "អ្នកប្រដាល់គុនខ្មែរ"}
            </h1>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full sm:w-80 relative group/search"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555] group-focus-within/search:text-brand-gold transition-colors" size={18} />
              <input 
                type="text"
                placeholder={language === "EN" ? "Search athletes..." : "ស្វែងរកអ្នកប្រដាល់..."}
                className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl py-3.5 pl-12 pr-6 text-white text-sm font-medium focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 outline-none transition-all placeholder:text-[#333]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </motion.div>

            {/* Sort Dropdown */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative w-full sm:w-auto"
            >
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="w-full sm:w-auto flex items-center justify-between gap-3 bg-[#1a1a1a] border border-white/5 rounded-2xl px-6 py-3.5 text-white text-sm font-bold uppercase tracking-widest hover:border-brand-gold/30 transition-all group lg:min-w-[200px]"
              >
                <div className="flex items-center gap-2">
                  <Filter size={16} className="text-[#555] group-hover:text-brand-gold transition-colors" />
                  <span className="truncate">{sortOptions.find(o => o.value === sortBy)?.label}</span>
                </div>
                <ChevronDown size={16} className={`text-[#555] transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isSortOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsSortOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-full mt-2 w-full sm:w-64 bg-[#1a1a1a] border border-white/10 rounded-2xl p-2 shadow-2xl z-50 backdrop-blur-xl overflow-hidden"
                    >
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value as SortOption);
                            setIsSortOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                            sortBy === option.value 
                              ? 'bg-brand-gold text-black' 
                              : 'text-[#888] hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* GALLERY GRID / MOBILE LIST */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
          {fighterList.map((fighter, i) => (
            <motion.div
              key={fighter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link 
                to={`/${language.toLowerCase()}/fighters/${fighter.id}`}
                className="group flex flex-row sm:flex-col items-center sm:items-stretch bg-[#1a1a1a] sm:rounded-[32px] rounded-2xl border border-white/10 overflow-hidden hover:border-brand-gold/40 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
              >
                <div className="w-24 h-24 sm:w-full sm:h-auto sm:aspect-[4/5] relative overflow-hidden bg-[#0a0a0a] shrink-0">
                  <LazyImage 
                    src={fighter.image} 
                    alt={fighter.name} 
                    className="w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:animate-subtle-pulse transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60 hidden sm:block" />
                  
                  {/* Desktop Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 hidden sm:block z-10">
                    <div className="text-[9px] font-bold text-brand-gold uppercase tracking-widest mb-1">{fighter.weightClass}</div>
                    <h3 className="text-2xl font-display font-medium text-white leading-none uppercase">{fighter.name}</h3>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col justify-center sm:justify-start flex-1 min-w-0 bg-[#1a1a1a]">
                  {/* Mobile Only Title */}
                  <div className="sm:hidden mb-2">
                    <div className="text-[9px] font-bold text-brand-gold uppercase tracking-widest mb-0.5">{fighter.weightClass}</div>
                    <h3 className="text-lg font-display font-medium text-white leading-none uppercase truncate">{fighter.name}</h3>
                  </div>

                  <div className="flex items-center justify-between text-[#555] sm:mb-4 gap-2">
                    <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest hidden sm:block">Record</div>
                    <div className="text-xs sm:text-sm font-display text-white">{fighter.record.wins} - {fighter.record.losses} - {fighter.record.draws}</div>
                  </div>
                  <div className="flex items-center justify-between text-[#555] gap-2">
                    <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest hidden sm:block">Hometown</div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-[#888] sm:text-white uppercase tracking-tight truncate">{fighter.hometown}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {fighterList.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-[#888] text-lg italic">No athletes found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
