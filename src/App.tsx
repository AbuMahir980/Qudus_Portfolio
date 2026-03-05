import { PageProvider } from './context/PageContext';
import RootLayout from './components/layout/RootLayout';
import Hero from './components/hero/Hero';
import ProjectsSection from './components/sections/ProjectsSection';
import TechStackSection from './components/sections/TechStackSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';

const App = () => {
  return (
    <PageProvider>
      <RootLayout>
        <Hero />
        <ProjectsSection />
        <TechStackSection />
        <ExperienceSection />
        <ContactSection />
      </RootLayout>
    </PageProvider>
  );
};

export default App;
