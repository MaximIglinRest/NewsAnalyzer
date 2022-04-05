import time

import requests
from bs4 import BeautifulSoup

from backend.lenta_parser.words_analyzer import split_text_to_words, get_words_in_normal_form, count_words, \
    get_only_verbs

url = "https://lenta.ru/parts/news/"

def collect_news_titles(url: str, items: int):
    """
    This function for collect news titles with pagination from lenta.ru
    """
    titles = []
    for i in range(items // 20):
        if i > 0:
            time.sleep(0.5)  # sleep 2 seconds
            if i == 1:
                url += "2"
            else:
                url = url.replace(str(i), str(i + 1))
        print(url)
        response = requests.get(url=url)
        parsed_response = BeautifulSoup(response.text, "html")
        titles += [title.text for title in parsed_response.find_all("h3", "card-full-news__title")]
    return titles




titles = collect_news_titles(url, 400)
words = split_text_to_words(titles)
normal_words = get_words_in_normal_form(words)
verbs = get_only_verbs(words)

verbs_counter = count_words(verbs, 10)
counter_words = count_words(words, 10)
normal_words_count = count_words(normal_words, 10)

print("s")