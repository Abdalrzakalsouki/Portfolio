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
    const setLoader = async () => {
      const dom = (await document.readyState) === "complete";
      const styles = (await document.styleSheets.length) > 0;
      const scripts = (await document.scripts.length) > 0;
      const images = await Array.from(document.images).every(
        (image) => image.complete
      );
      const fonts = await document.fonts.ready;
      if (dom && styles && scripts && images && fonts) {
        setIsLoading(false);
      }
    };
    setTimeout(setLoader, 3000);
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
