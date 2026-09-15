import React, { useRef, useState } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  CheckCircle2, 
  Facebook, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Building2,
  Camera,
  Upload,
  RotateCcw,
  Sparkles,
  Crown
} from 'lucide-react';
import { Language } from '../types';
import { CONTACT_INFO, IMAGES, HADITH_OF_THE_DAY, SCHOLAR_BIOGRAPHY } from '../data/content';

interface HeroSectionProps {
  lang: Language;
  onOpenDonate: () => void;
  scholarPhoto?: string;
  onUpdatePhoto?: (photo: string | null) => void;
  isCustomPhoto?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  lang, 
  onOpenDonate, 
  scholarPhoto, 
  onUpdatePhoto, 
  isCustomPhoto 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleProcessFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert(lang === 'bn' ? 'অনুগ্রহ করে একটি ছবি ফাইল (.png, .jpg) নির্বাচন করুন।' : 'Please select a valid image file.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl && onUpdatePhoto) {
        onUpdatePhoto(dataUrl);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };
  return (
    <section 
      id="about-scholar" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 text-white overflow-hidden"
    >
      {/* Subtle Islamic geometric ambient background accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement: Facebook Page & Public Portal */}
        <div className="flex justify-center mb-6">
          <a 
            href="#facebook-connect"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 hover:bg-blue-800/80 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-medium transition-all shadow-md group"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>
              {lang === 'bn' 
                ? 'অফিসিয়াল ফেসবুক পেজ ও অনলাইন দাওয়াহ পোর্টাল' 
                : 'Official Facebook Page & Online Community Portal'}
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-300" />
          </a>
        </div>

        {/* Main Grid: Left content, Right large picture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Scholarly Introduction & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-semibold tracking-wide">
                <Crown className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === 'bn' 
                    ? SCHOLAR_BIOGRAPHY.titleBn 
                    : SCHOLAR_BIOGRAPHY.titleEn}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {lang === 'bn' ? (
                  <span>
                    মুফতি <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-amber-200">ওয়াহিদুল আলম</span>
                  </span>
                ) : (
                  <span>
                    Mufti <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-amber-200">Wahidul Alam</span>
                  </span>
                )}
              </h1>

              {/* Scholarly identity pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {(lang === 'bn' ? SCHOLAR_BIOGRAPHY.tagsBn : SCHOLAR_BIOGRAPHY.tagsEn).map((tag, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-800/90 border border-stone-700 text-stone-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                {lang === 'bn' ? SCHOLAR_BIOGRAPHY.introBn : SCHOLAR_BIOGRAPHY.introEn}
              </p>
            </div>

            {/* Roles Quick Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <a 
                href="#institutions"
                className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 hover:border-emerald-500/50 transition-all hover:bg-stone-800 block group"
              >
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
                  <Crown className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'bn' ? 'চেয়ারম্যান' : 'Chairman'}</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">মারকাজুল ঈমান ফাউন্ডেশন</div>
                <div className="text-xs text-stone-400 mt-0.5">মানবসেবা ও দাওয়াহ</div>
              </a>

              <a 
                href="#institutions"
                className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 hover:border-emerald-500/50 transition-all hover:bg-stone-800 block group"
              >
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'bn' ? 'প্রিন্সিপাল ও শাইখুল হাদিস' : 'Principal & Sheikhul Hadith'}</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">জামিয়াতুল ঈমান</div>
                <div className="text-xs text-stone-400 mt-0.5">দলিপাড়া, তুরাগ, ঢাকা</div>
              </a>

              <a 
                href="#institutions"
                className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 hover:border-emerald-500/50 transition-all hover:bg-stone-800 block group"
              >
                <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold mb-1">
                  <Building2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>{lang === 'bn' ? 'সম্মানিত খতিব' : 'Khatib'}</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">মসজিদ আল-মাগফিরাহ</div>
                <div className="text-xs text-stone-400 mt-0.5">সেক্টর–৩, উত্তরা, ঢাকা</div>
              </a>
            </div>

            {/* Direct Contact & Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              {/* Facebook Page CTA */}
              <a
                id="hero-facebook-cta"
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-900/30 transition-all hover:scale-102"
              >
                <Facebook className="w-4 h-4" />
                <span>{lang === 'bn' ? 'ফেসবুক পেজে যুক্ত হোন' : 'Connect on Facebook'}</span>
              </a>

              {/* Direct Phone Dial */}
              <a
                id="hero-call-primary"
                href={`tel:${CONTACT_INFO.primaryPhone}`}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-200" />
                <span>{CONTACT_INFO.primaryPhone}</span>
              </a>

              {/* WhatsApp Direct Chat */}
              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  lang === 'bn'
                    ? 'আসসালামু আলাইকুম মুফতি সাহেব, আপনার ওয়েবসাইট থেকে যোগাযোগ করছি।'
                    : 'Assalamu Alaikum Mofti Saheb, reaching out from your official website.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm border border-stone-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Website link */}
              <a
                href={`https://${CONTACT_INFO.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold border border-stone-700 transition-colors"
                title="Official Domain"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>{CONTACT_INFO.website}</span>
              </a>
            </div>

            {/* Hadith Inspiration Quote Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-stone-900/80 border border-emerald-500/20 text-stone-300 text-xs sm:text-sm">
              <div className="text-amber-300 font-serif font-bold text-sm sm:text-base tracking-wide text-right mb-1">
                {HADITH_OF_THE_DAY.arabic}
              </div>
              <div className="text-emerald-100 font-medium italic">
                "{lang === 'bn' ? HADITH_OF_THE_DAY.bn : HADITH_OF_THE_DAY.en}"
              </div>
              <div className="text-stone-400 text-xs mt-1 text-right">
                — {HADITH_OF_THE_DAY.source}
              </div>
            </div>

          </div>

          {/* Right Column: LARGE, GORGEOUS PORTRAIT PICTURE */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[300px] sm:max-w-sm md:max-w-md">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500 via-emerald-500 to-teal-400 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              
              {/* Card Container */}
              <div 
                className={`relative rounded-2xl overflow-hidden bg-stone-900 border-2 ${
                  isDragging ? 'border-amber-400 ring-4 ring-amber-400/40 scale-[1.02]' : 'border-amber-500/30'
                } shadow-2xl transition-all duration-300`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {/* Hidden File Input */}
                <input 
                  ref={fileInputRef} 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleFileInputChange} 
                />

                {/* Drag-over prompt overlay */}
                {isDragging && (
                  <div className="absolute inset-0 z-30 bg-amber-950/80 backdrop-blur-sm border-2 border-dashed border-amber-300 flex flex-col items-center justify-center p-6 text-center text-white">
                    <Upload className="w-12 h-12 text-amber-300 animate-bounce mb-2" />
                    <span className="font-bold text-base text-amber-200">
                      {lang === 'bn' ? 'আপনার মূল ছবি এখানে ছেড়ে দিন' : 'Drop your exact photo here'}
                    </span>
                    <span className="text-xs text-stone-300 mt-1">
                      {lang === 'bn' ? 'কোনো পরিবর্তন ছাড়াই সরাসরি যুক্ত হবে' : 'Will load exactly without changes'}
                    </span>
                  </div>
                )}
                
                {/* Scholar Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-950">
                  <img
                    id="scholar-hero-image"
                    src={scholarPhoto || IMAGES.scholarPortrait}
                    alt={CONTACT_INFO.nameEn}
                    referrerPolicy="no-referrer"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = IMAGES.onlineScholarFallback;
                    }}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent pointer-events-none"></div>

                  {/* Top-Left: Direct Photo Upload Action Button */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5">
                    <button
                      id="upload-original-photo-btn"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-xl transition-all hover:scale-105 cursor-pointer ring-2 ring-amber-300/50"
                      title={lang === 'bn' ? 'আপনার আসল ছবিটি সিলেক্ট করুন' : 'Upload your original photo'}
                    >
                      <Camera className="w-3.5 h-3.5 text-stone-950" />
                      <span>
                        {isCustomPhoto 
                          ? (lang === 'bn' ? 'আসল ছবি সক্রিয়' : 'Original Active') 
                          : (lang === 'bn' ? 'আসল ছবি দিন' : 'Upload Original Photo')}
                      </span>
                    </button>

                    {isCustomPhoto && (
                      <button
                        onClick={() => onUpdatePhoto?.(null)}
                        className="p-1.5 rounded-full bg-stone-900/80 hover:bg-red-950 text-stone-300 hover:text-red-300 border border-white/20 text-xs shadow-md transition-colors"
                        title={lang === 'bn' ? 'ডিফল্ট ছবিতে ফিরুন' : 'Reset to default'}
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Floating Success Toast */}
                  {uploadSuccess && (
                    <div className="absolute top-14 left-4 right-4 z-20 py-2 px-3 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-2xl text-center flex items-center justify-center gap-1.5 animate-in fade-in slide-in-from-top-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>
                        {lang === 'bn' 
                          ? 'আলহামদুলিল্লাহ! আপনার আসল ছবিটি সফলভাবে যুক্ত হয়েছে।' 
                          : 'Original photo updated successfully!'}
                      </span>
                    </div>
                  )}

                  {/* Floating Verified Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/90 border border-emerald-400/50 backdrop-blur-md text-emerald-100 text-xs font-bold shadow-lg pointer-events-none">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'bn' ? 'অফিসিয়াল প্রোফাইল' : 'Verified Official'}</span>
                  </div>

                  {/* Floating Contact pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-stone-900/95 border border-white/10 backdrop-blur-md text-white shadow-xl pointer-events-none">
                    <div className="text-sm font-bold text-amber-300">
                      {lang === 'bn' ? CONTACT_INFO.nameBn : CONTACT_INFO.nameEn}
                    </div>
                    <div className="text-xs text-stone-300 mt-0.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-stone-400" />
                      <span className="truncate">{CONTACT_INFO.email}</span>
                    </div>
                    <div className="text-xs text-stone-300 mt-1 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-stone-400" />
                      <span>{CONTACT_INFO.primaryPhone} | {CONTACT_INFO.secondaryPhone}</span>
                    </div>
                  </div>
                </div>

                {/* Sub-strip: Quick Stats */}
                <div className="grid grid-cols-3 divide-x divide-stone-800 bg-stone-950 py-3 text-center">
                  <div>
                    <div className="text-lg font-bold text-amber-400">25+</div>
                    <div className="text-[11px] text-stone-400 font-medium">
                      {lang === 'bn' ? 'বছরের খেদমত' : 'Years Service'}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-emerald-400">3</div>
                    <div className="text-[11px] text-stone-400 font-medium">
                      {lang === 'bn' ? 'মূল প্রতিষ্ঠান' : 'Institutions'}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-400">10k+</div>
                    <div className="text-[11px] text-stone-400 font-medium">
                      {lang === 'bn' ? 'উপকৃত মানুষ' : 'Beneficiaries'}
                    </div>
                  </div>
                </div>

              </div>

              {/* Helpful photo upload reminder card below */}
              <div className="mt-3 p-3 rounded-xl bg-stone-900/90 border border-amber-500/30 text-xs text-stone-300 flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-4 h-4" />
                  </div>
                  <span className="leading-snug">
                    {lang === 'bn' 
                      ? 'আপনার ডিভাইসে থাকা আসল ছবিটি নির্বাচন করুন (চেহারা কোনো পরিবর্তন হবে না)' 
                      : 'Upload your exact original photo directly without changes'}
                  </span>
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs whitespace-nowrap transition-colors cursor-pointer shadow"
                >
                  {lang === 'bn' ? 'ছবি দিন' : 'Choose'}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
