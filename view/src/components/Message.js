import React from 'react';

function Message({ message }) {
  const isUser = message.sender === 'user';

  return (
    <div className={`message-wrapper ${isUser ? 'user-message' : 'ai-message'}`}>
      <div className={`message-bubble ${isUser ? 'user-bubble' : 'ai-bubble'}`}>
        <div className="message-text">{message.text}</div>
        <div className="message-timestamp">{message.timestamp}</div>
      </div>
      {!isUser && (
        <div className="message-actions">
          <div className="action-icon reply-icon">↻</div>
          <div className="action-icon profile-icon">👤</div>
        </div>
      )}
      {!isUser && (
        <div className="ai-indicator">✨</div>
      )}
    </div>
  );
}

export default Message;
