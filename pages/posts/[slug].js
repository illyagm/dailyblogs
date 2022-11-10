import styles from '../../styles/slug/Slug.module.scss';
import { GraphQLClient, gql } from 'graphql-request';
import Header from '../../components/Header';
import Head from 'next/head'
import { useEffect } from 'react';

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

    article.title = post.title;
    useEffect(() => {
        let pageViewsCount = post.pageViews + 1;
        let postId = post.id
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
        graphcms.request(QUERY, { postId, pageViewsCount });
        graphcms.request(QUERY2, { postId });
    }, [])
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description"
                    content={post.seoDescription} />
                <link rel="icon" href="/logoCXC.png" />
            </Head>
            <div>
                <Header />
                <main className={styles.blog}>
                    <h3 className={styles.posttitle}>{post.title}</h3>
                    <div className={styles.text}>
                        <img src={post.coverPhoto.url} className={styles.cover} alt='' />
                        <div className={styles.title}>
                            <div className={styles.authdetails}>
                                <img src={post.author.avatar.url} alt='' />
                                <div className={styles.authtext}>
                                    <h6>
                                        By {post.author.name}
                                    </h6>
                                    <h6 className={styles.date}>
                                        {post.datePublished}
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className={styles.content} dangerouslySetInnerHTML={{ __html: [post.content.html] }}>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Article;