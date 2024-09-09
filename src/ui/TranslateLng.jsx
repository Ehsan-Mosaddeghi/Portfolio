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
          className="absolute right-16 top-6 flex gap-2 rounded-md bg-stone-300 text-gray-800"
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
          className={`text-2xl ${isOpen ? "animate-spin" : ""}`}
          onClick={() => setIsOpen((open) => !open)}
        />
      </div>
    </div>
  );
}

export default TranslateLng;
