import Navbar from '@/components/sections/navbar';
import Hero from '@/components/sections/hero';
import Productivity from '@/components/sections/productivity';
import VirtualOffice from '@/components/sections/virtual-office';
import GithubSync from '@/components/sections/github-sync';
import MetaBrainSection from '@/components/sections/metabrain';
import KnowledgeSection from '@/components/sections/knowledge-section';
import CollaborationFeatures from '@/components/sections/collaboration-features';
import CtaSection from '@/components/sections/cta-section';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background-primary overflow-hidden">
      <Navbar />
      <Hero />
      <Productivity />
      <VirtualOffice />
      <GithubSync />
      <MetaBrainSection />
      <div className="bg-background-primary">
        <KnowledgeSection />
        <CollaborationFeatures />
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}