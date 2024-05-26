import faiss
from sentence_transformers import SentenceTransformer

class FaissIndexer:
    def __init__(self, model_name='all-MiniLM-L6-v2'):
        self.model = SentenceTransformer(model_name)
        self.index = None
        self.chunks = None

    def create_index(self, chunks):
        self.chunks = chunks
        embeddings = self.model.encode(chunks)
        dimension = embeddings.shape[1]
        self.index = faiss.IndexFlatL2(dimension)
        self.index.add(embeddings)

    def retrieve_top_k(self, query, k=3):
        query_embedding = self.model.encode([query])
        distances, indices = self.index.search(query_embedding, k)
        return [self.chunks[i] for i in indices[0]]

if __name__ == "__main__":
    with open("chunks.txt", "r") as f:
        chunks = f.readlines()
    chunks = [chunk.strip() for chunk in chunks]
    indexer = FaissIndexer()
    indexer.create_index(chunks)

    while True:
        query = input("Enter your query (type 'exit' to quit): ")
        if query.lower() == 'exit':
            break
        retrieved_chunks = indexer.retrieve_top_k(query)
        for i, chunk in enumerate(retrieved_chunks):
            print(f"Top {i+1} chunk: {chunk}")
