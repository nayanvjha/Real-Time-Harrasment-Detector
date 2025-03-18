import React, { useState } from 'react';
import WebcamAnalyzer from '../components/WebcamAnalyzer';
import LiveDashboard from '../components/LiveDashboard';

const DemoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analyzer' | 'dashboard'>('analyzer');

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-indigo-600 dark:bg-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              Live Demo
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-indigo-100">
              Experience our AI-powered harassment detection system in action.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-t-lg shadow-lg overflow-hidden">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('analyzer')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'analyzer'
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Computer Vision Demo
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'dashboard'
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Live Dashboard
            </button>
          </nav>
        </div>
      </div>

      {/* Demo Content */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'analyzer' ? (
            <div className="max-w-4xl mx-auto">
              <WebcamAnalyzer />
            </div>
          ) : (
            <LiveDashboard />
          )}
        </div>
      </section>
    </div>
  );
};

export default DemoPage;