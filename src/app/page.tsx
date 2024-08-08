import CreatorIntroduction from "@/components/CreatorIntroduction";
import CreatorSpotlightSection from "@/components/CreatorSpotlightSection";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CreatorSpotlightSection />
      <CreatorIntroduction />
    </main>
  );
};

export default Home;
