import { GraphQLClient, gql } from 'graphql-request';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExchangeCard from '../components/ExchangeCard';
import Head from 'next/head';

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8fnvnzr3uai01ul8vtu5t4j/master"
);

const QUERY = gql`
  {
    exchanges {
      id
      title
      exchangeSlug
      coverPhoto {
        id,
        url
      }
      description {
        html
      }
      dateCreated
      affiliateLink
    }
  }
`;

export async function getStaticProps() {
  const { exchanges } = await graphcms.request(QUERY);
  return {
    props: {
      exchanges,
    },
    revalidate: 10,
  }
}

const ExchangesComponent = ({ exchanges }) => {
  return (
    <>
      <Head>
        <title>Blog Sobre Criptomonedas | Nustros exchanges recomendados para invertir</title>
        <meta name="description"
          content="Nuestros exchanges de criptomonedas recomendadas para invertir. Binance y Coinbase." />
        <link rel="icon" href="/logoCXC.png" />
      </Head>
      <Header />
      <Container style={{'height': '100vh'}}>
        <h1 className='mt-4'>Nuestros exchanges de Criptomonedas</h1>
        <p>Llévate hasta 100 euros de bono en tu primera compra</p>
        <Row>
          {exchanges.map((exchange) => (
              <ExchangeCard
                key={exchange.id}
                title={exchange.title}
                coverPhoto={exchange.coverPhoto.url}
                description={exchange.description}
                affiliateLink={exchange.affiliateLink}
              />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default ExchangesComponent;