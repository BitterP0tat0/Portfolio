"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      aria-label="Global"
      className="sticky top-0 z-[990] bg-gradient-to-b from-gray-400 to-slate-900 p-4 shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <motion.div
          className="flex items-center lg:flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <span className="sr-only">My Name</span>
          <img
            alt="MY LOGO"
            src="/image/Myself.webp"
            className="h-10 w-auto rounded-2xl hover:scale-110 transition-transform"
          />
        </motion.div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white focus:outline-none md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="material-icons">Menu</span>
        </button>

        <motion.div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-gray-700 p-4 md:static md:flex md:w-auto md:bg-transparent md:p-0 md:space-x-8 items-center justify-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8">
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-gray-300 hover:text-white font-semibold">
                Home
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/myself" className="text-gray-300 hover:text-white font-semibold">
                About
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <a href="/contact" className="text-gray-300 hover:text-white font-semibold">
                Contact
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
}