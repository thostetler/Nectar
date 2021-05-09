import { Layout } from '@components';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import 'tailwindcss/tailwind.css';

const NectarApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default NectarApp;