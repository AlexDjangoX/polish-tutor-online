'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { logoAnimation } from '../utils/motion';
import { TypingText } from './TypingText';

import { styles } from '../styles/styles';
import { januszLogoNoBackground, januszProfile } from '../assets/index.js';

const Hero = () => {
  return (
    <>
      <section
        className={`background-image flex flex-col justify-between w-full h-auto mx-auto pt-[140px]`}
      >
        <div
          className={`max-w-7xl mx-auto ${styles.paddingX}  flex flex-row justify-between`}
        >
          <div className="flex flex-col  items-center mt-5">
            <span className="w-5 h-5 rounded-full bg-[#915EFF]"></span>
            <span className="w-1 sm:h-80 h-40 violet-gradient"></span>
          </div>

          <div>
            <div className="flex justify-evenly align-bottom ">
              <h1
                className={`${styles.heroHeadText} text-white  font-extralight italic`}
              >
                <div className="flex justify-around text-secondary">
                  <span>Hello, I am&nbsp;</span>
                  <span>
                    <Image
                      src={januszProfile}
                      alt="Janusz-Rudzki-profile-picture"
                      className="flex self-center aspect-w-16 aspect-h-9  w-[90px] h-auto  rounded-full "
                    />
                  </span>
                </div>
                <p className={`${styles.heroHeadText} font-extralight italic`}>
                  Janusz Rudzki
                </p>
              </h1>
            </div>

            <motion.div initial="hidden" whileInView="show">
              <TypingText
                title={'International Polish Teacher'}
                textStyles={`${styles.heroSubText} text-secondary  italic font-light flex flex-wrap justify-center p-6`}
              />
            </motion.div>
          </div>

          <div className="flex flex-col  items-center mt-5 ">
            <span className="w-5 h-5 rounded-full bg-[#915EFF]"></span>
            <span className="w-1 sm:h-80 h-40 violet-gradient"></span>
          </div>
        </div>

        <motion.div
          variants={logoAnimation()}
          initial="hidden"
          animate="show"
          className="flex  justify-center mx-auto"
        >
          <div className="flex justify-center green-pink-gradient p-[1px] rounded-[20px] aspect-w-16 aspect-h-9 w-[300px] h-[170px] ">
            <Image
              src={januszLogoNoBackground}
              alt={'logo-no-background'}
              className="object-cover w-[50%] "
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
