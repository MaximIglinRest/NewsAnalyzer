import re
import time
import typing

import pymorphy2
from collections import Counter

morph = pymorphy2.MorphAnalyzer(lang="ru")

def split_text_to_words(texts: list):
    """
    This function for collect list of news words and delete stop-words
    """
    text = ", ".join(texts)
    words = re.findall(r"(?u)\b\w\w+\b", text, flags=re.IGNORECASE)

    return (word for word in words if len(word) > 2)


def get_words_in_normal_form(words: typing.Iterable):
    """
    This function with Ml do word in normal form
    """
    words = (
        morph.parse(word)[0].normal_form for word in words if morph.parse(word)[0].tag.POS in {"INFN", "NOUN"}
    )
    return words


def get_only_verbs(words: typing.Iterable):
    """
    This function collect only verbs
    """
    words = get_words_in_normal_form(words)
    verbs = [
        word for word in words if morph.parse(word)[0].tag.POS == "INFN"
    ]
    return verbs


def get_only_nouns(words: typing.Iterable):
    """
    This function collect only verbs
    """
    start_time = time.monotonic()
    words = get_words_in_normal_form(words)
    print("Приводк начальной форме слова", time.monotonic() - start_time)
    start_time = time.monotonic()
    nouns = [
        word for word in words if morph.parse(word)[0].tag.POS == "NOUN"
    ]
    print("Формирование существительных", time.monotonic() - start_time)
    return nouns


def count_words(words: list, limit: int):
    """
    This function for count words
    """
    words_counter = Counter(words)
    most_common_words = words_counter.most_common(limit)
    return most_common_words