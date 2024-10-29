import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FeaturePage() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900'>
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 7V0H9V7H16V9H9V16H7V9H0V7H7Z' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E")`,
                    backgroundSize: '16px 16px'
                }}
            />
            <motion.h1
                className="text-5xl md:text-7xl font-extrabold mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Coming Soon
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                className="mt-8"
            >
                <Link
                    to="/signup"
                    className="px-8 py-3 bg-blue-500 text-white rounded-md sm:text-sm text-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                    Sign Up
                </Link>
            </motion.div>
        </div>
    );
}