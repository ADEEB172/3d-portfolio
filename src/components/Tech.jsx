import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            whileHover={{
              scale: 1.15,
              rotate: 10,
              boxShadow: "0px 0px 30px rgba(145,94,255,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 0.2,
              },
              rotate: {
                duration: 0.2,
              },
            }}
            className="w-28 h-28 rounded-full bg-tertiary border border-[#915eff]/40 flex items-center justify-center cursor-pointer"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16 object-contain"
            />
          </motion.div>

          <p className="mt-4 text-white text-sm font-medium text-center">
            {technology.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "technologies");