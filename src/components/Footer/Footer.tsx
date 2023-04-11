import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <p>
          Check
          {' '}
          <a
            href="https://github.com/and-babenko/milloinaire-game"
            target="_blank"
            rel="noreferrer"
          >
            readme
          </a>
          {' '}
          for details
        </p>
        <p>
          Return to
          {' '}
          <a
            href="https://andbabenko-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            portfolio
          </a>
        </p>
      </nav>
    </footer>
  );
}

export default Footer;
