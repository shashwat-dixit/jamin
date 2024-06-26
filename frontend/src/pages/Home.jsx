import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import Login from '../components/Login';
import { FaYoutube } from "react-icons/fa6";

const features = [
  {
    title: "PDF Intelligence",
    description: "Ask questions about your PDFs and get accurate answers using LLMs.",
    icon: "📄",
  },
  {
    title: "Video Intelligence",
    description: "Extract insights and answer questions about any YouTube video.",
    icon: <FaYoutube />,
  },
  {
    title: "Multi-Model AI",
    description: "Leverage various AI models for diverse tasks and perspectives.",
    icon: "🧠",
  },
  {
    title: "Premium Model Access",
    description: "Enter API keys for advanced models like GPT-4 or Claude.",
    icon: "🔑",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-[calc(100vh-6rem)]">
          <motion.div
            className="w-full lg:w-1/2 lg:pr-12"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl font-extrabold mb-6 md:mt-9 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Elevate Your Workflow with Jamin
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Jamin AI is your cutting-edge assistant, seamlessly integrating advanced file management, video analysis, and multi-model AI capabilities. Experience a new level of productivity and insight in your daily tasks.
            </motion.p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  {...feature}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 mt-12 lg:mt-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Login />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;