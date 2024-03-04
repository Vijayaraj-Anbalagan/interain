'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Us" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.5, 1.2)}
        className="font-normal sm:text-[32px] text-center text-secondary-white text-[15px] mt-6 mx-2 md:text-[20px]"
      >
        <span className="font-extrabold text-white">Interain ,</span> at the forefront of AI-powered career advancement,
        offers tailored solutions for global success.Our platform provides comprehensive soft skills training and interview readiness, empowering individuals to {' '}
        <span className="font-extrabold text-white">
          excel in their careers
        </span>{' '}
        Explore our innovative approach to {' '}
        <span className="font-extrabold text-white">Professional development</span> and unlock your full potential.
        {' '}
        <span className="font-extrabold text-white">explore</span> our offerings and embark on a journey toward a brighter future with Interain. by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.6, 1.2)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
