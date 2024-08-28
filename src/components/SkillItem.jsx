function SkillItem({ children, url }) {
  return (
    <>
      <div className="relative gap-2 duration-300 hover:scale-110">
        <a href={url} target="blink">
          <li className="p-4 text-5xl after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-md after:border after:border-stone-900 after:bg-stone-800 after:duration-300 hover:after:bg-stone-900">
            {children}
          </li>
        </a>
      </div>
    </>
  );
}

export default SkillItem;
