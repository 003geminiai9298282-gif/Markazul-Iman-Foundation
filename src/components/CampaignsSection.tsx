import React from 'react';
import { HeartHandshake, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { CAMPAIGNS } from '../data/content';

interface CampaignsSectionProps {
  lang: Language;
  onOpenDonate: () => void;
}

export const CampaignsSection: React.FC<CampaignsSectionProps> = ({ lang, onOpenDonate }) => {
  return (
    <section id="campaigns" className="py-20 bg-stone-50 text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-amber-700" />
            <span>{lang === 'bn' ? 'চলমান মানবসেবা প্রকল্প' : 'Active Relief Campaigns'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {lang === 'bn' ? (
              <span>
                সহমর্মিতা ও <span className="text-emerald-700">কল্যাণমুখী উদ্যোগ</span>
              </span>
            ) : (
              <span>
                Active Humanitarian & <span className="text-emerald-700">Welfare Campaigns</span>
              </span>
            )}
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {lang === 'bn' ? (
              <>
                আপনার সাদাকাহ, যাকাত ও আন্তরিক সহযোগিতায় অসহায় মানুষের মুখে হাসি ফোটানো সম্ভব। প্রতিটি ক্ষুদ্র দানই আল্লাহর কাছে প্রিয় এবং আর্তমানবতার জন্য বিশাল উপহার।
              </>
            ) : (
              <>
                Join hands with Markazul Iman Foundation and Talimul Islam Trust to deliver food, education, clean water, and warmth to those who need it most.
              </>
            )}
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAMPAIGNS.map((campaign) => (
            <div
              key={campaign.id}
              className="rounded-2xl bg-white border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              {/* Campaign Image */}
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src={campaign.image}
                  alt={campaign.titleEn}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-sm text-white text-[11px] font-bold">
                  {lang === 'bn' ? campaign.categoryBn : campaign.categoryEn}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                    {lang === 'bn' ? campaign.titleBn : campaign.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {lang === 'bn' ? campaign.descBn : campaign.descEn}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-stone-500">{lang === 'bn' ? 'লক্ষ্যমাত্রা:' : 'Target:'} {lang === 'bn' ? campaign.targetBn : campaign.targetEn}</span>
                    <span className="text-emerald-700 font-bold">{campaign.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Donate CTA button */}
                <button
                  onClick={onOpenDonate}
                  className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-stone-900 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <HeartHandshake className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'bn' ? 'অংশগ্রহণ ও দান করুন' : 'Support this Drive'}</span>
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
