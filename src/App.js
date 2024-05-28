import React, { useState } from 'react';
import QueryForm from './components/QueryForm';
import AnswerDisplay from './components/AnswerDisplay';

function App() {
  const [answer, setAnswer] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">RAG Application</h1>
      <QueryForm setAnswer={setAnswer} />
      <AnswerDisplay answer={answer} />
    </div>
  );
}

export default App;
