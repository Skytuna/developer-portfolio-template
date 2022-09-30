import Project from '../Project';
import { ProjectProps } from '../Project/Project';

export type ProjectsProps = {
    projects: ProjectProps[];
};

export default function Projects({ projects }: ProjectsProps) {
    return (
        <div className='flex flex-col gap-8'>
            {projects.map((project) => (
                <Project key={project.name} {...project} />
            ))}
        </div>
    );
}
