import React, { useEffect } from "react";
import About from "./About/About";
import Building from "./Building/Building";
import Contact from "./Contact/Contact";
import Landing from "./Landing/Landing";
import MiniMenu from "./MiniMenu/MiniMenu";
import WorkingAs from "./WorkingAs/WorkingAs";
import "./Home.scss";

function Home() {
  useEffect(() => {
    document.title = "Mihai's portfolio";
  }, []);

  return (
    <div className="homePage">
      <Landing />
      <About />
      <Building />
      <WorkingAs />
      <MiniMenu />
      <Contact />
    </div>
  );
}

export default Home;
