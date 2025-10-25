import React from 'react';

function TabControls({ activeTab, onTabSwitch, onEndSession }) {
  return (
    <div className="tab-controls">
      <div className="control-buttons">
        {/* Microphone button - changes based on active tab */}
        {activeTab === 'voice' ? (
          <button
            className="control-button mic-button active-prominent"
            onClick={() => onTabSwitch('voice')}
          >
            <div className="mic-icon">🎤</div>
            <span className="button-text">Speak</span>
          </button>
        ) : (
          <button
            className="control-button mic-button-icon"
            onClick={() => onTabSwitch('voice')}
          >
            <div className="mic-icon">🎤</div>
          </button>
        )}

        {/* Write button - changes based on active tab */}
        {activeTab === 'text' ? (
          <button
            className="control-button write-button active-prominent"
            onClick={() => onTabSwitch('text')}
          >
            <div className="write-icon">✏</div>
            <span className="button-text">Write</span>
          </button>
        ) : (
          <button
            className="control-button write-button-icon"
            onClick={() => onTabSwitch('text')}
          >
            <div className="write-icon">✏</div>
          </button>
        )}

        {/* End session button */}
        <button
          className="control-button end-button"
          onClick={onEndSession}
        >
          End session
        </button>
      </div>
    </div>
  );
}

export default TabControls;
