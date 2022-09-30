import TechStackDetail from '../TechStackDetail';
import { TechStackDetailProps } from '../TechStackDetail/TechStackDetail';

export type TechStackDetailsProps = {
    techStacks: TechStackDetailProps[];
};

export default function TechStackDetails({ techStacks }: TechStackDetailsProps) {
    // Sort tech stack items by descending order
    const sortByProgress = (project1: TechStackDetailProps, project2: TechStackDetailProps) => {
        return project2.progress - project1.progress;
    };

    return (
        <div className='flex flex-col gap-12'>
            {techStacks.sort(sortByProgress).map((techStackItem) => (
                <TechStackDetail key={techStackItem.name} {...techStackItem} />
            ))}
        </div>
    );
}
