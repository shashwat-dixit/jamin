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
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl font-bold mb-12 text-center" variants={itemVariants}>Settings</motion.h1>
        
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
            <div>
              <label className="block text-sm font-medium mb-1">Font Size</label>
              <select 
                value={settings.appearance.fontSize} 
                onChange={(e) => handleChange('appearance', 'fontSize', e.target.value)}
                className="w-full bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message Spacing</label>
              <select 
                value={settings.appearance.messageSpacing} 
                onChange={(e) => handleChange('appearance', 'messageSpacing', e.target.value)}
                className="w-full bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="compact">Compact</option>
                <option value="comfortable">Comfortable</option>
                <option value="spacious">Spacious</option>
              </select>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span>Save Conversations</span>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.privacy.saveConversations}
                  onChange={(e) => handleChange('privacy', 'saveConversations', e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span>Share Data for Improvement</span>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.privacy.shareDataForImprovement}
                  onChange={(e) => handleChange('privacy', 'shareDataForImprovement', e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.notifications.email}
                  onChange={(e) => handleChange('notifications', 'email', e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span>Desktop Notifications</span>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.notifications.desktop}
                  onChange={(e) => handleChange('notifications', 'desktop', e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span>Product Updates</span>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.notifications.updates}
                  onChange={(e) => handleChange('notifications', 'updates', e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Language and AI Model</h2>
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Language</label>
              <select 
                value={settings.language} 
                onChange={(e) => handleSimpleChange('language', e.target.value)}
                className="w-full bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </select>
            </div>
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
                value={settings.apiKey}
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