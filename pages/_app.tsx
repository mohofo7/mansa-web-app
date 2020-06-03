import React from "react";
import Layout from "../components/Layout";
import "../styles/global.scss";

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default MyApp;