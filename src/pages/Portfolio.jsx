import { useState } from 'react';
import WebGLBackground from '../components/portfolio/WebGLBackground';
import ParticleBackground from '../components/portfolio/ParticleBackground';
import CustomCursor from '../components/portfolio/CustomCursor';
import Scene3D from '../components/portfolio/Scene3D';
import LoadingScreen from '../components/portfolio/LoadingScreen';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import GoalSection from '../components/portfolio/GoalSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';
import SmoothScroller from '../components/portfolio/SmoothScroller';

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {loaded && (
        <>
          {/* Fixed global layers */}
          <WebGLBackground />
          <ParticleBackground />
          <CustomCursor />

          {/* Global R3F floating scene */}
          <Scene3D className="fixed inset-0 z-[-1] pointer-events-none" style={{ opacity: 0.35 }} />

          {/* Smooth-scrolled content */}
          <SmoothScroller>
            <div className="relative min-h-screen overflow-x-hidden">
              <div className="relative z-10">
                <Navbar />
                <HeroSection />
                <AboutSection />
                <GoalSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
              </div>
            </div>
          </SmoothScroller>
        </>
      )}
    </>
  );
}
