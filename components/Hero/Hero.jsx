import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-text']}>
        <h3 className={styles['hero-text__greeting']}>Hello, world! I am</h3>
        <h1 className={styles['hero-text__name']}>Allan Lalangan</h1>
        <h3 className={styles['hero-text__title']}>Web Developer</h3>
      </div>
      <div className={styles['dot-grid-container']}></div>
    </section>
  );
};
export default Hero;
