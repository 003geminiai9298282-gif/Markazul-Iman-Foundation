import React from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Facebook, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowUp,
  MessageSquare 
} from 'lucide-react';
import { Language } from '../types';
import { CONTACT_INFO, INSTITUTIONS } from '../data/content';

interface FooterProps {
  lang: Language;
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenDonate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-amber-500 flex items-center justify-center font-bold text-white text-lg">
                মা
              </div>
              <div>
                <h3 className="font-bold text-white text-base">
                  {lang === 'bn' ? CONTACT_INFO.nameBn : CONTACT_INFO.nameEn}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  {lang === 'bn' ? CONTACT_INFO.foundationNameBn : CONTACT_INFO.foundationNameEn}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              {lang === 'bn' ? (
                <>
                  আর্তমানবতার সেবা, দ্বীনি ও সাধারণ শিক্ষার সমন্বয়, তরুণ প্রজন্মের নৈতিক ক্ষমতায়ন এবং সমাজের অবহেলিত মানুষের সার্বিক কল্যাণে নিবেদিত প্রতিষ্ঠান।
                </>
              ) : (
                <>
                  Dedicated to humanitarian relief, integrated religious and ethical education, youth empowerment, and compassionate social welfare in Bangladesh.
                </>
              )}
            </p>

            {/* Social & Contact pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                title="Official Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white transition-colors"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`https://${CONTACT_INFO.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-400 transition-colors"
                title="Website"
              >
                <Globe className="w-4 h-4" />
              </a>

              <a
                href={`tel:${CONTACT_INFO.primaryPhone}`}
                className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {lang === 'bn' ? 'প্রয়োজনীয় লিংক' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about-scholar" className="hover:text-white transition-colors">{lang === 'bn' ? 'মুফতি সাহেব পরিচিতি' : 'About Mufti Wahidul Alam'}</a></li>
              <li><a href="#institutions" className="hover:text-white transition-colors">{lang === 'bn' ? 'দায়িত্ব ও আধ্যাত্মিক পরিচয়' : 'Offices & Lineage'}</a></li>
              <li><a href="#foundation" className="hover:text-white transition-colors">{lang === 'bn' ? 'মারকাজুল ঈমান ফাউন্ডেশন' : 'Markazul Iman Foundation'}</a></li>
              <li><a href="#committees" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">{lang === 'bn' ? 'কমিটি ও কার্যক্রম' : 'Committees & Governance'}</a></li>
              <li><a href="#focus-areas" className="hover:text-white transition-colors">{lang === 'bn' ? 'মূল কর্মক্ষেত্র' : 'Focus Areas'}</a></li>
              <li><a href="#campaigns" className="hover:text-white transition-colors">{lang === 'bn' ? 'চলমান ত্রাণ প্রকল্প' : 'Relief Campaigns'}</a></li>
              <li><a href="#bayans" className="hover:text-white transition-colors">{lang === 'bn' ? 'বয়ান ও জুমার খুতবাহ' : 'Lectures & Bayans'}</a></li>
              <li><a href="#facebook-connect" className="text-blue-400 hover:text-blue-300 transition-colors">{lang === 'bn' ? 'ফেসবুক পেজ পোর্টাল' : 'Facebook Page'}</a></li>
            </ul>
          </div>

          {/* Col 3: Institutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {lang === 'bn' ? 'মূল প্রতিষ্ঠানসমূহ' : 'Leadership Institutions'}
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="font-semibold text-white">Jamia Imam Bukhari</div>
                <div className="text-stone-400 text-[11px]">Sector-4, Uttara, Dhaka-1230</div>
              </div>
              <div>
                <div className="font-semibold text-white">Masjid Al Magfirah</div>
                <div className="text-stone-400 text-[11px]">Sector-3, Uttara, Dhaka-1230</div>
              </div>
              <div>
                <div className="font-semibold text-white">Talimul Islam Trust</div>
                <div className="text-stone-400 text-[11px]">Reg: IV-40/24 | Dalipara, Turag, Dhaka</div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact details & Support CTA */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              {lang === 'bn' ? 'যোগাযোগ ও সহায়তা' : 'Contact & Support'}
            </h4>
            
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+880 1711-384681</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+880 1511-384681</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{CONTACT_INFO.website}</span>
              </div>
            </div>

            <button
              onClick={onOpenDonate}
              className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow transition-all cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{lang === 'bn' ? 'ফাউন্ডেশনে দান করুন' : 'Support Foundation'}</span>
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {CONTACT_INFO.nameEn}. {lang === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All Rights Reserved.'}
          </div>

          <div className="flex items-center gap-4">
            <span>{CONTACT_INFO.foundationNameEn}</span>
            <span>•</span>
            <span>Talimul Islam Trust (IV-40/24)</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
