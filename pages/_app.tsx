import '@/styles/globals.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from '@/store/app.store';
import { Shell } from '@/features/components/shell';
// import dynamic from 'next/dynamic'
// const Shell = dynamic(() => import('@/features/components/shell'), {
//   ssr: false
// })
export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Smart Contract</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: {
            sky: [
              '#f0f9ff',
              '#e0f2fe',
              '#bae6fd',
              '#7dd3fc',
              '#38bdf8',
              '#0ea5e9',
              '#0284c7',
              '#0369a1',
              '#075985',
              '#0c4a6e',
            ],
          },
          primaryColor: 'sky',
        }}
      >
        <Shell>
        <Component {...pageProps} />
        </Shell>
      </MantineProvider>
      </Provider>
    </>
  );
}