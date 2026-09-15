import React, { useState } from 'react';
import { 
  X, 
  HeartHandshake, 
  Copy, 
  Check, 
  ShieldCheck, 
  Building2, 
  Phone, 
  Info 
} from 'lucide-react';
import { Language } from '../types';
import { CONTACT_INFO } from '../data/content';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, lang }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-white border border-stone-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Banner */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
            <HeartHandshake className="w-4 h-4" />
            <span>{lang === 'bn' ? 'সাদাকাহ ও কল্যাণ তহবিল' : 'Sadaqah & Welfare Fund'}</span>
          </div>

          <h3 className="text-xl font-bold text-white">
            {lang === 'bn' ? 'মারকাজুল ঈমান ফাউন্ডেশনে সহায়তা' : 'Support Markazul Iman Foundation'}
          </h3>
          <p className="text-emerald-100 text-xs mt-1">
            {lang === 'bn' 
              ? 'তালিমুল ইসলাম ট্রাস্ট (রেজি: IV-40/24) এর তত্ত্বাবধানে পরিচালিত' 
              : 'Supervised under Talimul Islam Trust (Reg. No: IV-40/24)'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              {lang === 'bn'
                ? 'আপনার প্রদানকৃত সাদাকাহ, যাকাত ও অনুদান সরাসরি এতিম শিক্ষার্থী লালন-পালন, সুপেয় পানি এবং দুর্যোগকালীন ত্রাণে ব্যয় হয়।'
                : 'Your contributions directly fund orphan student education, winter blankets, emergency disaster food packets, and clean water wells.'}
            </span>
          </div>

          {/* Official Bank Account Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-emerald-700" />
              <span>{lang === 'bn' ? 'অফিসিয়াল ব্যাংক অ্যাকাউন্ট' : 'Official Bank Account Details'}</span>
            </h4>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-stone-500">{lang === 'bn' ? 'অ্যাকাউন্টের নাম:' : 'Account Name:'}</span>
                <span className="font-bold text-stone-900">Talimul Islam Trust</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-500">{lang === 'bn' ? 'রেজিস্ট্রেশন নং:' : 'Reg. Number:'}</span>
                <span className="font-semibold text-emerald-800">IV-40/24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-500">{lang === 'bn' ? 'ব্যাংক শাখা:' : 'Branch:'}</span>
                <span className="font-medium text-stone-800">Uttara / Turag Branch, Dhaka</span>
              </div>
            </div>
          </div>

          {/* Mobile Financial Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>{lang === 'bn' ? 'বিকাশ / নগদ / মোবাইল যোগাযোগ' : 'bKash / Nagad / Mobile Confirmation'}</span>
            </h4>

            <div className="space-y-2">
              {/* Primary Mobile */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
                <div>
                  <div className="text-[11px] text-stone-500">{lang === 'bn' ? 'প্রধান নম্বর (বিকাশ / নগদ পার্সোনাল)' : 'Primary (bKash / Nagad Personal)'}</div>
                  <div className="text-sm font-bold text-stone-900">{CONTACT_INFO.primaryPhone}</div>
                </div>
                <button
                  onClick={() => handleCopy(CONTACT_INFO.primaryPhone, 'phone1')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-xs font-semibold hover:bg-stone-100 transition-colors"
                >
                  {copiedField === 'phone1' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{lang === 'bn' ? 'কপি হয়েছে' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>{lang === 'bn' ? 'কপি' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Secondary Mobile */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
                <div>
                  <div className="text-[11px] text-stone-500">{lang === 'bn' ? 'বিকল্প মোবাইল' : 'Secondary Mobile'}</div>
                  <div className="text-sm font-bold text-stone-900">{CONTACT_INFO.secondaryPhone}</div>
                </div>
                <button
                  onClick={() => handleCopy(CONTACT_INFO.secondaryPhone, 'phone2')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-xs font-semibold hover:bg-stone-100 transition-colors"
                >
                  {copiedField === 'phone2' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{lang === 'bn' ? 'কপি হয়েছে' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>{lang === 'bn' ? 'কপি' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Call to action note */}
          <div className="text-center pt-2">
            <p className="text-xs text-stone-500 mb-3">
              {lang === 'bn' 
                ? 'অনুদান প্রেরণের পর উল্লেখিত নম্বরে কল বা মেসেজ দিয়ে কনফার্ম করার বিনীত অনুরোধ রইল।' 
                : 'Please call or send an SMS/WhatsApp to confirm your donation reference.'}
            </p>
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'bn' ? 'এখনই কল করুন (+880 1711-384681)' : 'Call Now to Confirm (+880 1711-384681)'}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
