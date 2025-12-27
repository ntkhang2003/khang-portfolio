import { getAllContent } from '@/lib/markdown';
import { Section } from '@/components/Section';
import { About } from '@/components/About';
import { EducationList } from '@/components/EducationList';
import { ExperienceList } from '@/components/ExperienceList';
import { ProjectsList } from '@/components/ProjectsList';
import { BlogList } from '@/components/BlogList';
import { AwardsList } from '@/components/AwardsList';

export default function Home() {
  const experience = getAllContent('experience');
  const projects = getAllContent('projects');
  const blog = getAllContent('blog');

  return (
    <main className="min-h-screen bg-background text-foreground pb-32">
       <About />

       <Section id="education" title="Education">
         <EducationList />
       </Section>
       
       <Section id="experience" title="Experience">
         <ExperienceList items={experience} />
       </Section>
       
       <Section id="projects" title="Projects">
         <ProjectsList items={projects} />
       </Section>
       
       <Section id="blog" title="Writing">
         <BlogList items={blog} />
       </Section>
       
       <Section id="awards" title="Awards">
         <AwardsList />
       </Section>
    </main>
  );
}
