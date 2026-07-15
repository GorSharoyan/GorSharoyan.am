import React from "react";

// component Imports
import HeroSection from "../../components/HeroSection/HeroSection";
import SocialMediaTab from "../../components/SocialMediaTab/SocialMediaTab";
import ContactsBar from "../../components/ContactsBar/ContactsBar";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SocialMediaTab />
      <ContactsBar />
      <p>This is my HomePage</p>
    </div>
  );
}
