import { Container } from "react-bootstrap";
import styles from "../styles/footer/Footer.module.scss";
import Header from "../components/Header";
const ContactPage = () => {
    return (
        <>
            <Header />
            <Container className={styles.contactpage}>
                <h1>Contacto</h1>
                <p>Gracias por visitar nuestro sitio web. Si tiene alguna pregunta o inquietud sobre nuestro contenido, por favor no dude en ponerse en contacto con nosotros.</p>
                <p>Puede enviarnos un correo electrónico a la dirección: <a className="contact-mail" href="mailto:cryptoxchangeblog@gmail.com">cryptoxchangeblog@gmail.com</a> y estaremos encantados de ayudarle.</p>
                <p>También puede seguirnos en nuestras redes sociales para mantenerse actualizado sobre nuestras últimas publicaciones.</p>
                {/* <h2>Redes sociales</h2>
                <ul>
                    <li><a href="[enlace a la página de Facebook]">Facebook</a></li>
                    <li><a href="[enlace a la página de Twitter]">Twitter</a></li>
                    <li><a href="[enlace a la página de Instagram]">Instagram</a></li>
                </ul> */}
                <p>¡Gracias por su interés en nuestro sitio web y esperamos escuchar de usted pronto!</p>
            </Container>
        </>
    );
};

export default ContactPage;