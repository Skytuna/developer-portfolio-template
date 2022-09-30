import TechItem, { TechItemProps } from '@features/projects/Project/TechItem';

export type TechStackDetailProps = TechItemProps & {
    progress: number;
};

export default function TechStackDetail(props: TechStackDetailProps) {
    return (
        <div className='flex flex-col gap-4 sm:gap-8 sm:flex-row justify-between'>
            <TechItem {...props} className='flex justify-center items-center' size={36} />
            <div className='flex flex-col gap-2 flex-1'>
                <div className='flex flex-row justify-between'>
                    <p className='text-white text-2xl'>{props.name}</p>
                    <p className='text-white text-opacity-70'>{props.progress}%</p>
                </div>
                <div className='rounded-full w-full h-2 bg-primary'>
                    <div
                        className='rounded-full h-2 bg-primaryUtility'
                        style={{ width: `${props.progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
