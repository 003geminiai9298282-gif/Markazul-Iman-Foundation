import React, { useState } from 'react';
import { 
  Facebook, 
  Share2, 
  Check, 
  Copy, 
  ThumbsUp, 
  MessageCircle, 
  BellRing, 
  Radio, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { Language } from '../types';
import { CONTACT_INFO, IMAGES } from '../data/content';

interface FacebookConnectBannerProps {
  lang: Language;
  scholarPhoto?: string;
}

export const FacebookConnectBanner: React.FC<FacebookConnectBannerProps> = ({ lang, scholarPhoto }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="facebook-connect" className="py-14 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden border-y border-blue-800/40">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Call to follow & engage */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-300 text-xs font-semibold">
              <Facebook className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'অফিসিয়াল ফেসবুক পেজ ক্যাম্পেইন' : 'Official Facebook Page Portal'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'bn' ? (
                <span>
                  মুফতি সাহেবের <span className="text-blue-400">ফেসবুক পেজে</span> যুক্ত থাকুন
                </span>
              ) : (
                <span>
                  Stay Connected on the <span className="text-blue-400">Official Facebook Page</span>
                </span>
              )}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {lang === 'bn' ? (
                <>
                  প্রতি সপ্তাহের জুমার খুতবাহ, সহীহ বুখারীর দরস, সমসাময়িক ফতোয়া এবং মারকাজুল ঈমান ফাউন্ডেশনের জরুরি মানবিক ত্রাণ ও সাহায্য কার্যক্রমের নিয়মিত ভিডিও এবং আপডেট পেতে অফিসিয়াল ফেসবুক পেজে লাইক ও ফলো দিয়ে সাথে থাকুন।
                </>
              ) : (
                <>
                  Follow the official Facebook page to receive weekly Jumu'ah Khutbah recordings, Sahih Bukhari Hadith discussions, authentic Islamic fatwas, and real-time updates on Markazul Iman Foundation's relief distributions.
                </>
              )}
            </p>

            {/* Key benefits of following */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <Radio className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'bn' ? 'সরাসরি জুমার খুতবা ও বয়ান লাইভ' : 'Live Jumu\'ah Khutbah & Bayan Streams'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <BellRing className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{lang === 'bn' ? 'ত্রাণ বিতরণ ও সাহায্য আপডেট' : 'Foundation Relief & Aid Updates'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{lang === 'bn' ? 'দৈনন্দিন কুরআন ও হাদীসের বাণী' : 'Daily Quran & Hadith Reminders'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <MessageCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{lang === 'bn' ? 'প্রশ্নোত্তর ও সরাসরি যোগাযোগ' : 'Islamic Q&A & Community Inquiries'}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                id="fb-official-page-btn"
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-102"
              >
                <Facebook className="w-4 h-4" />
                <span>{lang === 'bn' ? 'ফেসবুকে ফলো করুন' : 'Follow on Facebook'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                id="fb-share-website-btn"
                onClick={handleShareFacebook}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
              >
                <Share2 className="w-4 h-4 text-blue-400" />
                <span>{lang === 'bn' ? 'ফেসবুকে শেয়ার করুন' : 'Share Website'}</span>
              </button>

              <button
                id="fb-copy-link-btn"
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm border border-slate-700 transition-colors"
                title="Copy website link"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">{lang === 'bn' ? 'কপি হয়েছে!' : 'Link Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{lang === 'bn' ? 'লিংক কপি করুন' : 'Copy Link'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Profile Link indicator */}
            <div className="pt-2 flex items-center gap-2 text-xs text-blue-200/80">
              <span className="font-semibold text-blue-300">Facebook Link:</span>
              <a 
                href={CONTACT_INFO.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-white transition-colors truncate font-mono text-[11px] sm:text-xs"
              >
                https://www.facebook.com/profile.php?id=61593855137685
              </a>
            </div>

          </div>

          {/* Right: Live Interactive Mock Facebook Post Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-700/80 p-4 sm:p-5 shadow-2xl space-y-4">
              
              {/* Facebook Card Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-blue-500">
                    <img 
                      src={scholarPhoto || IMAGES.scholarAvatar || IMAGES.scholarPortrait} 
                      alt={CONTACT_INFO.nameEn} 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-white">{CONTACT_INFO.facebookPageName}</span>
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white font-bold">✓</span>
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                      <span>{lang === 'bn' ? 'জনপ্রিয় ব্যক্তিত্ব • ইসলামিক স্কলার' : 'Public Figure • Islamic Scholar'}</span>
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] bg-blue-900/60 text-blue-300 font-medium border border-blue-500/30">
                  {lang === 'bn' ? 'অফিসিয়াল' : 'Official'}
                </span>
              </div>

              {/* Post Content */}
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {lang === 'bn' ? (
                  <>
                    "মারকাজুল ঈমান ফাউন্ডেশনের উদ্যোগে দরিদ্র ও বন্যাদুর্গত পরিবারের মাঝে উপহারসামগ্রী পৌঁছে দেওয়া হয়েছে। মানুষের পাশে দাঁড়ানো আমাদের অন্যতম প্রধান ঈমানী দায়িত্ব। সবাই আমাদের সাথেই থাকুন এবং দুআ করুন।"
                  </>
                ) : (
                  <>
                    "Relief aid and essential support were distributed today to deserving families through Markazul Iman Foundation. Serving humanity with dignity remains our highest collective moral duty. Stay connected for upcoming projects."
                  </>
                )}
              </p>

              {/* Media Thumbnail inside Post */}
              <div className="rounded-xl overflow-hidden aspect-[16/9] relative border border-slate-700">
                <img 
                  src={IMAGES.humanitarianBanner} 
                  alt="Relief Work" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-amber-300 font-semibold flex items-center gap-1">
                  <span>মারকাজুল ঈমান ফাউন্ডেশন</span>
                </div>
              </div>

              {/* Engagement Mock Bar */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1 text-blue-400 font-medium">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>3.2K Likes</span>
                </div>
                <div>
                  <span>482 Comments • 1.1K Shares</span>
                </div>
              </div>

              {/* Interactive Follow CTA inside Mock Card */}
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow transition-colors"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'পেজে লাইক ও ফলো করুন' : 'Like & Follow Page on Facebook'}</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
