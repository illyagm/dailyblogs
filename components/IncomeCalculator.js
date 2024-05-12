import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import styles from '../styles/footer/Footer.module.scss';
import { Row, Col } from 'react-bootstrap';


const IncomeCalculator = () => {

    const [total, setTotal] = useState(0);
    const CalculateAPY = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const investAmount = formData.get('investAmount');
        const APYPercentatge = formData.get('APYPercentatge') / 100;
        const isCompoundInterest = event.target.isCompoundInterest.checked;
        const totals = 0;
        if ((investAmount !== null) && (APYPercentatge !== '')) {
            totals = investAmount * APYPercentatge;
            if (isCompoundInterest) {
                /* formula for the compound interest
                    A = P (1 + r/n)^(nt)
                    
                    Where:
                    
                    A is the final amount (the total savings or debt)
                    P is the principal amount (the initial investment or loan)
                    r is the annual interest rate (expressed as a decimal)
                    n is the number of times the interest is compounded per year
                    t is the number of years
                */
                totals = investAmount * (1 + APYPercentatge / 48) ** 48;
                totals = totals - investAmount;
                // 48 comes from 1 payment per week. 4 weeks * 12 total months = 48 payments which we compound at the moment of payment.
            }
            setTotal(parseFloat(totals).toFixed(2));
        }
        console.log('cacatua ' + totals);
    }

    return (
        <>
            <Container fluid className={styles.calculator}>
                <Row className='d-flex align-items-center'>
                    <Col md={{ span: 6, offset: 3 }} className="mt-4">
                        <h3>Calculadora de Staking</h3>
                        <Form onSubmit={CalculateAPY}>
                            <Form.Group className="mb-3" controlId="investAmount">
                                <Form.Label>Cantidad a invertir</Form.Label>
                                <Form.Control type="number" placeholder="Introduzca una cantidad" name="investAmount" />
                                <Form.Text className="text-muted">
                                    Cantidad en euro/dolar que deseas invertir
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="APYPercentatge">
                                <Form.Label>APY %</Form.Label>
                                <Form.Control type="float" placeholder="Porcentaje de retorno anual" name="APYPercentatge" />
                                <Form.Text className="text-muted">
                                    APY (Annual percentage yield) es el porcentaje de rendimiento anual de dicha inversión
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check type="checkbox" label="Interés compuesto" name="isCompoundInterest" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="total">
                                <Form.Label>Beneficio total:</Form.Label>
                                <Form.Control type="number" placeholder="0" disabled name="total" value={total} />
                            </Form.Group>
                            <div className="text-center">
                                <Button className="w-100" variant="success" type="submit">
                                    Calcular Beneficios
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IncomeCalculator;