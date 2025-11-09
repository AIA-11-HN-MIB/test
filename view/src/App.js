import React, { useState } from 'react';
import TextChat from './components/TextChat';
import VoiceChat from './components/VoiceChat';
import TabControls from './components/TabControls';
import FeedbackModal from './components/FeedbackModal';
import apiService from './services/apiService';
import toast from './utils/toast';
import './styles/App.css';

function App() {
  const [activeTab, setActiveTab] = useState('text');
  const [showFeedback, setShowFeedback] = useState(false);

  // Interview state
  const [interviewId, setInterviewId] = useState(null);
  const [wsUrl, setWsUrl] = useState(null);
  const [evaluations, setEvaluations] = useState([]);
  const [currentProgress, setCurrentProgress] = useState({ index: 0, total: 0 });
  const [isStarting, setIsStarting] = useState(false);

  const handleStartInterview = async () => {
    setIsStarting(true);

    try {
      // Step 1: Plan interview
      const planResponse = await apiService.planInterview();
      const interviewId = planResponse.interview_id;
      setInterviewId(interviewId);

      toast.info('Planning your interview...');

      // Step 2: Poll planning status
      await apiService.pollPlanningStatus(interviewId, (status) => {
        console.log('Planning status:', status.status);
      });

      toast.success('Interview ready!');

      // Step 3: Start interview
      const startResponse = await apiService.startInterview(interviewId);
      setWsUrl(startResponse.ws_url);

    } catch (error) {
      console.error('Failed to start interview:', error);
      toast.error('Failed to start interview. Please try again.');
    } finally {
      setIsStarting(false);
    }
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handleEndSession = () => {
    setShowFeedback(true);
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
  };

  const handleEvaluationReceived = (evaluation) => {
    setEvaluations(prev => [...prev, evaluation]);
  };

  const handleProgressUpdate = (progress) => {
    setCurrentProgress(progress);
  };

  const renderStartButton = () => {
    if (interviewId) return null;

    return (
      <div className="start-interview-container">
        <div className="start-interview-card">
          <h2>Ready to Begin?</h2>
          <p>Click below to start your mock interview session</p>
          <button
            className="start-interview-button"
            onClick={handleStartInterview}
            disabled={isStarting}
          >
            {isStarting ? 'Starting...' : 'Start Interview'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <div className="app-container">
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <h1 className="header-title">Mock Interview Session</h1>
            <div className="info-icon material-icons">info</div>
          </div>
          <div className="header-right">
            {currentProgress.total > 0 && (
              <div className="header-progress">
                {currentProgress.index}/{currentProgress.total}
              </div>
            )}
            <div className="header-icons">
              <div className="icon settings-icon material-icons">settings</div>
              <div className="icon help-icon material-icons">help</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {!interviewId ? (
            renderStartButton()
          ) : activeTab === 'text' ? (
            <TextChat
              interviewId={interviewId}
              wsUrl={wsUrl}
              onEvaluationReceived={handleEvaluationReceived}
              onProgressUpdate={handleProgressUpdate}
            />
          ) : (
            <VoiceChat />
          )}
        </div>

        {/* Bottom Controls */}
        {interviewId && (
          <TabControls
            activeTab={activeTab}
            onTabSwitch={handleTabSwitch}
            onEndSession={handleEndSession}
          />
        )}
      </div>

      {/* Feedback Modal */}
      {showFeedback && (
        <FeedbackModal
          evaluations={evaluations}
          onClose={handleCloseFeedback}
        />
      )}
    </div>
  );
}

export default App;
