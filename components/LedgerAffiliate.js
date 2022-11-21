import Container from 'react-bootstrap/Container';

const LedgerAffiliate = (article) => {

    return (
        <Container max-width="10rem" className='d-flex justify-content-center home-ledger-container'>
            {/* desktop */}
            <a className={article.isArticle ? 'd-none' : 'ledgerComponent'} href="https://shop.ledger.com/pages/ledger-nano-s-plus/?r=a77d8a211939" target="_blank" rel="noopener noreferrer"><img width="100%" height="90" src="https://affiliate.ledger.com/image/728/90/Spanish" /></a>
            {/* mobile */}
            <a className="ledgerComponentMobileXS" href="https://shop.ledger.com/pages/ledger-nano-s-plus/?r=a77d8a211939" target="_blank" rel="noopener noreferrer">
                <img width="100%" height="50" src="https://affiliate.ledger.com/image/468/60/Spanish" />
            </a>

            {/*  xtra small mobile */}
            <a className="ledgerComponentMobileXXS" href="https://shop.ledger.com/pages/ledger-nano-s-plus/?r=a77d8a211939" target="_blank" rel="noopener noreferrer">
                <img max-width="80%" height="50" src="https://affiliate.ledger.com/image/320/50/Default" />
            </a>
        </Container>
    )
}


export default LedgerAffiliate;