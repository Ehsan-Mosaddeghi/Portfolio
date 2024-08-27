function SkillItem({ children, url }) {
  return (
    <>
      <div className="relative gap-2 duration-300 hover:scale-125">
        <a href={url}>
          <li className="text-5xl">{children}</li>
          <div className="absolute left-0 top-0 -z-10 h-full w-full scale-125 rounded-md border border-stone-900 bg-stone-800"></div>
        </a>
      </div>
    </>
  );
}

export default SkillItem;
