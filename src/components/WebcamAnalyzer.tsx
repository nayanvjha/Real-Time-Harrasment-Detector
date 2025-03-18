import React, { useState, useRef, useEffect } from 'react';
import { Camera, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface AnalysisResult {
  prediction: string;
  confidence: number;
  emotion: string;
  role: string;
}

const WebcamAnalyzer: React.FC = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Mock analysis function
  const mockAnalyzeFrame = async () => {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Generate mock results
    const mockResults: AnalysisResult = {
      prediction: Math.random() > 0.7 ? 'Harassment' : 'No Harassment',
      confidence: Math.random() * 0.5 + 0.5,
      emotion: ['anger', 'fear', 'neutral', 'surprise'][Math.floor(Math.random() * 4)],
      role: ['Perpetrator', 'Victim', 'None'][Math.floor(Math.random() * 3)]
    };

    return mockResults;
  };

  // Start webcam stream
  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsStreaming(true);
        setError(null);
      }
    } catch (err) {
      setError('Failed to access webcam. Please ensure you have granted camera permissions.');
      console.error('Error accessing webcam:', err);
    }
  };

  // Stop webcam stream
  const stopWebcam = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    setIsStreaming(false);
    setIsAnalyzing(false);
  };

  // Start analysis
  const startAnalysis = () => {
    if (!isStreaming) return;
    
    setIsAnalyzing(true);
    analyzeFrame();
  };

  // Stop analysis
  const stopAnalysis = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    setIsAnalyzing(false);
  };

  // Analyze current frame
  const analyzeFrame = async () => {
    if (!videoRef.current || !canvasRef.current || !isAnalyzing) return;
    
    try {
      const result = await mockAnalyzeFrame();
      setAnalysisResult(result);
      
      // If harassment is detected with high confidence, stop analysis
      if (result.prediction === 'Harassment' && result.confidence > 0.8) {
        stopAnalysis();
      } else {
        // Continue analyzing frames
        animationFrameRef.current = requestAnimationFrame(analyzeFrame);
      }
    } catch (err) {
      console.error('Error analyzing frame:', err);
      setError('Failed to analyze frame.');
      stopAnalysis();
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopWebcam();
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Real-Time Harassment Detection
        </h2>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900 dark:bg-opacity-20 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <X className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                  Error
                </h3>
                <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
            <video 
              ref={videoRef}
              className="w-full h-auto"
              autoPlay
              playsInline
              muted
              style={{ display: isStreaming ? 'block' : 'none' }}
            />
            
            {!isStreaming && (
              <div className="flex items-center justify-center h-64 bg-gray-200 dark:bg-gray-700">
                <Camera className="h-12 w-12 text-gray-400 dark:text-gray-500" />
              </div>
            )}
            
            <canvas 
              ref={canvasRef}
              className="hidden"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {!isStreaming ? (
            <button
              onClick={startWebcam}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Start Webcam
            </button>
          ) : (
            <button
              onClick={stopWebcam}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Stop Webcam
            </button>
          )}
          
          {isStreaming && !isAnalyzing && (
            <button
              onClick={startAnalysis}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Start Analysis
            </button>
          )}
          
          {isAnalyzing && (
            <button
              onClick={stopAnalysis}
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Stop Analysis
            </button>
          )}
        </div>
        
        {analysisResult && (
          <div className={`p-4 rounded-md ${
            analysisResult.prediction === 'Harassment' 
              ? 'bg-red-50 dark:bg-red-900 dark:bg-opacity-20' 
              : 'bg-green-50 dark:bg-green-900 dark:bg-opacity-20'
          }`}>
            <div className="flex">
              <div className="flex-shrink-0">
                {analysisResult.prediction === 'Harassment' ? (
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-400" />
                )}
              </div>
              <div className="ml-3">
                <h3 className={`text-sm font-medium ${
                  analysisResult.prediction === 'Harassment' 
                    ? 'text-red-800 dark:text-red-200' 
                    : 'text-green-800 dark:text-green-200'
                }`}>
                  {analysisResult.prediction}
                </h3>
                <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    <span className="font-medium">Confidence:</span> {Math.round(analysisResult.confidence * 100)}%
                  </p>
                  <p>
                    <span className="font-medium">Detected Emotion:</span> {analysisResult.emotion}
                  </p>
                  {analysisResult.role !== 'None' && (
                    <p>
                      <span className="font-medium">Detected Role:</span> {analysisResult.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            How It Works
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This demo simulates our AI-powered harassment detection system:
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Video frames from your webcam are analyzed in real-time</li>
            <li>AI models detect potential harassment based on visual cues</li>
            <li>Facial expression analysis identifies emotions</li>
            <li>The system can distinguish between perpetrator and victim roles</li>
            <li>All processing happens locally for privacy protection</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebcamAnalyzer;