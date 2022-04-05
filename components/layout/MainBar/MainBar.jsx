import styles from './MainBar.module.css';

const MainBar = ({ children }) => {
  return <header className={styles['main-bar']}>{children}</header>;
};
export default MainBar;
