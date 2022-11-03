import Link from 'next/link';

import styles from '../styles/BlogCard.module.scss';

const blogPost = ({ title, author, coverPhoto, datePublished, slug }) => {
    return (
        <div className={styles.card}>
            <Link href={'/posts/' + slug}>
                <div className={styles.imgContainer}>
                    <img src={coverPhoto.url} alt='' />
                    <div className={styles.author}>
                        <img src={author.avatar.url} alt='' />
                    </div>
                </div>
            </Link>
            <div className={styles.text}>
                <h2>{title}</h2>
                <div className={styles.date}>
                    <h3>Publicado: {datePublished}</h3>
                </div>
            </div>
        </div>
    );
}

export default blogPost;