import React from 'react';
import Image from 'next/image';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { motion } from 'framer-motion';
import { TypingText } from './TypingText';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles/styles';
import { philosophies } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const PhilosophyCard = ({ philosophy }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={philosophy.date}
      iconStyle={{ background: philosophy.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={philosophy.icon}
            alt={philosophy.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[20px]  font-extralight">
          {philosophy.title}
        </h3>
        <p className="text-white text-[20px] font-extralight">
          {philosophy.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {philosophy.points.map((point, index) => (
          <li
            key={`philosophy-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider font-thin"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Philosophy = () => {
  return (
    <>
      <motion.div
        className="text-center"
        variants={textVariant()}
        viewport={{ once: false, amount: 0.1 }}
        initial="hidden"
        whileInView="show"
      >
        <h2 className={`${styles.sectionHeadText}`}> Teaching Philosophy</h2>
        <span className="h-8"></span>
      </motion.div>
      <motion.div
        viewport={{ once: false, amount: 0.1 }}
        initial="hidden"
        whileInView="show"
      >
        <TypingText
          title="The Journey to Success"
          textStyles={`${styles.heroSubText} text-secondary text-center italic font-light`}
        />
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {philosophies.map((philosophy, index) => (
            <PhilosophyCard
              key={`philosophy-${index}`}
              philosophy={philosophy}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Philosophy, 'philosophy');
