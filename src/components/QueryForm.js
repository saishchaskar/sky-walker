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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your question"
      />
      <button type="submit">Ask</button>
    </form>
  );
};

export default QueryForm;
