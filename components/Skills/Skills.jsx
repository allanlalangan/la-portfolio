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
        <figure className={styles['skill']}>
          <SiReact className={styles['skill-icon']} />
          <figcaption className={styles['skill-caption']}>
            <h2 className={styles['_caption-title']}>React</h2>
            <p className={styles['_caption-summary']}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              iusto facere omnis cum ratione doloremque tempora magni ducimus
              voluptatibus explicabo!
            </p>
          </figcaption>
        </figure>
      </article>
      <article className={styles['skills__secondary']}>
        <figure className={styles['skill']}>
          <SiHtml5 className={styles['skill-icon']} />
          <figcaption className={styles['skill-caption']}>
            <h3 className={styles['_caption-title']}>html5</h3>
            <p className={styles['_caption-summary']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque
              consequuntur excepturi ad veniam rerum officia non omnis qui
              quibusdam.
            </p>
          </figcaption>
        </figure>
        <figure className={styles['skill']}>
          <SiCss3 className={styles['skill-icon']} />
          <figcaption className={styles['skill-caption']}>
            <h3 className={styles['_caption-title']}>CSS3</h3>
            <p className={styles['_caption-summary']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque
              consequuntur excepturi ad veniam rerum officia non omnis qui
              quibusdam.
            </p>
          </figcaption>
        </figure>
        <figure className={styles['skill']}>
          <SiJavascript className={styles['skill-icon']} />
          <figcaption className={styles['skill-caption']}>
            <h3 className={styles['_caption-title']}>Javascript</h3>
            <p className={styles['_caption-summary']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque
              consequuntur excepturi ad veniam rerum officia non omnis qui
              quibusdam.
            </p>
          </figcaption>
        </figure>
      </article>
      <article className={styles['skills__tools']}>
        <figure className={styles['skill']}>
          <SiNpm className={styles['skill-icon']} />
          <figcaption className={styles['skill-caption']}>
            <h3 className={styles['_caption-title']}>NPM</h3>
            <p className={styles['_caption-summary']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque
              consequuntur excepturi ad veniam rerum officia non omnis qui
              quibusdam.
            </p>
          </figcaption>
        </figure>
        <figure className={styles['skill']}>
          <SiGithub className={styles['skill-icon']} />
          <figcaption className={styles['skill-caption']}>
            <h3 className={styles['_caption-title']}>GitHub</h3>
            <p className={styles['_caption-summary']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque
              consequuntur excepturi ad veniam rerum officia non omnis qui
              quibusdam.
            </p>
          </figcaption>
        </figure>
        <div className={styles['skill']}>
          <SiGooglemaps className={styles['skill-icon']} />
          <figcaption className={styles['skill-caption']}>
            <h3 className={styles['_caption-title']}>Google Maps API</h3>
            <p className={styles['_caption-summary']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque
              consequuntur excepturi ad veniam rerum officia non omnis qui
              quibusdam.
            </p>
          </figcaption>
        </div>
      </article>
    </section>
  );
};
export default Skills;
