import React, { useState } from 'react';
import { 
  HeartHandshake, 
  BookOpen, 
  Users, 
  Sparkles, 
  Target, 
  Eye, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';
import { Language } from '../types';
import { FOCUS_AREAS, IMAGES, CONTACT_INFO, FOUNDATION_OBJECTIVES, FOUNDATION_MOTTO } from '../data/content';

interface FoundationSectionProps {
  lang: Language;
  onOpenDonate: () => void;
}

export const FoundationSection: React.FC<FoundationSectionProps> = ({ lang, onOpenDonate }) => {
  const [activeTab, setActiveTab] = useState<string>('humanitarian');

  const selectedArea = FOCUS_AREAS.find(a => a.id === activeTab) || FOCUS_AREAS[0];

  const getFocusIcon = (iconName: string, active: boolean) => {
    const className = `w-5 h-5 ${active ? 'text-white' : 'text-emerald-700'}`;
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className={className} />;
      case 'BookOpen':
        return <BookOpen className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      default:
        return <HeartHandshake className={className} />;
    }
  };

  return (
    <section id="foundation" className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: About Markazul Iman Foundation */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            <span>
              {lang === 'bn' ? 'মানবকল্যাণে নিবেদিত সংস্থা' : 'Dedicated to Serving Humanity'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <span>
                মারকাজুল ঈমান <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">ফাউন্ডেশন</span>
              </span>
            ) : (
              <span>
                Markazul Iman <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">Foundation</span>
              </span>
            )}
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            {lang === 'bn' ? (
              <>
                মারকাজুল ঈমান ফাউন্ডেশন একটি সরকারি নিবন্ধিত অলাভজনক ও সমাজকল্যাণমূলক সংস্থা। রাজধানী ঢাকাভিত্তিক এই সংস্থাটি আর্তমানবতার সেবা, সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানো এবং সমাজে ইতিবাচক ও টেকসই পরিবর্তন আনয়নে অবিচলভাবে কাজ করে যাচ্ছে।
              </>
            ) : (
              <>
                Markazul Iman Foundation is a government-registered non-profit and social welfare organization dedicated to serving humanity and creating positive, sustainable change in society. Based in Dhaka, Bangladesh, our mission is to support underprivileged and vulnerable communities.
              </>
            )}
          </p>
        </div>

        {/* Vision & Core Objectives: মারকাজুল ঈমান ফাউন্ডেশনের লক্ষ্য ও উদ্দেশ্য */}
        <div id="foundation-objectives" className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>
                {lang === 'bn' ? FOUNDATION_MOTTO.bn : FOUNDATION_MOTTO.en}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'bn' ? (
                <span>
                  মারকাজুল ঈমান ফাউন্ডেশনের <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-400 to-amber-200">লক্ষ্য ও উদ্দেশ্য</span>
                </span>
              ) : (
                <span>
                  Vision & Objectives of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-400 to-amber-200">Markazul Iman Foundation</span>
                </span>
              )}
            </h3>

            <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              {lang === 'bn' 
                ? 'দ্বীন ও মানবতার কল্যাণে একটি আদর্শ, নৈতিক ও ইনসাফভিত্তিক সমাজ বিনির্মাণে আমাদের ৩টি মূল লক্ষ্য:' 
                : 'Our 3 foundational pillars dedicated to sacred faith, moral education, and selfless humanitarian service:'}
            </p>
          </div>

          {/* 3 Pillars Grid: ১. ঈমান | ২. শিক্ষা | ৩. সেবা */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Pillar 1: ১. ঈমান */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-800/95 to-stone-900/95 border border-stone-700/80 shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-xs font-bold text-emerald-300">
                    {lang === 'bn' ? '১ম স্তম্ভ' : 'Pillar 01'}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                  {lang === 'bn' ? '১. ঈমান' : '1. Faith (Iman)'}
                </h4>

                <p className="text-stone-300 text-sm sm:text-[15px] leading-relaxed">
                  {lang === 'bn' ? (
                    <>
                      সহীহ আকীদার দৃঢ়তা, সুন্নাহসম্মত আমল, সুমহান আখলাক ও আত্মশুদ্ধির মাধ্যমে আদর্শ মানুষ গড়ে তোলা।
                    </>
                  ) : (
                    <>
                      Building exemplary individuals through steadfastness in sound creed (Sahih Aqeedah), Sunnah-aligned deeds, noble character, and spiritual purification.
                    </>
                  )}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{lang === 'bn' ? 'সহীহ আকীদার দৃঢ়তা • সুন্নাহসম্মত আমল • আত্মশুদ্ধি' : 'Sound Creed • Sunnah Deeds • Character'}</span>
              </div>
            </div>

            {/* Pillar 2: ২. শিক্ষা */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-800/95 to-stone-900/95 border border-stone-700/80 shadow-xl hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-xs font-bold text-amber-300">
                    {lang === 'bn' ? '২য় স্তম্ভ' : 'Pillar 02'}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                  {lang === 'bn' ? '২. শিক্ষা' : '2. Education (Shiksha)'}
                </h4>

                <p className="text-stone-300 text-sm sm:text-[15px] leading-relaxed">
                  {lang === 'bn' ? (
                    <>
                      কুরআন-সুন্নাহভিত্তিক জ্ঞান, নৈতিক শিক্ষা ও মানবিক মূল্যবোধের প্রসারের মাধ্যমে আলোকিত ও নীতিনিষ্ঠ সমাজ গড়ে তোলা।
                    </>
                  ) : (
                    <>
                      Building an enlightened and principled society through the propagation of Quran-Sunnah-based knowledge, moral education, and human values.
                    </>
                  )}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center gap-2 text-xs text-amber-400 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{lang === 'bn' ? 'কুরআন-সুন্নাহর জ্ঞান • নৈতিক শিক্ষা • মানবিক মূল্যবোধ' : 'Sacred Knowledge • Moral Education • Values'}</span>
              </div>
            </div>

            {/* Pillar 3: ৩. সেবা */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-800/95 to-stone-900/95 border border-stone-700/80 shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-xs font-bold text-teal-300">
                    {lang === 'bn' ? '৩য় স্তম্ভ' : 'Pillar 03'}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-teal-300 transition-colors">
                  {lang === 'bn' ? '৩. সেবা' : '3. Service (Seba)'}
                </h4>

                <p className="text-stone-300 text-sm sm:text-[15px] leading-relaxed">
                  {lang === 'bn' ? (
                    <>
                      এতিম, অসহায়, বিধবা, দরিদ্র ও সুবিধাবঞ্চিত মানুষের শিক্ষা, চিকিৎসা, পুনর্বাসন ও স্বাবলম্বীকরণের মাধ্যমে মানবকল্যাণে অবদান রাখা।
                    </>
                  ) : (
                    <>
                      Contributing to human welfare through education, healthcare, rehabilitation, and self-reliance for orphans, helpless individuals, widows, the impoverished, and underprivileged people.
                    </>
                  )}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center gap-2 text-xs text-teal-400 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>{lang === 'bn' ? 'শিক্ষা ও চিকিৎসা • পুনর্বাসন • স্বাবলম্বীকরণ' : 'Education & Healthcare • Rehabilitation • Self-Reliance'}</span>
              </div>
            </div>

          </div>

          {/* Central Triad Motto Banner: ঈমান — শিক্ষা — সেবা */}
          <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950/80 border border-emerald-500/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-amber-500/20 border border-emerald-500/40 flex items-center justify-center text-amber-300 shadow-inner shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-emerald-400 font-bold block">
                  {lang === 'bn' ? 'ফাউন্ডেশনের মূল স্লোগান ও অঙ্গীকার' : 'Foundational Core Motto'}
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-amber-100 tracking-wide">
                  {lang === 'bn' ? 'ঈমান — শিক্ষা — সেবা' : 'Faith — Education — Service'}
                </h4>
              </div>
            </div>
            <div className="flex flex-col sm:items-end gap-3 text-xs sm:text-sm text-stone-300 sm:text-right max-w-md leading-relaxed">
              <p>
                {lang === 'bn'
                  ? 'সহীহ ঈমানের ভিত্তিতে আদর্শ মানুষ গঠন, নৈতিক ও দ্বীনি শিক্ষার বিস্তার এবং অসহায় আর্তমানবতার নিঃস্বার্থ সেবায় মারকাজুল ঈমান ফাউন্ডেশন দৃঢ়প্রতিজ্ঞ।'
                  : 'Steadfast in shaping exemplary individuals through sound faith, spreading moral education, and serving needy humanity through selfless service.'}
              </p>
              <a
                href="#committees"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-bold transition-colors w-fit sm:self-end"
              >
                <span>{lang === 'bn' ? 'কমিটি ও কার্যক্রম দেখুন' : 'View Committees & Governance'}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Key Focus Areas Interactive Showcase */}
        <div id="focus-areas" className="space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800 text-amber-300 text-xs font-bold">
              <span>{lang === 'bn' ? 'মূল ৪টি কর্মক্ষেত্র' : 'Our 4 Key Focus Areas'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'bn' ? 'যেসব ক্ষেত্রে আমরা সরাসরি কাজ করছি' : 'Where We Make a Tangible Impact'}
            </h3>
          </div>

          {/* Focus Area Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {FOCUS_AREAS.map((area) => {
              const active = activeTab === area.id;
              return (
                <button
                  key={area.id}
                  id={`tab-${area.id}`}
                  onClick={() => setActiveTab(area.id)}
                  className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40 ring-2 ring-emerald-400/50 scale-102'
                      : 'bg-stone-800/90 text-stone-300 hover:bg-stone-700/80 hover:text-white border border-stone-700'
                  }`}
                >
                  {getFocusIcon(area.icon, active)}
                  <span>{lang === 'bn' ? area.titleBn : area.titleEn}</span>
                </button>
              );
            })}
          </div>

          {/* Active Focus Area Deep Card */}
          <div className="rounded-2xl bg-stone-800/90 border border-stone-700 p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                  <span>
                    {lang === 'bn' ? 'মারকাজুল ঈমান ফাউন্ডেশন উদ্যোগ' : 'Markazul Iman Initiative'}
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {lang === 'bn' ? selectedArea.titleBn : selectedArea.titleEn}
                </h4>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  {lang === 'bn' ? selectedArea.descBn : selectedArea.descEn}
                </p>

                {/* Key Bullet initiatives */}
                <div className="space-y-3 pt-2">
                  {(lang === 'bn' ? selectedArea.bulletsBn : selectedArea.bulletsEn).map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-200 leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenDonate}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm shadow transition-all hover:scale-102 cursor-pointer"
                  >
                    <HeartHandshake className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'এই প্রকল্পে শরিক হোন' : 'Support this Focus Area'}</span>
                  </button>

                  <a
                    href={`tel:${CONTACT_INFO.primaryPhone}`}
                    className="px-4 py-2.5 rounded-xl bg-stone-700/80 hover:bg-stone-600 text-stone-200 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    {lang === 'bn' ? 'বিস্তারিত তথ্য জানুন' : 'Inquire Directly'}
                  </a>
                </div>

              </div>

              {/* Right: Large Photograph */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-stone-700 aspect-[4/3] relative group">
                  <img 
                    src={selectedArea.image} 
                    alt={selectedArea.titleEn} 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = IMAGES.onlineCharityFallback;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <span className="text-xs font-bold text-amber-300">
                        {lang === 'bn' ? 'বাস্তব কার্যক্রম ও মাঠপর্যায়' : 'On-Ground Activity'}
                      </span>
                      <div className="text-sm font-semibold text-stone-200">
                        {lang === 'bn' ? selectedArea.titleBn : selectedArea.titleEn}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
