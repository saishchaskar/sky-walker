import React, { useState } from 'react';
import QueryForm from './components/QueryForm';
import AnswerDisplay from './components/AnswerDisplay';

function App() {
  const [answer, setAnswer] = useState('');

  return (
    <div className="App">
      <h1>RAG Application</h1>
      <QueryForm setAnswer={setAnswer} />
      <AnswerDisplay answer={answer} />
    </div>
  );
}

export default App;
