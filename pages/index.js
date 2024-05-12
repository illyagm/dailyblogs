import styles from '../styles/home/Home.module.scss'
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../components/BlogCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Head from 'next/head'
import ScrollToTop from '../components/ScrollUpButton';
import LedgerAffiliate from '../components/LedgerAffiliate';
const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_PROJECT_API_URL);

const QUERY = gql`
  {
    posts (orderBy: createdAt_DESC){
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
      seoDescription
      pageViews,
      altDescriptionImg
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
    <>
      <Head>
        <title>Blog Sobre Criptomonedas | Guías y consejos para invertir</title>
        <meta name="description"
          content="Opiniones, guías y consejos sobre el mundo de las Criptomonedas tales como Bitcoin, Ethereum." />
        <link rel="icon" href="/logoCXC.png" />
      </Head>
      <Container fluid>
        <Container className={styles.containerblogs}>
          <Row className='justify-content-center'>
            {posts.map((post) => (
              <Col sm={8} md={6} lg={4} key={post.id}>
                <BlogCard
                  title={post.title}
                  author={post.author}
                  coverPhoto={post.coverPhoto}
                  slug={post.slug}
                  pageViews={post.pageViews}
                  content={post.seoDescription}
                  altDescriptionImg={post.altDescriptionImg}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <LedgerAffiliate isArticle={false} />
      </Container>
      <ScrollToTop />
    </>
  )
}
