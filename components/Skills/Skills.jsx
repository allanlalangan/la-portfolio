// icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNpm,
  SiRedux,
  SiNextdotjs,
  SiGithub,
  SiGooglemaps,
} from 'react-icons/si';

import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section className={styles['skills-grid']}>
      <article className={styles['skills__primary']}>
        <figure className={styles['icon-container']}>
          <SiHtml5 className={styles.icon} />
          <figcaption>html5</figcaption>
        </figure>
        <figure className={styles['icon-container']}>
          <SiCss3 className={styles.icon} />
          <figcaption>css3</figcaption>
        </figure>
        <figure className={styles['icon-container']}>
          <SiJavascript className={styles.icon} />
          <figcaption>javascript</figcaption>
        </figure>
        <figure className={styles['icon-container']}>
          <SiReact className={styles.icon} />
          <figcaption>react</figcaption>
        </figure>
      </article>
      <article className={styles['skills__tools']}>
        <figure className={styles['icon-container']}>
          <SiNpm className={styles.icon} />
          <figcaption>npm</figcaption>
        </figure>
        <figure className={styles['icon-container']}>
          <SiGithub className={styles.icon} />
          <figcaption>github</figcaption>
        </figure>
        <div className={styles['icon-container']}>
          <SiGooglemaps className={styles.icon} />
          <figcaption>google maps api</figcaption>
        </div>
      </article>
    </section>
  );
};
export default Skills;
