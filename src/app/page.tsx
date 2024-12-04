
import { Cards } from '@/components/cards';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import SpotlightCursor from '@/components/SpotLightCursorExample';
import { ThemeToggle } from '@/components/theme-toggle';
import { projectsData } from '@/lib/data';
import { useTheme } from 'next-themes';

const Home = async () => {

  const starsCount = await Promise.all(
    projectsData.map(async ({ links }) => {
      const res = await fetch(links.githubApi, { cache: 'no-store' });
      const data = await res.json();
      return data.stargazers_count;
    })
  );

  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        {/* <Intro /> */}
        <Cards />
        <SectionDivider />
        <Projects starsCount={starsCount} />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Contact />
        <SectionDivider />
        <Footer />

      </div>
    </>
  );
};

export default Home;
