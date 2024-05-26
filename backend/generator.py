from transformers import pipeline

def generate_answer(query, context_chunks):
    context = " ".join(context_chunks)
    generator = pipeline('text-generation', model='gpt-3.5-turbo')  # Replace with appropriate model
    response = generator(f"Question: {query}\nContext: {context}\nAnswer:")
    return response[0]['generated_text']
