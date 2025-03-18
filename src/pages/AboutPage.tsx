import React from 'react';
import { Brain, Shield, Eye, MessageSquare } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-indigo-600 dark:bg-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              About Our Technology
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-indigo-100">
              Understanding how AI-powered harassment detection works to create safer digital environments.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                The Challenge
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                Online harassment has become increasingly sophisticated and pervasive across digital platforms. Traditional keyword-based filtering systems fail to capture context, nuance, and evolving patterns of harmful behavior.
              </p>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                The challenge is to create systems that can understand context, detect subtle forms of harassment, and operate in real-time across text, images, and video content.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Solution
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                We've developed a multi-modal AI system that combines natural language processing, computer vision, and contextual analysis to detect harassment in real-time.
              </p>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                Our approach goes beyond simple pattern matching to understand intent, context, and cultural nuances, resulting in higher accuracy and fewer false positives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Our system employs multiple AI technologies working in concert to detect harassment.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-16">
              {/* NLP Section */}
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center justify-center h-20 w-20 rounded-md bg-indigo-500 text-white mx-auto lg:mx-0">
                    <Brain className="h-10 w-10" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white text-center lg:text-left">
                    Natural Language Processing
                  </h3>
                </div>
                <div className="mt-5 lg:mt-0 lg:col-span-2">
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Our advanced NLP models analyze text content to identify harassment patterns. The system goes beyond keyword matching to understand:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400">•</span>
                      <span className="ml-2">Contextual meaning and intent behind messages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400">•</span>
                      <span className="ml-2">Subtle forms of harassment that evade traditional filters</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400">•</span>
                      <span className="ml-2">Cross-language patterns and cultural nuances</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400">•</span>
                      <span className="ml-2">Evolving harassment tactics through continuous learning</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Computer Vision Section */}
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center justify-center h-20 w-20 rounded-md bg-indigo-500 text-white mx-auto lg:mx-0">
                    <Eye className="h-10 w-10" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white text-center lg:text-left">
                    Computer Vision
                  </h3>
                </div>
                <div className="mt-5 lg:mt-0 lg:col-span-2">
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Our computer vision algorithms analyze images and video content in real-time to detect visual forms of harassment:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400">•</span>
                      <span className="ml-2">Recognition of inappropriate imagery and gestures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400">•</span>
                      <span className="ml-2">Detection of manipulated or synthetic harmful content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400">•</span>
                      <span className="ml-2">Frame-by-frame analysis of video streams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400">•</span>
                      <span className="ml-2">Content classification with high accuracy and low latency</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contextual Analysis Section */}
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center justify-center h-20 w-20 rounded-md bg-indigo-500 text-white mx-auto lg:mx-0">
                    <MessageSquare className="h-10 w-10" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white text-center lg:text-left">
                    Contextual Analysis
                  </h3>
                </div>
                <div className="mt-5 lg:mt-0 lg:col-span-2">
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Our system understands the broader context in which communication occurs:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400">•</span>
                      <span className="ml-2">Analysis of conversation history and patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400">•</span>
                      <span className="ml-2">Understanding of platform-specific norms and behaviors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400">•</span>
                      <span className="ml-2">Recognition of targeted harassment campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400">•</span>
                      <span className="ml-2">Differentiation between friendly banter and actual harassment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Ethics Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Privacy & Ethics
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Our commitment to responsible AI development.
            </p>
          </div>

          <div className="mt-12 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="text-center">
                <Shield className="mx-auto h-12 w-12 text-indigo-500 dark:text-indigo-400" />
                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                  Our Ethical Framework
                </h3>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Privacy-First Design</h4>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Our system is designed to minimize data collection and storage. We process content in real-time without storing unnecessary personal information.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Transparency</h4>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    We're committed to explaining how our AI makes decisions and providing clear information about detection criteria.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Bias Mitigation</h4>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    We continuously work to identify and eliminate biases in our AI models through diverse training data and regular audits.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Human Oversight</h4>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    While our AI is highly accurate, we maintain human review processes for edge cases and continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;