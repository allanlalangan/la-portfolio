import styles from './ProjectCard.module.css';
import { projects } from '../../static/projectsData';
import Card from '../ui/Card';

const ProjectCard = ({ title, description, tech }) => {
  return (
    <Card className={`${styles['project-card']}`}>
      <div className={styles['project-details']}>
        <h2 className={styles['project-title']}>{title}</h2>
        <p className={styles['project-description']}>{description}</p>
        <ul className={styles['project-tech']}>
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <figure className={styles['project-preview']}></figure>
    </Card>
  );
};
export default ProjectCard;
