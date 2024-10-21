import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-6 border border-gray-700"
  >
    <div className="flex items-center mb-4">
      <div className="mr-4 text-indigo-400">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-indigo-300">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
    <motion.div
      className="mt-4"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <a href="#" className="text-indigo-400 text-sm font-medium inline-flex items-center group">
        Learn More
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  </motion.div>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default FeatureCard;