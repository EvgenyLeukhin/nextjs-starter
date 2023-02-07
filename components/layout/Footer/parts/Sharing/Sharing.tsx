import {
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  VKShareButton,
  VKIcon,
  WhatsappShareButton,
  WhatsappIcon,
  // MailruShareButton,
  // MailruIcon,
  // OKShareButton,
  // OKIcon,
} from 'react-share';
import styles from './Sharing.module.scss';

const Sharing = () => {
  const iconSize = 25;
  const siteUrl = 'https://github.com/EvgenyLeukhin/nextjs-starter';

  return (
    <div className={styles.Sharing}>
      <span>Share:&nbsp;</span>
      <ul className={styles.Sharing__list}>
        <li>
          <TelegramShareButton url={siteUrl}>
            <TelegramIcon size={iconSize} />
          </TelegramShareButton>
        </li>
        <li>
          <VKShareButton url={siteUrl}>
            <VKIcon size={iconSize} />
          </VKShareButton>
        </li>
        <li>
          <WhatsappShareButton url={siteUrl}>
            <WhatsappIcon size={iconSize} />
          </WhatsappShareButton>
        </li>
        <li>
          <ViberShareButton url={siteUrl}>
            <ViberIcon size={iconSize} />
          </ViberShareButton>
        </li>
        <li>
          <TwitterShareButton url={siteUrl}>
            <TwitterIcon size={iconSize} />
          </TwitterShareButton>
        </li>
        <li>
          <FacebookShareButton url={siteUrl}>
            <FacebookIcon size={iconSize} />
          </FacebookShareButton>
        </li>
        <li>
          <LinkedinShareButton url={siteUrl}>
            <LinkedinIcon size={iconSize} />
          </LinkedinShareButton>
        </li>
        <li>
          <EmailShareButton url={siteUrl}>
            <EmailIcon size={iconSize} />
          </EmailShareButton>
        </li>
        {/* <li>
        <OKShareButton url={siteUrl}>
          <OKIcon size={iconSize} />
        </OKShareButton>
      </li> */}
        {/* <li>
        <MailruShareButton url={siteUrl}>
          <MailruIcon size={iconSize} />
        </MailruShareButton>
      </li> */}
      </ul>
    </div>
  );
};

export default Sharing;
