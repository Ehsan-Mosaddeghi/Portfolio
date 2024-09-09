import { useTranslation } from "react-i18next";

function TranslateLng() {
  const { i18n } = useTranslation();

  function handleLanguageChange(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="absolute right-2 top-2 flex space-x-2 rounded-md border-2 border-[#cecece] bg-stone-800 p-2 text-center">
      <span
        className={`font-Rubik cursor-pointer p-1 ${i18n.language === "fa" ? "opacity-100" : "opacity-50"}`}
        onClick={() => handleLanguageChange("fa")}
      >
        فارسی
      </span>
      <span
        className={`font-Rubik cursor-pointer p-1 ${i18n.language === "en" ? "opacity-100" : "opacity-50"}`}
        onClick={() => handleLanguageChange("en")}
      >
        English
      </span>
    </div>
  );
}

export default TranslateLng;
