import PropTypes from "prop-types";

function Button({ children, href }) {
  return (
    <a
      className="relative z-10 cursor-pointer rounded-md border-2 border-primary bg-transparent px-4 py-2 text-base after:absolute after:left-1/2 after:top-0 after:-z-10 after:block after:h-full after:w-0 after:-translate-x-1/2 after:bg-green-800 after:duration-[400ms] hover:after:w-full"
      href={href}
      download
    >
      {children}
    </a>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
};

export default Button;
