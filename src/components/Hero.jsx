import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden px-4 sm:min-h-screen sm:px-0">
      <div className={`${styles.paddingX} relative z-10 mx-auto w-full max-w-7xl`}>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-3 flex flex-col items-center sm:mb-4" />
          <div className="w-full max-w-2xl px-2 sm:px-0">
            <h1
              className={`${styles.heroHeadText} text-white leading-tight sm:leading-[1.1]`}
            >
              Hi, I'm <span className="text-[#915eff]">Mohd Adeeb</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 leading-snug text-white-100 sm:leading-[40px]`}
            >
              I Develop full-stack websites with modern design and smooth user
              experiences.
            </p>
          </div>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about"></a>
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
