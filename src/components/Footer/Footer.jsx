import React from 'react';
import classNames from 'classnames';
import style from './Footer.module.css';
import { Container } from '../Container/Container';
import { List } from '../List/List';
import { Logo } from '../Logo/Logo';

export const Footer = ({ logo }) => {
  return (
    <footer className={ style.footer }>
      <Container className={ style.container }>
        <Logo src={ logo } alt="Логотип с солнышком сайта теплый пол" classLogo={ style.logo } />

        <List nameList="socials" classList={ `${ style.list } ${ style.socials }` }>
          <li className={ style.item }>
            <a href="#0" aria-label="Узнай больше на нашем ютуб канале" className={ classNames('link', style.link) }>
              <svg width="25" height="18" viewBox="0 0 25 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0767 0.998047C13.0853 0.998065 13.0945 0.998086 13.1043 0.998111L13.2105 0.998441C14.4432 1.00297 20.6909 1.04826 22.3754 1.50112C23.408 1.77809 24.2212 2.59432 24.4972 3.63042C24.6491 4.19966 24.755 4.95626 24.8288 5.73439L24.8431 5.89026C24.8547 6.0203 24.8655 6.15064 24.8754 6.2805L24.8869 6.43605C24.9855 7.80721 24.997 9.09031 24.9984 9.37104L24.9985 9.40891C24.9985 9.41201 24.9985 9.41708 24.9985 9.41708V9.43834C24.9985 9.43834 24.9985 9.44341 24.9985 9.44651L24.9984 9.48438C24.997 9.77572 24.9846 11.1466 24.8754 12.575L24.8631 12.731L24.85 12.8872C24.7757 13.7461 24.6643 14.5989 24.4972 15.225C24.2212 16.2611 23.408 17.0775 22.3754 17.3543C20.6347 17.8224 14.0216 17.8552 13.1043 17.8575L13.0337 17.8577C13.0279 17.8577 13.0228 17.8577 13.0184 17.8577L12.9896 17.8577C12.9896 17.8577 12.983 17.8577 12.9786 17.8577L12.8927 17.8575C12.4291 17.8564 10.5108 17.8474 8.50194 17.7784L8.2451 17.7693C8.20225 17.7677 8.15938 17.7661 8.11651 17.7645L7.85937 17.7543L7.60282 17.7434C5.93856 17.6704 4.35178 17.5506 3.62184 17.3543C2.5892 17.0775 1.77606 16.2611 1.50007 15.225C1.33287 14.5989 1.2214 13.7461 1.14709 12.8872L1.13399 12.731L1.12167 12.575C1.01636 11.1985 1.00107 9.87549 0.998847 9.5204L0.998582 9.46957C0.998564 9.46499 0.998548 9.46078 0.998535 9.45693V9.39849C0.998548 9.39465 0.998564 9.39043 0.998582 9.38586L0.998847 9.33503C1.00086 9.01345 1.01359 7.898 1.09421 6.66787L1.10464 6.51356C1.10644 6.48776 1.10827 6.46192 1.11013 6.43605L1.12167 6.2805C1.13161 6.15064 1.14235 6.0203 1.15395 5.89026L1.16829 5.73439C1.24213 4.95626 1.34807 4.19966 1.50007 3.63042C1.77606 2.59432 2.5892 1.77809 3.62184 1.50112C4.35178 1.30488 5.93856 1.18517 7.60282 1.11215L7.85937 1.10128L8.11651 1.09112C8.15938 1.08949 8.20225 1.08788 8.2451 1.0863L8.50194 1.07717C10.3826 1.01261 12.1839 1.00066 12.7865 0.998441L12.8927 0.998111C12.9026 0.998086 12.9118 0.998065 12.9203 0.998047H13.0767ZM10.5986 5.81484V13.0406L16.8337 9.42791L10.5986 5.81484Z" fill="currentColor" />
              </svg>
            </a>
          </li>

          <li className={ style.item }>
            <a href="#0" aria-label="Узнай больше на нашем телеграм канале" className={ classNames('link', style.link) }>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.4301 8.85898C11.2629 9.34445 8.9302 10.3492 5.43195 11.8734C4.86389 12.0993 4.56632 12.3203 4.53923 12.5363C4.49345 12.9015 4.95077 13.0453 5.57354 13.2412C5.65825 13.2678 5.74602 13.2954 5.836 13.3247C6.4487 13.5238 7.27289 13.7568 7.70135 13.7661C8.09 13.7745 8.52379 13.6142 9.0027 13.2854C12.2712 11.0791 13.9584 9.96386 14.0644 9.93982C14.1391 9.92286 14.2427 9.90153 14.3128 9.9639C14.383 10.0263 14.3761 10.1444 14.3687 10.1761C14.3234 10.3692 12.5282 12.0381 11.5992 12.9018C11.3096 13.1711 11.1041 13.3621 11.0621 13.4057C10.9681 13.5034 10.8722 13.5958 10.78 13.6846C10.2108 14.2334 9.78397 14.6449 10.8037 15.3168C11.2937 15.6397 11.6858 15.9068 12.077 16.1732C12.5042 16.4641 12.9303 16.7543 13.4817 17.1157C13.6221 17.2078 13.7563 17.3034 13.8869 17.3966C14.3841 17.751 14.8308 18.0694 15.3826 18.0187C15.7033 17.9892 16.0345 17.6876 16.2027 16.7884C16.6003 14.6632 17.3817 10.0585 17.5623 8.16103C17.5781 7.99479 17.5582 7.78203 17.5422 7.68863C17.5262 7.59524 17.4928 7.46217 17.3714 7.36366C17.2277 7.247 17.0057 7.2224 16.9064 7.22414C16.4551 7.2321 15.7626 7.47288 12.4301 8.85898Z" fill="currentColor" />
              </svg>
            </a>
          </li>
        </List>

        <List nameList="contacts" classList={ `${ style.list }, ${ style.contacts }` }>
          <li className={ style.item }>
            <a href="tel:+78588497380" className={ classNames('link', style.link, style.link_contacts) }>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.35597 0.638845C3.28361 -0.288798 4.81437 -0.193496 5.61979 0.842043L7.86192 3.72478C8.27338 4.2538 8.41877 4.94261 8.25623 5.59278L7.57215 8.32911C7.49993 8.618 7.58457 8.92359 7.79513 9.13415L10.8659 12.2049C11.0764 12.4154 11.382 12.5001 11.6709 12.4279L14.4072 11.7438C15.0574 11.5812 15.7462 11.7266 16.2752 12.1381L19.158 14.3802C20.1935 15.1856 20.2888 16.7164 19.3612 17.644L18.0688 18.9364C17.1441 19.8611 15.7611 20.2671 14.4722 19.814C11.2719 18.6888 8.26798 16.8468 5.71061 14.2894C3.15324 11.732 1.31119 8.72807 0.186048 5.52781C-0.267103 4.2389 0.138913 2.8559 1.06356 1.93125L2.35597 0.638845Z" fill="currentColor" />
              </svg>
              <span className={ style.text_contacts }>+7&nbsp;858&nbsp;849&nbsp;73&nbsp;80</span>
            </a>
          </li>

          <li className={ style.item }>
            <a href="mailto:Teplyipol@gmail.com" className={ classNames('link', style.link, style.link_contacts) }>
              <svg width="24" height="21" viewBox="0 0 24 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 0C1.57234 0 0.377595 0.997255 0.0743781 2.33316L12 9.62104L23.9256 2.33316C23.6224 0.997255 22.4277 0 21 0H3Z" fill="currentColor" />
                <path d="M0 14.7009V4.04563L8.70479 9.36522L0 14.7009Z" fill="currentColor" />
                <path d="M10.1421 10.2436L0.287807 16.2838C0.768906 17.2984 1.80252 18 3 18H12.3841C12.1353 17.2962 12 16.5389 12 15.75C12 13.6754 12.9359 11.8194 14.4086 10.5811L13.8579 10.2436L12 11.379L10.1421 10.2436Z" fill="currentColor" />
                <path d="M24 11.507V4.04563L15.2952 9.36522L15.8022 9.67598C16.6929 9.24292 17.6931 9 18.75 9C20.8704 9 22.7625 9.97775 24 11.507Z" fill="currentColor" />
                <path d="M23.7508 15.3663C23.7508 17.1174 22.8851 18.4029 21.3701 18.4029C20.6159 18.4029 19.8682 18.0618 19.6911 17.4322H19.6255C19.4485 18.0553 18.8123 18.3963 18.104 18.3963C16.9497 18.3963 16.2152 17.5831 16.2152 16.2452V15.4516C16.2152 14.1858 16.9366 13.3529 18.104 13.3529C18.9828 13.3529 19.4091 13.8513 19.5337 14.2973H19.5796V13.4447H20.9372V16.7305C20.9372 17.1371 21.2061 17.3601 21.5537 17.3601C22.0259 17.3601 22.5112 16.737 22.5112 15.2745V15.0974C22.5112 13.1824 21.0881 11.6084 18.7861 11.6084H18.727C16.3529 11.6084 14.7658 13.2086 14.7658 15.6943V15.9304C14.7658 18.7308 16.6218 19.9113 18.6221 19.9113H18.6877C19.4485 19.9113 20.0912 19.8064 20.4585 19.6424V20.7377C20.1305 20.8885 19.4944 21 18.6024 21H18.5368C15.6577 21 13.5 19.2292 13.5 15.9697V15.6483C13.5 12.5397 15.6315 10.5 18.727 10.5H18.7795C21.9603 10.5 23.7508 12.6446 23.7508 15.0515V15.3663ZM17.6908 15.6811V16.0222C17.6908 16.901 18.0319 17.2224 18.5631 17.2224C19.0287 17.2224 19.4091 16.9666 19.4091 16.1074V15.5565C19.4091 14.7826 18.9959 14.4941 18.55 14.4941C18.0319 14.4941 17.6908 14.8613 17.6908 15.6811Z" fill="currentColor" />
              </svg>
              <span>Teplyipol@gmail.com</span>
            </a>
          </li>
        </List>

        <p className={ style.copyright }>&copy; Теплый пол, 2023</p>

        <List nameList="developers" classList={ `${ style.list }, ${ style.developers }` }>
          <li className={ style.item }>
            Designer:&nbsp;
            <a href="https://t.me/Mrshmallowww"
              target="_blank"
              rel="noreferrer"
              className={ classNames('link', style.link) }>
              Anastasia Ilina
            </a>
          </li>

          <li className={ style.item }>
            Developer:&nbsp;
            <a href="https://t.me/BirukovaNadzeya"
              target="_blank"
              rel="noreferrer"
              className={ classNames('link', style.link) }>
              Nadzeya Birukova
            </a>
          </li>
        </List>

      </Container>
    </footer>
  );
};
