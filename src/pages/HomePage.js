import React from 'react';
import HeroSection from '../components/sections/home/HeroSection';
import ProblemSection from '../components/sections/home/ProblemSection';
import SolutionSection from '../components/sections/home/SolutionSection';
import WhyUsSection from '../components/sections/home/WhyUsSection';
import ServicesGridSection from '../components/sections/home/ServicesGridSection';
import AerialPreviewSection from '../components/sections/home/AerialPreviewSection';
import CeoSection from '../components/sections/home/CeoSection';
import BrandsThatFlyWithUsSection from '../components/sections/home/BrandsThatFlyWithUsSection';
import BrandsThatTrustTheLensSection from '../components/sections/BrandsThatTrustTheLensSection';
import ImpactSection from '../components/sections/home/ImpactSection';
import TestimonialsSection from '../components/sections/home/TestimonialsSection';
import CampaignsPreviewSection from '../components/sections/home/CampaignsPreviewSection';
import SparkPartnerSection from '../components/sections/home/SparkPartnerSection';
import DroneTechPartnerSection from '../components/sections/home/DroneTechPartnerSection';
import HowWeWorkSection from '../components/sections/home/HowWeWorkSection';
import OpportunitySection from '../components/sections/home/OpportunitySection';
import CtaSection from '../components/sections/home/CtaSection';
import VisionMissionSection from '../components/sections/home/VisionMissionSection';

const HomePage = ({ t }) => (
  <>
    <HeroSection t={t} />
    <ProblemSection t={t} />
    <SolutionSection t={t} />
    <WhyUsSection t={t} />
    <VisionMissionSection t={t} />
    <ServicesGridSection t={t} />
    <AerialPreviewSection t={t} />
    <CeoSection t={t} />
    <BrandsThatFlyWithUsSection t={t} />
    <BrandsThatTrustTheLensSection t={t} />
    <ImpactSection t={t} />
    <TestimonialsSection t={t} />
    <CampaignsPreviewSection t={t} />
    <DroneTechPartnerSection t={t} />
    <SparkPartnerSection t={t} />
    <HowWeWorkSection t={t} />
    <OpportunitySection t={t} />
    <CtaSection t={t} />
  </>
);

export default HomePage;
