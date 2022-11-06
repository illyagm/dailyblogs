import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/Header.module.scss';
import { useRouter } from 'next/router'
// Component import
import CryptoPrices from './CryptoPrices';
import WelcomeComponent from '../components/HomeWelcome';

const header = () => {
    const router = useRouter()
        return (
        <Row className={ router.pathname == '/' ? '' : 'g-0' }>
            <Navbar bg="light" expand="lg" className={styles.header}>
                <Container fluid>
                    <Navbar.Brand href="/" className={styles.title}>CryptoXChange</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/exchanges">Exchanges</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='justify-content-end'><CryptoPrices /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
            { router.pathname == '/' ? <WelcomeComponent /> : '' }
        </Row>
    );
}


/* 

DROPDOWNS

<NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">
        Another action
    </NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">
        Separated link
    </NavDropdown.Item>
</NavDropdown>

*/
export default header;