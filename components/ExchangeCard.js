import { Container, Row, Col, Button } from 'react-bootstrap';

const ExchangeCard = ({ key, title, coverPhoto, description, affiliateLink }) => {
    return (
        <Col sm={6} md={4} lg={4} className="exchangeContainer" key={key}>
            <div className="card">
                <div className="imgBx">
                <img src={coverPhoto} />
                </div>
                <div className="contentBx">
                <h2>{title}</h2>
                <div className="color">
                    <div className="description" dangerouslySetInnerHTML={{ __html: [description.html.substring(0,150)] }}></div>
                </div>
                <Button href={affiliateLink} variant="outline-secondary">Empieza aquí</Button>
                </div>
            </div>
        </Col>
    );
}


export default ExchangeCard;

/* 

 <div className={styles.card}>
    <div className={styles.imgContainer}>
        <img src={coverPhoto} alt='' />
    </div>
    <div className={styles.text}>
        <h2 className='title light'>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: [description.html] }}></div>
    </div>
    <a href={affiliateLink}>Empieza aquí</a>
</div>

*/