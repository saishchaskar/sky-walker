import React from 'react';

const AnswerDisplay = ({ answer }) => {
  return (
    <div className="w-full max-w-md bg-white p-8 mt-4 rounded-lg shadow-md z-10 bg-opacity-80">
      <h2 className="text-2xl font-bold mb-4">Answer</h2>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
};

export default AnswerDisplay;
