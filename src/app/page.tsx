import { Navbar } from './components/Navbar';
import AboutSection from './componentsMain/Home/AboutSection';
import BenefitisSection from './componentsMain/Home/BenefitisSection';
import Footer from './componentsMain/Home/Footer';
import FormSection from './componentsMain/Home/FormSection';
import MainHome from './componentsMain/Home/MainHome';
import { Partners } from './componentsMain/Home/Partners';
import PlansSection from './componentsMain/Home/PlansSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <MainHome />
      <AboutSection id="about" />
      <BenefitisSection id="benefits" />
      <PlansSection />
      <Partners />
      <FormSection id="form" />
      <Footer />
    </>
  );
}
