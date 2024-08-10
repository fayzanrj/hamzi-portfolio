import CreatorIntroduction from "@/components/CreatorIntroduction";
import CreatorSpotlightSection from "@/components/CreatorSpotlightSection";
import HeroSection from "@/components/HeroSection";
import Signature from "@/components/Signature";

const Home = () => {
  return (
    <main>
      <Signature />
      <HeroSection />
      <CreatorSpotlightSection />
      <CreatorIntroduction />
    </main>
  );
};

export default Home;
