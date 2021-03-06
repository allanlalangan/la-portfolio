import styles from './ProjectCard.module.css';
import { projects } from '../../static/portfolioData';
import Card from '../ui/Card';

const ProjectCard = ({ title, description, tech }) => {
  return (
    <li className={`${styles['project-card']}`}>
      <div className={styles['project-details']}>
        <h2 className={styles['project-title']}>{title}</h2>
        {description && (
          <p className={styles['project-description']}>{description}</p>
        )}
        {tech && (
          <ul className={styles['project-tech']}>
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};
export default ProjectCard;
