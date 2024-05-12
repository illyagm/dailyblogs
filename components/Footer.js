import { Nav, Row, Col } from "react-bootstrap"
import styles from "../styles/footer/Footer.module.scss";
const Footer = () => {
    return (
        <>
            <div className={styles.footer + ' justify-content-md-center'}>
                <Row>
                    <Col md={4} sm={4} activekey="/home">
                        <Nav.Item>
                            <Nav.Link href="/legalnotice">Aviso Legal</Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col md={4} sm={4}>
                        <Nav.Item>
                            <Nav.Link href="/privacypolicy">Política de Privacidad</Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col md={4} sm={4}>
                        <Nav.Item>
                            <Nav.Link href="/contactpage">Contacto</Nav.Link>
                        </Nav.Item>
                    </Col>
                </Row>
            </div>
        </>
    )
};

export default Footer;