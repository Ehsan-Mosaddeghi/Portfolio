import "./HomePage.css";
import SkillsList from "../components/SkillsList";
import AnimatePage from "../ui/AnimatePage";
import { useTranslation } from "react-i18next";
import ResumeButton from "../ui/ResumeButton";

function HomePage() {
  const { t } = useTranslation();

  return (
    <AnimatePage>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="image-container relative">
            <img
              src="/images/homepage-image.jpg"
              loading="lazy"
              alt="portfolio image"
              className="image-me rounded-ful relative z-10 w-64 max-w-none"
            />
          </div>

          <div className="space-y-4 text-5xl text-primary transition-all duration-[400ms]">
            <div className="typewriter inline-block">
              <h1>{t("Hi It's Ehsan")}</h1>
            </div>

            <p className="text-lg">
              {t(
                "19 years old self-taught frontend developer passionate about learning and creating innovative user experiences. Eager to grow and explore new technologies.",
              )}
            </p>

            <div>
              <ResumeButton href="/Ehsan-Mosaddeghi-Resume.pdf" target="blink">
                {t("My Resume")}
              </ResumeButton>
            </div>
          </div>
        </div>

        <div className="break-line"></div>

        <div className="flex flex-col gap-10">
          <div className="space-y-2">
            <h2 className="text-5xl">{t("Skills")}</h2>
            <p>{t("Some of the software I use on daily basis")}</p>
          </div>
          <div>
            <SkillsList />
          </div>
        </div>
      </div>
    </AnimatePage>
  );
}

export default HomePage;
