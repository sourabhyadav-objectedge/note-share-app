import NavBar from '@/components/NavBar/NavBar'
import type { AppProps } from 'next/app'
import { SessionProvider ,getSession} from 'next-auth/react';
import type { GetServerSideProps } from 'next';
import  '@/styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <SessionProvider><NavBar/><Component {...pageProps} /></SessionProvider>;
}
