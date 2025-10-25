import React from 'react';
import { mockFeedback } from '../data/mockData';

function FeedbackModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="feedback-modal">
        <div className="modal-header">
          <h2>Session Feedback</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          {/* Overall Score */}
          <div className="score-section">
            <div className="overall-score">
              <div className="score-number">{mockFeedback.overallScore}</div>
              <div className="score-label">Overall Performance</div>
            </div>
          </div>

          {/* Category Scores */}
          <div className="categories-section">
            <h3>Performance Breakdown</h3>
            <div className="categories-grid">
              {mockFeedback.categories.map((category, index) => (
                <div key={index} className="category-card">
                  <div className="category-name">{category.name}</div>
                  <div className="category-score">{category.score}</div>
                  <div className="category-feedback">{category.feedback}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div className="strengths-section">
            <h3>Strengths</h3>
            <ul className="strengths-list">
              {mockFeedback.strengths.map((strength, index) => (
                <li key={index} className="strength-item">✓ {strength}</li>
              ))}
            </ul>
          </div>

          {/* Areas for Improvement */}
          <div className="improvement-section">
            <h3>Areas for Improvement</h3>
            <ul className="improvement-list">
              {mockFeedback.areasForImprovement.map((area, index) => (
                <li key={index} className="improvement-item">• {area}</li>
              ))}
            </ul>
          </div>

          {/* Next Steps */}
          <div className="next-steps-section">
            <h3>Recommended Next Steps</h3>
            <ul className="next-steps-list">
              {mockFeedback.nextSteps.map((step, index) => (
                <li key={index} className="next-step-item">→ {step}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="modal-footer">
          <button className="close-feedback-button" onClick={onClose}>
            Close Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackModal;
