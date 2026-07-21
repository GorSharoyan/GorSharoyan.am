import React from "react";
import { useEffect, useState } from "react";

// component Imports
import HeroSection from "../../components/HeroSection/HeroSection";
import SocialMediaTab from "../../components/SocialMediaTab/SocialMediaTab";
import ContactsBar from "../../components/ContactsBar/ContactsBar";
import Projects from "../../components/Projects/Projects";
import CVBar from "../../components/CVBar/CVBar";

// services import
import { getAllProjects } from "../../services/projects.service";
import { getData } from "../../services/fetch.service";
import { Projects_API } from "../../config/api";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function parseAllProjects() {
      const parsedProjects = await getData(Projects_API);
      setProjects(parsedProjects);
    }
    parseAllProjects();
  }, []);

  // debugging log
  console.log("Projects have been summoned", projects);

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
