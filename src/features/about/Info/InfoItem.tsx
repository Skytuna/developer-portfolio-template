export type InfoItemProps = {
    text: string;
};

export default function InfoItem({ text }: InfoItemProps) {
    return <h4 className='text-xl font-light text-white text-opacity-70'>{text}</h4>;
}
