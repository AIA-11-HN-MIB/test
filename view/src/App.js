import React from 'react';
import InterviewPage from './interview/pages/InterviewPage';
import { InterviewProvider } from './interview/context/InterviewContext';

function App() {
  return (
    <InterviewProvider>
      <InterviewPage />
    </InterviewProvider>
  );
}

export default App;
