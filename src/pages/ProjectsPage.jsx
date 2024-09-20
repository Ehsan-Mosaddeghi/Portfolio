import { useTranslation } from "react-i18next";
import AnimatePage from "../ui/AnimatePage";
import ProjectItem from "../ui/ProjectItem";

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <AnimatePage>
      <h1 className="mb-8 text-3xl">{t("Projects")}</h1>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <ProjectItem
          image="/images/projects_todo.png"
          title="To Do list website"
          description="Created with pure HTML & CSS and JavaScript"
          href="https://ehsan-mosaddeghi.github.io/Todo-list-app/"
        />

        <ProjectItem
          image="/images/projects_worldwise_user.png"
          title="The World Wise"
          description="Created with NextJS, TailwindCSS and Supabase."
          href="https://the-wild-oasis-user-ten.vercel.app/"
        />
      </ul>
    </AnimatePage>
  );
}

export default ProjectsPage;
