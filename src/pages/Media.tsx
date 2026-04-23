import { Play, Mic, FileText, ChevronRight, Video as VideoIcon, Clock, Calendar } from "lucide-react";
import { useOutletContext, Link } from "react-router-dom";
import { motion } from "motion/react";
import { translations, Language } from "../data/translations";

export default function Media() {
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language];
  const urlLang = language === "KH" ? "km" : "en";

  const blogs = [
    {
      title: language === "EN" ? "The Rise of Kun Khmer in 2026" : "ការកើនឡើងនៃគុនខ្មែរក្នុងឆ្នាំ ២០២៦",
      date: "Oct 12, 2026",
      category: "Feature",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop",
      readTime: "5 min read"
    },
    {
      title: language === "EN" ? "Training Camp Secrets: Keo Rumchong" : "អាថ៌កំបាំងក្នុងជំរុំហ្វឹកហាត់៖ កែវ រំចង់",
      date: "Oct 10, 2026",
      category: "Interview",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
      readTime: "8 min read"
    },
    {
      title: language === "EN" ? "FNF Grand Arena: Behind the Design" : "ភ្នំពេញ ហ្គ្រេន អាខើណា៖ ពីក្រោយការរចនា",
      date: "Oct 08, 2026",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=800&auto=format&fit=crop",
      readTime: "6 min read"
    }
  ];

  const videos = [
    {
      title: language === "EN" ? "Top 5 KOs of the Season" : "ការផ្តួលដៃគូឱ្យសន្លប់ទាំង ៥ ដែលល្អបំផុតប្រចាំរដូវកាល",
      duration: "12:45",
      views: "1.2M views",
      thumbnail: "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: language === "EN" ? "Kun Khmer Traditions: The Ritual Dance" : "ប្រពៃណីគុនខ្មែរ៖ របាំថ្វាយគ្រូ",
      duration: "08:20",
      views: "850K views",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: language === "EN" ? "Highlights: Phnom Penh Night Fights" : "ទិដ្ឋភាពពិសេស៖ ការប្រកួតនៅភ្នំពេញ",
      duration: "15:10",
      views: "2.4M views",
      thumbnail: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const podcasts = [
    {
      title: language === "EN" ? "Episode 12: The Future of Cambodian MMA" : "ភាគទី ១២៖ អនាគតនៃ MMA កម្ពុជា",
      host: "Leo Commentator",
      length: "45 min",
      date: "Oct 15, 2026"
    },
    {
      title: language === "EN" ? "Episode 11: Inside the Red Corner" : "ភាគទី ១១៖ ក្នុងហោប៉ៅខាងក្រហម",
      host: "Chan Rothana",
      length: "52 min",
      date: "Oct 05, 2026"
    },
    {
      title: language === "EN" ? "Episode 10: The Business of Combat Sports" : "ភាគទី ១០៖ អាជីវកម្មកីឡាប្រយុទ្ធ",
      host: "FNF Management",
      length: "38 min",
      date: "Sep 28, 2026"
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
            <h2 className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-6">FNF Press & Media</h2>
            <h1 className="text-6xl md:text-7xl font-display font-medium text-white mb-8 tracking-tighter uppercase leading-none italic">
              {language === 'EN' ? (
                <>The <span className="text-brand-gold">Video Vault</span> <br />& Newsroom</>
              ) : (
                <>{t.nav.media}</>
              )}
            </h1>
            <p className="text-[#888] text-xl font-medium leading-relaxed">
              Explore the latest Kun Khmer news, exclusive video content, and our official podcast series. Your all-access pass to Friday Night Fights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <FileText className="text-brand-gold" size={24} />
              <h2 className="text-3xl font-display text-white uppercase italic">{t.mediaSections.blogs}</h2>
            </div>
            <Link to="#" className="text-brand-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
              {t.common.readMore} <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6 relative border border-white/5">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-gold text-black text-[9px] font-black uppercase px-3 py-1 rounded-full">
                    {blog.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[#555] text-[10px] font-bold uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {blog.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
                </div>
                <h3 className="text-xl font-display text-white group-hover:text-brand-gold transition-colors leading-tight uppercase">
                  {blog.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <VideoIcon className="text-brand-gold" size={24} />
              <h2 className="text-3xl font-display text-white uppercase italic">{t.mediaSections.videos}</h2>
            </div>
            <Link to="#" className="text-brand-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
              Explore FNF+ <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer relative"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6 relative border border-white/5">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-brand-gold text-black flex items-center justify-center shadow-2xl">
                      <Play size={32} className="fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h3 className="text-xl font-display text-white group-hover:text-brand-gold transition-colors leading-tight uppercase truncate">
                  {video.title}
                </h3>
                <p className="text-[#555] text-xs font-bold uppercase tracking-widest mt-2">
                  {video.views}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <Mic className="text-brand-gold" size={24} />
              <h2 className="text-3xl font-display text-white uppercase italic">{t.mediaSections.podcasts}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {podcasts.map((podcast, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#1a1a1a] border border-white/5 rounded-3xl hover:border-brand-gold/20 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold text-black flex items-center justify-center">
                    <Mic size={24} />
                  </div>
                  <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest">{podcast.length}</span>
                </div>
                <h3 className="text-2xl font-display text-white mb-2 group-hover:text-brand-gold transition-colors italic uppercase leading-tight">
                  {podcast.title}
                </h3>
                <p className="text-[#888] text-sm font-medium mb-6">
                  Host: <span className="text-white">{podcast.host}</span>
                </p>
                <div className="flex items-center justify-between border-t border-white/5 pt-6 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-[#444]">{podcast.date}</span>
                  <button className="text-brand-gold hover:text-white transition-colors">Listen Now &mdash;</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
