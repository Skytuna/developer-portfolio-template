import { DescriptionsEnum } from '@enums/DescriptionEnums';
import { DescriptionItem } from '@features/about/Descriptions/Description';

export const profilePhotoPath = '/images/user.jpg';

export const name = 'Berke';

export const infoItems: string[] = [
    '💻 Passionate Web/Mobile Developer',
    '🎸 Amateur Guitarist',
    '🌳 Nature Lover',
    '🎥 Movie Enthusiast',
    '🎨 Semi UI/UX Designer',
];

export const descriptions: DescriptionItem[][] = [
    [
        { type: DescriptionsEnum.NORMAL, text: 'Living in ' },
        { type: DescriptionsEnum.EMPHASIS, text: 'Izmir' },
        { type: DescriptionsEnum.NORMAL, text: ', Turkey.' },
    ],
    [
        { type: DescriptionsEnum.NORMAL, text: '2 years of experience of ' },
        { type: DescriptionsEnum.EMPHASIS, text: 'web' },
        { type: DescriptionsEnum.NORMAL, text: ' and ' },
        { type: DescriptionsEnum.EMPHASIS, text: 'mobile' },
        { type: DescriptionsEnum.NORMAL, text: ' development.' },
    ],
    [
        { type: DescriptionsEnum.NORMAL, text: 'Analyzing, designing and developing from ' },
        { type: DescriptionsEnum.EMPHASIS, text: 'scratch' },
        { type: DescriptionsEnum.NORMAL, text: '!' },
    ],
    [
        { type: DescriptionsEnum.NORMAL, text: 'Converting ideas into ' },
        { type: DescriptionsEnum.EMPHASIS, text: 'real' },
        { type: DescriptionsEnum.NORMAL, text: ' applications.' },
    ],
    [
        { type: DescriptionsEnum.NORMAL, text: 'Tell me about' },
        { type: DescriptionsEnum.EMPHASIS, text: ' your ' },
        { type: DescriptionsEnum.NORMAL, text: 'ideas. ' },
        { type: DescriptionsEnum.LINK, text: 'Hit me up!', route: '/contact' },
    ],
];
