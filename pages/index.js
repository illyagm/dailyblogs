import styles from '../styles/home/Home.module.scss'
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../components/BlogCard';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Head from 'next/head'


const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8fnvnzr3uai01ul8vtu5t4j/master"
);

const QUERY = gql`
  {
    posts {
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
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
Home.title = 'Crypto';
export default function Home({ posts }) {
  return (
    <>
    <Head>
        <title>CryptoXChange - Home</title>
        <meta name="description" 
        content="Blog personal con opiniones, guías y consejos sobre el mundo de las Criptomonedas tales como Bitcoin, Ethereum." />
        <link rel="icon" href="/logoCXC.png" />
    </Head>
    <Container fluid>
      <Header />
      <Container className={styles.containerblogs}>
        <Row>
          {posts.map((post) => (
            <Col md={6} lg={4} key={post.id}>
              <BlogCard
                title={post.title}
                author={post.author}
                coverPhoto={post.coverPhoto}
                datePublished={post.datePublished}
                slug={post.slug} />
            </Col>
          ))}
        </Row>
      </Container>
      <footer className={styles.footer}>

      </footer>
    </Container>
    </>
  )
}
