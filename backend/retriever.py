import faiss
from sentence_transformers import SentenceTransformer

def load_faiss_index():
    index = faiss.read_index("faiss_index.idx")
    model = SentenceTransformer('sentence_transformer_model')
    with open("chunks.txt", "r") as f:
        chunks = f.readlines()
    chunks = [chunk.strip() for chunk in chunks]
    return index, model, chunks

def retrieve_top_k(query, model, index, chunks, k=3):
    query_embedding = model.encode([query])
    distances, indices = index.search(query_embedding, k)
    results = [chunks[i] for i in indices[0]]
    return results
