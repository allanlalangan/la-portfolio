import styles from './Hero.module.css';

import DotGrid from '../ui/DotGrid';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-text']}>
        <h1>Allan LaDev</h1>
        <h3>Web Developer</h3>
      </div>
      <div className={styles['dot-grid-container']}>
        <DotGrid />
      </div>
    </section>
  );
};
export default Hero;
