import { projects } from '@data/projectsPage';
import Projects from './Projects';

export default function ProjectsPageContent() {
    return (
        <section className='flex flex-col'>
            <Projects projects={projects} />
        </section>
    );
}
