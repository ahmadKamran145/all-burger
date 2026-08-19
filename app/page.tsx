import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Smashed from "./components/Smashed";
import Stack from "./components/Stack";
import ComboBanner from "./components/ComboBanner";
import Lineup from "./components/Lineup";
import Shakes from "./components/Shakes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Smashed />
      <Stack />
      <ComboBanner />
      <Lineup />
      <Shakes />
      <Footer />
    </main>
  );
}
