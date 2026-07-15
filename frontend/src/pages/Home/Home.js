import React from "react";

// component Imports
import HeroSection from "../../components/HeroSection/HeroSection";
import SocialMediaTab from "../../components/SocialMediaTab/SocialMediaTab";
import ContactsBar from "../../components/ContactsBar/ContactsBar";
import Projects from "../../components/Projects/Projects";
import CVBar from "../../components/CVBar/CVBar";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SocialMediaTab />
      <ContactsBar />
      <Projects />
      <CVBar />
      <p>This is my HomePage</p>
    </div>
  );
}
