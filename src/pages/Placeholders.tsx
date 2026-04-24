import { Link, useParams } from 'react-router-dom';
import { fighters } from '../data/fighters';

const PageContainer = ({ title, description }: { title: string, description: string }) => {
  const { lang } = useParams();
  const safeLang = lang || 'en';
  
  return (
    <div className="pt-32 pb-24 min-h-[60vh] max-w-7xl mx-auto px-8 w-full flex flex-col items-center justify-center text-center">
      <div className="w-12 h-12 bg-[#272727] rounded-full flex items-center justify-center mb-6 border border-white/5">
        <div className="w-3 h-3 bg-brand-gold rounded-sm transform rotate-45"></div>
      </div>
      <h1 className="text-4xl sm:text-5xl font-light mb-4 text-brand-light">{title}</h1>
      <p className="text-[#888] font-medium max-w-lg mx-auto leading-relaxed">{description}</p>
      <Link to={`/${safeLang}`} className="inline-flex mt-10 text-sm font-semibold text-brand-gold hover:text-[#e6be38] transition-colors items-center gap-2">
        &larr; Return to Ringside
      </Link>
    </div>
  );
};

// 3. Kun Khmer Fighters (/fighters)
export const MMAFighters = () => <PageContainer title="MMA Fighters" description="Global mixed martial arts contenders competing under the FNF banner. Experience a diverse range of disciplines meeting in the cage." />;

// 4. Media

// 5. MatchBot / Registration (/register)

// 6. About & Partnerships (/about)

// Legal / Support
export const Contact = () => <PageContainer title="Contact Us" description="General inquiries, media requests, and ticket support." />;
export const PrivacyPolicy = () => <PageContainer title="Privacy Policy" description="How we collect, use, and protect your digital information across the FNF platform." />;
export const TermsOfUse = () => <PageContainer title="Terms of Use" description="Legal agreements and guidelines for utilizing the FNF ticketing and streaming services." />;
