import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';

import styles from '../styles/WelcomeComponent.module.scss';

const homeWelcome = () => {
    return (
        <Row className={styles.welcomemain}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#F8F9FA" fillOpacity="2" d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,202.7C840,203,960,149,1080,144C1200,139,1320,181,1380,202.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
            <Col md={{ span: 6, offset: 3 }} className={styles.welcometext}>
                <h3>Bienvenido a CryptoXChange</h3>
                <span>Blog personal con opiniones, guías y consejos sobre el mundo de las Criptomonedas</span>
            </Col>

        </Row>
    );
}

export default homeWelcome;