import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
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
        className="text-8xl sm:text-9xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-3xl sm:text-4xl mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Page Not Found
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <Link
          to="/"
          className="px-8 py-3 bg-blue-500 text-white rounded-md text-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
        >
          Go Home
        </Link>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-[-1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: '1px',
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}