import NavbarItem, { NavbarItemProps } from './NavbarItem';

export type NavbarProps = {
    items: NavbarItemProps[];
};

export default function Navbar({ items }: NavbarProps) {
    return (
        <nav className='flex flex-col gap-4 sm:flex-row justify-between items-center'>
            {items.map((item) => (
                <NavbarItem key={item.route} {...item} />
            ))}
        </nav>
    );
}
