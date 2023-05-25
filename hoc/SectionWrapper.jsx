'use client';

import { motion } from 'framer-motion';

import { styles } from '../styles/styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => {
  const WrappedComponent = () => (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 `}
    >
      <span className="hash-span" id={`${idName}`}>
        &nbsp;
      </span>

      <Component />
    </motion.div>
  );

  WrappedComponent.displayName = `SectionWrapper(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};

export default SectionWrapper;
