import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { HackathonsSection } from "@/components/hackathons-section";
import { CertificationsSection } from "@/components/certifications-section";
import { CodingProfilesSection } from "@/components/coding-profiles-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <HackathonsSection />
      <CertificationsSection />
      <CodingProfilesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
