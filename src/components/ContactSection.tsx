import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building, 
  ShieldCheck,
  Facebook,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { CONTACT_INFO, INSTITUTIONS } from '../data/content';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-stone-100 text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'bn' ? 'সরাসরি যোগাযোগ ও পরামর্শ' : 'Direct Contact & Consultation'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {lang === 'bn' ? (
              <span>
                মুফতি সাহেব ও <span className="text-emerald-700">ফাউন্ডেশনের সাথে যোগাযোগ</span>
              </span>
            ) : (
              <span>
                Get in Touch with <span className="text-emerald-700">Mofti Saheb & Foundation</span>
              </span>
            )}
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {lang === 'bn' ? (
              <>
                যেকোনো দ্বীনি জিজ্ঞাসা, ফতোয়া পরামর্শ, মারকাজুল ঈমান ফাউন্ডেশনে সাহায্য প্রদান কিংবা প্রতিষ্ঠানে সাক্ষাতের জন্য সরাসরি যোগাযোগ করুন।
              </>
            ) : (
              <>
                For Islamic guidance, religious consultations, foundation donations, or institutional visits, reach out directly through phone, email, or our office locations.
              </>
            )}
          </p>
        </div>

        {/* Main Grid: Left info cards, Right message form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct channels & physical addresses */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Primary Phone */}
              <a
                href={`tel:${CONTACT_INFO.primaryPhone}`}
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-semibold">{lang === 'bn' ? 'প্রধান মোবাইল' : 'Primary Mobile'}</div>
                  <div className="text-sm font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                    {CONTACT_INFO.primaryPhone}
                  </div>
                  <div className="text-[11px] text-emerald-600 mt-0.5">{lang === 'bn' ? 'সরাসরি কথা বলুন' : 'Tap to call directly'}</div>
                </div>
              </a>

              {/* Secondary Phone */}
              <a
                href={`tel:${CONTACT_INFO.secondaryPhone}`}
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-semibold">{lang === 'bn' ? 'বিকল্প মোবাইল' : 'Secondary Mobile'}</div>
                  <div className="text-sm font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                    {CONTACT_INFO.secondaryPhone}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">{lang === 'bn' ? 'জরুরি কল' : 'Alternative line'}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-500/50 transition-all flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-amber-50 text-amber-700 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-stone-500 font-semibold">{lang === 'bn' ? 'অফিসিয়াল ইমেইল' : 'Email Address'}</div>
                  <div className="text-xs sm:text-sm font-bold text-stone-900 truncate group-hover:text-amber-700 transition-colors">
                    {CONTACT_INFO.email}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">{lang === 'bn' ? 'ইমেইল পাঠাতে ক্লিক করুন' : 'Click to send mail'}</div>
                </div>
              </a>

              {/* WhatsApp Direct */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-green-500/50 transition-all flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-green-50 text-green-600 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-semibold">{lang === 'bn' ? 'হোয়াটসঅ্যাপ' : 'WhatsApp'}</div>
                  <div className="text-sm font-bold text-stone-900 group-hover:text-green-600 transition-colors">
                    +880 1711-384681
                  </div>
                  <div className="text-[11px] text-green-600 mt-0.5">{lang === 'bn' ? 'মেসেজ দিন' : 'Instant Chat'}</div>
                </div>
              </a>

              {/* Facebook Official Profile Card */}
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 sm:col-span-2 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-3 rounded-xl bg-blue-600 text-white group-hover:scale-105 transition-transform shrink-0 shadow-sm">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-blue-900 font-bold">{lang === 'bn' ? 'অফিসিয়াল ফেসবুক আইডি ও পেজ' : 'Official Facebook Profile'}</div>
                    <div className="text-xs text-stone-600 truncate">facebook.com/profile.php?id=61593855137685</div>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold shrink-0 flex items-center gap-1.5 group-hover:bg-blue-700 transition-colors shadow-sm">
                  <span>{lang === 'bn' ? 'ফেসবুকে যান' : 'Visit Profile'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

            </div>

            {/* Official Physical Locations List */}
            <div className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>{lang === 'bn' ? 'সরাসরি সাক্ষাতের অফিস ও কেন্দ্রসমূহ' : 'Offices & Physical Addresses'}</span>
              </h4>

              <div className="space-y-3.5 divide-y divide-stone-100">
                {INSTITUTIONS.map((inst) => (
                  <div key={inst.id} className="pt-3 first:pt-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-stone-800">
                        {lang === 'bn' ? inst.nameBn : inst.nameEn}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {lang === 'bn' ? inst.roleBn : inst.roleEn}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                      <span>{lang === 'bn' ? inst.addressBn : inst.addressEn}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Send Message / Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white border border-stone-200 p-6 sm:p-8 shadow-lg">
              
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-bold text-stone-900">
                  {lang === 'bn' ? 'বার্তা অথবা প্রশ্ন পাঠান' : 'Send a Direct Message'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  {lang === 'bn' 
                    ? 'আপনার প্রশ্ন বা বার্তাটি লিখুন। যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করা হবে ইনশাআল্লাহ।' 
                    : 'Fill out this brief form and our team will get back to you promptly insha\'Allah.'}
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-center space-y-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">
                    {lang === 'bn' ? 'আলহামদুলিল্লাহ, আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে!' : 'Message Sent Successfully!'}
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800">
                    {lang === 'bn' 
                      ? 'মুফতি সাহেব এবং মারকাজুল ঈমান ফাউন্ডেশন টিমের পক্ষ থেকে আপনাকে ধন্যবাদ।' 
                      : 'Thank you for reaching out. We will review your message shortly.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-700">
                        {lang === 'bn' ? 'আপনার নাম *' : 'Your Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={lang === 'bn' ? 'যেমন: মোহাম্মদ আব্দুল্লাহ' : 'e.g. Mohammad Abdullah'}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-700">
                        {lang === 'bn' ? 'মোবাইল নম্বর *' : 'Phone Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+880 1..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-700">
                        {lang === 'bn' ? 'ইমেইল (ঐচ্ছিক)' : 'Email (Optional)'}
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-700">
                        {lang === 'bn' ? 'বিষয় *' : 'Subject *'}
                      </label>
                      <select
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm bg-white"
                      >
                        <option value="">{lang === 'bn' ? 'বিষয় নির্বাচন করুন' : 'Select Subject'}</option>
                        <option value="fatwa">{lang === 'bn' ? 'দ্বীনি জিজ্ঞাসা ও ফতোয়া' : 'Religious Question / Fatwa'}</option>
                        <option value="donation">{lang === 'bn' ? 'ফাউন্ডেশনে দান ও সহায়তা' : 'Donation / Humanitarian Aid'}</option>
                        <option value="madrasah">{lang === 'bn' ? 'জামেয়া ইমাম বুখারী ভর্তি/তথ্য' : 'Jamia Imam Bukhari Inquiry'}</option>
                        <option value="invitation">{lang === 'bn' ? 'বয়ান / সেমিনার আমন্ত্রণ' : 'Bayan / Lecture Invitation'}</option>
                        <option value="other">{lang === 'bn' ? 'অন্যান্য' : 'Other'}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">
                      {lang === 'bn' ? 'আপনার বার্তা বিস্তারিত লিখুন *' : 'Your Message *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={lang === 'bn' ? 'আপনার বক্তব্য এখানে লিখুন...' : 'Write your detailed message here...'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'বার্তা পাঠান' : 'Send Message'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
