import { motion } from "framer-motion";

function SkillItem({ children, url }) {
  return (
    <motion.a
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1 }}
      href={url}
      target="blink"
      className="relative m-4 h-20 w-20 rounded-md border border-stone-900 bg-skill transition-colors duration-300 hover:scale-110 hover:border-blue-600"
    >
      <li className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">
        {children}
      </li>
    </motion.a>
  );
}

export default SkillItem;
