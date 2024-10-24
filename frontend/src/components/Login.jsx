import { Form, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const inputClasses = "w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition duration-200 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-indigo-400 dark:placeholder-gray-500";
const buttonClasses = "w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-200";

export default function Login() {
  return (
    <div className='flex flex-col justify-center items-center w-full max-w-md mx-auto px-4'>
      <motion.div
        className='w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Welcome back!
        </motion.h2>
        <Form method='post' className='flex flex-col space-y-4'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <input
              type="email"
              placeholder="Email address"
              className={inputClasses}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <input
              type="password"
              placeholder="Password"
              className={inputClasses}
            />
          </motion.div>
          <motion.button
            className={buttonClasses}
            type="submit"
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
        </Form>

        <div className="mt-6 flex items-center justify-between">
          <span className="border-b w-1/5 md:w-1/4"></span>
          <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">Forgot password?</Link>
          <span className="border-b w-1/5 md:w-1/4"></span>
        </div>

        <div className="flex flex-col mt-6 space-y-4">
          <motion.button
            className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGithub className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with GitHub</span>
          </motion.button>
          <motion.button
            className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGoogle className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with Google</span>
          </motion.button>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">New to our platform?</p>
          <Link
            className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            to="/signup"
          >
            Create Account
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}