import TechItem, { TechItemProps } from './TechItem';

export type ProjectProps = {
    name: string;
    url: string;
    description: string;
    date: string;
    techStack: TechItemProps[];
};

export default function Project({ name, url, description, date, techStack }: ProjectProps) {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between'>
                <a href={url} className='flex-1 text-2xl text-white underline font-medium'>
                    {name}
                </a>
                <p className='flex-[3] text-white text-opacity-70'>{description}</p>
            </div>
            <div className='flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between'>
                <span className='text-white text-opacity-40'>{date}</span>
                <div className='flex flex-row gap-2'>
                    {techStack.map((techItem) => (
                        <TechItem key={techItem.name} {...techItem} />
                    ))}
                </div>
            </div>
        </div>
    );
}
