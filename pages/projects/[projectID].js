import { useRouter } from 'next/router';

const ProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>ProjectPage</div>;
};
export default ProjectPage;
