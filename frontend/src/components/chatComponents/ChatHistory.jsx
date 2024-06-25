import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Link} from 'react-router-dom'

export default function ChatHistory() {
  const [isOpen, setIsOpen] = useState(false);

  const chatData = [
    { title: "Web Development Basics", preview: "Can you explain the fundamentals of web development?" },
    { title: "Python Data Analysis", preview: "How can I use Python for data analysis?" },
    { title: "AI Ethics Discussion", preview: "What are the main ethical concerns in AI development?" },
    { title: "JavaScript Frameworks", preview: "Can you compare React, Vue, and Angular?" },
    { title: "Machine Learning Intro", preview: "What's a good starting point for learning about machine learning?" },
    { title: "Cybersecurity Best Practices", preview: "What are some essential cybersecurity practices for businesses?" },
    { title: "Cloud Computing Services", preview: "How do AWS, Azure, and Google Cloud compare?" },
    { title: "Mobile App Development", preview: "What are the pros and cons of native vs. cross-platform development?" },
  ];

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const toggleButtonVariants = {
    open: { x: 256 }, // 16rem = 256px
    closed: { x: 0 },
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-64 bg-gray-50 overflow-auto"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ul className="p-2 space-y-2">
              {chatData.map((chat, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to='/chat' className="block p-3 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                    <h3 className="font-medium text-gray-800 mb-1 truncate">{chat.title}</h3>
                    <p className="text-sm text-gray-500 truncate">{chat.preview}</p>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="fixed top-16 left-0 z-10 p-2 bg-gray-800 text-white rounded-r-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        variants={toggleButtonVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {isOpen ? "◀" : "▶"}
      </motion.button>
    </>
  );
}