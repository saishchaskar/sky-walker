from langchain.text_splitter import RecursiveCharacterTextSplitter

def chunk_text(text, chunk_size=600, chunk_overlap=50):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
    chunks = text_splitter.split_text(text)
    return chunks

if __name__ == "__main__":
    with open("luke_skywalker.txt", "r") as f:
        text = f.read()
    chunks = chunk_text(text)
    with open("chunks.txt", "w") as f:
        for chunk in chunks:
            f.write(chunk + "\n")
