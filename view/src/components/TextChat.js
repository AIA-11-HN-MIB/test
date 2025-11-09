import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';
import { mockMessages } from '../data/mockData';
import websocketService from '../services/websocketService';
import { CONNECTION_STATUS } from '../services/config';
import toast from '../utils/toast';

function TextChat({ interviewId, wsUrl, onEvaluationReceived, onProgressUpdate }) {
  const [messages, setMessages] = useState(mockMessages);
  const [inputText, setInputText] = useState('');
  const [connectionStatus, setConnectionStatus] = useState(CONNECTION_STATUS.DISCONNECTED);
  const [currentProgress, setCurrentProgress] = useState({ index: 0, total: 0 });
  const messagesEndRef = useRef(null);
  const isInitialized = useRef(false);

  // Initialize WebSocket connection
  useEffect(() => {
    if (wsUrl && !isInitialized.current) {
      isInitialized.current = true;
      initializeWebSocket();
    }

    return () => {
      if (isInitialized.current) {
        websocketService.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wsUrl]);

  const initializeWebSocket = () => {
    try {
      // Register message handlers
      websocketService.onMessage('question', handleQuestionMessage);
      websocketService.onMessage('evaluation', handleEvaluationMessage);
      websocketService.onStatusChange(setConnectionStatus);

      // Connect
      websocketService.connect();
    } catch (error) {
      toast.error('Failed to connect to interview service');
      console.error('WebSocket initialization error:', error);
    }
  };

  const handleQuestionMessage = (message) => {
    const aiMessage = {
      id: Date.now(),
      text: message.text,
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'text',
      metadata: {
        questionId: message.question_id,
        questionType: message.question_type,
        difficulty: message.difficulty,
      },
    };

    setMessages(prev => [...prev, aiMessage]);

    // Update progress
    const progress = {
      index: message.index,
      total: message.total,
    };
    setCurrentProgress(progress);

    if (onProgressUpdate) {
      onProgressUpdate(progress);
    }
  };

  const handleEvaluationMessage = (evaluation) => {
    if (onEvaluationReceived) {
      onEvaluationReceived(evaluation);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Check connection
    if (connectionStatus !== CONNECTION_STATUS.CONNECTED) {
      toast.warning('Not connected to interview service');
      return;
    }

    try {
      // Add user message to UI
      const newMessage = {
        id: Date.now(),
        text: inputText,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text',
      };
      setMessages(prev => [...prev, newMessage]);
      setInputText('');

      // Send via WebSocket
      websocketService.sendUserAnswer(inputText);
    } catch (error) {
      toast.error('Failed to send message');
      console.error('Send message error:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderConnectionStatus = () => {
    if (connectionStatus === CONNECTION_STATUS.CONNECTED) return null;

    const statusMessages = {
      [CONNECTION_STATUS.DISCONNECTED]: 'Disconnected',
      [CONNECTION_STATUS.PLANNING]: 'Planning interview...',
      [CONNECTION_STATUS.CONNECTING]: 'Connecting...',
      [CONNECTION_STATUS.RECONNECTING]: 'Reconnecting...',
    };

    return (
      <div className={`connection-banner connection-${connectionStatus}`}>
        <span className="material-icons">info</span>
        <span>{statusMessages[connectionStatus]}</span>
      </div>
    );
  };

  const renderProgressBar = () => {
    if (currentProgress.total === 0) return null;

    return (
      <div className="progress-bar-container">
        <div className="progress-info">
          Question {currentProgress.index} of {currentProgress.total}
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(currentProgress.index / currentProgress.total) * 100}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="text-chat">
      {renderConnectionStatus()}
      {renderProgressBar()}

      {/* Messages Area */}
      <div className="messages-container">
        <div className="messages-list">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div>
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Write a response..."
            className="message-input"
            disabled={connectionStatus !== CONNECTION_STATUS.CONNECTED}
          />
          <button
            onClick={handleSendMessage}
            className="send-button"
            disabled={!inputText.trim() || connectionStatus !== CONNECTION_STATUS.CONNECTED}
          >
            <span className="material-icons">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextChat;
