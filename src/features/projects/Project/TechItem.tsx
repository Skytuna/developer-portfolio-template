import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export type TechItemProps = {
    name: string;
    imagePath: string;
    redirectUrl: string;
    className?: string;
    size?: number;
};

export default function TechItem({ name, imagePath, redirectUrl, className, size }: TechItemProps) {
    return (
        <a href={redirectUrl} className={twMerge('rounded-full', className && className)}>
            <Image
                src={imagePath}
                alt={name}
                title={name}
                width={size || 24}
                height={size || 24}
                layout='intrinsic'
            />
        </a>
    );
}
