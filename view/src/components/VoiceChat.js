import React, { useState } from 'react';
import { userProfile, aiProfile } from '../data/mockData';

function VoiceChat() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleMicClick = () => {
    setIsSpeaking(!isSpeaking);
    // Simulate speaking state for a few seconds
    if (!isSpeaking) {
      setTimeout(() => {
        setIsSpeaking(false);
      }, 3000);
    }
  };

  return (
    <div className="voice-chat">
      {/* Background decorations */}
      <div className="voice-background">
        <div className="decoration decoration-top-left">
          <div className="shelf">
            <div className="book"></div>
            <div className="book"></div>
            <div className="vase"></div>
          </div>
        </div>
        <div className="decoration decoration-mid-left">
          <div className="shelf">
            <div className="plant plant-red"></div>
            <div className="plant plant-cactus"></div>
            <div className="object"></div>
          </div>
        </div>
        <div className="decoration decoration-top-right">
          <div className="frame frame-large">
            <div className="artwork"></div>
          </div>
          <div className="frame frame-small">
            <div className="landscape"></div>
          </div>
          <div className="stickies">
            <div className="sticky sticky-smiley">😊</div>
            <div className="sticky sticky-eye">👁</div>
            <div className="sticky sticky-lines">☰</div>
          </div>
        </div>
        <div className="decoration decoration-bottom-left">
          <div className="monitor"></div>
          <div className="papers"></div>
        </div>
        <div className="decoration decoration-bottom-right">
          <div className="plant plant-large"></div>
          <div className="books-stack"></div>
          <div className="coffee-mug"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="voice-content">
        {/* Profile cards */}
        <div className="profile-cards">
          <div className="profile-card user-card">
            <div className="profile-avatar user-avatar">
              <div className="avatar-placeholder">👤</div>
            </div>
            <div className="profile-info">
              <div className="profile-name">{userProfile.name}</div>
              <div className="profile-role">{userProfile.role}</div>
            </div>
          </div>

          <div className="profile-card ai-card">
            <div className="profile-avatar ai-avatar">
              <div className="avatar-placeholder">⭐</div>
            </div>
            <div className="profile-info">
              <div className="profile-name">{aiProfile.name}</div>
              <div className="profile-role">{aiProfile.role}</div>
            </div>
          </div>
        </div>

        {/* Connection indicator */}
        <div className="connection-line"></div>

        {/* Instructions */}
        <div className="voice-instructions">
          Press the mic button to start speaking
        </div>

        {/* Voice indicators */}
        <div className="voice-indicators">
          <div className={`waveform ${isSpeaking ? 'active' : ''}`}>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoiceChat;
