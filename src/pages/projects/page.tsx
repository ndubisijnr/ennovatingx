//
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProjectsHero from './components/ProjectsHero';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectStats from './components/ProjectStats';

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ProjectsHero />
        <ProjectStats />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}

