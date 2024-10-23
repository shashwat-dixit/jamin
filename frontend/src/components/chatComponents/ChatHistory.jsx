import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function ChatHistory() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To get current location
  const [activeChat, setActiveChat] = useState(null);

  const chatData = [
    { id: 1, title: "Web Development Basics", preview: "Can you explain the fundamentals of web development?" },
    { id: 2, title: "Python Data Analysis", preview: "How can I use Python for data analysis?" },
  ];

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const toggleButtonVariants = {
    open: { x: 256 },
    closed: { x: 0 },
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-14 left-0 h-[calc(100vh-3.5rem)] md:w-64 bg-gray-900 bg-opacity-95 overflow-auto"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ul className="p-2 space-y-2">
              {chatData.map((chat, index) => (
                <motion.li
                  key={chat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={`/chat/${chat.id}`}
                    onClick={() => setActiveChat(chat.id)}
                    className={`block p-3 rounded-lg transition-all duration-200 shadow-sm
                      ${activeChat === chat.id
                        ? 'bg-gradient-to-br from-gray-800 to-indigo-800 text-white shadow-lg'
                        : 'bg-gray-800 bg-opacity-50 hover:bg-gradient-to-br hover:from-gray-800 hover:to-indigo-900 text-gray-200'
                      }`}
                  >
                    <h3 className={`font-medium mb-1 truncate
                      ${activeChat === chat.id ? 'text-white' : 'text-gray-200'}`}>
                      {chat.title}
                    </h3>
                    <p className={`text-sm truncate
                      ${activeChat === chat.id ? 'text-gray-200' : 'text-gray-400'}`}>
                      {chat.preview}
                    </p>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="fixed top-16 left-0 z-10 p-2 bg-gradient-to-br from-gray-900 to-indigo-900 text-white rounded-r-md shadow-md hover:from-gray-800 hover:to-indigo-800"
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