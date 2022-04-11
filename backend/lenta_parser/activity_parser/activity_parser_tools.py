from datetime import datetime

import requests
from bs4 import BeautifulSoup


def form_current_date_url(started_date):
    """
    funtion for form url for current_date
    """
    current_month = (
        started_date.month
        if len(str(started_date.month)) == 2
        else f"0{started_date.month}"
    )
    current_day = (
        started_date.day if len(str(started_date.day)) == 2 else f"0{started_date.day}"
    )
    current_url = f"https://lenta.ru/rubrics/world/{started_date.year}/{current_month}/{current_day}/page/"
    return current_url


def collect_news_times(url: str):
    news_time_items = []
    for i in range(1, 20):
        current_url = url + f"{i}"
        response = requests.get(current_url)
        if response.status_code == 404:
            break
        parsed_response = BeautifulSoup(response.text, "lxml")
        news_current_page_items = parsed_response.findAll("span", "time")
        if len(news_current_page_items) == 0:
            break
        news_time_items += [news_item.text for news_item in news_current_page_items]
    return news_time_items


def do_count_by_hours_parts(time_list: list):
    night_news_count = (
        morning_news_count
    ) = day_news_count = evening_news_count = late_evening_news_count = 0
    for time in time_list:
        hours = int(time.split(":")[0])
        if hours in set(range(6)):
            night_news_count += 1
        elif hours in set(range(6, 11)):
            morning_news_count += 1
        elif hours in set(range(11, 17)):
            day_news_count += 1
        elif hours in set(range(17, 22)):
            evening_news_count += 1
        else:
            late_evening_news_count += 1
    return (
        night_news_count,
        morning_news_count,
        day_news_count,
        evening_news_count,
        late_evening_news_count,
    )


def activity_lenta_parser(analyze_by: str, **kwargs):
    started_date = datetime(year=2022, day=1, month=4)
    url = form_current_date_url(started_date)

    if analyze_by == "by_day":
        news_time_items = collect_news_times(url)
        (
            night_count,
            morning_count,
            day_count,
            evening_count,
            late_evening_count,
        ) = do_count_by_hours_parts(news_time_items)
        analyzed_value = {
            "00:00 - 05:00": night_count,
            "06:00 - 10:00": morning_count,
            "11:00 - 16:00": day_count,
            "17:00 - 21:00": evening_count,
            "22:00 - 23:59": late_evening_count,
        }
        print(analyzed_value)
    return analyzed_value


print(activity_lenta_parser("by_day"))
