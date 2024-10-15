import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simulating authentication check
  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await new Promise(resolve => setTimeout(() => resolve(true), 1000));
      setIsAuthenticated(authStatus);
    };
    checkAuth();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-base-300 z-50 px-4 py-2 md:px-6"
    >
      <div className="flex items-center justify-between">
        {isAuthenticated ? (
          <>
            <div className="flex items-center md:w-1/3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn btn-square btn-ghost md:hidden"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </motion.button>
            </div>
            <div className="flex-1 flex justify-center">
              <Link to="/chat" className="btn btn-ghost text-2xl text-white">Jamin AI</Link>
            </div>
            <div className="hidden md:flex items-center justify-end space-x-4 md:w-1/3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative form-control"
              >
                <input type="text" placeholder="Search" className="input input-bordered w-full md:w-auto" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                  <kbd className="kbd kbd-sm">ctrl</kbd> + <kbd className="kbd kbd-sm">k</kbd>
                </div>
              </motion.div>
              <div className="dropdown dropdown-end">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                  </svg>
                </motion.div>
                <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                  <li><Link to="/chat/settings">Settings</Link></li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/" className="btn btn-ghost text-2xl text-white">Jamin AI</Link>
            </motion.div>
          </div>
        )}
      </div>
      {isAuthenticated && isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-2"
        >
          <input type="text" placeholder="Search" className="input input-bordered w-full mb-2" />
          <ul className="menu bg-base-100 w-full rounded-box">
            <li><Link to="/chat/settings">Settings</Link></li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}