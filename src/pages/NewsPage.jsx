import NewsItem from "../ui/NewsItem";
import AnimatePage from "../ui/AnimatePage";
import { useTranslation } from "react-i18next";

function NewsPage() {
  const { t } = useTranslation();

  return (
    <AnimatePage>
      <h1 className="text-3xl">{t("News")}</h1>

      <NewsItem date="11/01/2024">
        <p>
          {t(
            "Beginning of Islamic Azad University in the field of computer engineering",
          )}
        </p>
      </NewsItem>

      <NewsItem date="9/22/2024">
        <p>{t("Completed NextJS Course")} </p>
      </NewsItem>

      <NewsItem date="8/31/2024">
        <p>{t("Portolio created")} 😄</p>
      </NewsItem>
    </AnimatePage>
  );
}

export default NewsPage;
