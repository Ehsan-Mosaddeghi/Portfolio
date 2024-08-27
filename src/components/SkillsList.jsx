import { SiNuxtdotjs, SiTailwindcss } from "react-icons/si";
import { FaCss3, FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa";
import SkillItem from "./SkillItem";

const skillItems = [
  {
    icon: <SiNuxtdotjs className="text-green-500" />,
    url: "https://nuxt.com",
  },
  {
    icon: <FaVuejs className="text-green-400" />,
    url: "https://vuejs.org",
  },
  {
    icon: <FaReact className="text-blue-400" />,
    url: "https://react.dev",
  },
  {
    icon: <FaHtml5 className="text-red-500" />,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <FaCss3 className="text-blue-500" />,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <FaJs className="text-yellow-400" />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <SiTailwindcss className="text-blue-400" />,
    url: "https://tailwindcss.com",
  },
];

function SkillsList() {
  return (
    <ul className="flex flex-wrap justify-between gap-8">
      {skillItems.map((item, i) => (
        <SkillItem key={i} url={item.url}>
          {item.icon}
        </SkillItem>
      ))}
    </ul>
  );
}

export default SkillsList;
