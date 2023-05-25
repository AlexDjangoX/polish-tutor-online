'use client';

import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { TypingText } from './TypingText';

import { FaCheck } from 'react-icons/fa';

import { styles } from '../styles/styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full mx-auto">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 1.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image src={icon} alt={title} className="w-16, h-16 object-contain" />
          <h3 className="text-center text-white font-extralight text-[20]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const GreenTick = () => (
    <FaCheck
      className="text-green-500 mr-2"
      style={{ width: '32px', height: '32px' }}
    />
  );

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="text-center"
        variants={textVariant()}
      >
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      <motion.div initial="hidden" whileInView="show">
        <TypingText
          title="A short introduction"
          textStyles={`${styles.heroSubText} text-secondary text-center italic font-light`}
        />
      </motion.div>

      <motion.div
        variants={fadeIn('bottom', 'spring', 1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[40px] tracking-wider mx-auto p-4 "
      >
        <div className="p-4 mb-4">
          <p>
            "Hey there! Are you looking to learn Polish language but have some
            questions before you commit? No problem, send me an email and we can
            set up a free trial lesson."
          </p>
        </div>
      </motion.div>
      <motion.ul
        variants={fadeIn('bottom', 'spring', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className=" text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wider mx-auto"
      >
        <li>
          <p className="flex align-center justify-start">
            <GreenTick />
            As an online language instructor, I'm thrilled to begin your
            lessons, even if you're a novice!
          </p>
        </li>
        <li>
          <p className="flex align-center justify-start">
            <GreenTick />
            I'm proficient in Polish, Bulgarian, and English, with basic
            knowledge of Russian and Ukrainian.
          </p>
        </li>

        <li>
          <p className="flex align-center justify-start">
            <GreenTick /> You may begin with a complimentary 50-minute lesson,
            followed by private 60-minute lessons at 18 EUR each.
          </p>
        </li>
        <li>
          <p className="flex align-center justify-start">
            <GreenTick /> Post each session, I will assign homework via the
            e-polish online platform to facilitate practice.
          </p>
        </li>
        <li>
          <p className="flex align-center justify-start">
            <GreenTick />
            I've taught diverse age groups, from kids to the elderly, and
            provide numerous options to meet your requirements.
          </p>
        </li>
      </motion.ul>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
