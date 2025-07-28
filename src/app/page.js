import ClientSection from "@/components/molicuses/ClientsSection";
import EngageSection from "@/components/molicuses/EngageSection";
import FeatureDebates from "@/components/molicuses/FeatureDebates";
import HeroSection from "@/components/molicuses/HeroSection";
import SaftySection from "@/components/molicuses/SaftySection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <EngageSection />
      <SaftySection />
      <FeatureDebates />
      <ClientSection />
    </>
  );
};

export default HomePage;
