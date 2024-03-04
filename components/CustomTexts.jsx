'use client';

import { motion } from 'framer-motion';
import { textContainer1, textVariant2 } from '../utils/motion';

export const TitleText = ({ title, textStyles }) => (
  <motion.h3
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[32px] text-[20px] text-white ${textStyles}`}
  >
    {title}
  </motion.h3>
);

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer1}
    className={`font-normal text-[20px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

