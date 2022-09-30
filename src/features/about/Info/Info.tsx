import InfoItem from './InfoItem';

export type InfoProps = {
    name: string;
    infoItems: string[];
};

export default function Info({ name, infoItems }: InfoProps) {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className='text-4xl font-medium text-white'>
                Hey! I am <span className='text-secondary'>{name}</span> 👋
            </h1>
            <>
                {infoItems.map((item) => (
                    <InfoItem key={item} text={item} />
                ))}
            </>
        </div>
    );
}
