import requests
from bs4 import BeautifulSoup

def scrape_wikipedia_page(page_title):
    url = f"https://en.wikipedia.org/wiki/{page_title}"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    content = soup.find_all('p')
    text = " ".join([p.get_text() for p in content])
    return text

if __name__ == "__main__":
    luke_skywalker_text = scrape_wikipedia_page("Luke_Skywalker")
    with open("luke_skywalker.txt", "w") as f:
        f.write(luke_skywalker_text)
