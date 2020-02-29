import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../redux/store';
import stylesReset from "../styles/reset";

interface IProps {
  Component: React.Component,
  ctx: object,
  store: object
}

// @ts-ignore
class MyApp extends App<IProps> {
  static async getInitialProps({ Component, ctx, store }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
        <style jsx global>{stylesReset}</style>
      </Provider>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
