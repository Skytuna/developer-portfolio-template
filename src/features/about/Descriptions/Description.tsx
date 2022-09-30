import { DescriptionsEnum } from '@enums/DescriptionEnums';
import Link from 'next/link';

export type DescriptionItem = { type: DescriptionsEnum; text: string; route?: string };

export type DescriptionProps = {
    items: DescriptionItem[];
    isLastItem: boolean;
};

export default function Description({ items, isLastItem }: DescriptionProps) {
    return (
        <div className='flex flex-row gap-4 md:gap-12'>
            <div className='flex flex-col items-center'>
                <div className='bg-primaryUtility h-4 w-4 rounded-full' />
                {!isLastItem && <div className='bg-primaryUtility h-12 w-[1px]' />}
            </div>
            <h3 className='text-lg font-light text-white text-opacity-70 -top-1.5 relative'>
                {items.map((item, index) => {
                    if (item.type === DescriptionsEnum.NORMAL) return item.text;
                    if (item.type === DescriptionsEnum.EMPHASIS)
                        return <EmphasisItem key={index} text={item.text} />;
                    if (item.type === DescriptionsEnum.LINK)
                        return <LinkItem key={index} text={item.text} route={item.route || '/'} />;
                })}
            </h3>
        </div>
    );
}

function LinkItem({ text, route }: { text: string; route: string }) {
    return (
        <Link href={route}>
            <a className='underline'>{text}</a>
        </Link>
    );
}

function EmphasisItem({ text }: { text: string }) {
    return <span className='text-secondary'>{text}</span>;
}
