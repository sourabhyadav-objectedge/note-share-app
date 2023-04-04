import NavBar from '@/components/NavBar/NavBar'
import type { AppProps } from 'next/app'
import { SessionProvider ,getSession} from 'next-auth/react';
import  '@/styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider as ReduxProvider }from 'react-redux';
import store from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  return <ReduxProvider store={store}>
          <SessionProvider session={pageProps.session}>
            <NavBar/>
            <Component {...pageProps} />
          </SessionProvider>
        </ReduxProvider>
}
