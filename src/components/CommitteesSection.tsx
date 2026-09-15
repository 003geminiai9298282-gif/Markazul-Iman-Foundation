import React, { useState, useMemo } from 'react';
import { 
  Users, 
  Briefcase, 
  Scale, 
  Sparkles, 
  Coins, 
  GraduationCap, 
  HeartHandshake, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Search, 
  Layers,
  ChevronDown,
  ChevronUp,
  UserCheck
} from 'lucide-react';
import { Language, FoundationCommittee } from '../types';
import { FOUNDATION_COMMITTEES, FOUNDATION_MOTTO } from '../data/content';

interface CommitteesSectionProps {
  lang: Language;
}

export const CommitteesSection: React.FC<CommitteesSectionProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'governance' | 'advisory' | 'operations'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCommittees, setExpandedCommittees] = useState<Record<string, boolean>>({
    'general-body': true,
    'executive-committee': true,
    'shariah-advisory-council': true,
    'advisory-committee': true,
    'finance-fundraising-committee': true,
    'education-dawah-committee': true,
    'orphan-relief-committee': true,
    'development-construction-committee': true
  });

  const toggleExpand = (id: string) => {
    setExpandedCommittees(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getIcon = (iconName: FoundationCommittee['iconName']) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'Scale':
        return <Scale className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Coins':
        return <Coins className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      default:
        return <Users className="w-6 h-6" />;
    }
  };

  const filteredCommittees = useMemo(() => {
    return FOUNDATION_COMMITTEES.filter(committee => {
      const matchesCategory = selectedCategory === 'all' || committee.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch = 
        committee.nameBn.toLowerCase().includes(query) ||
        committee.nameEn.toLowerCase().includes(query) ||
        committee.membersBn.toLowerCase().includes(query) ||
        committee.activitiesBn.some(a => a.toLowerCase().includes(query)) ||
        (committee.eligibilityBn && committee.eligibilityBn.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="committees" className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden border-t border-stone-800">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>
              {lang === 'bn' ? 'সাংগঠনিক কাঠামো ও পরিচালনা পর্ষদ' : 'Governance & Committee Structure'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {lang === 'bn' ? 'মারকাজুল ঈমান ফাউন্ডেশনের কমিটি ও কার্যক্রম' : 'Committees & Operations of Markazul Iman Foundation'}
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            {lang === 'bn' 
              ? 'সুসংগঠিত প্রশাসনিক শৃঙ্খলা, শরিয়াহর অনুশাসন ও সর্বোচ্চ স্বচ্ছতা নিশ্চিত করতে ফাউন্ডেশনের দায়িত্বসমূহ ৮টি নির্দিষ্ট পরিষদ ও কমিটির মাধ্যমে পরিচালিত হয়।' 
              : 'To ensure institutional discipline, strict Shariah compliance, and maximum transparency, foundation activities are governed through 8 dedicated councils and committees.'}
          </p>

          <div className="pt-2">
            <span className="inline-block px-4 py-1 rounded-lg bg-stone-800/80 border border-stone-700 text-amber-300 text-xs sm:text-sm font-semibold">
              {lang === 'bn' ? `মূলনীতি: ${FOUNDATION_MOTTO.bn}` : `Foundational Creed: ${FOUNDATION_MOTTO.en}`}
            </span>
          </div>
        </div>

        {/* Filters & Live Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-800">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              id="filter-all-committees"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40'
                  : 'bg-stone-800/90 text-stone-300 hover:bg-stone-700/80 border border-stone-700/60'
              }`}
            >
              {lang === 'bn' ? 'সকল কমিটি (৮টি)' : 'All Committees (8)'}
            </button>

            <button
              id="filter-governance-committees"
              onClick={() => setSelectedCategory('governance')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'governance'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40'
                  : 'bg-stone-800/90 text-stone-300 hover:bg-stone-700/80 border border-stone-700/60'
              }`}
            >
              {lang === 'bn' ? 'শীর্ষ পরিষদ ও প্রশাসন' : 'Governance & Admin'}
            </button>

            <button
              id="filter-advisory-committees"
              onClick={() => setSelectedCategory('advisory')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'advisory'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40'
                  : 'bg-stone-800/90 text-stone-300 hover:bg-stone-700/80 border border-stone-700/60'
              }`}
            >
              {lang === 'bn' ? 'শরিয়াহ ও পরামর্শক' : 'Shariah & Advisory'}
            </button>

            <button
              id="filter-operations-committees"
              onClick={() => setSelectedCategory('operations')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'operations'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40'
                  : 'bg-stone-800/90 text-stone-300 hover:bg-stone-700/80 border border-stone-700/60'
              }`}
            >
              {lang === 'bn' ? 'সেবা ও বাস্তবায়ন' : 'Operations & Welfare'}
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="committee-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'bn' ? 'কমিটি বা কার্যক্রম খুঁজুন...' : 'Search committees or roles...'}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-stone-800/90 border border-stone-700 text-stone-100 placeholder-stone-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredCommittees.map((committee) => {
            const isExpanded = expandedCommittees[committee.id] ?? true;

            return (
              <div
                key={committee.id}
                id={`committee-${committee.id}`}
                className="bg-gradient-to-b from-stone-800/95 to-stone-900/95 rounded-2xl border border-stone-700/80 shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Header Banner */}
                <div className="p-6 sm:p-7 border-b border-stone-800/80 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-emerald-950/90 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner group-hover:scale-105 transition-transform shrink-0">
                        {getIcon(committee.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-stone-700/80 text-amber-300 text-xs font-bold font-mono">
                            {lang === 'bn' ? `ক্রমিক ${committee.numberBn}` : `#${committee.number}`}
                          </span>
                          <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
                            {lang === 'bn' ? committee.categoryLabelBn : committee.categoryLabelEn}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                          {lang === 'bn' ? committee.nameBn : committee.nameEn}
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpand(committee.id)}
                      className="text-stone-400 hover:text-stone-200 p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 transition-colors"
                      title={isExpanded ? 'সংক্ষিপ্ত করুন' : 'বিস্তারিত দেখুন'}
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Member Composition Badge */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold">
                      <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>
                        <strong className="text-emerald-200">{lang === 'bn' ? 'সদস্যসংখ্যা: ' : 'Members: '}</strong>
                        {lang === 'bn' ? committee.membersBn : committee.membersEn}
                      </span>
                    </div>
                  </div>

                  {/* Eligibility / Potential Members (if defined, like Advisory Committee) */}
                  {committee.eligibilityBn && (
                    <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs sm:text-sm text-amber-200/90 leading-relaxed flex items-start gap-2">
                      <UserCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-300">
                          {lang === 'bn' ? 'সদস্য হতে পারেন: ' : 'Eligible Members: '}
                        </span>
                        {lang === 'bn' ? committee.eligibilityBn : committee.eligibilityEn}
                      </div>
                    </div>
                  )}
                </div>

                {/* Activities Body */}
                {isExpanded && (
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3.5 flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{lang === 'bn' ? 'নির্দিষ্ট কার্যক্রম ও দায়িত্বসমূহ:' : 'Key Operational Responsibilities:'}</span>
                      </h4>

                      <ul className="space-y-2.5">
                        {(lang === 'bn' ? committee.activitiesBn : committee.activitiesEn).map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Status / Tag */}
                    <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                      <span className="text-emerald-400/90 font-medium">
                        {lang === 'bn' ? 'মারকাজুল ঈমান ফাউন্ডেশন পরিচালনা পর্ষদ' : 'Markazul Iman Foundation Board'}
                      </span>
                      <span className="text-stone-400 font-mono">
                        {lang === 'bn' ? `মোট দায়িত্ব: ${(committee.activitiesBn).length}টি` : `${(committee.activitiesEn).length} Mandates`}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Comprehensive Governance Guarantee */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-stone-800/90 to-amber-950/70 border border-stone-700 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shadow-inner shrink-0">
              <Scale className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {lang === 'bn' ? 'শরিয়াহভিত্তিক দায়বদ্ধতা ও আর্থিক শৃঙ্খলা' : 'Shariah Accountability & Financial Discipline'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl leading-relaxed">
                {lang === 'bn'
                  ? 'প্রতিটি কমিটির সিদ্ধান্ত ও কার্যক্রম শরিয়াহ অ্যাডভাইজারি কাউন্সিলের নিরীক্ষা এবং সাধারণ পরিষদের অনুমোদনের মাধ্যমে বাস্তবায়িত হয়। ফলে আপনার প্রতিটি অনুদান সঠিক খাতে শতভাগ আমানতদারিতার সাথে পৌঁছায়।'
                  : 'Every committee resolution and deployment is audited by the Shariah Advisory Council and sanctioned by the General Body, guaranteeing that every donation reaches genuine causes with absolute fidelity.'}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#foundation"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-950 transition-all text-center"
            >
              {lang === 'bn' ? 'ফাউন্ডেশনের লক্ষ্য দেখুন' : 'View Vision'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
