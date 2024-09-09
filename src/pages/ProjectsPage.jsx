import { useTranslation } from "react-i18next";
import AnimatePage from "../ui/AnimatePage";
import ProjectItem from "../ui/ProjectItem";

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <AnimatePage>
      <h1 className="mb-8 text-3xl">{t("Projects")}</h1>

      <ul className="grid grid-cols-3 gap-4">
        <ProjectItem />
      </ul>
    </AnimatePage>
  );
}

export default ProjectsPage;
