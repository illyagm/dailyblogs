import styles from '../styles/Header.module.scss'
import Link from 'next/link';

const header = () => {
    return (
        <div className={styles.header}>
            <div>Daily Blogs</div>
            <div className={styles.navigation}>
                <Link href={'/gatronomy'}><div>Gastronomy</div></Link>
                <Link href={'/economy'}><div>Economy</div></Link>
                <Link href={'/culture'}><div>Culture</div></Link>
            </div>
        </div>
    );
}

export default header;