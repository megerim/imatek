import React from "react";

import { motion } from "framer-motion";

export default function Animatedsvg(): JSX.Element {
  const variants = {
    initial: { opacity: 0, pathLength: 0 },
    animate: { opacity: 1, pathLength: 1 },
  };

  return (
    <>
      {" "}
      <motion.svg
        width="200"
        height="100"
        viewBox="0 0 2971 4700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0 0H2971V4700H0V0Z"
          fill="black"
          variants={variants}
          initial="initial"
          animate="animate"
        />
        <motion.path
          variants={variants}
          initial="initial"
          animate="animate"
          d="M509 2900L833.76 3466.25H184.24L509 2900Z"
          fill="#D9D9D9"
        />
        <motion.path
          variants={variants}
          initial="initial"
          animate="animate"
          d="M836 2336L1162.49 2899.25H509.508L836 2336Z"
          fill="#D9D9D9"
        />
        <motion.path
          variants={variants}
          initial="initial"
          animate="animate"
          d="M1161.5 1770L1486.69 2335.5H836.307L1161.5 1770Z"
          fill="#D9D9D9"
        />
        <motion.path
          variants={variants}
          initial="initial"
          animate="animate"
          d="M1488.5 1204L1815.42 1769.5H1161.58L1488.5 1204Z"
          fill="#D9D9D9"
        />
        <motion.path
          variants={variants}
          initial="initial"
          animate="animate"
          d="M1815.5 1770L2138.96 2335.5H1492.04L1815.5 1770Z"
          fill="#D9D9D9"
        />
        <motion.path
          variants={variants}
          initial="initial"
          animate="animate"
          d="M1486.5 2336L1813.42 2899.25H1159.58L1486.5 2336Z"
          fill="#D9D9D9"
        />
        <motion.path
          variants={variants}
          initial="initial"
          animate="animate"
          d="M2139 2336L2465.49 2899.25H1812.51L2139 2336Z"
          fill="#D9D9D9"
        />
        <motion.path
          variants={variants}
          initial="initial"
          animate="animate"
          d="M1163.5 2900L1488.69 3466.25H838.307L1163.5 2900Z"
          fill="#D9D9D9"
        />
        <motion.path
          variants={variants}
          initial="initial"
          animate="animate"
          d="M1812.5 2900L2135.96 3466.25H1489.04L1812.5 2900Z"
          fill="#D9D9D9"
        />
        <motion.path
          variants={variants}
          initial="initial"
          animate="animate"
          d="M2466 2900L2787.3 3466.25H2144.7L2466 2900Z"
          fill="#D9D9D9"
        />
      </motion.svg>
    </>
  );
}
