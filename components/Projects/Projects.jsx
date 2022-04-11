import Link from 'next/link';
import styles from './Projects.module.css';

import ProjectCard from './ProjectCard';
import { projects } from '../../static/portfolioData';

// projects home component
// nested inside <main> tag
const Projects = () => {
  return (
    <section className={`${styles['projects-section']}`}>
      <ul>
        {projects.map(({ title, description, tech, i }) => (
          <Link
            key={i}
            href={{
              pathname: '/projects/[projectID]',
              query: { projectID: title.toLowerCase().replace(/ /g, '') },
            }}
            passHref={true}
          >
            <li
              key={i}
              title={title}
              // description={description}
              // tech={tech}
            >
              {title}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
export default Projects;
