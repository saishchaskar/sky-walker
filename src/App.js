import React, { useState } from 'react';
import QueryForm from './components/QueryForm';

const App = () => {
  const [answer, setAnswer] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-tr from-fuchsia-300 to-sky-500 flex flex-col justify-center">
      <section id="login" className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
        <div className="p-6 bg-sky-100 rounded">
          <div className="flex items-center justify-center font-black m-3 mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3 text-red-600 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <h1 className="tracking-wide text-3xl text-gray-900">RAG APPLICATION</h1>
          </div>
          <QueryForm setAnswer={setAnswer} />
          {answer && (
            <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
              <h2 className="text-lg font-semibold">Answer:</h2>
              <p>{answer}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
