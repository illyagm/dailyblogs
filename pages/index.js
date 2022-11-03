import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../components/BlogCard';
import WelcomeComponent from '../components/HomeWelcome';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';


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

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>CryptoXChange</title>
        <meta name="description" content="Your crypto blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <WelcomeComponent />
        <Container className='container-blogs'>
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
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
