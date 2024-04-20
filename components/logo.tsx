"use client";

import React from "react";
import { motion } from "framer-motion";

const divVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Logo() {
  return (
    <motion.section>
      <motion.div
        variants={divVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className="bg-gray-600 h-full p-5 py-20 max-h-96 max-w-96"
      >
        <motion.div
          className="flex flex-row items-center justify-center mx-auto"
          variants={divVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={divVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 3 }}
            className="h-0 w-0 border-r-[30px] border-b-[50px] border-l-[30px] border-solid border-r-transparent border-l-transparent border-b-[#000]"
          />
        </motion.div>

        <motion.div
          className="flex flex-row items-center justify-center mx-auto"
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 3 }}
        >
          <motion.div
            variants={divVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="h-0 w-0 border-r-[30px] border-b-[50px] border-l-[30px] border-solid border-r-transparent border-l-transparent border-b-[#000]"
          />
          <motion.div
            variants={divVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 3.8 }}
            className="h-0 w-0 border-r-[30px] border-b-[50px] border-l-[30px] border-solid border-r-transparent border-l-transparent border-b-[#000]"
          />
        </motion.div>

        <motion.div
          className="flex flex-row items-center justify-center mx-auto"
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 3 }}
        >
          <motion.div
            variants={divVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="h-0 w-0 border-r-[30px] border-b-[50px] border-l-[30px] border-solid border-r-transparent border-l-transparent border-b-[#000]"
          />
          <motion.div
            variants={divVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2 }}
            className="h-0 w-0 border-r-[30px] border-b-[50px] border-l-[30px] border-solid border-r-transparent border-l-transparent border-b-[#000]"
          />
          <motion.div
            variants={divVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            className="h-0 w-0 border-r-[30px] border-b-[50px] border-l-[30px] border-solid border-r-transparent border-l-transparent border-b-[#000]"
          />
        </motion.div>

        <motion.div
          className="flex flex-row items-center justify-center mx-auto"
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.3 }}
        >
          <motion.div
            variants={divVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2.8 }}
            className="h-0 w-0 border-r-[30px] border-b-[50px] border-l-[30px] border-solid border-r-transparent border-l-transparent border-b-[#000]"
          />
          <motion.div
            variants={divVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.3 }}
            className="h-0 w-0 border-r-[30px] border-b-[50px] border-l-[30px] border-solid border-r-transparent border-l-transparent border-b-[#000]"
          />
          <motion.div
            variants={divVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            className="h-0 w-0 border-r-[30px] border-b-[50px] border-l-[30px] border-solid border-r-transparent border-l-transparent border-b-[#000]"
          />
          <motion.div
            variants={divVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 3 }}
            className="h-0 w-0 border-r-[30px] border-b-[50px] border-l-[30px] border-solid border-r-transparent border-l-transparent border-b-[#000]"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
