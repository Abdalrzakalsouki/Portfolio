import { useState, useEffect } from "react";
import Header from "./Header";
import Landing from "./Landing";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";
import Social from "./Social";
import Footer from "./Footer";
import Loader from "../Loader";
function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const setLoader = setInterval(() => {
      document.fonts.ready.then(() => {
        setIsLoading(false);
        clearInterval(setLoader);
      });
    }, 100);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <Landing />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Contact />
          <Social />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
