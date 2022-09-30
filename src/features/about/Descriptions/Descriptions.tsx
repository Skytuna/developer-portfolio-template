import Description, { DescriptionItem } from './Description';

export type DescriptionProps = {
    descriptions: DescriptionItem[][];
};

export default function Descriptions({ descriptions }: DescriptionProps) {
    return (
        <div className='flex flex-col justify-start'>
            {descriptions.map((description, index) => (
                <Description
                    key={index}
                    items={description}
                    isLastItem={index === descriptions.length - 1}
                />
            ))}
        </div>
    );
}
