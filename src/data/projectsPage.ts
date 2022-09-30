import { ProjectProps } from '@features/projects/Project/Project';
import {
    electron,
    firebase,
    javaScript,
    react,
    selenium,
    tailwind,
    typeScript,
} from './techStackPage';

export const projects: ProjectProps[] = [
    {
        name: 'Tipotly',
        url: 'https://github.com/Skytuna/Tipotly',
        description:
            'A platform where you can store financial information about your trips with your friends.',
        date: 'June 2022',
        techStack: [typeScript, react, tailwind, firebase],
    },
    {
        name: 'Sakai-Login',
        url: 'https://github.com/Skytuna/sakai-login',
        description:
            'A UI that allows you to schedule classes for Sakai (Dokuz Eylül University online class platform). It will also login by your account to live classes.',
        date: 'January 2022',
        techStack: [javaScript, react, tailwind, selenium, electron],
    },
];
