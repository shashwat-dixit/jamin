import { useSignup, useGithubLogin, useGoogleLogin } from "../hooks/authHooks"
import { Form, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import toast from "react-hot-toast";

export default function SignUp() {
  const signup = useSignup();
  const githubLogin = useGithubLogin();
  const googleLogin = useGoogleLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = {
      email: formData.get('email'),
      username: formData.get('username'),
      password: formData.get('password'),
    };

    try {
      await signup.mutateAsync(credentials);
      toast.success("Signed up successfully!")
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to signup!')
    }
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900'>
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 7V0H9V7H16V9H9V16H7V9H0V7H7Z' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E")`,
          backgroundSize: '16px 16px'
        }}
      />
      <motion.div
        className='w-full relative z-10 max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8'
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
          Create Account
        </motion.h2>
        <Form method='post' onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition duration-200 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-indigo-400"
              disabled={signup.isPending}
            />
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition duration-200 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-indigo-400"
              disabled={signup.isPending}
            />
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition duration-200 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-indigo-400"
              disabled={signup.isPending}
            />
          </motion.div>
          <motion.button
            className="w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-200"
            type="submit"
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={signup.isPending}
          >
            {signup.isPending ? "Creating Account ..." : "Sign Up"}
          </motion.button>
        </Form>

        <div className="mt-6 flex items-center justify-center">
          <span className="border-b w-1/5 md:w-1/4"></span>
          <p className="text-xs text-center text-gray-500 uppercase mx-4">or sign up with</p>
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
            onClick={() => githubLogin.mutate()}
            disabled={githubLogin.isPending}
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
            onClick={() => googleLogin.mutate()}
            disabled={googleLogin.isPending}
          >
            <FaGoogle className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with Google</span>
          </motion.button>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
              Sign in
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}