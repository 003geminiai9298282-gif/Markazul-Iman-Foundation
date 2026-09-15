import React, { useState } from 'react';
import { 
  Volume2, 
  Play, 
  Pause, 
  Calendar, 
  MapPin, 
  Clock, 
  Facebook, 
  BookOpen, 
  Radio,
  ExternalLink 
} from 'lucide-react';
import { Language } from '../types';
import { BAYAN_TOPICS, CONTACT_INFO } from '../data/content';

interface BayanSectionProps {
  lang: Language;
}

export const BayanSection: React.FC<BayanSectionProps> = ({ lang }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  return (
    <section id="bayans" className="py-20 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'bn' ? 'দ্বীনি বয়ান ও জুমার খুতবাহ' : 'Knowledge & Bayan Archive'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'bn' ? (
                <span>
                  মুফতি সাহেবের <span className="text-amber-400">গুরুত্বপূর্ণ আলোচনা ও নসীহত</span>
                </span>
              ) : (
                <span>
                  Scholarly Lectures & <span className="text-amber-400">Spiritual Guidance</span>
                </span>
              )}
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {lang === 'bn' ? (
                <>
                  মসজিদ আল মাগফিরাহর জুমার খুতবাহ এবং জামেয়া ইমাম বুখারীর হাদীস মজলিস থেকে নির্বাচিত বয়ানসমূহ।
                </>
              ) : (
                <>
                  Selected Friday Jumu'ah sermons and Hadith discourses delivered at Masjid Al Magfirah and Jamia Imam Bukhari.
                </>
              )}
            </p>
          </div>

          {/* Facebook Live Callout */}
          <a
            href={CONTACT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-900/40 transition-all hover:scale-102 self-start md:self-auto"
          >
            <Radio className="w-4 h-4 text-red-300 animate-pulse" />
            <span>{lang === 'bn' ? 'ফেসবুকে সরাসরি লাইভ দেখুন' : 'Watch Live on Facebook'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Bayan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BAYAN_TOPICS.map((bayan) => {
            const isPlaying = playingId === bayan.id;

            return (
              <div
                key={bayan.id}
                className="rounded-2xl bg-stone-800/80 border border-stone-700/80 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Category badge & Duration */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {lang === 'bn' ? bayan.tagBn : bayan.tagEn}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-stone-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{bayan.duration}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {lang === 'bn' ? bayan.titleBn : bayan.titleEn}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {lang === 'bn' ? bayan.summaryBn : bayan.summaryEn}
                  </p>

                  {/* Location & Date */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-700/60 text-xs text-stone-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{lang === 'bn' ? bayan.venueBn : bayan.venueEn}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{lang === 'bn' ? bayan.dateBn : bayan.dateEn}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Player CTA */}
                <div className="pt-5 mt-4 border-t border-stone-700/60 flex items-center justify-between">
                  <button
                    onClick={() => togglePlay(bayan.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isPlaying
                        ? 'bg-amber-500 text-stone-950'
                        : 'bg-stone-700/80 hover:bg-stone-600 text-stone-200'
                    }`}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>
                      {isPlaying 
                        ? (lang === 'bn' ? 'চলছে...' : 'Playing...') 
                        : (lang === 'bn' ? 'অডিও শুনুন' : 'Listen Audio')}
                    </span>
                  </button>

                  <a
                    href={CONTACT_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'ভিডিও রেকর্ডিং' : 'Full Video'}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
