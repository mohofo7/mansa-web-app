import React from "react";
import "../styles/global.scss";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default MyApp;