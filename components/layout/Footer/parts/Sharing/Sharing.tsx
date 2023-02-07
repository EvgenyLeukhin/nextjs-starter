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
import { useEffect, useState } from 'react';

const Sharing = () => {
  const iconSize = 25;
  const [isCurrentUrl, setCurrentUrl] = useState<string>('');
  const [isSharingClicked, setSharingClicked] = useState<boolean>(false);

  useEffect(() => {
    // save current url from window.location.href
    setCurrentUrl(window.location.href);

    setTimeout(() => {
      setSharingClicked(false);
    }, 2000);
  }, [isSharingClicked]);

  return (
    <div className={styles.Sharing}>
      <span>Share:&nbsp;</span>
      <ul
        className={styles.Sharing__list}
        onClick={() => setSharingClicked(true)}
      >
        <li>
          <TelegramShareButton url={isCurrentUrl}>
            <TelegramIcon size={iconSize} />
          </TelegramShareButton>
        </li>
        <li>
          <VKShareButton url={isCurrentUrl}>
            <VKIcon size={iconSize} />
          </VKShareButton>
        </li>
        <li>
          <WhatsappShareButton url={isCurrentUrl}>
            <WhatsappIcon size={iconSize} />
          </WhatsappShareButton>
        </li>
        <li>
          <ViberShareButton url={isCurrentUrl}>
            <ViberIcon size={iconSize} />
          </ViberShareButton>
        </li>
        <li>
          <TwitterShareButton url={isCurrentUrl}>
            <TwitterIcon size={iconSize} />
          </TwitterShareButton>
        </li>
        <li>
          <FacebookShareButton url={isCurrentUrl}>
            <FacebookIcon size={iconSize} />
          </FacebookShareButton>
        </li>
        <li>
          <LinkedinShareButton url={isCurrentUrl}>
            <LinkedinIcon size={iconSize} />
          </LinkedinShareButton>
        </li>
        <li>
          <EmailShareButton url={isCurrentUrl}>
            <EmailIcon size={iconSize} />
          </EmailShareButton>
        </li>
        {/* <li>
        <OKShareButton url={isCurrentUrl}>
          <OKIcon size={iconSize} />
        </OKShareButton>
      </li> */}
        {/* <li>
        <MailruShareButton url={isCurrentUrl}>
          <MailruIcon size={iconSize} />
        </MailruShareButton>
      </li> */}
      </ul>
    </div>
  );
};

export default Sharing;
