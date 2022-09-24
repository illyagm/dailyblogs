import styles from '../../styles/Slug.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import Header from '../../components/Header';
import Link from 'next/link';

const graphcms = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8fnvnzr3uai01ul8vtu5t4j/master"
);

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

const article = ({ post }) => {
    return (
        <div>
            <Header />
            <main className={styles.blog}>
                <Link href={'/'}>
                    <div className={styles.navback}>Go back</div>
                </Link>
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
                <h3 className={styles.posttitle}>{post.title}</h3>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: [post.content.html] }}>
                </div>
            </main>
        </div>
    );
}

export default article;