import Head from 'next/head';

export type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={title + ' | Portfolio'} />
            <link rel='icon' href='/favicon.svg' />
            <link
                href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
                rel='stylesheet'
            />
        </Head>
    );
}
