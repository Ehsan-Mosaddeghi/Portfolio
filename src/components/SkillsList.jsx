import { SiNuxtdotjs, SiTailwindcss } from "react-icons/si";
import { FaCss3, FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa";
import SkillItem from "./SkillItem";

const skillItems = [
  {
    icon: <SiNuxtdotjs className="text-green-500" />,
    name: "Nuxt",
  },
  {
    icon: <FaVuejs className="text-green-400" />,
    name: "Vue",
  },
  {
    icon: <FaReact className="text-blue-400" />,
    name: "React",
  },
  {
    icon: <FaHtml5 className="text-red-500" />,
    name: "HTML",
  },
  {
    icon: <FaCss3 className="text-blue-500" />,
    name: "CSS",
  },
  {
    icon: <FaJs className="text-yellow-400" />,
    name: "JavaScript",
  },
  {
    icon: <SiTailwindcss className="text-blue-400" />,
    name: "Tailwind CSS",
  },
];

function SkillsList() {
  return (
    <ul className="flex flex-wrap justify-center gap-8">
      {skillItems.map((item, i) => (
        <SkillItem key={i} name={item.name}>
          {item.icon}
        </SkillItem>
      ))}
    </ul>
  );
}

export default SkillsList;
