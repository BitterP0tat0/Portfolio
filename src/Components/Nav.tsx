'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PinContainer } from "./ui/3d-pin";
import Link from 'next/link';
export default function Nav() {
  return (<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5 left-0" >
        <span className="sr-only">Your Company</span>
        <img
          alt=""
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </a>
    </div>
    <div className="hidden md:flex items-center justify-center flex-1 mx-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-900 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-900 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Features
              </a>
            </li>
          </ul>
        </div></nav>)
}
