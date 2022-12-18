import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  static async getInitialProps(context: any) {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps, styles: <>{initialProps.styles}</> };
  };

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
};

export default MyDocument;