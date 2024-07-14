import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className="bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700"
  >
    <div className="flex items-center mb-4">
      <div className="mr-4 text-indigo-500 dark:text-indigo-400">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
    <motion.div
      className="mt-4"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <a href="#" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium inline-flex items-center group">
        Learn More
        <svg 
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
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
  delay: PropTypes.number.isRequired,
};

export default FeatureCard;