// node libraries
import { Provider } from 'react-redux';
import { Store } from '../redux/store';
// components
import MyLayout from '../components/layout/Layout';
import ShopLayout from '../components/shopLayout';
// scss
import '../styles/globals.scss';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  if (router.pathname.startsWith("/fp")) {
    return (
      <Provider store={Store}>
        <MyLayout>
          <Component {...pageProps} />
        </MyLayout>
      </Provider>
    )
  } else {
    return (
      <Provider store={Store}>
        <ShopLayout>
          <Component {...pageProps} />
        </ShopLayout>
      </Provider>
    )
  }


}

export default MyApp;
