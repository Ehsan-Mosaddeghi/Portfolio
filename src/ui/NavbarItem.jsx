import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function NavbarItem({ item }) {
  return (
    <NavLink
      to={item.url}
      key={item.name}
      className="menu-item relative flex flex-col items-center transition duration-300 hover:font-extrabold hover:text-slate-100"
    >
      <span className="text-xl">{item.icon}</span>
      <p className="">{item.name}</p>
    </NavLink>
  );
}
NavbarItem.propTypes = {
  item: PropTypes.object,
};

export default NavbarItem;
