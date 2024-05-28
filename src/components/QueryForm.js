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
    <form onSubmit={handleSubmit} className="flex flex-col justify-center">
      <div className="flex justify-between items-center mb-3">

      </div>
      <label className="text-sm font-medium">Ask Question</label>
      <input
        className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query"
      />

      <button className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300" type="submit">
        <span id="login_default_state">Submit</span>
      </button>
    </form>
  );
};

export default QueryForm;
