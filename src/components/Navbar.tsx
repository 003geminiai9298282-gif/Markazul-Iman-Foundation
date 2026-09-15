import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  Globe, 
  HeartHandshake, 
  Facebook, 
  Share2,
  ExternalLink 
} from 'lucide-react';
import { Language } from '../types';
import { CONTACT_INFO, IMAGES } from '../data/content';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenDonate: () => void;
  scholarPhoto?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenDonate, scholarPhoto }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about-scholar", labelEn: "Mufti Saheb", labelBn: "মুফতি সাহেব" },
    { href: "#institutions", labelEn: "Offices & Lineage", labelBn: "দায়িত্ব ও আধ্যাত্মিক পরিচয়" },
    { href: "#foundation", labelEn: "Foundation", labelBn: "ফাউন্ডেশন" },
    { href: "#committees", labelEn: "Committees", labelBn: "কমিটি ও কার্যক্রম" },
    { href: "#focus-areas", labelEn: "Focus Areas", labelBn: "কর্মক্ষেত্র" },
    { href: "#campaigns", labelEn: "Relief Campaigns", labelBn: "ত্রাণ কার্যক্রম" },
    { href: "#bayans", labelEn: "Lectures & Bayan", labelBn: "বক্তব্য ও বয়ান" },
    { href: "#contact", labelEn: "Contact", labelBn: "যোগাযোগ" },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-stone-900/95 backdrop-blur-md text-white shadow-lg border-b border-amber-500/20 py-2.5' 
          : 'bg-stone-950/90 backdrop-blur-sm text-white py-3.5 border-b border-white/10'
      }`}
    >
      {/* Top micro bar for quick contacts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Scholar Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-md ring-2 ring-amber-400/60 bg-stone-800 flex-shrink-0 relative">
              <img
                src={scholarPhoto || IMAGES.scholarAvatar || IMAGES.scholarPortrait}
                alt={CONTACT_INFO.nameEn}
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = IMAGES.onlineScholarFallback;
                }}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-amber-300 transition-colors">
                {lang === 'bn' ? CONTACT_INFO.nameBn : CONTACT_INFO.nameEn}
              </span>
              <span className="text-xs text-emerald-400 font-medium tracking-wide">
                {lang === 'bn' ? CONTACT_INFO.foundationNameBn : CONTACT_INFO.foundationNameEn}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 rounded-md text-stone-200 hover:text-amber-300 hover:bg-white/5 transition-colors"
              >
                {lang === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Language Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Toggle */}
            <button
              id="lang-toggle-btn"
              onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors"
              title="Toggle Language (English / বাংলা)"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            {/* Direct Phone Call */}
            <a
              id="navbar-call-btn"
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold shadow-sm transition-colors"
              title="Call Directly"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-200" />
              <span>{lang === 'bn' ? 'কল করুন' : 'Call'}</span>
            </a>

            {/* Facebook Page Connect Button */}
            <a
              id="navbar-facebook-btn"
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors"
              title="Facebook Profile & Updates"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'ফেসবুক' : 'Facebook'}</span>
            </a>

            {/* Support / Donate CTA */}
            <button
              id="navbar-donate-btn"
              onClick={onOpenDonate}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow-md transition-all hover:scale-102 cursor-pointer"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'সহায়তা করুন' : 'Support Cause'}</span>
            </button>
          </div>

          {/* Mobile Menu Button & Mobile Lang Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
              className="px-2 py-1 rounded bg-stone-800 text-stone-200 text-xs font-bold border border-stone-700"
            >
              {lang === 'en' ? 'বাং' : 'EN'}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-800 text-stone-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 mt-2 space-y-3 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium border-b border-stone-800 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-stone-300 hover:bg-stone-800 hover:text-amber-300"
              >
                {lang === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-700 text-white text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT_INFO.primaryPhone}</span>
            </a>

            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold"
            >
              <Facebook className="w-4 h-4" />
              <span>{lang === 'bn' ? 'অফিসিয়াল ফেসবুক আইডি' : 'Official Facebook Profile'}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-500 text-stone-950 text-sm font-bold shadow"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{lang === 'bn' ? 'ফাউন্ডেশনে সহায়তা করুন' : 'Donate / Support Foundation'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
