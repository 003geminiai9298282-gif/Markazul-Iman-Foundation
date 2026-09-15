export type Language = 'en' | 'bn';

export interface Institution {
  id: string;
  roleEn: string;
  roleBn: string;
  nameEn: string;
  nameBn: string;
  addressEn: string;
  addressBn: string;
  regNo?: string;
  badgeEn: string;
  badgeBn: string;
  icon: string;
}

export interface FocusArea {
  id: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  icon: string;
  image: string;
  bulletsEn: string[];
  bulletsBn: string[];
}

export interface Campaign {
  id: string;
  titleEn: string;
  titleBn: string;
  categoryEn: string;
  categoryBn: string;
  targetEn: string;
  targetBn: string;
  progress: number;
  image: string;
  descEn: string;
  descBn: string;
}

export interface BayanTopic {
  id: string;
  titleEn: string;
  titleBn: string;
  venueEn: string;
  venueBn: string;
  dateEn: string;
  dateBn: string;
  tagEn: string;
  tagBn: string;
  duration: string;
  summaryEn: string;
  summaryBn: string;
}

export interface FoundationObjective {
  id: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  highlightEn: string;
  highlightBn: string;
  icon: string;
}

export interface FoundationCommittee {
  id: string;
  number: string;
  numberBn: string;
  nameBn: string;
  nameEn: string;
  membersBn: string;
  membersEn: string;
  eligibilityBn?: string;
  eligibilityEn?: string;
  activitiesBn: string[];
  activitiesEn: string[];
  category: 'governance' | 'advisory' | 'operations';
  categoryLabelBn: string;
  categoryLabelEn: string;
  iconName: 'Users' | 'Briefcase' | 'Scale' | 'Sparkles' | 'Coins' | 'GraduationCap' | 'HeartHandshake' | 'Building2';
}

export interface ScholarRole {
  id: string;
  roleBn: string;
  roleEn: string;
  organizationBn: string;
  organizationEn: string;
  locationBn?: string;
  locationEn?: string;
  badgeBn: string;
  badgeEn: string;
  icon: 'Crown' | 'GraduationCap' | 'Building2' | 'Award' | 'Users' | 'BookOpen';
}

export interface SpiritualLineage {
  primaryMurshidBn: string;
  primaryMurshidEn: string;
  detailsBn: string;
  detailsEn: string;
  eldersBn: string[];
  eldersEn: string[];
  latestMurshidBn: string;
  latestMurshidEn: string;
}

