import MainBar from './MainBar/MainBar';
import styles from './Layout.module.css';

// components
import Banner from './MainBar/Banner';
import Nav from './MainBar/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <MainBar>
        <Banner />
        <Nav />
      </MainBar>
      <main className={styles['main-content']}>{children}</main>
    </>
  );
};
export default Layout;
