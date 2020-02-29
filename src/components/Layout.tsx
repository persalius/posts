import React, {Fragment, useState, useEffect} from 'react'
import Head from 'next/head';
import { connect } from 'react-redux';
import Header from "./Header";
import styles from "../styles/components/layout";

interface IProps {
    title: string,
    dispatch: Function,
    bgColor?: string
}

const Layout: React.FC<IProps> = props => {
    const {title, bgColor = ""} = props;

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <link rel="stylesheet" href="./styles/fonts.css"/>
                <link rel="icon" href="./favicon.ico"/>
            </Head>
            <div className="page">
                <Header />
                <main className="page-main">
                    <div className="container">
                        {props.children}
                    </div>
                </main>
            </div>

            <style jsx>{styles}</style>
            <style jsx global>{`body {background: ${bgColor};}`}</style>
        </Fragment>
    )
};

Layout.defaultProps = {
    title: "Milite"
}

export default connect()(Layout);
