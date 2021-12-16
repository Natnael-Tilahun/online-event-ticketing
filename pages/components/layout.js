import Header from './header';
import Footer from './footer';
import styles from '../../styles/Home.module.css';

const Layout = ({ children }) => {
  return (
    // <div
    //   className="container-fluid"
    //   style={{ padding: '0px', maxHeight: '100vh' }}
    // >
    <div style={{ maxHeight: '100vh' }}>
      <Header />

      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
    // </div>
  );
};

export default Layout;
