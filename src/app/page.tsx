"use client"

import nextConfig from '../../next.config.mjs'
import { links, LinkData } from '../../content/linkData';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaDiscord, FaGithub, FaTwitter, FaWeebly, FaSpotify } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';
import Image from 'next/image';

const iconMap = {
  "GitHub": FaGithub,
  "Discord": FaDiscord,
  "Twitter": FaTwitter,
  "Portfolio": FaWeebly,
  "Blog": MdMenuBook,
  "Playlist": FaSpotify,
}

export default function LinkedTree() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 flex flex-col items-center justify-center p-4 overflow-hidden">
    <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-center space-y-8 md:space-y-0 md:space-x-8 flex-grow">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/3 flex flex-col items-center justify-center"
      >
        <div className="w-40 h-40 rounded-full overflow-hidden mb-4 bg-white p-1">
          <Image
            src={`${nextConfig.basePath}/me.png`}
            alt="Profile"
            width={160}
            height={160}
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 text-center">Social Page List 🌐</h1>
        <p className="text-xl text-white opacity-80 text-center">Connect with me across my socials</p>
      </motion.div>
  
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full md:w-2/3 space-y-6 relative"
      >
        <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl -z-10"></div>
        <div className="p-6 space-y-6">
          {links.map((link: LinkData, index: number) => {
            const Icon = iconMap[link.name as keyof typeof iconMap] || FaWeebly;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="w-full h-auto py-4 text-left flex items-center bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 rounded-xl overflow-hidden group"
                    variant="ghost"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="relative">
                      <div className="flex items-center w-full">
                        <div className="bg-white bg-opacity-30 p-3 rounded-full mr-4 flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex flex-col flex-grow">
                          <span className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors duration-200">
                            {link.name}
                          </span>
                          <span className="text-sm text-white text-opacity-80 group-hover:text-blue-400 transition-colors duration-200">
                            {link.description}
                          </span>
                        </div>
                      </div>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full text-center text-white text-opacity-80 p-4 mt-auto"
    >
      <p className="text-sm">&copy; {new Date().getFullYear()} jmiccoDev. All rights reserved.</p>
    </motion.footer>
  </div> 
  );
}