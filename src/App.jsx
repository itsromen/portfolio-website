import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Recent from "./Recent";

function App() {
  return (
    <div className="h-screen xl:snap-y xl:snap-mandatory overflow-y-scroll scroll-smooth">
      <Hero />
      <About />
      <Recent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
