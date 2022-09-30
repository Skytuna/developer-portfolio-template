import { FiLink } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import { clickItemStyles, iconColor, ICON_SIZE } from '../ContactItem/ContactItem';

export type GoToLinkButtonProps = {
    url: string;
};

export default function GoToLinkButton({ url }: GoToLinkButtonProps) {
    return (
        <a href={url} title='Go to link' className={twMerge(clickItemStyles, 'ml-auto')}>
            <FiLink size={ICON_SIZE} className={iconColor} />
        </a>
    );
}
