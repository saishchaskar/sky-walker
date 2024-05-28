import React, { useState } from 'react';
import axios from 'axios';

const QueryForm = ({ setAnswer }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/ask', { query });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md z-10 bg-opacity-80">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your question"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Ask</button>
    </form>
  );
};

export default QueryForm;
