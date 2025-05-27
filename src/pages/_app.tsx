// pages/_app.tsx
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientProvider from '@/components/ClientProvider';
import { siteDetails } from '@/data/siteDetails';

import '@/pages/globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-sourcesans' });

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
    <>
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <ClientProvider>
        <main className={`${manrope.variable} ${sourceSans.variable} antialiased`}>
            <Component {...pageProps} />
        </main>
        </ClientProvider>
        <Footer />
    </>
    );
}
