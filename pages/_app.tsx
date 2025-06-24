import React, { useEffect } from 'react';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '../redux/store';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import AppProvider from '../context/AppContext';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store)
function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
  }, []);
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&family=Raleway:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/fontAwesome5Pro.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
      </Head>

      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </AppProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp