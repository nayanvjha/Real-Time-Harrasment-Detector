import React from 'react';
import { MessageSquare, Image, Bell, BarChart, Lock, Zap, RefreshCw, Users } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: "NLP-Based Text Analysis",
      description: "Advanced natural language processing algorithms detect harassment in text across multiple languages and contexts.",
      details: [
        "Contextual understanding of messages",
        "Multi-language support",
        "Detection of subtle harassment patterns",
        "Continuous learning from new data"
      ]
    },
    {
      icon: <Image className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Real-Time Image/Video Monitoring",
      description: "Computer vision technology that analyzes visual content to identify inappropriate imagery and gestures.",
      details: [
        "Frame-by-frame video analysis",
        "Recognition of inappropriate content",
        "Low-latency processing",
        "Support for multiple video formats"
      ]
    },
    {
      icon: <Bell className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Alert Mechanisms",
      description: "Customizable notification system that alerts moderators and administrators when potential harassment is detected.",
      details: [
        "Real-time notifications",
        "Multiple delivery channels (email, SMS, in-app)",
        "Severity classification",
        "Actionable alert information"
      ]
    },
    {
      icon: <BarChart className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting tools to track harassment patterns and measure the effectiveness of prevention efforts.",
      details: [
        "Trend analysis and visualization",
        "Custom report generation",
        "Historical data comparison",
        "Exportable insights"
      ]
    },
    {
      icon: <Lock className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Privacy-Preserving Design",
      description: "Built with privacy at its core, minimizing data collection while maximizing protection capabilities.",
      details: [
        "Minimal data storage",
        "End-to-end encryption",
        "Compliance with privacy regulations",
        "User consent management"
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: "High-Performance Architecture",
      description: "Optimized for speed and scalability to handle high-volume content streams without compromising accuracy.",
      details: [
        "Low-latency processing",
        "Horizontal scalability",
        "Load balancing",
        "Fault tolerance"
      ]
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Continuous Learning",
      description: "Self-improving system that adapts to new harassment tactics and evolving online language.",
      details: [
        "Feedback loop integration",
        "Model retraining capabilities",
        "Adaptation to emerging patterns",
        "Performance monitoring"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Multi-Platform Integration",
      description: "Flexible APIs and SDKs that allow seamless integration with various digital platforms and communication channels.",
      details: [
        "REST API access",
        "WebSocket support for real-time applications",
        "SDK for major platforms",
        "Custom integration options"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-indigo-600 dark:bg-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              Key Features
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-indigo-100">
              Explore the powerful capabilities of our AI-powered harassment detection system.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 text-indigo-500 dark:text-indigo-400">•</span>
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Demo Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              See It In Action
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Interactive demonstrations of our key features.
            </p>
          </div>

          <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Interactive demo visualization would appear here</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Real-Time Detection Visualization
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  This interactive demonstration shows how our system processes and analyzes content in real-time, highlighting potential issues as they're detected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Technical Specifications
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Under the hood of our AI-powered system.
            </p>
          </div>

          <div className="mt-12 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Performance</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Processing Latency</span>
                      <span className="font-medium text-gray-900 dark:text-white">&lt; 100ms</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Accuracy Rate</span>
                      <span className="font-medium text-gray-900 dark:text-white">97.8%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">False Positive Rate</span>
                      <span className="font-medium text-gray-900 dark:text-white">&lt; 2%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Throughput</span>
                      <span className="font-medium text-gray-900 dark:text-white">10,000+ items/sec</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Compatibility</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Supported Languages</span>
                      <span className="font-medium text-gray-900 dark:text-white">40+</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Image Formats</span>
                      <span className="font-medium text-gray-900 dark:text-white">All major formats</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Video Formats</span>
                      <span className="font-medium text-gray-900 dark:text-white">MP4, WebM, AVI, etc.</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">API Integration</span>
                      <span className="font-medium text-gray-900 dark:text-white">REST, WebSocket</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;