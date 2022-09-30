import Link from 'next/link';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';

export type NavbarItemProps = {
    title: string;
    route: string;
};

export default function NavbarItem({ title, route }: NavbarItemProps) {
    const router = useRouter();

    const isActive = route === router.pathname;

    const activeItemStyles =
        'bg-primaryUtility text-secondary text-opacity-100 border-secondary border-opacity-40';

    return (
        <Link href={route}>
            <a
                className={twMerge(
                    'px-6 py-2 rounded-lg transition-all hover:bg-primaryUtility text-base text-white text-opacity-70 hover:text-opacity-100 hover:text-secondary border border-layoutBg',
                    isActive && activeItemStyles,
                )}>
                {title}
            </a>
        </Link>
    );
}
