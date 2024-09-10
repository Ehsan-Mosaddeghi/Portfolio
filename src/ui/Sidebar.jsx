import PropTypes from "prop-types";
import NavbarItem from "./NavbarItem";

function Sidebar({ items }) {
  return (
    <div className="fixed top-0 z-10 w-full animate-bounce space-y-4 bg-stone-800 px-20 pb-4 pt-[4.5rem] text-primary sm:hidden">
      {items.map((item) => (
        <NavbarItem item={item} key={item.name} />
      ))}
    </div>
  );
}
Sidebar.propTypes = {
  items: PropTypes.array,
};

export default Sidebar;
