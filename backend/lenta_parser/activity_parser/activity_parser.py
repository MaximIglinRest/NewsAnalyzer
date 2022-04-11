from datetime import datetime
from activity_parser_tools import form_current_date_url

started_time = datetime.now().date()
form_current_date_url(started_time)