import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaFileAlt, FaBrain, FaKey, FaImages } from "react-icons/fa"
import { FaMagnifyingGlass } from "react-icons/fa6";
import FeatureCard from '../components/FeatureCard';
import Login from '../components/Login';

const features = [
  {
    title: "PDF Intelligence",
    description: "Extract insights from PDFs with AI-powered Q&A.",
    icon: FaFileAlt,
  },
  {
    title: "Video Analysis",
    description: "Get intelligent summarization of Youtube Video.",
    icon: FaYoutube,
  },
  {
    title: "Multi-Model AI",
    description: "Access diverse AI models for varied perspectives.",
    icon: FaBrain,
  },
  {
    title: "API Key Integration",
    description: "Seamlessly connect with models using pre-existing API keys.",
    icon: FaKey,
  },
  {
    title: "Generate Images",
    description: "Use the all new Flux.1 to generate images on demand",
    icon: FaImages,
  },
  {
    title: "Research Assistant",
    description: "Extract key insights form papers and journals.",
    icon: FaMagnifyingGlass,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
      {/* Left half - Feature cards */}
      <motion.div
        className="w-full lg:w-3/5 p-8 lg:p-16 overflow-y-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl mt-10 lg:text-5xl font-bold mb-6 text-white" variants={itemVariants}>
          Amplify Your Work with Jamin AI
        </motion.h1>
        <motion.p className="text-lg lg:text-xl mb-12 text-gray-300" variants={itemVariants}>
          Harness the power of AI to streamline your workflow, analyze documents, and gain insights
          from various content types.
        </motion.p>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right half - Login section */}
      <motion.div
        className="w-full lg:w-2/5 p-8 lg:p-16 flex items-center justify-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Login />
      </motion.div>
    </div>
  );
};

export default Home;