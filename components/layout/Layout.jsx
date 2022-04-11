import MainBar from './MainBar/MainBar';
import styles from './Layout.module.css';

// components
import Banner from './MainBar/Banner';
import Nav from './MainBar/Nav';

const Layout = ({ children }) => {
  return (
    // each page will display the main bar
    <>
      <MainBar>
        <Banner />
        <Nav />
      </MainBar>
      <main className={`${styles['page-content']}`}>{children}</main>
    </>
    // page content is wrapped is nested inside the <main> tag
  );
};
export default Layout;
