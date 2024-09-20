function ProjectItem({ title, description, image, href }) {
  return (
    <a
      href={href}
      target="blink"
      className="flex flex-col rounded-md bg-stone-900 duration-300 hover:-translate-y-4 hover:shadow-[0_40px_10px_-15px_rgba(0,0,0,0.3)]"
    >
      <img src={image} alt={title} className="w-full rounded-t-md" />

      <div className="space-y-4 p-2">
        <h4 className="text-2xl">{title}</h4>
        <p className="text-lg">{description}</p>
      </div>
    </a>
  );
}

export default ProjectItem;
