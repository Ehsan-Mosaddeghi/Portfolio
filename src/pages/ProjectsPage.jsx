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
          image="/images/projects_worldwise_user.png"
          title="The World Oasis"
          description="Created with NextJS, TailwindCSS and Supabase."
          href="https://the-wild-oasis-user-ten.vercel.app/"
        />

        <ProjectItem
          image="/images/projects_weather.png"
          title="Weather website"
          description="Built with Nuxt3 and TailwindCSS."
          href="https://weather-w.vercel.app/"
        />

        <ProjectItem
          image="/images/projects_todo.png"
          title="Todo list"
          description="Built with pure HTML & CSS and Javascript"
          href="https://todo-list-e.vercel.app/"
        />

        <ProjectItem
          image="/images/projects_worldoasis_dashboard.png"
          title="World Oasis Admin Dashboard"
          description="Built React & React query and styled-components"
          href="https://the-wild-oasis-omega-sepia.vercel.app/"
        />
      </ul>
    </AnimatePage>
  );
}

export default ProjectsPage;
