import React from 'react';
import { Github, Twitter, Linkedin, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                AI-Shield
              </span>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-center md:text-right text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} AI-Shield. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            <span className="sr-only">Github</span>
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;