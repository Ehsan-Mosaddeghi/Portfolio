import ResumeButton from "./ResumeButton";
import Links from "./Links";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="flex border-b-2 border-blue-500 bg-[#00000050]">
      <div className="container flex w-full items-center justify-between">
        <div className="max-w-lg space-y-3">
          <h2>{t("Frontend developer")}</h2>
          <p>
            {t("© 2024 Ehsan Mosaddeghi, Tabriz, Iran. All rights reserved.")}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-[0.6rem] text-center text-xl">
          <h4>{t("Socials")}</h4>
          <Links />
          <ResumeButton
            href="https://drive.google.com/file/d/1Aj4nrS6B-AW5Vj2AijqYH5ct2rLJezIi/view?usp=drive_link"
            target="blink"
          >
            {t("My Resume")}
          </ResumeButton>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
