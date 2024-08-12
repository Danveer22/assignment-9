import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import ShowcaseSection from "./components/ShowcaseSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <ShowcaseSection />
      <TestimonialSection />
      <div className="cta-footer">
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
