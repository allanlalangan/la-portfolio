import Link from 'next/link';
import styles from './Nav.module.css';
import { FaFileDownload } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className={styles['main-nav']}>
      <ul className={styles.links}>
        <Link href='/projects' passHref={true}>
          <li className={styles['projects-link']}>Projects</li>
        </Link>
        <Link href='/' passHref={true}>
          <li className={styles['projects-link']}>Contact</li>
        </Link>
        <Link href='/projects' passHref={true}>
          <li className={styles['projects-link']}>
            CV
            <FaFileDownload className={styles['cv-icon']} />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
