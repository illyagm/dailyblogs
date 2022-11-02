import styles from '../../styles/Slug.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import Header from '../../components/Header';
import Link from 'next/link';

const graphcms = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8fnvnzr3uai01ul8vtu5t4j/master"
);

const QUERY = gql`
query Post($postId: String!) {
  posts(where: {category: {title: $postId }}) {
    id
      title
      slug
      datePublished
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto{
          url
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
    const postId = params.post;
    const data = await graphcms.request(QUERY, { postId });
    const posts = data.posts;
    return {
        props: {
            posts,
        },
        revalidate: 10,
    }
}
