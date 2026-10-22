import React from "react";
import { useEffect, useState } from "react";

// component Imports
import HeroSection from "../../components/HeroSection/HeroSection";
import SocialMediaTab from "../../components/SocialMediaTab/SocialMediaTab";
import ContactsBar from "../../components/ContactsBar/ContactsBar";
import Projects from "../../components/Projects/Projects";
import CVBar from "../../components/CVBar/CVBar";

// services import
import { getData } from "../../services/fetch.service";
import { Projects_API, PersonalData_API } from "../../config/api";

//custom hooks
import { useAuth } from "../../context/AuthProvider";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [personalData, setPersonalData] = useState([]);
  const { isAuthentificated } = useAuth();

  useEffect(() => {
    async function parseAllProjects() {
      const parsedProjects = await getData(Projects_API);
      setProjects(parsedProjects);
    }
    async function parsePersonalData() {
      const parsedPersonalData = await getData(PersonalData_API);
      setPersonalData(parsedPersonalData);
    }
    parseAllProjects();
    parsePersonalData();
  }, []);

  // debugging log
  console.log("Projects have been summoned", projects);
  console.log("Personal data has been parsed", personalData);

  return (
    <div>
      <HeroSection canEdit={isAuthentificated} personalData={personalData} />
      <Projects projects={projects} canEdit={isAuthentificated} />
      <CVBar />
    </div>
  );
}
