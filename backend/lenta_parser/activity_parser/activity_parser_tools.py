from datetime import datetime

def form_current_date_url(started_date):
    """
    funtion for form url for current_date
    """
    current_month = started_date.month if len(str(started_date.month)) == 2 else f"0{started_date.month}"
    current_day = started_date.day if len(str(started_date.day)) == 2 else f"0{started_date.day}"
    current_url = f"https://lenta.ru/rubrics/world/{started_date.year}/{current_month}/{current_day}/page/"
    return current_url


def activity_lenta_raser(analyzed_period):
    pass