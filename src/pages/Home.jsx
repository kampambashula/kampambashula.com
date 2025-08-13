// src/pages/Home.js
import React from "react";
import { Divider } from "@mui/material";

import SiteLayout from "../components/SiteLayout";
import HeroSection from "../components/Hero";
import MissionSection from "../components/MissionSection";
import ClientsSection from "../components/ClientsSection";
import GetInTouchSection from "../components/GetInTouchSection";
import CarouselSection from "../components/CarouselSection";
import PhotoTextSection from "../components/PhotoTextSection";
import GallerySection from "../components/GallerySection";
import TextSection from "../components/TextSection";
import StatsSection from "../components/StatsSection"; 
import TestimonialCarousel from "../components/TestimonialCarousel";
import CallToActionBanner from "../components/CallToActionBanner";
import MediaMentions from "../components/MediaMentions";


const carouselItems = [
  { image: "/images/speaking/0.jpg", alt: "Project 1", caption: "Data" },
  { image: "/images/speaking/5.jpg", alt: "Project 2", caption: "Policy" },
  { image: "/images/speaking/9.jpg", alt: "Project 3", caption: "Community" },
];

const galleryImages = [
  { src: "/images/clients/76.jpg", alt: "Gallery 1" },
  { src: "/images/clients/98.jpg", alt: "Gallery 2" },
];

const Home = () => (
  <>
    {/* Full screen hero outside container */}
    <HeroSection />

    {/* All other content inside container */}
    <SiteLayout>
      <TextSection title="Welcome to the Official Site of Kampamba Shula">
        Explore the vision, passion and bold ideas of a trailblazing economist and Tech Innovator turning challenges into opportunities and insights into impactful change.
      </TextSection>

      <Divider sx={{ mb: 6 }} />

      <PhotoTextSection
        imgSrc="/images/consulting/two.jpg"
        alt="Kampamba Shula"
        title="MEET KAMPAMBA"
        text="Welcome! I’m Kampamba Shula — an economist, data scientist, software developer and passionate problem-solver.
              I specialize in turning complex challenges into clear, actionable insights that empower communities, businesses, and institutions to thrive.
              Whether through research, speaking, or consulting, my mission is to harness data and innovation for meaningful impact."
      />

      {/* Insert animated stats right after Meet Kampamba */}
      <StatsSection />

      <Divider sx={{ mb: 6 }} />

      <CarouselSection title="Pillars" items={carouselItems} />
      <Divider sx={{ mb: 6 }} />
            
      <ClientsSection />
      <Divider sx={{ mb: 6 }} />

      <TestimonialCarousel />
      <MediaMentions />

      
      <GallerySection title="Photo Gallery" images={galleryImages} />
      <Divider sx={{ mb: 6 }} />

      <MissionSection />
      <Divider sx={{ mb: 6 }} />

      <CallToActionBanner />
      

      <GetInTouchSection />
    </SiteLayout>
  </>
);

export default Home;
