import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'next-share';

const SocialShare = ({ articleLink, articleTitle }) => {
    return (
        <>
            <div className="socialShareContainer">
                <FacebookShareButton
                    url={'https://cryptoxchange.es/posts/' + articleLink}
                    quote={articleTitle}
                    hashtag={'#cryptoxchangeblog #crypto'}
                    blankTarget={'true'}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>


                <TwitterShareButton
                    url={'https://cryptoxchange.es/posts/' + articleLink}
                    title={articleTitle}
                    blankTarget={'true'}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>


                <TelegramShareButton
                    url={'https://cryptoxchange.es/posts/' + articleLink}
                    title={articleTitle}
                    blankTarget={'true'}
                >
                    <TelegramIcon size={32} round />
                </TelegramShareButton>


                <WhatsappShareButton
                    url={'https://cryptoxchange.es/posts/' + articleLink}
                    title={articleTitle}
                    blankTarget={'true'}
                    separator=" "
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </div>
        </>
    )
}

export default SocialShare;