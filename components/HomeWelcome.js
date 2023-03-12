import { Col, Container, Row } from 'react-bootstrap';

import styles from '../styles/welcomepage/WelcomeComponent.module.scss';

const homeWelcome = () => {
    return (
        <Container fluid className='g-0'>
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#F0F0F0" fillOpacity="1" d="M0,320L60,288C120,256,240,192,360,149.3C480,107,600,85,720,117.3C840,149,960,235,1080,250.7C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
            <Row className={styles.welcomemain + ' g-0'}>

                <Col md={{ span: 6, offset: 3 }} className={styles.welcometext}>
                    <h1>Bienvenido a <span className={styles.accenttext}>CryptoXChange</span></h1>
                    <span>Opiniones, guías y consejos sobre el mundo de las Criptomonedas</span>
                </Col>
            </Row>
        </Container>
    );
}

export default homeWelcome;