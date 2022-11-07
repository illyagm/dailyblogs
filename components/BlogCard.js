import Link from 'next/link';

import styles from '../styles/blogcard/BlogCard.module.scss';

const blogPost = ({ title, author, coverPhoto, datePublished, slug }) => {
    return (
        <div className={styles.card}>
            <Link href={'/posts/' + slug}>
                <div className={styles.imgContainer}>
                    <img src={coverPhoto.url} alt='' />
                </div>
            </Link>
            <Link href={'/posts/' + slug}>
                <div className={styles.text}>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.date}>
                        <h3 className={styles.datepublished}>Publicado: {datePublished}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default blogPost;