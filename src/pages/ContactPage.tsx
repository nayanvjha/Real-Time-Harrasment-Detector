import React, { useState } from 'react';
import { Send, Shield, FileText, Users, Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        organization: '',
        role: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-forensic-primary">
      {/* Header Section */}
      <section className="bg-forensic-secondary border-b border-forensic-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-forensic-accent">
              Contact Our Team
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-forensic-muted">
              Collaborate with law enforcement and forensic researchers
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-2xl font-extrabold text-forensic-accent mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6 text-forensic-muted">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-forensic-accent" />
                  <div className="ml-3">
                    <p className="text-forensic-accent">Email</p>
                    <p>nayan.btmtcs4232836@nfsu.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-forensic-accent" />
                  <div className="ml-3">
                    <p className="text-forensic-accent">Phone</p>
                    <p>+91 8306581102</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-forensic-accent" />
                  <div className="ml-3">
                    <p className="text-forensic-accent">Address</p>
                    <p>Digital Forensics Division</p>
                    <p> Cyber Security Blvd</p>
                    <p>NFSU TRIPURA CAMPUS, RADHANAGAR , AGARTALA ,799006</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-medium text-forensic-accent mb-4">
                  Collaboration Opportunities
                </h3>
                <div className="space-y-4">
                  <div className="bg-forensic-secondary p-4 rounded-lg border border-forensic-accent/20">
                    <Shield className="h-6 w-6 text-forensic-accent mb-2" />
                    <h4 className="text-forensic-accent font-medium">Law Enforcement</h4>
                    <p className="text-forensic-muted text-sm mt-1">
                      Special access and training for law enforcement agencies
                    </p>
                  </div>
                  <div className="bg-forensic-secondary p-4 rounded-lg border border-forensic-accent/20">
                    <FileText className="h-6 w-6 text-forensic-accent mb-2" />
                    <h4 className="text-forensic-accent font-medium">Research Institutions</h4>
                    <p className="text-forensic-muted text-sm mt-1">
                      Collaborate on forensic research and development
                    </p>
                  </div>
                  <div className="bg-forensic-secondary p-4 rounded-lg border border-forensic-accent/20">
                    <Users className="h-6 w-6 text-forensic-accent mb-2" />
                    <h4 className="text-forensic-accent font-medium">Security Teams</h4>
                    <p className="text-forensic-muted text-sm mt-1">
                      Enterprise solutions for security professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="bg-forensic-secondary rounded-lg border border-forensic-accent/20 overflow-hidden">
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-forensic-accent">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="mt-1 block w-full bg-forensic-primary border border-forensic-accent/30 rounded-md shadow-sm text-forensic-muted"
                          value={formState.name}
                          onChange={handleChange}
                          disabled={formStatus === 'submitting'}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-forensic-accent">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="mt-1 block w-full bg-forensic-primary border border-forensic-accent/30 rounded-md shadow-sm text-forensic-muted"
                          value={formState.email}
                          onChange={handleChange}
                          disabled={formStatus === 'submitting'}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-forensic-accent">
                          Organization
                        </label>
                        <input
                          id="organization"
                          name="organization"
                          type="text"
                          required
                          className="mt-1 block w-full bg-forensic-primary border border-forensic-accent/30 rounded-md shadow-sm text-forensic-muted"
                          value={formState.organization}
                          onChange={handleChange}
                          disabled={formStatus === 'submitting'}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-forensic-accent">
                          Role
                        </label>
                        <select
                          id="role"
                          name="role"
                          required
                          className="mt-1 block w-full bg-forensic-primary border border-forensic-accent/30 rounded-md shadow-sm text-forensic-muted"
                          value={formState.role}
                          onChange={handleChange}
                          disabled={formStatus === 'submitting'}
                        >
                          <option value="">Select role</option>
                          <option value="law_enforcement">Law Enforcement</option>
                          <option value="researcher">Forensic Researcher</option>
                          <option value="security">Security Professional</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-forensic-accent">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="mt-1 block w-full bg-forensic-primary border border-forensic-accent/30 rounded-md shadow-sm text-forensic-muted"
                        value={formState.subject}
                        onChange={handleChange}
                        disabled={formStatus === 'submitting'}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-forensic-accent">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="mt-1 block w-full bg-forensic-primary border border-forensic-accent/30 rounded-md shadow-sm text-forensic-muted"
                        value={formState.message}
                        onChange={handleChange}
                        disabled={formStatus === 'submitting'}
                      />
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting' || formStatus === 'success'}
                        className={`w-full flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-forensic-primary bg-forensic-accent hover:bg-forensic-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forensic-accent transition-colors ${
                          (formStatus === 'submitting' || formStatus === 'success') && 'opacity-50 cursor-not-allowed'
                        }`}
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : formStatus === 'success' ? (
                          'Message Sent!'
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                    
                    {formStatus === 'success' && (
                      <div className="rounded-md bg-green-900 bg-opacity-20 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-forensic-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-forensic-accent">
                              Thank you for your message! Our team will contact you shortly.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {formStatus === 'error' && (
                      <div className="rounded-md bg-red-900 bg-opacity-20 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-red-400">
                              There was an error sending your message. Please try again.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;