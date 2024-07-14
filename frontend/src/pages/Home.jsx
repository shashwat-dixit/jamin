import { motion } from 'framer-motion';
import { FaYoutube, FaFileAlt, FaBrain, FaKey } from "react-icons/fa";
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
    description: "Unlock video content with intelligent summarization.",
    icon: FaYoutube,
  },
  {
    title: "Multi-Model AI",
    description: "Access diverse AI models for varied perspectives.",
    icon: FaBrain,
  },
  {
    title: "Premium Integration",
    description: "Seamlessly connect with advanced AI models.",
    icon: FaKey,
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
    <div className="flex h-screen bg-gray-900 text-white pt-16"> {/* Added pt-16 for navbar space */}
      {/* Left half - Feature cards */}
      <motion.div 
        className="w-1/2 p-8 overflow-y-auto items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl font-bold mb-4" variants={itemVariants}>
          Amplify Your Work with Jamin AI
        </motion.h1>
        <motion.p className="mb-8" variants={itemVariants}>
          Harness the power of AI to streamline your workflow, analyze documents, and gain insights from various content types.
        </motion.p>
        <motion.div className="grid grid-cols-2 gap-4" variants={containerVariants}>
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Right half - Login section */}
      <motion.div 
        className="w-1/2 p-8 flex items-center justify-center"
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