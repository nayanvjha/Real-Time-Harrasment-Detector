import React from 'react';
import { ArrowRight, Shield, AlertTriangle, Zap } from 'lucide-react';
import HolographicScene from '../components/3D/HolographicScene';
import DataVisualizer from '../components/3D/DataVisualizer';
import GlowingButton from '../components/UI/GlowingButton';
import HolographicCard from '../components/UI/HolographicCard';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="flex flex-col min-h-screen bg-forensic-primary text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-forensic-cyan to-forensic-gold">
                AI-Powered Forensic Analysis System
              </h1>
              <p className="mt-6 text-xl text-forensic-muted">
                Advanced threat detection and behavioral analysis powered by cutting-edge artificial intelligence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <GlowingButton onClick={() => setCurrentPage('demo')} variant="primary">
                  Live Demo
                </GlowingButton>
                <GlowingButton onClick={() => setCurrentPage('about')} variant="secondary">
                  Learn More <ArrowRight className="inline-block ml-2" />
                </GlowingButton>
              </div>
            </div>
            <div className="relative">
              <HolographicScene />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forensic-cyan">
              Advanced Detection Features
            </h2>
            <p className="mt-4 text-xl text-forensic-muted">
              Real-time monitoring and analysis powered by AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HolographicCard className="p-6">
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-forensic-cyan mb-4" />
                <h3 className="text-xl font-bold text-forensic-cyan mb-2">
                  Threat Detection
                </h3>
                <p className="text-forensic-muted text-center">
                  Advanced AI algorithms detect potential threats in real-time
                </p>
              </div>
            </HolographicCard>

            <HolographicCard className="p-6">
              <div className="flex flex-col items-center">
                <AlertTriangle className="h-12 w-12 text-forensic-gold mb-4" />
                <h3 className="text-xl font-bold text-forensic-gold mb-2">
                  Behavioral Analysis
                </h3>
                <p className="text-forensic-muted text-center">
                  Deep learning models analyze patterns and predict potential risks
                </p>
              </div>
            </HolographicCard>

            <HolographicCard className="p-6">
              <div className="flex flex-col items-center">
                <Zap className="h-12 w-12 text-forensic-accent mb-4" />
                <h3 className="text-xl font-bold text-forensic-accent mb-2">
                  Instant Response
                </h3>
                <p className="text-forensic-muted text-center">
                  Automated alert system for immediate action
                </p>
              </div>
            </HolographicCard>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-16 bg-forensic-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-forensic-cyan mb-6">
                Real-Time Analysis
              </h2>
              <p className="text-forensic-muted mb-8">
                Watch our AI system process and analyze data in real-time, identifying potential threats and behavioral patterns.
              </p>
              <GlowingButton onClick={() => setCurrentPage('features')} variant="primary">
                Explore Features
              </GlowingButton>
            </div>
            <div className="relative">
              <DataVisualizer />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HolographicCard className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-forensic-cyan mb-4">
                Ready to enhance your security?
              </h2>
              <p className="text-forensic-muted mb-8">
                Join leading organizations using our AI-powered forensic analysis system.
              </p>
              <GlowingButton onClick={() => setCurrentPage('contact')} variant="primary">
                Get Started <ArrowRight className="inline-block ml-2" />
              </GlowingButton>
            </div>
          </HolographicCard>
        </div>
      </section>
    </div>
  );
};

export default HomePage;