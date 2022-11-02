import styles from '../styles/Header.module.scss'
import Link from 'next/link';

const header = () => {
    return (
        <div className={styles.header}>
            <div>Crypto X Change</div>
            <div className={styles.navigation}>
                <Link href={'/'}><div>Inicio</div></Link>
                <Link href={'/exchanges'}><div>Compra Criptomonedas</div></Link>
            </div>
        </div>
    );
}

export default header;