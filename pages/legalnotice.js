import { Container } from "react-bootstrap"
import styles from '../styles/footer/Footer.module.scss';
import Header from '../components/Header';
import Head from 'next/head';

const LegalNotice = () => {
    return (
        <>
            <Head>
                <title>Blog Sobre Criptomonedas | Aviso legal</title>
                <meta name="description"
                    content="Aviso legal de CryptoXChange, un blog de criptomonedas." />
                <link rel="icon" href="/logoCXC.png" />
            </Head>
            <Header />
            <Container className={styles.legalnotice}>
                <h1>Aviso legal</h1>
                <p>Este aviso legal establece las condiciones de uso del sitio web cryptoxchange.es. Por favor, lea detenidamente estas condiciones antes de utilizar nuestro sitio web. Al utilizar nuestro sitio web, usted acepta estas condiciones.</p>
                <h2>Enlaces de afiliado</h2>
                <p>Este sitio web puede contener enlaces de afiliado. Los enlaces de afiliado son enlaces a productos o servicios que recomendamos. Si hace clic en un enlace de afiliado y compra un producto o servicio, podemos recibir una comisión por esa venta.</p>
                <p>Nos aseguramos de que todos los productos o servicios que recomendamos sean de alta calidad y útiles para nuestros lectores. Sin embargo, no somos responsables de la calidad o el rendimiento de los productos o servicios que se compran a través de nuestros enlaces de afiliado.</p>
                <h2>Derechos de propiedad intelectual</h2>
                <p>Todo el contenido de este sitio web, incluyendo texto, imágenes, diseño, logotipos, iconos, fotografías, clips de audio y video, software y otros materiales que se encuentran en el sitio web, están protegidos por derechos de propiedad intelectual. No puede copiar, distribuir, mostrar públicamente o utilizar cualquier material de este sitio web sin nuestro permiso previo por escrito.</p>
                <h2>Limitación de responsabilidad</h2>
                <p>Este sitio web se proporciona -tal cual- y no hacemos ninguna garantía o representación sobre su contenido, calidad, rendimiento o precisión. No seremos responsables por cualquier daño, incluyendo daños indirectos, incidentales, especiales o consecuentes, que resulten del uso o la imposibilidad de usar este sitio web.</p>
                <h2>Modificaciones</h2>
                <p>Nos reservamos el derecho de actualizar o modificar estas condiciones en cualquier momento sin previo aviso. Por favor, consulte esta página regularmente para estar informado de cualquier cambio en estas condiciones.</p>
                <h2>Contacto</h2>
                <p>Si tiene alguna pregunta o inquietud sobre este aviso legal, por favor contáctenos a través de nuestro formulario de contacto en nuestro sitio web.</p>
            </Container>
        </>
    )
};

export default LegalNotice;