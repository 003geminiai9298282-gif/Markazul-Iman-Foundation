import React from 'react';
import { Phone, MessageSquare, Facebook, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { CONTACT_INFO } from '../data/content';

interface FloatingActionBarProps {
  lang: Language;
  onOpenDonate: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ lang, onOpenDonate }) => {
  return (
    <>
      {/* Mobile Fixed Bottom Navigation Bar (Smartphones & Tablets < 768px) */}
      <nav 
        aria-label="Mobile quick actions" 
        className="block md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-md border-t border-amber-500/20 px-2 py-1.5 pb-safe shadow-2xl"
      >
        <div className="grid grid-cols-4 gap-1 items-center max-w-md mx-auto text-center">
          {/* 1. Call */}
          <a
            href={`tel:${CONTACT_INFO.primaryPhone}`}
            className="flex flex-col items-center justify-center py-1 rounded-lg text-stone-200 hover:text-amber-400 active:scale-95 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-700/80 flex items-center justify-center text-white mb-0.5 shadow-sm">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold text-stone-300 tracking-tight">
              {lang === 'bn' ? 'কল করুন' : 'Call'}
            </span>
          </a>

          {/* 2. WhatsApp */}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
              lang === 'bn' 
                ? 'আসসালামু আলাইকুম, আমি মুফতি সাহেবের ওয়েবসাইট থেকে যোগাযোগ করছি।' 
                : 'Assalamu Alaikum, contacting from Mufti Saheb\'s official website.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 rounded-lg text-stone-200 hover:text-emerald-400 active:scale-95 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white mb-0.5 shadow-sm">
              <MessageSquare className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold text-stone-300 tracking-tight">
              WhatsApp
            </span>
          </a>

          {/* 3. Facebook */}
          <a
            href={CONTACT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 rounded-lg text-stone-200 hover:text-blue-400 active:scale-95 transition-all"
            title="Facebook Profile"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mb-0.5 shadow-sm">
              <Facebook className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold text-stone-300 tracking-tight">
              {lang === 'bn' ? 'ফেসবুক' : 'Facebook'}
            </span>
          </a>

          {/* 4. Donate */}
          <button
            onClick={onOpenDonate}
            className="flex flex-col items-center justify-center py-1 rounded-lg text-stone-900 active:scale-95 transition-all cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center text-stone-950 mb-0.5 shadow-md ring-1 ring-amber-300">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-amber-400 tracking-tight">
              {lang === 'bn' ? 'দান করুন' : 'Donate'}
            </span>
          </button>
        </div>
      </nav>

      {/* Desktop / Laptop / Large Screen Floating Action Buttons */}
      <aside 
        aria-label="Desktop quick actions" 
        className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3"
      >
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
            lang === 'bn' 
              ? 'আসসালামু আলাইকুম, আমি মুফতি সাহেবের ওয়েবসাইট থেকে যোগাযোগ করছি।' 
              : 'Assalamu Alaikum, contacting from Mufti Saheb\'s official website.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-emerald-600/40 transition-all hover:scale-105 group"
          title="WhatsApp Chat"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-bold pr-1">WhatsApp</span>
        </a>

        {/* Facebook Page Quick Button */}
        <a
          href={CONTACT_INFO.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-600/40 transition-all hover:scale-105 group"
          title="Facebook Profile & Page"
        >
          <Facebook className="w-5 h-5" />
          <span className="text-xs font-bold pr-1">Facebook</span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${CONTACT_INFO.primaryPhone}`}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-500/30 shadow-lg transition-all hover:scale-105 group"
          title="Call Directly"
        >
          <Phone className="w-5 h-5 text-amber-400" />
          <span className="text-xs font-bold text-white pr-1">{CONTACT_INFO.primaryPhone}</span>
        </a>

        {/* Support Cause / Donate Button */}
        <button
          onClick={onOpenDonate}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold shadow-xl transition-all hover:scale-105 cursor-pointer ring-2 ring-amber-300/60"
          title="Support Markazul Iman Foundation"
        >
          <HeartHandshake className="w-5 h-5" />
          <span className="text-xs sm:text-sm font-extrabold pr-1">
            {lang === 'bn' ? 'সহায়তা করুন' : 'Donate'}
          </span>
        </button>
      </aside>
    </>
  );
};
