import AnimatePage from "../ui/AnimatePage";
import ProjectItem from "../ui/ProjectItem";

function ProjectsPage() {
  return (
    <AnimatePage>
      <h1 className="mb-8 text-6xl">Projects</h1>

      <ul className="grid grid-cols-3 gap-4">
        <ProjectItem />
      </ul>
    </AnimatePage>
  );
}

export default ProjectsPage;
