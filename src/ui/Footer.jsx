import ResumeButton from "./ResumeButton";
import Links from "./Links";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="flex bg-[#00000050]">
        <div className="container flex w-full items-center justify-between">
          <div className="max-w-lg space-y-3">
            <h2>{t("Frontend developer")}</h2>
            <p>
              {t(
                "© 2024 Ehsan Mosaddeghi, Tabriz, Iran. All rights reserved.",
              )}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-[0.6rem] text-center text-xl">
            <h4>{t("Socials")}</h4>
            <Links />
            <ResumeButton href="/Ehsan-Mosaddeghi-Resume.pdf">
              {t("My Resume")}
            </ResumeButton>
          </div>
        </div>
      </footer>
      <div className="block h-1 w-full bg-[linear-gradient(90deg,#24255537,#585ac7,#24255542)]"></div>
    </>
  );
}

export default Footer;
