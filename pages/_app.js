import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Analytics } from '@vercel/analytics/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from "react-cookie-consent";
import styles from "../styles/base/base.scss";
import { SSRProvider } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
        <Header />
        <Component {...pageProps} />
        <CookieConsent
          buttonText="Entendido"
          buttonStyle={{fontWeight: "normal", backgroundColor: "#E2B658"}}
          style={{textAlign: "center"}}
          className={styles.cookieConsent}
        >Este sitio web utiliza cookies para mejorar la experiencia de usuario. Continuando aquí aceptas las condiciones.</CookieConsent>
        <Analytics />
        <Footer />
    </SSRProvider>
  )
}

export default MyApp
