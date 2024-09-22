import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";

function NavbarItem({ item }) {
  const { t, i18n } = useTranslation();

  return (
    <NavLink
      to={item.url}
      key={item.name}
      className="menu-item relative flex flex-col items-center transition duration-300 hover:text-slate-100"
    >
      <span className="text-xl">{item.icon}</span>
      <p className={`${i18n.language === "fa" ? "font-Rubik" : "font-sans"}`}>
        {t(item.name)}
      </p>
    </NavLink>
  );
}
NavbarItem.propTypes = {
  item: PropTypes.object,
};

export default NavbarItem;
