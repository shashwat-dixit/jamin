import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Settings() {
  const [settings, setSettings] = useState({
    appearance: {
      theme: 'dark',
      fontSize: 'medium',
      messageSpacing: 'comfortable'
    },
    privacy: {
      saveConversations: true,
      shareDataForImprovement: false
    },
    notifications: {
      email: true,
      desktop: false,
      updates: true
    },
    language: 'english',
    aiModel: 'gpt-4',
    apiKey: '••••••••••••••••'
  });

  const handleChange = (section, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [setting]: value
      }
    }));
  };

  const handleSimpleChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-white p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-xl mx-auto">
        <motion.h1 className="text-4xl font-bold my-12 text-center" variants={itemVariants}>Settings</motion.h1>
      
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Appearance</h2>
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Theme</label>
              <select 
                value={settings.appearance.theme} 
                onChange={(e) => handleChange('appearance', 'theme', e.target.value)}
                className="w-full bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Default AI Model</h2>
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">AI Model</label>
              <select 
                value={settings.aiModel} 
                onChange={(e) => handleSimpleChange('aiModel', e.target.value)}
                className="w-full bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="gpt-3.5">GPT-3.5</option>
                <option value="gpt-4">GPT-4</option>
                <option value="claude-2">Claude 2</option>
              </select>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">API Settings</h2>
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">API Key</label>
              <input 
                type="password" 
                placeholder='API Key'
                onChange={(e) => handleSimpleChange('apiKey', e.target.value)}
                className="w-full bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </motion.section>

        <motion.div className="flex justify-center" variants={itemVariants}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Save Changes
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}