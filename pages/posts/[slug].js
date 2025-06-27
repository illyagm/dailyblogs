import styles from '../../styles/slug/Slug.module.scss';
import { GraphQLClient, gql } from 'graphql-request';
import Footer from '../../components/Footer';
import Head from 'next/head'
import ScrollToTop from '../../components/ScrollUpButton';
import { Row, Col } from 'react-bootstrap';
import LedgerAffiliate from '../../components/LedgerAffiliate';
import SocialShare from '../../components/SocialShare';

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_PROJECT_API_URL, {
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PROD_TOKEN_POSTS}`,
    }
});

const QUERY = gql`
query Post($slug: String!) {
    post(where: {slug: $slug}) {
        id
        title
        slug
        datePublished
        author{
            id
            name
            avatar {
                url
            }
        }
        content {
            html
        }
        coverPhoto {
            id,
            url
        }
        seoDescription,
        pageViews
    }
}
`;

const SLUGLIST = gql`
    {
        posts {
            slug
        }
    }
`;


export async function getStaticPaths() {
    const { posts } = await graphcms.request(SLUGLIST);
    return {
        paths: posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, { slug });
    const post = data.post;
    return {
        props: {
            post,
        },
        revalidate: 10,
    }
}



const Article = ({ post }) => {
    let postId = post.id;

    async function updatePost() {
        let pageViewsCount = post.pageViews + 1;
        const QUERY = gql`
            mutation udatePost($postId: ID!, $pageViewsCount: Int){
                updatePost(
                    where: { 
                        id: $postId
                    }
                    data: { 
                        pageViews: $pageViewsCount 
                    }
                ) {
                id
                } 
            }
            `;
        const QUERY2 = gql`
        mutation publishPost($postId: ID!) {
            publishPost(to: PUBLISHED, where: {id: $postId}) {
            id
                }
            }
        `;
        await graphcms.request(QUERY, { postId, pageViewsCount });
        await graphcms.request(QUERY2, { postId });

    }

    setTimeout(() => {
        updatePost();
    }, 2500);

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description"
                    content={post.seoDescription} />
                <link rel="icon" href="/logoCXC.png" />
            </Head>
            <div>
                <main className={styles.blog}>
                    <Row>
                        <Col md="9">
                            <div className={styles.text}>
                                <h1 className={styles.posttitle}>{post.title}</h1>
                                <div className={styles.title}>
                                    <SocialShare articleLink={post.slug} articleTitle={post.title} />
                                    <hr />
                                    <div className={styles.authdetails}>
                                        <img src={post.author.avatar.url || ''} alt='' />
                                        <div className={styles.authtext}>
                                            <span>
                                                By {post.author.name}
                                            </span>
                                            <span className={styles.date}>
                                                {post.datePublished}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.content} dangerouslySetInnerHTML={{ __html: [post.content.html] }}>
                                </div>
                                <LedgerAffiliate isArticle={true} />
                            </div>

                        </Col>
                        {/* Banner for desktop and tablet */}
                        <Col className="ledgerComponentSlug justify-content-start">
                            <a href="https://shop.ledger.com/pages/ledger-nano-s-plus/?r=a77d8a211939" target="_blank" rel="noopener noreferrer">
                                <img width="160" height="600" src="https://affiliate.ledger.com/image/160/600/Spanish" />
                            </a>
                        </Col>
                    </Row>
                    <ScrollToTop />
                </main>
            </div>
        </>
    );
}

export default Article;