import React from 'react';
import { Search, FileSearch, Database, Shield, Lock, FileText } from 'lucide-react';

const ForensicFeatures: React.FC = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-forensic-accent" />,
      title: "Incident Verification",
      description: "Advanced AI algorithms verify reported incidents through multi-modal analysis of video, audio, and behavioral patterns.",
      details: [
        "Real-time verification of reported incidents",
        "Multi-factor authentication of evidence",
        "Temporal analysis of event sequences",
        "Pattern matching with known harassment signatures"
      ]
    },
    {
      icon: <FileSearch className="h-8 w-8 text-forensic-accent" />,
      title: "Evidence Collection",
      description: "Automated collection and preservation of digital evidence following forensic best practices.",
      details: [
        "Secure evidence capture and storage",
        "Automated chain of custody tracking",
        "Metadata preservation",
        "Digital signature verification"
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-forensic-accent" />,
      title: "Behavioral Analysis",
      description: "Deep learning models analyze behavioral patterns to identify potential harassment scenarios.",
      details: [
        "Pattern recognition in user behavior",
        "Anomaly detection",
        "Historical behavior analysis",
        "Risk assessment profiling"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-forensic-accent" />,
      title: "Secure Evidence Management",
      description: "End-to-end encrypted storage and management of all collected evidence.",
      details: [
        "Encrypted storage solutions",
        "Access control mechanisms",
        "Audit trail logging",
        "Compliance with evidence handling standards"
      ]
    },
    {
      icon: <Lock className="h-8 w-8 text-forensic-accent" />,
      title: "Chain of Custody",
      description: "Automated tracking and verification of evidence handling throughout the investigation process.",
      details: [
        "Blockchain-based custody tracking",
        "Timestamped access logs",
        "Transfer verification",
        "Evidence integrity checks"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-forensic-accent" />,
      title: "Forensic Reporting",
      description: "Comprehensive report generation for law enforcement and legal proceedings.",
      details: [
        "Court-admissible report generation",
        "Statistical analysis",
        "Timeline reconstruction",
        "Expert testimony support"
      ]
    }
  ];

  return (
    <section className="py-16 bg-forensic-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-forensic-accent">
            Forensic Investigation Capabilities
          </h2>
          <p className="mt-4 text-xl text-forensic-muted">
            Advanced tools for digital forensics and evidence collection
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-forensic-secondary rounded-lg p-6 border border-forensic-accent/20 hover:border-forensic-accent/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-lg font-medium text-forensic-accent">
                  {feature.title}
                </h3>
              </div>
              <p className="text-forensic-muted mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-forensic-accent">•</span>
                    <span className="ml-2 text-sm text-forensic-muted">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForensicFeatures;