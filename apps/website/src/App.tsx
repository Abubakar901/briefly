import CTASection from "./components/CTASection/CTASection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import Navbar from "./components/Navbar/Navbar";
import ProblemSection from "./components/ProblemSection/ProblemSection";
import WhyBrieflySection from "./components/WhyBrieflySection/WhyBrieflySection";

const App = () => {
  return (
   <main id="top" className="bg-[#fbfafc] text-[#292530]">
      <Navbar />

      <HeroSection />

      <ProblemSection />

      <HowItWorksSection />

      <FeaturesSection />

      <WhyBrieflySection />

      <CTASection />

      <Footer />
   </main>
  )
}

export default App;