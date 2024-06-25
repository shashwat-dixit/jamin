import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import Login from '../components/Login';

const Home = () => {
  const features = [
    {
      title: "File Upload",
      description: "Easily upload and manage your own files.",
      icon: "📁",
    },
    {
      title: "YouTube Queries",
      description: "Ask questions about YouTube videos.",
      icon: "🎥",
    },
    {
      title: "Multiple LLM Models",
      description: "Toggle between different language models.",
      icon: "🔄",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:min-h-[calc(100vh-6rem)]">
          {/* Left side - Features */}
          <motion.div 
            className="w-full md:w-1/2 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl font-bold mb-6 mt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Welcome to Jamin 🚀
            </motion.h1>
            <motion.p
              className="text-lg text-justify mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Jamin is your all-in-one AI assistant, designed to streamline your workflow and enhance productivity. With features like file management, video analysis, and access to multiple language models, Jamin empowers you to tackle complex tasks with ease. Experience the future of AI-assisted work today!
            </motion.p>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </motion.div>

          {/* Right side - Login */}
          <motion.div 
            className="w-full md:w-1/2 mt-12 md:mt-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Login />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;