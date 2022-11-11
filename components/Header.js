import { Button, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/header/Header.module.scss';
import { useRouter } from 'next/router';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
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
                        Crypt
                        <CurrencyBitcoinIcon
                            sx={{
                                backgroundColor: '#E2B658',
                                fill: '#202528',
                                borderRadius: '50%',
                                fontSize: '15px !important',
                                margin: '0.1rem 0.1rem'

                            }} />
                        XChange
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className={router.pathname == '/' ? 'active' : ''} href="/">Home</Nav.Link>
                            <Nav.Link className={router.pathname == '/exchanges' ? 'active' : ''} href="/exchanges">Exchanges</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='justify-content-end'><CryptoPrices /></Nav.Link>
                        </Nav>
                        <Nav className={styles.buttonExchange}><Button href="https://www.binance.com/en/activity/referral-entry/CPA?fromActivityPage=true&ref=CPA_00ELJGV9UV" target="_blank" variant='secondary'>
                            ¡100$ de bono en 1era inversión!
                        </Button></Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {router.pathname == '/' ? <WelcomeComponent /> : ''}
        </Row>
    );
}

export default Header;