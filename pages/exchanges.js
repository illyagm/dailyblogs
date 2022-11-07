import { GraphQLClient, gql } from 'graphql-request';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import ExchangeCard from '../components/ExchangeCard';
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
      <Header />
      <Container fluid>
        <Row>
          {exchanges.map((exchange) => (
            <Col md={6} lg={4} key={exchange.id}>
              <ExchangeCard
                title={exchange.title}
                coverPhoto={exchange.coverPhoto.url}
                description={exchange.description}
                affiliateLink={exchange.affiliateLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default ExchangesComponent;