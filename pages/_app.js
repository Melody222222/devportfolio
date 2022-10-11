import Layout from "../comps/Layout";
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;  // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
export default ({Component, pageProps}) => (
    <Layout>
        <Component {...pageProps}/>
    </Layout>
) 