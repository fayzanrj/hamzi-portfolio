import CreatorIntroduction from "@/components/CreatorIntroduction";
import Footer from "@/components/Footer";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import HeroSection from "@/components/HeroSection";
import PreviousWork from "@/components/PreviousWork";
import Signature from "@/components/Signature";
import Skills from "@/components/Skills";
import Videos from "@/components/Videos";
import WallOfEdits from "@/components/WallOfEdits";

const Home = () => {
  return (
    <main>
      <Signature />
      <HeroSection />

      <CreatorIntroduction />
      <Videos />
      <PreviousWork />
      <Skills />
      <WallOfEdits />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  );
};

export default Home;
