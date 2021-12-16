import styles from '../../styles/Home.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {'Copyright © CBE '}
      {new Date().getFullYear()}{' '}
      {/* <span className={styles.logo}>
        <Image src="/logo.png" alt="Vercel Logo" width={50} height={25} />
      </span> */}
    </footer>
  );
};

export default Footer;
