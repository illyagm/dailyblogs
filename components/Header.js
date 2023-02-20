import { Button, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/header/Header.module.scss';
import { useRouter } from 'next/router';
//import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
// Component import
import CryptoPrices from './CryptoPrices';
import WelcomeComponent from '../components/HomeWelcome';

const Header = () => {
    const router = useRouter()
    return (
        <Row className={router.pathname == '/' ? '' : 'g-0'}>
            <Navbar bg="dark" variant="dark" expand="lg" className={styles.header}>
                <Container>
                    <Navbar.Brand href="/" className={styles.title}>
                        CryptoXChange
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className={router.pathname == '/' ? 'active' : ''} href="/">Inicio</Nav.Link>
                            <NavDropdown title="Cómo Invertir " id="nav-dropdown">
                                <NavDropdown.Item href="/exchanges" className={router.pathname == '/exchanges' ? 'active' : ''}>Plataformas Trading</NavDropdown.Item>
                                <NavDropdown.Item eventKey="2" href="/calculadora" className={router.pathname == '/calculadora' ? 'active' : ''}>Calculadora Staking</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link className='justify-content-end'><CryptoPrices /></Nav.Link>
                        </Nav>
                        <Nav className={styles.buttonExchange}><Button href="https://www.binance.com/en/activity/referral-entry/CPA?fromActivityPage=true&ref=CPA_00ELJGV9UV" target="_blank" variant='secondary'>
                            ¡Invierte y llévate <b>100$</b> de bono!
                        </Button></Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {router.pathname == '/' ? <WelcomeComponent /> : ''}
        </Row>
    );
}

export default Header;