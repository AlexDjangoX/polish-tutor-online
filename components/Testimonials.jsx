import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { TypingText } from './TypingText';

import { styles } from '../styles/styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { FaQuoteLeft } from 'react-icons/fa';

import { testimonials } from '../constants';

const FeedbackCard = ({ index, testimonial, name, date, testimonial_2 }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.2, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full font-thin "
  >
    <p className="text-white font-black text-[24px] pb-10">
      <FaQuoteLeft />
    </p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <p className="text-white tracking-wider font-normal italic text-[18px] mt-5 ">
        {testimonial_2}
      </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[16px] font-light pl-5">
            {date}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <>
      <span id="testimonials" className="hash-span"></span>
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div
            className="text-center"
            variants={textVariant()}
            viewport={{ once: false, amount: 0.1 }}
            initial="hidden"
            whileInView="show"
          >
            <h2 className={`${styles.sectionHeadText}`}> Testimonials </h2>
            <span className="h-8"></span>
          </motion.div>
          <motion.div
            viewport={{ once: false, amount: 0.1 }}
            initial="hidden"
            whileInView="show"
          >
            <TypingText
              title="What others say"
              textStyles={`${styles.heroSubText} text-secondary text-center italic font-light`}
            />
          </motion.div>
          <div className="flex justify-center">
            <Link
              href="https://e-polish.eu/lektorzy-jezyka-polskiego-nauczajacy-online/janusz_rudzki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-3/5 mt-4 mr-4 mb-16 text-white-700 font-extralight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500  cursor-pointer py-2 px-0 rounded focus:outline-none focus:shadow-outline"
            >
              Checkout my e-Polish Profile
            </Link>
          </div>
        </div>
        <div
          className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-around gap-7`}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Testimonials, '');
