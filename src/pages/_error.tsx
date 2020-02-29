import React from 'react';
import { NextPage } from 'next';
import Layout from "../components/Layout";

interface IProps {
    statusCode: number
}

const Error: NextPage<IProps> = ({ statusCode }) => {
    let titleError = "";
    if (statusCode === 404) {
        titleError = "404"
    }

    return (
        <Layout title={titleError}>
            <div className="error-page">
                {statusCode === 404 ?
                    <img className="error-img" src="images/404.svg" alt="404"/>
                    : null}


                <style jsx>{`
                    .error-page {
                        max-height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding-top: 50px;
                    }
                    
                    .error-img {
                        display: block;
                        width: 100%;
                        max-width: 700px;
                        max-height: 100%;
                    }
                `}</style>
            </div>
        </Layout>
    )
}

//@ts-ignore
Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
