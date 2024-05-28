from flask import Flask, request, jsonify
from flask_cors import CORS
from faiss_indexer import FaissIndexer
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.DEBUG)

indexer = FaissIndexer()
indexer.load_index()  # Ensure the index and model are loaded

@app.route('/ask', methods=['POST'])
def ask():
    try:
        data = request.get_json()
        query = data['query']
        top_chunks = indexer.retrieve_top_k(query)
        answer = top_chunks[0]  # Always return the top chunk as the answer
        return jsonify({'answer': answer})
    except Exception as e:
        app.logger.error(f"Error: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
