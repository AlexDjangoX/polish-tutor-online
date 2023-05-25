import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { NationalSymbols } from '../constants';

import { motion } from 'framer-motion';
import { TypingText } from './TypingText';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles/styles';

const NationalEmblems = () => {
  return (
    <>
      <motion.div
        className="text-center"
        variants={textVariant()}
        viewport={{ once: false, amount: 0.1 }}
        initial="hidden"
        whileInView="show"
      >
        <h2 className={`${styles.sectionHeadText}`}> Inspiration </h2>
        <span className="h-8"></span>
      </motion.div>
      <motion.div
        viewport={{ once: false, amount: 0.1 }}
        initial="hidden"
        whileInView="show"
      >
        <TypingText
          title="Dare to be brilliant"
          textStyles={`${styles.heroSubText} text-secondary text-center italic font-light`}
        />
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {NationalSymbols.map((symbol) => (
          <div className="w-28 h-28" key={symbol.name}>
            <BallCanvas icon={symbol.icon.src} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(NationalEmblems, 'tech');
