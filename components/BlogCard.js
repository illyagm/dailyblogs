import Link from 'next/link';

import styles from '../styles/BlogCard.module.scss';

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
                    <h2 className='title light'>{title}</h2>
                    <div className={styles.date}>
                        <h3 className='date-published'>Publicado: {datePublished}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default blogPost;