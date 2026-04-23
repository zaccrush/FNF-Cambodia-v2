import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FighterProfile from "./pages/FighterProfile";
import Rules from "./pages/Rules";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Sponsors from "./pages/Sponsors";
import Partners from "./pages/Partners";
import Fighters from "./pages/Fighters";
import Gyms from "./pages/Gyms";
import Media from "./pages/Media";
import Register from "./pages/Register";
import { 
  MMAFighters,
  Sitemap,
  Contact, 
  PrivacyPolicy, TermsOfUse 
} from "./pages/Placeholders";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to English by default for SEO/Localization Strategy */}
        <Route path="/" element={<Navigate to="/en" replace />} />
        
        {/* Multilingual Subdirectory Routing Core */}
        <Route path="/:lang" element={<Layout />}>
          {/* Main Homepage */}
          <Route index element={<Home />} />
          
          {/* HTML Sitemap */}
          <Route path="sitemap" element={<Sitemap />} />
          
          {/* 3. Fighters - Individual SEO Profiles */}
          <Route path="fighters">
            <Route index element={<Fighters />} />
            <Route path="mma" element={<MMAFighters />} />
            <Route path=":id" element={<FighterProfile />} />
          </Route>

          {/* 4. Media */}
          <Route path="watch" element={<Media />} />
          
          {/* 5. MatchBot / Registration */}
          <Route path="register" element={<Register />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="gyms" element={<Gyms />} />
          <Route path="partners" element={<Partners />} />

          {/* 6. About & Partnerships */}
          <Route path="about">
            <Route index element={<About />} />
            <Route path="rules" element={<Rules />} />
            <Route path="sponsors" element={<Sponsors />} />
          </Route>
          
          {/* Support & Legal Pages */}
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
