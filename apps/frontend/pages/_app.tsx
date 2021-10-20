import { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Plus Abstractio</title>
      </Head>
      <CssBaseline />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
