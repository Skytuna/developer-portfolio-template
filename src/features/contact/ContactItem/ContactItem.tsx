import Image from 'next/image';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import CopyButton from '../CopyButton';
import GoToLinkButton from '../GoToLinkButton';

export type ContactItemProps = {
    name: string;
    content: string;
    iconPath: string;
    url?: string;
};

const ITEM_SIZE = 32;
export const ICON_SIZE = 16;
export const clickItemStyles = 'hover:bg-slate-600 p-3 rounded-full opacity-50 hover:opacity-100';
export const iconColor = 'text-white';

export default function ContactItem({ iconPath, name, content, url }: ContactItemProps) {
    const [parentRef] = useAutoAnimate<HTMLDivElement>();

    return (
        <div className='flex flex-col rounded-3xl border border-primaryUtility p-6' ref={parentRef}>
            <div className='flex flex-1 flex-row gap-2 items-center'>
                <Image
                    src={iconPath}
                    alt={name}
                    title={name}
                    width={ITEM_SIZE}
                    height={ITEM_SIZE}
                    layout='intrinsic'
                />
                <span className='text-white text-lg overflow-clip'>{name}</span>
                {url && <GoToLinkButton url={url} />}
            </div>
            <div className='flex flex-1 flex-row justify-between items-center'>
                <span className='text-white text-opacity-80 font-thin text-sm overflow-clip'>
                    {content}
                </span>
                <CopyButton copyContent={content} />
            </div>
        </div>
    );
}
