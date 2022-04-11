from datetime import datetime

from fastapi import FastAPI

from backend.lenta_parser.activity_parser.activity_parser_tools import (
    activity_lenta_raser,
)

from fastapi.middleware.cors import CORSMiddleware

from backend.lenta_parser.top_words_parser.top_words_parser import lenta_analyzer
from backend.schema import (
    TopWordsRequestSchema,
    TopWordsResponseSchema,
    ListTopWordsResponseSchema,
    ActivityRequestSchema,
    ActivityResponseSchema,
)

app = FastAPI()

origins = [
    "localhosts:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/get-top-words")
def get_top_words_api(
    top_words_schema: TopWordsRequestSchema,
) -> ListTopWordsResponseSchema:
    if top_words_schema.source == 1:
        response = lenta_analyzer(**top_words_schema.dict())
    else:
        response = lenta_analyzer(**top_words_schema.dict())
    return ListTopWordsResponseSchema.parse_obj(response)


@app.post("/get-period-activity")
def get_period_activity_api(
    activity_schema: ActivityRequestSchema,
) -> ActivityResponseSchema:
    parsed_data = activity_lenta_raser(**activity_schema.dict())
    response = {
        "analyzed_period": f"{datetime.now().year}/{datetime.now().month}/{datetime.now().day}",
        "items": [
            {"label": time_period, "count": count}
            for time_period, count in parsed_data.items()
        ],
    }

    return ActivityResponseSchema(**response)
