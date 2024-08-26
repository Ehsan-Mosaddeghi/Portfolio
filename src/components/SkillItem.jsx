import { useState } from "react";

function SkillItem({ children, name }) {
  return (
    <div className="relative items-center gap-2 duration-300 hover:scale-125">
      <li className="text-5xl">{children}</li>
      <div className="absolute left-0 top-0 -z-10 h-full w-full scale-125 rounded-md border border-stone-900 bg-stone-800"></div>
    </div>
  );
}

export default SkillItem;
