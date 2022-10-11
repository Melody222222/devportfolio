import { Component } from "react";
import Layout from "../comps/Layout";
export default ({Component, pageProps}) => (
    <Layout>
        <Component {...pageProps}/>
    </Layout>
)