import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { IMAGES } from './data/content';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FacebookConnectBanner } from './components/FacebookConnectBanner';
import { InstitutionsSection } from './components/InstitutionsSection';
import { FoundationSection } from './components/FoundationSection';
import { CommitteesSection } from './components/CommitteesSection';
import { CampaignsSection } from './components/CampaignsSection';
import { BayanSection } from './components/BayanSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { FloatingActionBar } from './components/FloatingActionBar';

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  // Persistent photo state: holds custom uploaded original image
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem('scholar_custom_original_photo');
    } catch {
      return null;
    }
  });

  // Check if public/scholar.png exists as an override
  useEffect(() => {
    if (!customPhoto) {
      fetch('/scholar.png', { method: 'HEAD' })
        .then(res => {
          if (res.ok) setCustomPhoto('/scholar.png');
        })
        .catch(() => {});
    }
  }, [customPhoto]);

  const handleUpdatePhoto = (newPhoto: string | null) => {
    setCustomPhoto(newPhoto);
    try {
      if (newPhoto) {
        localStorage.setItem('scholar_custom_original_photo', newPhoto);
      } else {
        localStorage.removeItem('scholar_custom_original_photo');
      }
    } catch (e) {
      console.error('Storage error', e);
    }
  };

  const activeScholarPhoto = customPhoto || IMAGES.scholarPortrait;
  const activeScholarAvatar = customPhoto || IMAGES.scholarAvatar || IMAGES.scholarPortrait;

  return (
    <div className={`min-h-screen bg-stone-50 text-stone-900 pb-16 md:pb-0 ${lang === 'bn' ? 'font-bengali' : ''}`}>
      {/* Top Navbar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onOpenDonate={() => setDonateModalOpen(true)} 
        scholarPhoto={activeScholarAvatar}
      />

      <main id="main-content">
        {/* Scholar Hero Section with Large Portrait & Badges */}
        <HeroSection 
          lang={lang} 
          onOpenDonate={() => setDonateModalOpen(true)} 
          scholarPhoto={activeScholarPhoto}
          onUpdatePhoto={handleUpdatePhoto}
          isCustomPhoto={!!customPhoto}
        />

        {/* Dedicated Facebook Page Connect & Online Community Portal */}
        <FacebookConnectBanner 
          lang={lang} 
          scholarPhoto={activeScholarAvatar}
        />

        {/* Key Leadership Institutions (Jamia Imam Bukhari, Masjid Al Magfirah, Talimul Islam Trust) */}
        <InstitutionsSection 
          lang={lang} 
        />

        {/* Markazul Iman Foundation (About Us, Vision, Mission, 4 Focus Areas) */}
        <FoundationSection 
          lang={lang} 
          onOpenDonate={() => setDonateModalOpen(true)} 
        />

        {/* Markazul Iman Foundation (Committees & Operations - ৮টি কমিটি ও কার্যক্রম) */}
        <CommitteesSection 
          lang={lang} 
        />

        {/* Active Humanitarian Campaigns */}
        <CampaignsSection 
          lang={lang} 
          onOpenDonate={() => setDonateModalOpen(true)} 
        />

        {/* Scholarly Lectures, Jumu'ah Khutbah & Hadith Archive */}
        <BayanSection 
          lang={lang} 
        />

        {/* Direct Contact, Map Directions & Inquiry Form */}
        <ContactSection 
          lang={lang} 
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer 
        lang={lang} 
        onOpenDonate={() => setDonateModalOpen(true)} 
      />

      {/* Floating Action Bar (WhatsApp, Call, Facebook, Donate) */}
      <FloatingActionBar 
        lang={lang} 
        onOpenDonate={() => setDonateModalOpen(true)} 
      />

      {/* Donation & Sadaqah Guidance Modal */}
      <DonationModal 
        isOpen={donateModalOpen} 
        onClose={() => setDonateModalOpen(false)} 
        lang={lang} 
      />
    </div>
  );
}
