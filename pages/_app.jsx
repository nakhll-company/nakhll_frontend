// node libraries
import { Provider } from 'react-redux';
import { Store } from '../redux/store';
// components
import Layout from '../components/layout/Layout';
// scss
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp;
