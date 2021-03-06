import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { mainClass } from '../../utils/common';
import { APP_COPY_RIGHT, APP_MENU_CONFIG } from '../../utils/constant'

import { footerStyle } from './style';

function Footer (props: { className?: string}) {
  const { className } = props;
  return (
    <footer className={mainClass(['footer', className])}>
      <nav className={mainClass('footer-menu')}>
        {
          APP_MENU_CONFIG.map(o => (
            <Link
              key={o.key}
              className={mainClass(['footer', 'menu', 'item'])}
              title={o.key}
              to={o.path}
            >
              {o.key}
            </Link>
          ))
        }
      </nav>
      <div className={mainClass('footer-content')}>
        <p className={mainClass('copyright')}>{APP_COPY_RIGHT}</p>
        <div className={mainClass('footer-links')}>
          <a
            href="mailto:jun.li0220@outlook.com"
            className="github-bili-jun"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="jun.li0220@outlook.com"
            title="jun.li0220@outlook.com"
          >
            <svg aria-hidden="true" className="h-8 w-8 text-secondary hover:text-accent transition duration-100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M25 5H5a2.497 2.497 0 00-2.487 2.5l-.013 15C2.5 23.875 3.625 25 5 25h20c1.375 0 2.5-1.125 2.5-2.5v-15C27.5 6.125 26.375 5 25 5zm-.5 5.313l-8.838 5.524c-.4.25-.925.25-1.325 0L5.5 10.314a1.063 1.063 0 111.125-1.8L15 13.75l8.375-5.238a1.062 1.062 0 111.125 1.8z"></path></svg>
          </a>
          <a
            href="https://github.com/Bili-Jun"
            className="github-bili-jun"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Visit GitHub profile"
            title="Visit GitHub profile"
          >
            <svg
              aria-hidden="true"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30">
                <path d="M14.988 2.235C7.743 2.232 1.875 8.098 1.875 15.337c0 5.724 3.67 10.59 8.783 12.378.689.173.583-.317.583-.65v-2.271c-3.975.466-4.137-2.165-4.403-2.605-.54-.92-1.814-1.154-1.433-1.593.906-.466 1.828.117 2.898 1.696.773 1.145 2.282.952 3.047.762a3.695 3.695 0 011.016-1.781c-4.119-.739-5.836-3.253-5.836-6.24 0-1.451.478-2.784 1.415-3.86-.597-1.772.056-3.29.144-3.515 1.702-.152 3.471 1.219 3.61 1.327.966-.26 2.07-.398 3.307-.398 1.242 0 2.35.143 3.325.407.331-.252 1.972-1.43 3.554-1.286.085.226.723 1.708.16 3.457.95 1.078 1.433 2.423 1.433 3.876 0 2.994-1.728 5.51-5.859 6.237a3.733 3.733 0 011.116 2.666v3.296c.024.264 0 .525.44.525 5.188-1.75 8.924-6.65 8.924-12.425 0-7.242-5.872-13.105-13.11-13.105z"></path>
              </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

const StyledFooter = styled(Footer)`
  ${footerStyle}
`;

export default StyledFooter;