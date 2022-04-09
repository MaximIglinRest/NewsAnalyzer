import time

import requests
from bs4 import BeautifulSoup

from backend.lenta_parser.words_analyzer import split_text_to_words, count_words, get_only_nouns

start_url = "https://lenta.ru"
url = "https://lenta.ru/parts/news/"


def collect_news_titles(url: str, items: int):
    """
    This function for collect news titles with pagination from lenta.ru
    """
    titles = []
    for i in range(items // 20):
        time.sleep(0.2)
        if i > 0:
            if i == 1:
                url += "2"
            else:
                url = url.replace(str(i), str(i + 1))
        print(url)
        response = requests.get(url=url)
        parsed_response = BeautifulSoup(response.text, "lxml")
        titles += [title.text for title in parsed_response.find_all("h3", "card-full-news__title")]
    return titles


def collect_news_urls(url: str, items: int):
    """
    This function for collect all news_urls
    """
    news_urls = []
    for i in range(items // 20):
        time.sleep(0.2)
        if i > 0:
            if i == 1:
                url += "2"
            else:
                url = url.replace(str(i), str(i + 1))
        print(url)
        response = requests.get(url=url)
        parsed_response = BeautifulSoup(response.text, "lxml")
        news_urls += [
            start_url + title.attrs.get("href", url)
            for title in parsed_response.find_all("a", "card-full-news") if title.attrs.get("href", url).startswith("/")
        ]
    return news_urls


def collect_news_texts(news_links: list[str]):
    """
    This fucntion for collect news contents
    """
    content_texts = []
    for link in news_links:
        time.sleep(0.2)
        if link.startswith(start_url):
            response = requests.get(url=link)
            parsed_response = BeautifulSoup(response.text, "lxml")
            content_texts += [content.text for content in parsed_response.find_all("p", "topic-body__content-text")]
        else:
            continue
    return content_texts



start_time = time.monotonic()
news_links = collect_news_urls(url, 100)
news_texts = collect_news_texts(
    news_links
)
print("Time for requests", time.monotonic() - start_time)

start_time = time.monotonic()
text_words = split_text_to_words(news_texts)
print("Разбиение текста на слова: ", time.monotonic() - start_time)
start_time = time.monotonic()
normal_words = get_only_nouns(text_words)
print("Достаём существительные: ", time.monotonic() - start_time)
start_time = time.monotonic()
counter = count_words(normal_words, 100)
print("Считаем слова: ", time.monotonic() - start_time)
