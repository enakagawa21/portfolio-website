
import { motion } from "framer-motion";

import "./Hero.css";
import "../Nav/Nav.css";


function Hero() {
  const heroContent = {
    start: { y: 0, opacity: 0 },
    end: {
      y: 50,
      opacity: 1,
      transition: { duration: 3, type: "spring", delay: 0 },
    },
  };

  return (
    <div className='hero-wrapper'>

      <motion.div className='hero-title' initial={"start"} whileInView={"end"}>
        {/* <motion.h1 variants={heroContent}>Eric</motion.h1>
        <motion.h2 variants={heroContent}>Nakagawa</motion.h2> */}
      </motion.div>
    </div>
  );
}

export default Hero;
