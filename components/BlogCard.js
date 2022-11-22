import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import styles from '../styles/blogcard/BlogCard.module.scss';

const blogPost = ({ title, content, coverPhoto, pageViews, slug, altDescriptionImg }) => {
    return (
        <Container className={styles.card + ' g-0'}>
            <Link href={'/posts/' + slug}>
                <div className={styles.imgContainer}>
                    <img src={coverPhoto.url} alt={altDescriptionImg} />
                </div>
            </Link>
            <Link href={'/posts/' + slug}>
                <div className={styles.text}>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.date}>
                        <div className={styles.details}>{content?.substring(0, 80) + '...'}</div>
                    </div>
                </div>
            </Link>
            <Row>
                <Col className={styles.pageViews}>
                    <RemoveRedEyeIcon
                        sx={{
                            fill: '#E2B658',
                            fontSize: '16px !important',
                        }}
                    />
                    <span className={styles.viewCount}>{pageViews}</span>
                </Col>
            </Row>
        </Container>
    );
}

export default blogPost;