import React, { useState } from 'react';
import TextChat from './components/TextChat';
import VoiceChat from './components/VoiceChat';
import TabControls from './components/TabControls';
import FeedbackModal from './components/FeedbackModal';
import './styles/App.css';

function App() {
  const [activeTab, setActiveTab] = useState('text'); // 'text' or 'voice'
  const [showFeedback, setShowFeedback] = useState(false);
  const [sessionEnded, setSessionEnded] = useState(false);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handleEndSession = () => {
    setShowFeedback(true);
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
    setSessionEnded(true);
  };

  return (
    <div className="app">
      <div className="app-container">
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <h1 className="header-title">Give constructive feedback to a high performer</h1>
            <div className="info-icon material-icons">info</div>
          </div>
          <div className="header-right">
            <div className="timer">01:19</div>
            <div className="header-icons">
              <div className="icon settings-icon material-icons">settings</div>
              <div className="icon help-icon material-icons">help</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {activeTab === 'text' ? (
            <TextChat />
          ) : (
            <VoiceChat />
          )}
        </div>

        {/* Bottom Controls */}
        <TabControls
          activeTab={activeTab}
          onTabSwitch={handleTabSwitch}
          onEndSession={handleEndSession}
        />
      </div>

      {/* Feedback Modal */}
      {showFeedback && (
        <FeedbackModal onClose={handleCloseFeedback} />
      )}
    </div>
  );
}

export default App;