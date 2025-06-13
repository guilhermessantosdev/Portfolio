import BR from "../../assets/br.svg?react";
import US from "../../assets/us.svg?react";
import ES from "../../assets/es.svg?react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const selectedColorClass = "text-[#00BFFA]";

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const langButtonClass = (lang) =>
    `flex items-center space-x-2 cursor-pointer transition-all duration-200 ${
      i18n.language === lang
        ? `opacity-100 ${selectedColorClass}`
        : "opacity-50 hover:opacity-100"
    }`;

  const iconClass = (iconTheme) =>
    `w-5 h-9 cursor-pointer transition-colors duration-200 ${
      theme === iconTheme
        ? selectedColorClass
        : "text-secondary hover:text-yellow-200"
    }`;

  return (
    <nav className="w-screen pt-6">
      <div className="flex justify-between items-center w-full ">
        <div className="flex items-center h-10 ml-4 mr-2 space-x-4 rounded-full border-2 pl-4 pr-4 p-2 border-accent bg-tertiary text-primary">
          <div
            onClick={() => changeLanguage("pt")}
            className={langButtonClass("pt")}
          >
            <BR className="h-5" /> <p>{t("nav.lang.pt", "PT")}</p>
          </div>
          <span className="w-px h-4 bg-separator" />
          <div
            onClick={() => changeLanguage("en")}
            className={langButtonClass("en")}
          >
            <US className="h-5" /> <p>{t("nav.lang.en", "EN")}</p>
          </div>
          <span className="w-px h-4 bg-separator" />
          <div
            onClick={() => changeLanguage("es")}
            className={langButtonClass("es")}
          >
            <ES className="h-5" /> <p>{t("nav.lang.es", "ES")}</p>
          </div>
        </div>

        <div className="flex items-center h-10 mr-4 space-x-4 rounded-full pl-4 pr-4 border-2 border-accent bg-tertiary">
          <BsFillMoonStarsFill
            onClick={toggleTheme}
            className={iconClass("dark")}
          />
          <span className="w-px h-4 bg-separator" />
          <FaSun onClick={toggleTheme} className={iconClass("light")} />
        </div>
      </div>
    </nav>
  );
}
