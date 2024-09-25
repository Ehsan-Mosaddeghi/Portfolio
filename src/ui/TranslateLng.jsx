import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";

function TranslateLng() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  function handleLanguageChange(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="mr-8 cursor-pointer justify-self-end text-center">
      {isOpen && (
        <div
          className="absolute right-20 top-[0.8rem] flex -translate-y-1/2 gap-2 rounded-md bg-menu p-1"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span
            className={`cursor-pointer p-1 font-Rubik ${i18n.language === "fa" ? "opacity-100" : "opacity-50"}`}
            onClick={() => handleLanguageChange("fa")}
          >
            فارسی
          </span>
          <span
            className={`cursor-pointer p-1 font-Rubik ${i18n.language === "en" ? "opacity-100" : "opacity-50"}`}
            onClick={() => handleLanguageChange("en")}
          >
            English
          </span>
        </div>
      )}
      <div>
        <MdLanguage
          className={`text-2xl hover:text-menu ${isOpen ? "animate-spin" : ""}`}
          onClick={() => setIsOpen((open) => !open)}
        />
      </div>
    </div>
  );
}

export default TranslateLng;
