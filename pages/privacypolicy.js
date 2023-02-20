import { Container } from "react-bootstrap";
import Header from '../components/Header';
import styles from '../styles/footer/Footer.module.scss';
const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <Container className={styles.privacypolicy}>
                <h1>Política de privacidad</h1>
                <p>No recopilamos datos personales en este sitio web de blog.</p>
                <h2>Cookies y tecnologías similares</h2>
                <p>Podemos utilizar cookies y otras tecnologías similares para mejorar su experiencia en nuestro sitio web. Las cookies son pequeños archivos que se almacenan en su dispositivo cuando visita nuestro sitio web. Puede configurar su navegador para rechazar todas las cookies o para que le informe cuando se envía una cookie.</p>
                <h2>Enlaces a sitios web de terceros</h2>
                <p>Este sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos sitios web de terceros. Le recomendamos que revise las políticas de privacidad de estos sitios web antes de proporcionarles información personal.</p>
                <h2>Cambios a la Política de Privacidad</h2>
                <p>Podemos actualizar esta Política de Privacidad en cualquier momento. Le recomendamos que revise periódicamente esta política para mantenerse informado sobre cómo protegemos su privacidad.</p>
                <h2>Contacto</h2>
                <p>Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad, por favor contáctenos a través de nuestro formulario de contacto en nuestro sitio web.</p>
            </Container>
        </>
    )
};

export default PrivacyPolicy;