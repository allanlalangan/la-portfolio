import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // the app page and its pages are wrapped by our layout component
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
