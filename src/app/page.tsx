import CreatorIntroduction from "@/components/CreatorIntroduction";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PreviousWork from "@/components/PreviousWork";
import Signature from "@/components/Signature";

const Home = () => {
  return (
    <main>
      <Signature />
      <HeroSection />
      <CreatorIntroduction />
      <PreviousWork />
      <Footer />
    </main>
  );
};

export default Home;
