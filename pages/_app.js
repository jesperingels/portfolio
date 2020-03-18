// pages/_app.js
import App from "next/app";
import Head from "next/head";
import React from "react";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Jesper Ingels - Portfolio</title>
          <meta
            name="description"
            content="Portfolio - Jesper Ingels Front-end Developer. hbo-diploma: Communication & Multimedia Design"
          ></meta>
          <meta
            name="keywords"
            content="Jesper Ingels, Front-end Developer, Portfolio, Developer,"
          ></meta>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
