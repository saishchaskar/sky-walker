# RAG Application for "Luke Skywalker" Wikipedia Page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

This project implements a Retrieval-Augmented Generation (RAG) application using Python for backend processing, FAISS for vector similarity search, and React.js for the user interface. The main goal is to scrape the Wikipedia page of "Luke Skywalker," chunk the text, store it in a vector database, and use a Large Language Model (LLM) API to generate answers based on user queries.



## Features

**Web Scraping:**

Scraped the Wikipedia page for "Luke Skywalker" to extract relevant text.

**Text Chunking and Vector Storage:**

Chunked the scraped text into smaller, manageable pieces.
Stored these chunks in a FAISS (Facebook AI Similarity Search) vector database using the all-MiniLM-L6-v2 model for embedding.

**LLM API Integration:**

Integrated with a Large Language Model (LLM) API to generate answers based on user queries.


**Query Interface:**

Provided a React.js-based UI for users to input queries.
Used Postman or similar tools for testing API endpoints.

**Relevant Chunk Retrieval:**

Retrieved the top 3 relevant chunks from the vector database based on the user query.

**Answer Generation:**

Pass the user query along with the retrieved chunks to the LLM API to generate a comprehensive answer.
Displayed the generated answer in the user interface.

## Output Images
![Screenshot (205)](https://github.com/saishchaskar/sky-walker/assets/102912746/ab1e12f0-b14f-4050-a104-b6f0f1b63e7c)
![Screenshot (206)](https://github.com/saishchaskar/sky-walker/assets/102912746/cb21af93-38b2-4d5c-a3f3-d385d8603b9f)
![Screenshot (208)](https://github.com/saishchaskar/sky-walker/assets/102912746/e38c8eae-b5b3-4f8f-9ed8-997e7982e640)




### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

