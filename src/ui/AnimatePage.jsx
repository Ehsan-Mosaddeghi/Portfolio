import { motion } from "framer-motion";
import PropTypes from "prop-types";

const animations = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

function AnimatePage({ children }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
AnimatePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatePage;
