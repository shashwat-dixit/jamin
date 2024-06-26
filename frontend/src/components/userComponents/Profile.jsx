import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Profile() {
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    joinDate: "January 15, 2024",
    plan: "Pro",
    usage: {
      messagesThisMonth: 1532,
      tokensUsed: 287654
    },
    preferences: {
      theme: "dark",
      language: "English",
      notifications: true
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handlePreferenceChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      preferences: {
        ...prevUser.preferences,
        [name]: type === 'checkbox' ? checked : value
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
      className="bg-gray-900 text-white p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto">
        <motion.h1 className="text-4xl font-bold mb-12 text-center" variants={itemVariants}>Your Profile</motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="bg-gray-800 rounded-lg p-8 shadow-lg" variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-6">Account Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={user.name} 
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={user.email} 
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p><span className="font-medium">Joined:</span> {user.joinDate}</p>
              <p><span className="font-medium">Current Plan:</span> {user.plan}</p>
            </div>
          </motion.div>

          <motion.div className="bg-gray-800 rounded-lg p-8 shadow-lg" variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-6">Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Theme</label>
                <select 
                  name="theme" 
                  value={user.preferences.theme} 
                  onChange={handlePreferenceChange}
                  disabled={!isEditing}
                  className="w-full bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Language</label>
                <select 
                  name="language" 
                  value={user.preferences.language} 
                  onChange={handlePreferenceChange}
                  disabled={!isEditing}
                  className="w-full bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  name="notifications" 
                  checked={user.preferences.notifications} 
                  onChange={handlePreferenceChange}
                  disabled={!isEditing}
                  className="mr-2"
                />
                <label>Enable Notifications</label>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-gray-800 rounded-lg p-8 shadow-lg" variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-6">Usage Statistics</h2>
            <p><span className="font-medium">Messages This Month:</span> {user.usage.messagesThisMonth}</p>
            <p><span className="font-medium">Tokens Used:</span> {user.usage.tokensUsed}</p>
          </motion.div>
        </div>

        <motion.div className="mt-12 flex justify-center space-x-4" variants={itemVariants}>
          <button 
            onClick={() => setIsEditing(!isEditing)} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Upgrade Plan
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}