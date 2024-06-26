import { Form, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login() {
  return (
    <div className='flex flex-col justify-center items-center w-full sm:w-1/2 px-4'>
      <motion.div
        className='w-full max-w-md rounded-xl bg-transparent shadow-2xl p-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Welcome Back
        </motion.h2>
        <Form method='post' className='flex flex-col space-y-4'>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-gray-200 focus:border-purple-500 focus:bg-white focus:outline-none transition duration-200 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-purple-400"
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 absolute right-3 top-3 text-gray-400"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-gray-200 focus:border-purple-500 focus:bg-white focus:outline-none transition duration-200 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-purple-400"
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 absolute right-3 top-3 text-gray-400"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          </motion.div>
          <motion.button
            className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition duration-200"
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
        </Form>
        
        <div className="mt-6 flex items-center justify-center">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <p className="text-xs text-center text-gray-500 uppercase mx-4">or login with</p>
          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>
        
        <div className="flex justify-center mt-4 space-x-4">
          <motion.button
            className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-300 rounded-md group hover:bg-blue-500 focus:outline-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span>
              <svg className="w-5 h-5 text-gray-800 fill-current group-hover:text-white" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </span>
            <span className="text-sm font-medium text-gray-800 group-hover:text-white">GitHub</span>
          </motion.button>
          <motion.button
            className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-300 rounded-md group hover:bg-blue-500 focus:outline-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span>
              <svg className="w-5 h-5 text-gray-800 fill-current group-hover:text-white" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/></svg>
            </span>
            <span className="text-sm font-medium text-gray-800 group-hover:text-white">Google</span>
          </motion.button>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">New to our AI platform?</p>
          <Link
            className="btn px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            to="/signup"
          >
            Create Account
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
