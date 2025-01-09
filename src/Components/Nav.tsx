"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
  return (
    <motion.nav
      aria-label="Global"
      className="mx-auto flex max-w-100% items-center justify-between p-6 lg:px-8 bg-gradient-to-b from-gray-400 to-slate-900 sticky top-0 border-r-transparent z-[990]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex lg:flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <span className="sr-only">My Name</span>
        <img
          alt="MY LOGO"
          src="/image/Myself.webp"
          className="h-9 w-auto rounded-2xl hover:scale-110"
        />
      </motion.div>

      <motion.div
        className="hidden md:flex items-center justify-center flex-1 mx-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
      >
        <ul className="flex space-x-8">
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-gray-900 font-semibold">
              Home
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/myself" className="text-gray-900 font-semibold">
              About
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <a href="/contact" className="text-gray-900 font-semibold">
              Contact
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </motion.nav>
  );
}
