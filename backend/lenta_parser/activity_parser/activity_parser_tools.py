from datetime import date, timedelta
import pandas as pd


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


def get_dates_for_week(days_ago: int) -> list:
    """
    This function for get one week dates
    """
    today = date.today()
    week_ago = today - timedelta(days=days_ago)
    date_range = (
        pd.date_range(min(today, week_ago), max(today, week_ago))
        .strftime("%Y/%m/%d")
        .tolist()
    )
    return date_range


def form_current_urls_for_daterange_parser(dates):
    date_range_urls = [f"https://lenta.ru/rubrics/world/{date}/page/" for date in dates]
    return date_range_urls
