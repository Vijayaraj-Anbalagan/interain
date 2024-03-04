'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings}`}>
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className="text-white font-bold items-center text-center md:text-6xl text-[34px] my-auto md:text-[56px]">
            Unlock Your Potential
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center text-white items-center text-center md:text-6xl text-[34px] my-auto md:text-[56px] mb-2"
          >
            <div>
              <div className="font-bold">
                <span>with Inter</span>
                <span className="text-purple font-bold">ai</span>
                <span>n</span>
              </div>
              <div>
                <div className="text-gray-400 text-[15px] mt-1 mx-2 md:text-[20px] "> Where AI meets Interview Excellence
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.button
          variants={textVariant(1.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 self-center bg-purple border-transparent rounded-md px-6 py-3 mt-6 hover:bg-transparent hover:text-purple hover:border-purple hover:shadow-inner focus:ring-purple-500 focus:ring-opacity-50"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default Hero;
