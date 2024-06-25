import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Settings() {
  const [settings, setSettings] = useState({
    appearance: {
      theme: 'dark',
    },
    defaultAiModel: 'gpt-4',
    apiKeys: {
      'Anthropic': '',
      'OpenAI': ''
    }
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

  const handleApiKeyChange = (model, value) => {
    setSettings(prev => ({
      ...prev,
      apiKeys: {
        ...prev.apiKeys,
        [model]: value
      }
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
      className="min-h-screen bg-gray-900 text-gray-200 p-8 mt-14"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-xl mx-auto">
        <motion.h1 className="text-3xl font-bold mb-8 text-center" variants={itemVariants}>Settings</motion.h1>
      
        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-4">Appearance</h2>
          <div className="bg-gray-800 rounded-lg p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Theme</label>
              <select 
                value={settings.appearance.theme} 
                onChange={(e) => handleChange('appearance', 'theme', e.target.value)}
                className="w-full bg-gray-700 text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-4">Default AI Model</h2>
          <div className="bg-gray-800 rounded-lg p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">AI Model</label>
              <select 
                value={settings.defaultAiModel} 
                onChange={(e) => handleChange('defaultAiModel', e.target.value)}
                className="w-full bg-gray-700 text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="gpt-3.5">GPT-3.5</option>
                <option value="gpt-4">GPT-4</option>
                <option value="Cohere">Cohere</option>
                <option value="claude">Claude</option>
              </select>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-4">API Settings</h2>
          <div className="bg-gray-800 rounded-lg p-4 space-y-4">
            {Object.keys(settings.apiKeys).map((model) => (
              <div key={model}>
                <label className="block text-sm font-medium mb-1">{model} API Key</label>
                <input 
                  type="password" 
                  placeholder={'API Key'}
                  onChange={(e) => handleApiKeyChange(model, e.target.value)}
                  className="w-full bg-gray-700 text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div className="flex justify-center" variants={itemVariants}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Save Changes
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}