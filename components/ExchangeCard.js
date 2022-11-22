import { Container, Row, Col, Button } from 'react-bootstrap';
import Head from 'next/head'

const ExchangeCard = ({ key, title, coverPhoto, description, affiliateLink }) => {
    return (
        <>
            <Head>
                <title>Exchanges de Criptomonedas</title>
                <meta name="description"
                    content="Exchanges | Compra Bitcoin, Ethereum y más... ¡Con un bono de hasta 100 euros!" />
                <link rel="icon" href="/logoCXC.png" />
            </Head>
            <Col sm={6} md={4} lg={4} className="exchangeContainer" key={key}>
                <div className="card">
                    <div className="imgBx">
                        <img src={coverPhoto} alt={'Logo de ' + title + ' exchange'} />
                    </div>
                    <div className="contentBx">
                        <h2>{title}</h2>
                        <div className="color">
                            <div className="description" dangerouslySetInnerHTML={{ __html: [description.html.substring(0, 150)] }}></div>
                        </div>
                        <Button href={affiliateLink} variant="outline-secondary">Empieza aquí</Button>
                    </div>
                </div>
            </Col>
        </>

    );
}


export default ExchangeCard;