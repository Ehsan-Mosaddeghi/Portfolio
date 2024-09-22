import PropTypes from "prop-types";

function AboutItem({ children, title, breakLine = true }) {
  return (
    <>
      <div className="my-8 leading-8">
        <div>
          <h2 className="text-3xl">{title}</h2>
          {children}
        </div>
      </div>
      {breakLine && <div className="break-line"></div>}
    </>
  );
}
AboutItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  breakLine: PropTypes.bool,
};

export default AboutItem;
