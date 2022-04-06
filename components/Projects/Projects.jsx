import styles from './Projects.module.css';

import ProjectCard from './ProjectCard';
import { projects } from '../../static/projectsData';

const Projects = () => {
  return (
    <section className={`${styles['projects-section']}`}>
      {projects.map(({ title, description, tech, i }) => (
        <ProjectCard
          key={i}
          title={title}
          description={description}
          tech={tech}
        />
      ))}
    </section>
  );
};
export default Projects;
