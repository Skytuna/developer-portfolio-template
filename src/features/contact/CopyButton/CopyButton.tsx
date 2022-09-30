import { FiCopy } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';
import { useCopyToClipboard } from 'usehooks-ts';
import { clickItemStyles, iconColor, ICON_SIZE } from '../ContactItem/ContactItem';

export type CopyButtonProps = {
    copyContent: string;
};

export default function CopyButton({ copyContent }: CopyButtonProps) {
    const [, copyToClipboard] = useCopyToClipboard();

    const handleCopyClick = async () => {
        try {
            await copyToClipboard(copyContent);
            toast.success(`Copied "${copyContent}" to clipboard!`, {
                position: toast.POSITION.TOP_CENTER,
            });
        } catch (e) {
            toast.error(`Couldn't copy the content.`, {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    };

    return (
        <>
            <button
                title='Copy'
                onClick={handleCopyClick}
                className={twMerge(clickItemStyles, 'flex justify-center items-center')}>
                <FiCopy size={ICON_SIZE} className={iconColor} />
            </button>
        </>
    );
}
