import PropTypes from "prop-types";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProjectItem({ title, description, image, href }) {
  const [showInfo, setShowInfo] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <a
      href={href}
      target="blink"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      className="relative flex flex-col text-slate-100 duration-300"
    >
      <LazyLoadImage
        alt={title}
        src={image}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full rounded-2xl duration-300 ${showInfo ? "scale-105" : ""} ${isLoaded ? "" : "blur-xl"}`}
      />
      <div
        className={`absolute top-0 block h-full w-full rounded-2xl bg-[rgba(0,0,0,0.4)] duration-300 ${showInfo ? "scale-105 opacity-100" : "opacity-0"}`}
      ></div>

      <div
        className={`absolute top-20 w-full space-y-4 p-2 text-center duration-300 ${showInfo ? "opacity-100" : "translate-y-5 opacity-0"}`}
      >
        <h4 className="text-2xl">{title}</h4>
        <p className="text-lg">{description}</p>
      </div>
    </a>
  );
}
ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ProjectItem;
