from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import base64
import json
import os
import time
from datetime import datetime
import threading
import queue

app = Flask(__name__)
CORS(app)

# In-memory storage for demo purposes
# In production, use a proper database
analysis_queue = queue.Queue()
analysis_results = []
active_sessions = {}

class AnalysisSession:
    def __init__(self, session_id):
        self.session_id = session_id
        self.start_time = datetime.now()
        self.frame_count = 0
        self.incidents = []
        self.status = "active"

def mock_emotion_analysis(frame_data):
    """Mock emotion analysis using facial features"""
    emotions = ['neutral', 'anger', 'fear', 'surprise']
    confidences = np.random.dirichlet(np.ones(len(emotions)))
    return dict(zip(emotions, confidences))

def mock_behavior_analysis(frame_data):
    """Mock behavioral analysis"""
    behaviors = {
        'aggressive_gestures': np.random.random(),
        'threatening_posture': np.random.random(),
        'proximity_violation': np.random.random()
    }
    return behaviors

def mock_harassment_prediction(frame_data):
    """Mock harassment prediction with realistic delay"""
    time.sleep(0.1)  # Simulate processing time
    
    # Generate mock analysis results
    emotion_data = mock_emotion_analysis(frame_data)
    behavior_data = mock_behavior_analysis(frame_data)
    
    # Calculate overall threat score
    threat_score = np.mean([
        max(emotion_data.values()),
        max(behavior_data.values())
    ])
    
    return {
        'timestamp': datetime.now().isoformat(),
        'prediction': 'Harassment' if threat_score > 0.7 else 'No Harassment',
        'confidence': float(threat_score),
        'emotion_analysis': emotion_data,
        'behavior_analysis': behavior_data,
        'risk_level': 'High' if threat_score > 0.7 else 'Medium' if threat_score > 0.4 else 'Low'
    }

@app.route('/api/status', methods=['GET'])
def get_status():
    """Check API status"""
    return jsonify({
        'status': 'online',
        'active_sessions': len(active_sessions),
        'processed_frames': sum(session.frame_count for session in active_sessions.values())
    })

@app.route('/api/session/start', methods=['POST'])
def start_session():
    """Start a new analysis session"""
    session_id = base64.urlsafe_b64encode(os.urandom(16)).decode('ascii')
    active_sessions[session_id] = AnalysisSession(session_id)
    
    return jsonify({
        'session_id': session_id,
        'status': 'started',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/session/<session_id>/end', methods=['POST'])
def end_session(session_id):
    """End an analysis session"""
    if session_id in active_sessions:
        session = active_sessions[session_id]
        session.status = "completed"
        session_summary = {
            'session_id': session_id,
            'duration': (datetime.now() - session.start_time).total_seconds(),
            'frames_processed': session.frame_count,
            'incidents_detected': len(session.incidents)
        }
        del active_sessions[session_id]
        return jsonify(session_summary)
    return jsonify({'error': 'Session not found'}), 404

@app.route('/api/analyze', methods=['POST'])
def analyze_frame():
    """Analyze a single frame for harassment detection"""
    if not request.json or 'image' not in request.json:
        return jsonify({'error': 'No image data provided'}), 400
    
    session_id = request.json.get('session_id')
    if session_id and session_id not in active_sessions:
        return jsonify({'error': 'Invalid session ID'}), 400
    
    try:
        # Get the base64 encoded image
        image_data = request.json['image'].split(',')[1]
        
        # Decode the image
        nparr = np.frombuffer(base64.b64decode(image_data), np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        
        # Process the frame
        result = mock_harassment_prediction(frame)
        
        # Update session if available
        if session_id:
            session = active_sessions[session_id]
            session.frame_count += 1
            if result['prediction'] == 'Harassment':
                session.incidents.append(result)
        
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/metrics', methods=['GET'])
def get_metrics():
    """Get system metrics and statistics"""
    total_incidents = sum(len(session.incidents) for session in active_sessions.values())
    total_frames = sum(session.frame_count for session in active_sessions.values())
    
    return jsonify({
        'active_sessions': len(active_sessions),
        'total_frames_processed': total_frames,
        'total_incidents_detected': total_incidents,
        'average_processing_time': 0.1,  # Mock value
        'system_load': {
            'cpu': np.random.uniform(20, 80),
            'memory': np.random.uniform(30, 70),
            'gpu': np.random.uniform(10, 90)
        }
    })

@app.route('/api/incidents', methods=['GET'])
def get_incidents():
    """Get recent incidents"""
    all_incidents = []
    for session in active_sessions.values():
        all_incidents.extend(session.incidents)
    
    # Sort by timestamp and return most recent first
    sorted_incidents = sorted(all_incidents, 
                            key=lambda x: x['timestamp'],
                            reverse=True)
    
    return jsonify({
        'total': len(sorted_incidents),
        'incidents': sorted_incidents[:100]  # Return last 100 incidents
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)