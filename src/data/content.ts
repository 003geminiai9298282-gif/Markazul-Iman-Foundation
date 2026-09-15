import { Institution, FocusArea, Campaign, BayanTopic, FoundationObjective, FoundationCommittee, ScholarRole, SpiritualLineage } from '../types';

import scholarPortraitLocal from '../assets/images/mufti_scholar_official_1788878979315.jpg';
import scholarAvatarLocal from '../assets/images/mufti_ohidul_alam_portrait_1788878956236.jpg';
import humanitarianBannerLocal from '../assets/images/humanitarian_relief_banner_1788878271413.jpg';
import mosqueAcademyLocal from '../assets/images/islamic_academy_mosque_1788878327483.jpg';
import madrasahStudentsLocal from '../assets/images/madrasah_students_learning_1788878390863.jpg';
import communityAidLocal from '../assets/images/community_welfare_aid_1788878415196.jpg';

export const FOUNDATION_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="46" stroke="%23059669" stroke-width="4" fill="%23064e3b"/><circle cx="50" cy="50" r="40" stroke="%23d97706" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M50 20 A18 18 0 1 0 68 38 A14 14 0 1 1 50 20 Z" fill="%23fbbf24"/><path d="M30 65 Q50 55 50 72 Q50 55 70 65 Q50 58 30 65 Z" fill="%23fef3c7" stroke="%23d97706" stroke-width="1"/><path d="M50 55 L50 72" stroke="%23064e3b" stroke-width="2"/><circle cx="50" cy="28" r="2.5" fill="%23fbbf24"/></svg>`;

export const IMAGES = {
  // Direct high-speed royalty-free direct URLs for universal deployment & Vercel/Netlify
  scholarPortrait: scholarPortraitLocal || "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85",
  scholarAvatar: scholarAvatarLocal || "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=256&h=256&q=80",
  humanitarianBanner: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
  mosqueAcademy: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=85",
  madrasahStudents: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
  communityAid: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85",
  cleanWater: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=85",
  foundationLogo: FOUNDATION_LOGO_SVG,
  // Direct online scholar fallbacks
  onlineScholarFallback: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85",
  onlineMosqueFallback: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=85",
  onlineCharityFallback: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85"
};

export const CONTACT_INFO = {
  nameEn: "Mufti Wahidul Alam",
  nameBn: "মুফতি ওয়াহিদুল আলম",
  honorificEn: "Sheikhul Hadith, Muhtamim & Khatib",
  honorificBn: "শায়খুল হাদীস, মুহতামিম ও খতীব",
  phones: ["+880 1711-384681", "+880 1511-384681"],
  primaryPhone: "+880 1711-384681",
  secondaryPhone: "+880 1511-384681",
  whatsappNumber: "8801711384681",
  email: "wahidulalam1976@gmail.com",
  website: "wahidulalam.com",
  facebookPageName: "Mufti Wahidul Alam - মুফতি ওয়াহিদুল আলম",
  facebookUrl: "https://www.facebook.com/profile.php?id=61593855137685",
  foundationNameEn: "Markazul Iman Foundation",
  foundationNameBn: "মারকাজুল ঈমান ফাউন্ডেশন",
  locationEn: "Uttara & Turag, Dhaka, Bangladesh",
  locationBn: "উত্তরা ও তুরাগ, ঢাকা, বাংলাদেশ"
};

export const SCHOLAR_BIOGRAPHY = {
  nameBn: "মুফতি ওয়াহিদুল আলম",
  nameEn: "Mufti Wahidul Alam",
  titleBn: "চেয়ারম্যান — মারকাজুল ঈমান ফাউন্ডেশন",
  titleEn: "Chairman — Markazul Iman Foundation",
  introBn: "মুফতি ওয়াহিদুল আলম একজন অরাজনৈতিক দ্বীনি ব্যক্তিত্ব—আলেম, মুফতি, মুহাদ্দিস, লেখক, খতিব ও দাঈ। কর্মজীবনের সূচনালগ্ন থেকেই তিনি ইসলামী শিক্ষা, দাওয়াহ ও সমাজসেবামূলক কার্যক্রমের সঙ্গে গভীরভাবে সম্পৃক্ত।",
  introEn: "Mufti Wahidul Alam is an apolitical Islamic personality—scholar, Islamic jurist (Mufti), Hadith expert (Muhaddith), author, Khatib, and Da'ee. From the inception of his noble career, he has been profoundly devoted to sacred Islamic education, Dawah, and compassionate humanitarian social welfare.",
  tagsBn: ["অরাজনৈতিক দ্বীনি ব্যক্তিত্ব", "আলেম ও মুফতি", "মুহাদ্দিস", "লেখক", "খতিব", "দাঈ"],
  tagsEn: ["Apolitical Scholar", "Islamic Jurist (Mufti)", "Hadith Scholar", "Author", "Khatib", "Da'ee"]
};

export const SCHOLAR_ROLES: ScholarRole[] = [
  {
    id: "role-foundation",
    roleBn: "চেয়ারম্যান",
    roleEn: "Chairman",
    organizationBn: "মারকাজুল ঈমান ফাউন্ডেশন",
    organizationEn: "Markazul Iman Foundation",
    locationBn: "উত্তরা ও তুরাগ, ঢাকা",
    locationEn: "Uttara & Turag, Dhaka",
    badgeBn: "সমাজসেবা ও মানবকল্যাণ",
    badgeEn: "Humanitarian Welfare Foundation",
    icon: "Crown"
  },
  {
    id: "role-jamiyatul-iman",
    roleBn: "প্রিন্সিপাল ও শাইখুল হাদিস",
    roleEn: "Principal & Sheikhul Hadith",
    organizationBn: "জামিয়াতুল ঈমান",
    organizationEn: "Jamiyatul Iman",
    locationBn: "দলিপাড়া, তুরাগ, উত্তরা, ঢাকা",
    locationEn: "Dalipara, Turag, Uttara, Dhaka",
    badgeBn: "উচ্চতর দ্বীনি শিক্ষা প্রতিষ্ঠান",
    badgeEn: "Higher Islamic Seminary",
    icon: "GraduationCap"
  },
  {
    id: "role-masjid-magfirah",
    roleBn: "খতিব",
    roleEn: "Khatib",
    organizationBn: "মসজিদ আল-মাগফিরাহ",
    organizationEn: "Masjid Al-Magfirah",
    locationBn: "সেক্টর–৩, উত্তরা, ঢাকা",
    locationEn: "Sector-3, Uttara, Dhaka",
    badgeBn: "জুমু'আ ও দাওয়াহ কেন্দ্র",
    badgeEn: "Friday Jumu'ah & Dawah Center",
    icon: "Building2"
  },
  {
    id: "role-befaqul-madaris",
    roleBn: "সদস্য, মজলিসে আমেলা",
    roleEn: "Member, Majlis-e-Amelah",
    organizationBn: "বেফাকুল মাদারিসিল কওমিয়া গওহরডাঙ্গা, বাংলাদেশ",
    organizationEn: "Befaqul Madarisil Qawmia Gawhardanga, Bangladesh",
    locationBn: "কওমি মাদরাসা শিক্ষা বোর্ড",
    locationEn: "Qawmi Madrasah Education Board",
    badgeBn: "জাতীয় কওমি শিক্ষা বোর্ড",
    badgeEn: "National Qawmi Education Board",
    icon: "Award"
  },
  {
    id: "role-pirojpur-ulama",
    roleBn: "চেয়ারম্যান",
    roleEn: "Chairman",
    organizationBn: "পিরোজপুর উলামা সোসাইটি",
    organizationEn: "Pirojpur Ulama Society",
    locationBn: "পিরোজপুর",
    locationEn: "Pirojpur",
    badgeBn: "উলামা পরিষদ ও ঐক্য",
    badgeEn: "Scholarly Council & Fraternity",
    icon: "Users"
  },
  {
    id: "role-madrasatul-iman",
    roleBn: "প্রতিষ্ঠাতা ও পরিচালক",
    roleEn: "Founder & Director",
    organizationBn: "মাদরাসাতুল ঈমান",
    organizationEn: "Madrasatul Iman",
    locationBn: "উত্তর চালিতাবাড়ি, ভাইজোড়া, নাজিরপুর, পিরোজপুর",
    locationEn: "Uttar Chalitabari, Bhaijora, Nazirpur, Pirojpur",
    badgeBn: "দ্বীনি শিক্ষা ও হেফজ প্রতিষ্ঠান",
    badgeEn: "Islamic Education & Hifz Institute",
    icon: "BookOpen"
  }
];

export const SPIRITUAL_LINEAGE: SpiritualLineage = {
  primaryMurshidBn: "হযরত প্রফেসর মুহাম্মদ হামীদুর রহমান (রহ.)",
  primaryMurshidEn: "Hazrat Professor Muhammad Hamidur Rahman (Rh.)",
  detailsBn: "তিনি হযরত প্রফেসর মুহাম্মদ হামীদুর রহমান (রহ.)-এর নিকট বায়আত গ্রহণ করে তাঁর পক্ষ থেকে খেলাফতপ্রাপ্ত হন।",
  detailsEn: "He took the sacred oath of spiritual allegiance (Bay'at) from Hazrat Professor Muhammad Hamidur Rahman (Rh.) and was conferred Khilafat (spiritual succession) by him.",
  eldersBn: [
    "শায়খুল ইসলাম আল্লামা শাহ আহমদ শফী (রহ.)",
    "আল্লামা জুনায়েদ বাবুনগরী (রহ.)"
  ],
  eldersEn: [
    "Shaykhul Islam Allama Shah Ahmad Shafi (Rh.)",
    "Allama Junaid Babunagari (Rh.)"
  ],
  latestMurshidBn: "মুতাকাল্লিমে ইসলাম মাওলানা মুহাম্মদ ইলিয়াস গুম্মান (দা.বা.)",
  latestMurshidEn: "Mutakallim-e-Islam Maulana Muhammad Ilyas Ghuman (D.B.)"
};

export const INSTITUTIONS: Institution[] = [
  {
    id: "jamia-imam-bukhari",
    roleEn: "Muhtamim & Sheikhul Hadith",
    roleBn: "মুহতামিম ও শায়খুল হাদীস",
    nameEn: "Jamia Imam Bukhari",
    nameBn: "জামেয়া ইমাম বুখারী",
    addressEn: "Plot-9, Road-9/B, Sector-4, Uttara, Dhaka-1230, Bangladesh",
    addressBn: "প্লট-৯, রোড-৯/বি, সেক্টর-৪, উত্তরা, ঢাকা-১২৩০, বাংলাদেশ",
    badgeEn: "Islamic Higher Seminary",
    badgeBn: "উচ্চতর দ্বীনি শিক্ষা প্রতিষ্ঠান",
    icon: "GraduationCap"
  },
  {
    id: "masjid-al-magfirah",
    roleEn: "Khatib",
    roleBn: "খতীব",
    nameEn: "Masjid Al Magfirah",
    nameBn: "মসজিদ আল মাগফিরাহ",
    addressEn: "Plot-25E, Road-18, Sector-3, Uttara, Dhaka-1230, Bangladesh",
    addressBn: "প্লট-২৫ই, রোড-১৮, সেক্টর-৩, উত্তরা, ঢাকা-১২৩০, বাংলাদেশ",
    badgeEn: "Friday Jumu'ah & Dawah",
    badgeBn: "জুমু'আ ও দাওয়াহ কেন্দ্র",
    icon: "Building"
  },
  {
    id: "talimul-islam-trust",
    roleEn: "Chairman",
    roleBn: "চেয়ারম্যান",
    nameEn: "Talimul Islam Trust",
    nameBn: "তালিমুল ইসলাম ট্রাস্ট",
    addressEn: "Plot-3, Road-3, Dalipara, Turag, Dhaka-1230, Bangladesh",
    addressBn: "প্লট-৩, রোড-৩, ডালিপাড়া, তুরাগ, ঢাকা-১২৩০, বাংলাদেশ",
    regNo: "IV-40/24",
    badgeEn: "Government Registered Trust",
    badgeBn: "সরকারি রেজিস্ট্রিকৃত ট্রাস্ট",
    icon: "ShieldCheck"
  }
];

export const FOUNDATION_MOTTO = {
  bn: "ঈমান — শিক্ষা — সেবা",
  en: "Faith — Education — Service",
  transliteration: "Iman — Shiksha — Seba"
};

export const FOUNDATION_OBJECTIVES: FoundationObjective[] = [
  {
    id: "objective-1",
    titleBn: "১. ঈমান",
    titleEn: "1. Faith (Iman)",
    highlightBn: "সহীহ আকীদা • সুন্নাহসম্মত আমল • আত্মশুদ্ধি",
    highlightEn: "Sound Creed • Sunnah Deeds • Character",
    descBn: "সহীহ আকীদার দৃঢ়তা, সুন্নাহসম্মত আমল, সুমহান আখলাক ও আত্মশুদ্ধির মাধ্যমে আদর্শ মানুষ গড়ে তোলা।",
    descEn: "Building exemplary individuals through steadfastness in sound creed (Sahih Aqeedah), Sunnah-aligned deeds, noble character, and spiritual purification.",
    icon: "ShieldCheck"
  },
  {
    id: "objective-2",
    titleBn: "২. শিক্ষা",
    titleEn: "2. Education (Shiksha)",
    highlightBn: "কুরআন-সুন্নাহর জ্ঞান • নৈতিক শিক্ষা • মূল্যবোধ",
    highlightEn: "Sacred Knowledge • Moral Education • Values",
    descBn: "কুরআন-সুন্নাহভিত্তিক জ্ঞান, নৈতিক শিক্ষা ও মানবিক মূল্যবোধের প্রসারের মাধ্যমে আলোকিত ও নীতিনিষ্ঠ সমাজ গড়ে তোলা।",
    descEn: "Building an enlightened and principled society through the propagation of Quran-Sunnah-based knowledge, moral education, and human values.",
    icon: "BookOpen"
  },
  {
    id: "objective-3",
    titleBn: "৩. সেবা",
    titleEn: "3. Service (Seba)",
    highlightBn: "শিক্ষা ও চিকিৎসা • পুনর্বাসন • স্বাবলম্বীকরণ",
    highlightEn: "Education & Healthcare • Rehabilitation • Self-Reliance",
    descBn: "এতিম, অসহায়, বিধবা, দরিদ্র ও সুবিধাবঞ্চিত মানুষের শিক্ষা, চিকিৎসা, পুনর্বাসন ও স্বাবলম্বীকরণের মাধ্যমে মানবকল্যাণে অবদান রাখা।",
    descEn: "Contributing to human welfare through education, healthcare, rehabilitation, and self-reliance for orphans, helpless individuals, widows, the impoverished, and underprivileged people.",
    icon: "HeartHandshake"
  }
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: "humanitarian",
    titleEn: "Humanitarian & Relief Work",
    titleBn: "মানবিক ও ত্রাণ কার্যক্রম",
    descEn: "Emergency assistance and support for people affected by poverty, natural disasters, floods, cold waves, and difficult circumstances across Bangladesh.",
    descBn: "দারিদ্র্য, প্রাকৃতিক দুর্যোগ, বন্যা, শৈত্যপ্রবাহ এবং কঠিন পরিস্থিতিতে বিপন্ন মানুষের পাশে জরুরি সহায়তা ও খাদ্য-ত্রাণ প্রদান।",
    icon: "HeartHandshake",
    image: IMAGES.humanitarianBanner,
    bulletsEn: [
      "Emergency food packages and dry ration distributions",
      "Winter clothing & warm blanket distribution in northern districts",
      "Clean drinking water tube-wells in vulnerable villages",
      "Immediate disaster & flood relief rehabilitation support"
    ],
    bulletsBn: [
      "জরুরি খাদ্য সামগ্রী ও নিত্যপ্রয়োজনীয় ত্রাণ বিতরণ",
      "উত্তরাঞ্চল ও চরাঞ্চলে শীতবস্ত্র ও কম্বল বিতরণ কর্মসূচি",
      "অসহায় অঞ্চলে নিরাপদ সুপেয় পানির গভীর নলকূপ স্থাপন",
      "বন্যা ও প্রাকৃতিক দুর্যোগে দ্রুত পুনর্বাসন সহায়তা"
    ]
  },
  {
    id: "education",
    titleEn: "Education & Skill Development",
    titleBn: "শিক্ষা ও দক্ষতা উন্নয়ন",
    descEn: "Supporting education, learning opportunities, Quranic studies, higher Hadith research, and practical skill development for a better, dignified future.",
    descBn: "দ্বীনি ও নৈতিক শিক্ষা, কুরআন পাঠ, হাদীস গবেষণা এবং আত্মনির্ভরশীল জীবন গঠনের জন্য ব্যবহারিক দক্ষতা উন্নয়ন সহায়তা।",
    icon: "BookOpen",
    image: IMAGES.madrasahStudents,
    bulletsEn: [
      "Scholarships & stipends for underprivileged madrasah and school students",
      "Free textbooks, stationery, and Islamic literature supplies",
      "Vocational and computer skill orientation for young learners",
      "Islamic ethical counseling and moral leadership curriculum"
    ],
    bulletsBn: [
      "মেধাবী ও অসচ্ছল শিক্ষার্থীদের জন্য শিক্ষাবৃত্তি ও খাদ্য সহায়তা",
      "বিনামূল্যে পাঠ্যবই, কুরআন শরীফ ও শিক্ষা উপকরণ বিতরণ",
      "আধুনিক কম্পিউটার ও কর্মমুখী মৌলিক দক্ষতা প্রশিক্ষণ",
      "নৈতিক চরিত্র গঠন ও ইসলামী মূল্যবোধের সার্বিক বিকাশ"
    ]
  },
  {
    id: "welfare",
    titleEn: "Social Welfare & Community Support",
    titleBn: "সমাজকল্যাণ ও সম্প্রদায় সেবা",
    descEn: "Working relentlessly to improve the well-being, health, healthcare access, and dignity of disadvantaged and marginalized communities.",
    descBn: "অবহেলিত ও প্রান্তিক জনগোষ্ঠীর মর্যাদা রক্ষা, চিকিৎসা সহায়তা এবং স্বাবলম্বী সমাজ বিনির্মাণে বহুমুখী কল্যাণমূলক উদ্যোগ।",
    icon: "Users",
    image: IMAGES.communityAid,
    bulletsEn: [
      "Medical aid and prescription support for poor patients",
      "Orphan care and monthly basic welfare sponsorship",
      "Self-employment tools (sewing machines, small rickshaw/van grants)",
      "Community reconciliation and social dignity assistance"
    ],
    bulletsBn: [
      "দরিদ্র রোগীদের বিনামূল্যে ওষুধ ও চিকিৎসা সহায়তা ফান্ড",
      "এতিম শিশু লালন-পালন ও মাসিক জীবনযাত্রার দায়িত্ব গ্রহণ",
      "স্বাবলম্বীকরণ কর্মসূচি (সেলাই মেশিন ও ক্ষুদ্র জীবিকা উপকরণ প্রদান)",
      "পারিবারিক ও সামাজিক শান্তি প্রতিষ্ঠায় সালিশ ও পরামর্শ"
    ]
  },
  {
    id: "youth",
    titleEn: "Youth Empowerment",
    titleBn: "যুব সমাজের ক্ষমতায়ন ও নেতৃত্ব",
    descEn: "Encouraging young people to develop life skills, leadership, noble character, and proactive positive social responsibility away from destructive habits.",
    descBn: "তরুণদের ইতিবাচক সামাজিক দায়িত্ববোধ, আদর্শ নৈতিকতা, মাদক ও অবক্ষয়মুক্ত সৎ জীবন এবং গঠনমূলক নেতৃত্বের জন্য তৈরি করা।",
    icon: "Sparkles",
    image: IMAGES.mosqueAcademy,
    bulletsEn: [
      "Youth moral forums and motivational workshops",
      "Volunteer corps training for humanitarian disaster response",
      "Anti-drug and ethical awareness seminars across communities",
      "Mentorship programs connecting youth with experienced scholars"
    ],
    bulletsBn: [
      "যুবকদের নৈতিক উন্নয়ন ও উদ্বুদ্ধকরণ কর্মশালা",
      "দুর্যোগ মোকাবিলায় তরুণ স্বেচ্ছাসেবক দল গঠন ও প্রশিক্ষণ",
      "মাদকবিরোধী ও গঠনমূলক সামাজিক সচেতনতা ক্যাম্পেইন",
      "উচ্চতর দিকনির্দেশনা ও স্কলারদের তত্ত্বাবধানে ক্যারিয়ার গাইডেন্স"
    ]
  }
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: "winter-relief",
    titleEn: "Winter Warmth & Blanket Distribution",
    titleBn: "শীতবস্ত্র ও কম্বল বিতরণ প্রকল্প",
    categoryEn: "Humanitarian Relief",
    categoryBn: "মানবিক ত্রাণ",
    targetEn: "5,000 Blankets",
    targetBn: "৫,০০০ কম্বল বিতরণ",
    progress: 78,
    image: IMAGES.communityAid,
    descEn: "Reaching elderly citizens, orphans, and vulnerable rural families in cold wave zones with durable warm blankets.",
    descBn: "তীব্র শীতে অসহায় দিনমজুর, বৃদ্ধ ও এতিমদের মাঝে উষ্ণ কম্বল ও শীতের পোশাক পৌঁছানোর বিশেষ প্রকল্প।"
  },
  {
    id: "orphan-sponsor",
    titleEn: "Orphan & Student Education Fund",
    titleBn: "এতিম ও অসচ্ছল শিক্ষার্থী শিক্ষা ফান্ড",
    categoryEn: "Education & Care",
    categoryBn: "শিক্ষা ও লালন-পালন",
    targetEn: "350 Students",
    targetBn: "৩৫০ জন শিক্ষার্থী",
    progress: 85,
    image: IMAGES.madrasahStudents,
    descEn: "Comprehensive accommodation, food, and religious plus general education expenses for fatherless and needy children.",
    descBn: "বাবার স্নেহবঞ্চিত এতিম ও দরিদ্র শিক্ষার্থীদের সম্পূর্ণ থাকা-খাওয়া ও আন্তর্জাতিক মানের দ্বীনি শিক্ষার সুযোগ।"
  },
  {
    id: "clean-water",
    titleEn: "Safe Water Well Installation Project",
    titleBn: "নিরাপদ সুপেয় পানি নলকূপ প্রকল্প",
    categoryEn: "Community Infrastructure",
    categoryBn: "সামাজিক সেবা",
    targetEn: "120 Deep Tube-wells",
    targetBn: "১২০ টি গভীর নলকূপ",
    progress: 64,
    image: IMAGES.cleanWater,
    descEn: "Installing deep tube-wells in drought-prone and arsenic affected riverine communities to safeguard health.",
    descBn: "সুদূর চরাঞ্চল ও বিশুদ্ধ পানির সংকটপূর্ণ এলাকায় আর্সেনিকমুক্ত গভীর সুপেয় নলকূপ স্থাপন।"
  }
];

export const BAYAN_TOPICS: BayanTopic[] = [
  {
    id: "bayan-1",
    titleEn: "The Importance of Serving Humanity in Islam",
    titleBn: "ইসলামে মানবসেবা ও সৃষ্টির কল্যাণের গুরুত্ব",
    venueEn: "Masjid Al Magfirah, Sector-3, Uttara",
    venueBn: "মসজিদ আল মাগফিরাহ, সেক্টর-৩, উত্তরা",
    dateEn: "Friday Jumu'ah Lecture",
    dateBn: "জুমার খুতবা ও বিশেষ আলোচনা",
    tagEn: "Khutbah",
    tagBn: "খুতবাহ",
    duration: "42 mins",
    summaryEn: "A deep Quranic and Hadith exploration into how true faith reflects through extending kindness to neighbors, orphans, and the vulnerable.",
    summaryBn: "কুরআন ও হাদীসের আলোকে কীভাবে একজন মুমিনের ঈমান সমাজে অসহায় মানুষের সেবার মাধ্যমে পূর্ণতা পায় তার প্রাঞ্জল ব্যাখ্যা।"
  },
  {
    id: "bayan-2",
    titleEn: "Sahih Bukhari Discourse: Sincerity of Intentions (Ikhlas)",
    titleBn: "সহীহ বুখারীর দরস: নিয়তের বিশুদ্ধতা ও আমলের তাৎপর্য",
    venueEn: "Jamia Imam Bukhari, Sector-4, Uttara",
    venueBn: "জামেয়া ইমাম বুখারী, সেক্টর-৪, উত্তরা",
    dateEn: "Weekly Hadith Halaqah",
    dateBn: "সাপ্তাহিক হাদীস মজলিস",
    tagEn: "Hadith Lesson",
    tagBn: "হাদীস দরস",
    duration: "55 mins",
    summaryEn: "Discourse on the famous hadith 'Actions are judged by intentions', focusing on cultivating sincerity in social work and worship.",
    summaryBn: "'ইন্নামাল আমালু বিন নিয়্যাত' হাদীসের গভীর বিশ্লেষণ এবং সামাজিক ও ব্যক্তিগত জীবনে ইখলাসের গুরুত্ব।"
  },
  {
    id: "bayan-3",
    titleEn: "Moral Guard rails for Contemporary Muslim Youth",
    titleBn: "বর্তমান যুগে তরুণ প্রজন্মের চারিত্রিক সুরক্ষা ও করণীয়",
    venueEn: "Talimul Islam Auditorium, Dalipara, Turag",
    venueBn: "তালিমুল ইসলাম অডিটরিয়াম, ডালিপাড়া, তুরাগ",
    dateEn: "Youth Conference",
    dateBn: "যুব সমাবেশ",
    tagEn: "Youth Guidance",
    tagBn: "যুব দিকনির্দেশনা",
    duration: "48 mins",
    summaryEn: "Guidance on overcoming digital distractions, honoring parents, seeking beneficial knowledge, and becoming leaders of ethical change.",
    summaryBn: "ডিজিটাল আসক্তি থেকে মুক্তি, পিতা-মাতার প্রতি দায়িত্ব, জ্ঞান অর্জন এবং ন্যায়পরায়ণ নেতৃত্ব গঠনের বাস্তব দিকনির্দেশনা।"
  }
];

export const HADITH_OF_THE_DAY = {
  arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
  transliteration: "Khayrun-nasi anfa'uhum lin-nas",
  en: "The best among people are those who are most beneficial to people.",
  bn: "মানুষের মধ্যে সর্বোত্তম সেই ব্যক্তি, যে মানুষের সবচেয়ে বেশি কল্যাণ সাধন করে।",
  source: "Al-Mu'jam al-Awsat (Tabarani), Hasan"
};

export const FOUNDATION_COMMITTEES: FoundationCommittee[] = [
  {
    id: "general-body",
    number: "01",
    numberBn: "১",
    nameBn: "সাধারণ পরিষদ",
    nameEn: "General Body",
    membersBn: "সর্বোচ্চ ১৫ জন; প্রাথমিকভাবে ৯ জন",
    membersEn: "Maximum 15 members; initially 9 members",
    category: "governance",
    categoryLabelBn: "শীর্ষ পরিষদ ও মূলনীতি",
    categoryLabelEn: "Apex Policy & Governance",
    iconName: "Users",
    activitiesBn: [
      "ফাউন্ডেশনের লক্ষ্য, উদ্দেশ্য ও মূলনীতি নির্ধারণ ও অনুমোদন করা।",
      "গুরুত্বপূর্ণ সাংগঠনিক সিদ্ধান্ত গ্রহণ করা।",
      "নির্বাহী কমিটি গঠন করা।",
      "বার্ষিক কার্যক্রম ও আর্থিক প্রতিবেদন পর্যালোচনা করা।",
      "ফাউন্ডেশনের ভবিষ্যৎ পরিকল্পনা ও সম্প্রসারণের দিকনির্দেশনা নির্ধারণ করা।"
    ],
    activitiesEn: [
      "Determining and approving the vision, objectives, and foundational policies of the foundation.",
      "Making key strategic and organizational decisions.",
      "Forming and appointing the Executive Committee.",
      "Reviewing annual operational reports and financial audit statements.",
      "Formulating future blueprints and expansion guidelines for the foundation."
    ]
  },
  {
    id: "executive-committee",
    number: "02",
    numberBn: "২",
    nameBn: "নির্বাহী কমিটি",
    nameEn: "Executive Committee",
    membersBn: "৭–৯ জন",
    membersEn: "7–9 Members",
    category: "governance",
    categoryLabelBn: "প্রশাসন ও বাস্তবায়ন",
    categoryLabelEn: "Central Execution & Management",
    iconName: "Briefcase",
    activitiesBn: [
      "ফাউন্ডেশনের দৈনন্দিন কার্যক্রম পরিচালনা ও সমন্বয় করা।",
      "সাধারণ পরিষদের সিদ্ধান্ত বাস্তবায়ন করা।",
      "বার্ষিক কর্মপরিকল্পনা তৈরি ও বাস্তবায়ন করা।",
      "কর্মকর্তা, কর্মচারী ও বিভিন্ন কমিটির কাজের মধ্যে সমন্বয় করা।",
      "চলমান কার্যক্রমের অগ্রগতি পর্যালোচনা করা।",
      "প্রয়োজন অনুযায়ী নতুন কার্যক্রমের প্রস্তাব তৈরি করা।"
    ],
    activitiesEn: [
      "Supervising, managing, and synchronizing day-to-day operations of the foundation.",
      "Executing resolutions approved by the General Body.",
      "Formulating and implementing annual operational roadmaps.",
      "Coordinating work among officers, staff, and specialized sub-committees.",
      "Continuously reviewing ongoing project milestones and delivery.",
      "Drafting proposals for new initiatives and developmental projects."
    ]
  },
  {
    id: "shariah-advisory-council",
    number: "03",
    numberBn: "৩",
    nameBn: "শরিয়াহ অ্যাডভাইজারি কাউন্সিল",
    nameEn: "Shariah Advisory Council",
    membersBn: "৫–৭ জন বিজ্ঞ ও অভিজ্ঞ আলেম",
    membersEn: "5–7 Distinguished and Experienced Islamic Scholars",
    category: "advisory",
    categoryLabelBn: "শরিয়াহ দিকনির্দেশনা",
    categoryLabelEn: "Shariah Guidance & Fiqh Audit",
    iconName: "Scale",
    activitiesBn: [
      "ফাউন্ডেশনের কার্যক্রম শরিয়াহসম্মত রাখার জন্য পরামর্শ প্রদান করা।",
      "যাকাত, সদকা, ওয়াকফ ও অন্যান্য শরিয়াহভিত্তিক তহবিলের ব্যবহারে দিকনির্দেশনা দেওয়া।",
      "নতুন কোনো ইসলামিক প্রকল্প বা কার্যক্রমের শরিয়াহগত দিক পর্যালোচনা করা।",
      "প্রয়োজনীয় মাসআলা-মাসায়েল ও শরিয়াহবিষয়ক বিষয়ে পরামর্শ দেওয়া।",
      "দ্বীনি শিক্ষা, দাওয়াহ ও আত্মশুদ্ধিমূলক কার্যক্রমের ক্ষেত্রে শরিয়াহসম্মত দিকনির্দেশনা দেওয়া।"
    ],
    activitiesEn: [
      "Providing authoritative counsel to ensure all foundation activities comply strictly with Islamic Shariah.",
      "Directing and supervising the proper disbursement of Zakat, Sadaqah, Waqf, and religious funds.",
      "Scrutinizing the Islamic jurisprudence (Fiqh) dimensions of new religious and social ventures.",
      "Advising on Islamic rulings (Masail) and contemporary Shariah questions.",
      "Guiding curriculum, public dawah, and spiritual purification initiatives according to Quran and Sunnah."
    ]
  },
  {
    id: "advisory-committee",
    number: "04",
    numberBn: "৪",
    nameBn: "অ্যাডভাইজারি কমিটি",
    nameEn: "Advisory Committee",
    membersBn: "৭–১৫ জন",
    membersEn: "7–15 Members",
    eligibilityBn: "বিশিষ্ট ব্যক্তি, ব্যবসায়ী, শিল্পপতি, পেশাজীবী, শিক্ষাবিদ, সমাজসেবী, দাতা ও শুভাকাঙ্ক্ষী।",
    eligibilityEn: "Eminent personalities, entrepreneurs, industrialists, professionals, academicians, philanthropists, donors, and well-wishers.",
    category: "advisory",
    categoryLabelBn: "পরামর্শ ও সংযোগ",
    categoryLabelEn: "Strategic Counsel & Outreach",
    iconName: "Sparkles",
    activitiesBn: [
      "ফাউন্ডেশনের উন্নতি ও সম্প্রসারণে অভিজ্ঞতাভিত্তিক পরামর্শ দেওয়া।",
      "সমাজের বিশিষ্ট ব্যক্তি ও বিভিন্ন পেশাজীবী মহলের সঙ্গে সুসম্পর্ক গড়ে তুলতে সহায়তা করা।",
      "দাতা ও শুভাকাঙ্ক্ষীদের সঙ্গে যোগাযোগ বৃদ্ধিতে সহায়তা করা।",
      "বড় প্রকল্প ও গুরুত্বপূর্ণ উদ্যোগের জন্য সহযোগিতা ও পৃষ্ঠপোষকতা সংগ্রহে সহায়তা করা।",
      "ফাউন্ডেশনের পরিচিতি, গ্রহণযোগ্যতা ও সামাজিক সম্পৃক্ততা বৃদ্ধিতে পরামর্শ দেওয়া।"
    ],
    activitiesEn: [
      "Offering experiential insights and high-level recommendations for strategic growth and expansion.",
      "Fostering relations with dignitaries, civil society, and diverse professional fraternities.",
      "Strengthening meaningful engagement with philanthropists and well-wishers.",
      "Facilitating sponsorships and patronages for major developmental and relief initiatives.",
      "Advising on institutional credibility, public acceptance, and societal engagement."
    ]
  },
  {
    id: "finance-fundraising-committee",
    number: "05",
    numberBn: "৫",
    nameBn: "অর্থ ও তহবিল কমিটি",
    nameEn: "Finance & Fundraising Committee",
    membersBn: "৫–৭ জন",
    membersEn: "5–7 Members",
    category: "operations",
    categoryLabelBn: "অর্থ ও স্বচ্ছতা",
    categoryLabelEn: "Financial Management & Funds",
    iconName: "Coins",
    activitiesBn: [
      "বার্ষিক বাজেট ও আর্থিক পরিকল্পনা তৈরিতে সহায়তা করা।",
      "দান, অনুদান ও বৈধ তহবিল সংগ্রহের কার্যক্রম পরিচালনা করা।",
      "দাতা ও আর্থিক সহযোগীদের সঙ্গে নিয়মিত যোগাযোগ রাখা।",
      "যাকাত, সদকা ও অন্যান্য তহবিলের পৃথক হিসাব সংরক্ষণে সহায়তা করা।",
      "আয়-ব্যয়ের হিসাব ও আর্থিক প্রতিবেদন প্রস্তুত করা।",
      "আর্থিক লেনদেনে স্বচ্ছতা ও শৃঙ্খলা বজায় রাখতে কাজ করা।"
    ],
    activitiesEn: [
      "Assisting in drafting annual financial budgets, forecasts, and fiscal planning.",
      "Managing donation drives and halal fundraising campaigns.",
      "Maintaining ongoing rapport and accountability reporting with benefactors and donors.",
      "Safeguarding strict segregated accounting for Zakat, Sadaqah, Waqf, and general funds.",
      "Preparing transparent income-expenditure ledgers and audit-ready financial statements.",
      "Ensuring complete financial transparency, internal discipline, and compliance in all transactions."
    ]
  },
  {
    id: "education-dawah-committee",
    number: "06",
    numberBn: "৬",
    nameBn: "শিক্ষা ও দাওয়াহ কমিটি",
    nameEn: "Education & Dawah Committee",
    membersBn: "৫–৭ জন",
    membersEn: "5–7 Members",
    category: "operations",
    categoryLabelBn: "শিক্ষা ও দাওয়াহ",
    categoryLabelEn: "Islamic Education & Dawah",
    iconName: "GraduationCap",
    activitiesBn: [
      "কুরআন, হাদিস, আকিদা, ফিকহ ও ইসলামী শিক্ষার কার্যক্রম পরিচালনা করা।",
      "মাদরাসা, মক্তব ও অন্যান্য শিক্ষামূলক কার্যক্রমের পরিকল্পনা করা।",
      "দাওয়াহ, ইসলাহী ও আত্মশুদ্ধিমূলক কার্যক্রম পরিচালনা করা।",
      "ইসলামী বই, পুস্তিকা ও শিক্ষামূলক সামগ্রী প্রকাশের উদ্যোগ নেওয়া।",
      "শিশু, কিশোর, যুবক ও সাধারণ মানুষের জন্য উপযোগী দ্বীনি শিক্ষার ব্যবস্থা করা।",
      "দ্বীনি শিক্ষা ও দাওয়াহর মানোন্নয়নে নতুন উদ্যোগ গ্রহণ করা।"
    ],
    activitiesEn: [
      "Administering Quran, Hadith, Aqeedah, Fiqh, and foundational Islamic knowledge programs.",
      "Planning curricula and operational models for Madrasahs, Maktabs, and learning circles.",
      "Organizing public Dawah lectures, spiritual revival programs, and purification circles.",
      "Publishing authentic Islamic literature, educational booklets, and pedagogical resources.",
      "Tailoring dynamic learning tracks for children, adolescents, youth, and the general public.",
      "Innovating modern educational frameworks to enhance the efficacy and reach of sacred knowledge."
    ]
  },
  {
    id: "orphan-relief-committee",
    number: "07",
    numberBn: "৭",
    nameBn: "এতিম ও দুস্থ সেবা কমিটি",
    nameEn: "Orphan & Relief Committee",
    membersBn: "৫–৭ জন",
    membersEn: "5–7 Members",
    category: "operations",
    categoryLabelBn: "এতিম ও মানবসেবা",
    categoryLabelEn: "Orphan Care & Relief",
    iconName: "HeartHandshake",
    activitiesBn: [
      "এতিমদের শিক্ষা, লালন-পালন ও প্রয়োজনীয় সহায়তার ব্যবস্থা করা।",
      "দরিদ্র, দুস্থ ও হতদরিদ্র মানুষের সহায়তার ব্যবস্থা করা।",
      "বিধবা, অসহায় নারী ও অভিভাবকহীন পরিবারের পাশে দাঁড়ানো।",
      "পথশিশু ও সুবিধাবঞ্চিত শিশুদের জন্য প্রয়োজনীয় সহায়তা ও সেবার ব্যবস্থা করা।",
      "পিছিয়ে পড়া ও প্রান্তিক এলাকার মানুষের প্রয়োজন অনুযায়ী সহায়তা পৌঁছে দেওয়া।",
      "খাদ্য, বস্ত্র, চিকিৎসা ও জরুরি মানবিক সহায়তার ব্যবস্থা করা।",
      "প্রাকৃতিক দুর্যোগ ও জরুরি পরিস্থিতিতে ত্রাণ কার্যক্রম পরিচালনা করা।",
      "প্রকৃত উপকারভোগী চিহ্নিত করে তাদের প্রয়োজন অনুযায়ী সহায়তা নিশ্চিত করা।"
    ],
    activitiesEn: [
      "Ensuring holistic education, nurturing shelter, and sustainable care for orphans.",
      "Extending urgent livelihood and life-saving aid to the impoverished and destitute.",
      "Standing by widows, vulnerable women, and guardian-less families.",
      "Providing healthcare, nutrition, and compassionate care for street and underprivileged children.",
      "Delivering relief resources to marginalized and underserved remote communities.",
      "Providing emergency food rations, clean water, warm clothing, and critical medical treatments.",
      "Mobilizing emergency disaster relief, flood rescue, and cold wave distributions.",
      "Conducting ground verification to identify authentic beneficiaries and ensure equitable delivery."
    ]
  },
  {
    id: "development-construction-committee",
    number: "08",
    numberBn: "৮",
    nameBn: "উন্নয়ন ও নির্মাণ কমিটি",
    nameEn: "Development & Construction Committee",
    membersBn: "৫–৭ জন",
    membersEn: "5–7 Members",
    category: "operations",
    categoryLabelBn: "নির্মাণ ও অবকাঠামো",
    categoryLabelEn: "Development & Construction",
    iconName: "Building2",
    activitiesBn: [
      "মসজিদ, মাদরাসা, এতিমখানা ও অন্যান্য প্রতিষ্ঠানের নির্মাণ পরিকল্পনা করা।",
      "নতুন ভবন, ক্যাম্পাস ও অবকাঠামো উন্নয়নের প্রস্তাব তৈরি করা।",
      "নির্মাণ ও উন্নয়ন প্রকল্পের প্রয়োজন, পরিমাণ ও আনুমানিক ব্যয় নির্ধারণে সহায়তা করা।",
      "নির্মাণকাজের অগ্রগতি পর্যবেক্ষণ করা।",
      "জমি, নির্মাণসামগ্রী ও প্রয়োজনীয় উপকরণ সংগ্রহে সহায়তা করা।",
      "অনুমোদিত নির্মাণ ও উন্নয়ন প্রকল্প সময়মতো বাস্তবায়নে সহযোগিতা করা।"
    ],
    activitiesEn: [
      "Planning architectural designs and engineering master plans for Mosques, Madrasahs, and Orphanages.",
      "Formulating engineering proposals for new multi-storied complexes and suburban campuses.",
      "Assessing project feasibility, bill of quantities (BOQ), and estimated construction budgets.",
      "Conducting rigorous on-site quality inspection and milestone tracking.",
      "Facilitating land acquisition, building material procurement, and technical logistics.",
      "Ensuring punctual, cost-efficient, and structurally sound execution of approved projects."
    ]
  }
];

