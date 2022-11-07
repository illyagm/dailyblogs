import styles from '../styles/ExchangeCard.module.scss';

const ExchangeCard = ({ title, coverPhoto, description, affiliateLink }) => {
    return (
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
    );
}


export default ExchangeCard;