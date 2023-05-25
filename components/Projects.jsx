import React from 'react';

import { motion } from 'framer-motion';

import { styles } from '../styles/styles';

import { SectionWrapper } from '../hoc';

import { fadeIn, textVariant } from '../utils/motion';
import { TypingText } from './TypingText';

const Projects = () => {
  const youTubeUrl = 'https://vimeo.com/786250341';

  return (
    <>
      <motion.div
        className="text-center"
        variants={textVariant()}
        viewport={{ once: false, amount: 0.1 }}
        initial="hidden"
        whileInView="show"
      >
        <h2 className={`${styles.sectionHeadText}`}> Teaching </h2>
        <span className="h-8"></span>
      </motion.div>
      <motion.div
        viewport={{ once: false, amount: 0.1 }}
        initial="hidden"
        whileInView="show"
      >
        <TypingText
          title="My teaching style"
          textStyles={`${styles.heroSubText} text-secondary text-center italic font-light`}
        />
      </motion.div>

      <div className="flex justify-center items-center pt-20">
        {youTubeUrl && (
          <>
            <div className="bg-black">
              <div className="aspect-w-16 aspect-h-9 w-[300px] h-[170px] xs:w-[400px] xs:h-[220px] sm:w-[500px] sm:h-[280px] md:w-[600px] md:h-[340px] lg:w-[800px] lg:h-[450px]">
                <iframe
                  src="https://player.vimeo.com/video/824510875?h=3e9c4120e9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  allow="autoplay; fullscreen; "
                  allowFullScreen
                  className="w-full h-full"
                  title="Junusz"
                ></iframe>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'teaching');
