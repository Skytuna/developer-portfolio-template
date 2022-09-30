import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import Navbar from '@components/Navbar';
import { navbarItems } from '@data/navbar';
import Header from '@components/Header';
import { fullname } from '@data/header';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyApp: AppType = ({ Component, pageProps }) => {
    const [parentRef] = useAutoAnimate<HTMLDivElement>();

    return (
        <>
            <Header title={fullname} />
            <main className='min-h-screen p-0 md:p-8 xl:p-16 bg-primary flex justify-center'>
                <div
                    className='p-8 md:p-8 xl:p-12 rounded-3xl bg-layoutBg w-full h-full flex-1 max-w-5xl'
                    ref={parentRef}>
                    <Navbar items={navbarItems} />
                    <div className='w-full h-[1px] bg-primaryUtility my-8' />
                    <Component {...pageProps} />
                </div>
            </main>

            <ToastContainer autoClose={3000} hideProgressBar />
        </>
    );
};

export default MyApp;
