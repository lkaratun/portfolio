import type { NextPage } from "next";
import HomePage from "./Home/Home";
import AboutPage from "./About/About";
import ProjectsPage from "./Projects/Projects";
// import NavBar from '../NavBar/NavBar';
import SkillsPage from "./Skills/Skills";
import ContactsPage from "./Contacts/Contacts";

// type MainPageProps = { navBarRef: JSX.Element };

const MainPage = () => {
  return (
    <>
      {/* <NavBar navBarRef={navBarRef} /> */}
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactsPage />
    </>
  );
};

export default MainPage;
