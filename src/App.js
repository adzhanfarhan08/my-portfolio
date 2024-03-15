import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// COMPONENTS
// import Profile from "./components/Profile";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Profile />
      <Skill />
      <Portfolio />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
