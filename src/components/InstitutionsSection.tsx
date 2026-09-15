import React, { useState } from 'react';
import { 
  MapPin, 
  ExternalLink, 
  Phone, 
  GraduationCap, 
  Building2, 
  ShieldCheck, 
  Award, 
  Users, 
  BookOpen, 
  Crown, 
  Sparkles, 
  CheckCircle2, 
  Navigation,
  ScrollText,
  HeartHandshake,
  Feather,
  Compass
} from 'lucide-react';
import { Language } from '../types';
import { 
  CONTACT_INFO, 
  IMAGES, 
  SCHOLAR_BIOGRAPHY, 
  SCHOLAR_ROLES, 
  SPIRITUAL_LINEAGE,
  INSTITUTIONS 
} from '../data/content';

interface InstitutionsSectionProps {
  lang: Language;
}

export const InstitutionsSection: React.FC<InstitutionsSectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'roles' | 'lineage'>('all');

  const getRoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return <Crown className="w-6 h-6 text-amber-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-600" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-teal-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-indigo-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-600" />;
      default:
        return <GraduationCap className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="institutions" className="py-20 bg-stone-100 text-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'bn' ? 'মুফতি সাহেবের জীবন, কর্ম ও আত্মশুদ্ধির ধারা' : 'Scholarly Leadership & Spiritual Lineage'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {lang === 'bn' ? (
              <span>
                মুফতি ওয়াহিদুল আলম — <span className="text-emerald-700">দায়িত্ব ও আধ্যাত্মিক পরিচয়</span>
              </span>
            ) : (
              <span>
                Mufti Wahidul Alam — <span className="text-emerald-700">Offices & Spiritual Lineage</span>
              </span>
            )}
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {lang === 'bn' ? (
              <>
                প্রাতিষ্ঠানিক কর্মপরিধি, কওমি শিক্ষাবোর্ডের সাংগঠনিক দায়িত্ব এবং উপমহাদেশের প্রখ্যাত আকাবির ও বুযুর্গানে দ্বীনের নিকট থেকে প্রাপ্ত বরকতময় খেলাফতের পূর্ণাঙ্গ বিবরণ।
              </>
            ) : (
              <>
                Comprehensive record of his institutional offices, educational board leadership, and the sacred spiritual lineage (Khilafat) received from celebrated Islamic masters.
              </>
            )}
          </p>
        </div>

        {/* Highlighted Biography Callout Banner */}
        <div className="mb-14 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950 text-white p-6 sm:p-10 shadow-2xl border border-emerald-500/30 relative overflow-hidden">
          {/* Subtle background motif */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider mb-2">
                  <Crown className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'চেয়ারম্যান — মারকাজুল ঈমান ফাউন্ডেশন' : 'Chairman — Markazul Iman Foundation'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {lang === 'bn' ? SCHOLAR_BIOGRAPHY.nameBn : SCHOLAR_BIOGRAPHY.nameEn}
                </h3>
              </div>

              {/* Badges of Scholarly Identity */}
              <div className="flex flex-wrap gap-2">
                {(lang === 'bn' ? SCHOLAR_BIOGRAPHY.tagsBn : SCHOLAR_BIOGRAPHY.tagsEn).map((tag, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-stone-800/80 border border-stone-700 text-emerald-300 shadow-sm"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Core Biographical Statement */}
            <div className="p-5 sm:p-6 rounded-2xl bg-stone-950/70 border border-emerald-500/20 text-stone-200">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 shrink-0 mt-1">
                  <ScrollText className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-base sm:text-lg leading-relaxed text-stone-100 font-medium">
                    "{lang === 'bn' ? SCHOLAR_BIOGRAPHY.introBn : SCHOLAR_BIOGRAPHY.introEn}"
                  </p>
                  <p className="text-xs sm:text-sm text-stone-400">
                    {lang === 'bn'
                      ? 'কুরআন ও সহীহ সুন্নাহর প্রচার, বিশুদ্ধ আকীদার সংরক্ষণ, তাসাউফ ও আত্মশুদ্ধি এবং আর্তমানবতার সেবায় তাঁর পুরো কর্মজীবন ব্যাপৃত।'
                      : 'His lifelong vocation bridges scholarly Hadith instruction, sound Aqeedah preservation, Tazkiyah (spiritual purity), and benevolent social reform.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Navigation Filter Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800'
                }`}
              >
                {lang === 'bn' ? 'সবকিছু একসাথে (দায়িত্ব ও খেলাফত)' : 'Overview (Roles & Lineage)'}
              </button>

              <button
                onClick={() => setActiveTab('roles')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'roles'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800'
                }`}
              >
                {lang === 'bn' ? '১. প্রাতিষ্ঠানিক ও সাংগঠনিক দায়িত্ব (৬টি)' : '1. Institutional & Board Offices (6)'}
              </button>

              <button
                onClick={() => setActiveTab('lineage')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'lineage'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800'
                }`}
              >
                {lang === 'bn' ? '২. আধ্যাত্মিক পরিচয় ও খেলাফত' : '2. Spiritual Lineage & Khilafat'}
              </button>
            </div>

          </div>
        </div>

        {/* SECTION 1: প্রাতিষ্ঠানিক ও সাংগঠনিক দায়িত্ব (6 Institutional Roles) */}
        {(activeTab === 'all' || activeTab === 'roles') && (
          <div className="mb-16 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-200 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-600 text-white shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                    {lang === 'bn' ? 'প্রাতিষ্ঠানিক ও সাংগঠনিক দায়িত্ব' : 'Institutional & Organizational Offices'}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500">
                    {lang === 'bn' ? 'মুফতি ওয়াহিদুল আলম সাহেবের সার্বিক তত্ত্বাবধান ও দায়িত্বপূর্ণ পদসমূহ' : 'Offices held and direct leadership portfolios'}
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                {lang === 'bn' ? '৬টি প্রধান সাংগঠনিক ক্ষেত্র' : '6 Key Organizations'}
              </span>
            </div>

            {/* 6 Roles Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SCHOLAR_ROLES.map((item, index) => (
                <div 
                  key={item.id}
                  id={`scholar-role-card-${index}`}
                  className="rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
                >
                  <div className="p-6 space-y-4">
                    {/* Header: Icon & Category badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 group-hover:scale-105 transition-transform">
                        {getRoleIcon(item.icon)}
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        {lang === 'bn' ? item.badgeBn : item.badgeEn}
                      </span>
                    </div>

                    {/* Role Title and Organization */}
                    <div className="space-y-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        {lang === 'bn' ? item.roleBn : item.roleEn}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                        {lang === 'bn' ? item.organizationBn : item.organizationEn}
                      </h4>
                    </div>

                    {/* Location details */}
                    {item.locationBn && (
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700 space-y-1">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-medium">
                            {lang === 'bn' ? item.locationBn : item.locationEn}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card bottom bar */}
                  <div className="px-6 py-3 bg-stone-50/80 border-t border-stone-200 text-xs text-stone-600 flex items-center justify-between">
                    <span className="font-semibold text-stone-700">
                      {lang === 'bn' ? 'ক্রম নং: ০' + (index + 1) : `Serial #0${index + 1}`}
                    </span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {lang === 'bn' ? 'সক্রিয় দায়িত্ব' : 'Active Office'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: আধ্যাত্মিক পরিচয় (Spiritual Lineage & Khilafat) */}
        {(activeTab === 'all' || activeTab === 'lineage') && (
          <div className="mb-16 space-y-6">
            
            <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-200 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-600 text-white shadow-sm">
                  <Feather className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                    {lang === 'bn' ? 'আধ্যাত্মিক পরিচয় ও খেলাফত' : 'Spiritual Lineage & Khilafat (Tazkiyah)'}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500">
                    {lang === 'bn' ? 'আত্মশুদ্ধি, সুন্নাহর আনুগত্য ও বুযুর্গানে দ্বীনের নিকট থেকে প্রাপ্ত খেলাফতের সিলসিলাহ' : 'Spiritual succession and Tazkiyah authorization from eminent elders'}
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                {lang === 'bn' ? 'তাসাউফ ও আত্মশুদ্ধি' : 'Spiritual Guardianship'}
              </span>
            </div>

            {/* Sacred Khilafat Showcase Container */}
            <div className="rounded-3xl bg-white border-2 border-amber-400/40 shadow-xl overflow-hidden">
              
              {/* Top Banner Ribbon */}
              <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-700 p-4 text-white text-center">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>
                    {lang === 'bn' 
                      ? 'বুযুর্গানে দ্বীনের বরকতময় তত্ত্বাবধান ও খেলাফতের সনদ' 
                      : 'Blessed Spiritual Succession (Khilafat) from Prominent Islamic Masters'}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-10 space-y-8">
                
                {/* 1. Primary Bay'at & Khilafat: Hazrat Professor Muhammad Hamidur Rahman (Rh.) */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-amber-50 to-emerald-50/50 border border-amber-300 shadow-sm relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                        ১
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                          {lang === 'bn' ? 'বায়আত ও খেলাফতপ্রাপ্তি' : 'Primary Bay\'at & Khilafat'}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-bold text-stone-900">
                          {lang === 'bn' ? SPIRITUAL_LINEAGE.primaryMurshidBn : SPIRITUAL_LINEAGE.primaryMurshidEn}
                        </h4>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-200/80 text-amber-900 border border-amber-300 w-fit">
                      {lang === 'bn' ? 'সরাসরি বায়আত ও খেলাফত' : 'Direct Bay\'at & Khilafat'}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-medium">
                    "{lang === 'bn' ? SPIRITUAL_LINEAGE.detailsBn : SPIRITUAL_LINEAGE.detailsEn}"
                  </p>
                </div>

                {/* 2. Khilafat from Celebrated Mashayikh & Elders */}
                <div className="p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0">
                      ২
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                        {lang === 'bn' ? 'শায়খুল ইসলাম ও আকাবির বুযুর্গানে দ্বীনের খেলাফত' : 'Khilafat from Celebrated Grandmasters'}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-stone-900">
                        {lang === 'bn' ? 'শায়খুল ইসলাম আল্লামা শাহ আহমদ শফী (রহ.) ও আল্লামা জুনায়েদ বাবুনগরী (রহ.)' : 'Shaykhul Islam Allama Shah Ahmad Shafi (Rh.) & Allama Junaid Babunagari (Rh.)'}
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <div>
                        <div className="text-xs text-stone-500">{lang === 'bn' ? 'শায়খুল ইসলাম' : 'Grand Scholar'}</div>
                        <div className="text-sm font-bold text-stone-900">আল্লামা শাহ আহমদ শফী (রহ.)</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <div>
                        <div className="text-xs text-stone-500">{lang === 'bn' ? 'আমীরে হেফাজত' : 'Spiritual Leader'}</div>
                        <div className="text-sm font-bold text-stone-900">আল্লামা জুনায়েদ বাবুনগরী (রহ.)</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed pt-1">
                    {lang === 'bn'
                      ? 'শায়খুল ইসলাম আল্লামা শাহ আহমদ শফী (রহ.), আল্লামা জুনায়েদ বাবুনগরী (রহ.)-সহ কয়েকজন বুযুর্গানে দ্বীনের পক্ষ থেকেও তিনি খেলাফতপ্রাপ্ত হন।'
                      : 'He was honored with Khilafat authorizations from Shaykhul Islam Allama Shah Ahmad Shafi (Rh.), Allama Junaid Babunagari (Rh.), and multiple distinguished masters.'}
                  </p>
                </div>

                {/* 3. Latest Khilafat: Mutakallim-e-Islam Maulana Muhammad Ilyas Ghuman (D.B.) */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-stone-900 to-emerald-950 text-white border border-emerald-500/40 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-base shadow-sm shrink-0">
                        ৩
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                          {lang === 'bn' ? 'সর্বশেষ খেলাফতপ্রাপ্তি' : 'Latest Spiritual Authorization'}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-white">
                          {lang === 'bn' ? SPIRITUAL_LINEAGE.latestMurshidBn : SPIRITUAL_LINEAGE.latestMurshidEn}
                        </h4>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-900/80 text-emerald-200 border border-emerald-500/50 w-fit">
                      {lang === 'bn' ? 'খতমে নবুওয়াত ও আকীদা গবেষক' : 'Eminent Islamic Theologian'}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-stone-200 leading-relaxed pt-1">
                    {lang === 'bn'
                      ? 'এবং সর্বশেষ মুতাকাল্লিমে ইসলাম মাওলানা মুহাম্মদ ইলিয়াস গুম্মান (দা.বা.)-এর পক্ষ থেকেও খেলাফতপ্রাপ্ত হন।'
                      : 'And most recently, he was conferred Khilafat authorization by Mutakallim-e-Islam Maulana Muhammad Ilyas Ghuman (May Allah preserve him).'}
                  </p>
                </div>

              </div>

              {/* Concluding spiritual note footer */}
              <div className="bg-stone-50 border-t border-stone-200 p-5 sm:p-6 text-center text-xs sm:text-sm text-stone-600">
                <span className="font-semibold text-stone-800">
                  {lang === 'bn' ? 'মারকাজুল ঈমান ফাউন্ডেশনের মূল চালিকাশক্তি:' : 'Core Spiritual Foundation:'}
                </span>{' '}
                {lang === 'bn'
                  ? 'এই সুমহান আত্মশুদ্ধি ও আকাবিরে দ্বীনের নির্দেশিত পথই মারকাজুল ঈমান ফাউন্ডেশনের "ঈমান, শিক্ষা ও সেবা"-র ভিত্তি।'
                  : 'This profound spiritual lineage and adherence to classical masters forms the spiritual bedrock of "Faith, Education & Service" in Markazul Iman Foundation.'}
              </div>

            </div>

          </div>
        )}

        {/* Campus Atmosphere & Location Connectivity */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-white grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 aspect-[16/10] relative overflow-hidden">
            <img 
              src={IMAGES.mosqueAcademy} 
              alt="Islamic Academy Architecture" 
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.src = IMAGES.onlineMosqueFallback;
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent flex items-end p-6 text-white">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  {lang === 'bn' ? 'তুরাগ ও উত্তরা, ঢাকা' : 'Turag & Uttara, Dhaka'}
                </span>
                <h4 className="text-lg sm:text-xl font-bold">
                  {lang === 'bn' ? 'জামিয়াতুল ঈমান ও মসজিদ আল-মাগফিরাহ' : 'Jamiyatul Iman & Masjid Al-Magfirah'}
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold">
              <Compass className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'দ্বীন ও মানবতার সমন্বিত আলোকবর্তিকা' : 'Beacon of Faith & Public Service'}</span>
            </div>

            <h3 className="text-2xl font-bold text-stone-900">
              {lang === 'bn' 
                ? 'সরাসরি যোগাযোগ ও দিকনির্দেশনা' 
                : 'Direct Consultation & Contact'}
            </h3>

            <p className="text-stone-600 text-sm leading-relaxed">
              {lang === 'bn' ? (
                <>
                  মুফতি ওয়াহিদুল আলম সাহেবের সার্বিক তত্ত্বাবধানে হাজারো শিক্ষার্থী কুরআন, হাদীস ও নৈতিক শিক্ষায় আলোকিত হচ্ছে। মারকাজুল ঈমান ফাউন্ডেশন ও সংশ্লিষ্ট প্রতিষ্ঠানের কার্যক্রম সম্পর্কে জানতে অথবা পরামর্শের জন্য যোগাযোগ করতে পারেন।
                </>
              ) : (
                <>
                  Under the compassionate guidance of Mufti Wahidul Alam, hundreds of students cultivate classical Quranic and Hadith scholarship alongside nationwide humanitarian initiatives.
                </>
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold shadow transition-colors"
              >
                {lang === 'bn' ? 'যোগাযোগ ও সাক্ষাত' : 'Consultation & Visit'}
              </a>

              <a
                href={`tel:${CONTACT_INFO.primaryPhone}`}
                className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold border border-stone-300 transition-colors"
              >
                {lang === 'bn' ? `কল করুন: ${CONTACT_INFO.primaryPhone}` : `Call: ${CONTACT_INFO.primaryPhone}`}
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-300 transition-colors"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
