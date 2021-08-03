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

  const LayoutFrontPanel = Component.Layout ? MyLayout : <div>Layout app store</div>;
  const LayoutCart = Component.Layout ? ShopLayout : <div>Layout Cart</div>;

  if (router.pathname.startsWith("/fp")) {
    return (
      <Provider store={Store}>
        <LayoutFrontPanel>
          <Component {...pageProps} />
        </LayoutFrontPanel>
      </Provider>
    )
  } else {
    return (
      <Provider store={Store}>
        <LayoutCart>
          <Component {...pageProps} />
        </LayoutCart>
      </Provider>
    )
  }


}

export default MyApp;
