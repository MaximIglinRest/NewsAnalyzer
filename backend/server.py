from datetime import datetime

from fastapi import FastAPI

from backend.lenta_parser.activity_parser.activity_parser import (
    activity_lenta_parser, category_lenta_parser,
)

from fastapi.middleware.cors import CORSMiddleware

from backend.lenta_parser.activity_parser.activity_parser_tools import categories_dict
from backend.lenta_parser.top_words_parser.top_words_parser import lenta_analyzer
from backend.schema import (
    TopWordsRequestSchema,
    ListTopWordsResponseSchema,
    ActivityRequestSchema,
    ActivityResponseSchema, ListCategoriesResponseSchema, CategoryActivityRequestSchema,
    ListCategoryCountResponseSchema,
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


@app.post("/top-words")
def get_top_words_api(
    top_words_schema: TopWordsRequestSchema,
) -> ListTopWordsResponseSchema:
    """
    API для получения топ слов по выбранному источнику и количеству новостей
    """
    if top_words_schema.source == 1:
        response = lenta_analyzer(**top_words_schema.dict())
    else:
        response = lenta_analyzer(**top_words_schema.dict())
    return ListTopWordsResponseSchema.parse_obj(response)


@app.post("/period-activity")
def get_period_activity_api(
    activity_schema: ActivityRequestSchema,
) -> ActivityResponseSchema:
    """
    API для получения активности по новостям за выбранный период
    """
    parsed_data = activity_lenta_parser(**activity_schema.dict())
    response = {
        "analyzed_period": f"{datetime.now().year}/{datetime.now().month}/{datetime.now().day}",
        "items": [
            {"label": time_period, "count": count}
            for time_period, count in parsed_data.items()
        ],
    }

    return ActivityResponseSchema(**response)


@app.get("/categories-list")
def get_categories_list() -> ListCategoriesResponseSchema:
    """
    API получения списка категорий для отображения в форме поиска
    """
    response = [{"id": category, "label": categories_dict[category]["label"]} for category in categories_dict]
    return ListCategoriesResponseSchema.parse_obj(response)


@app.post("/category-activity")
def get_category_activity(category_activity_schema: CategoryActivityRequestSchema) -> ListCategoryCountResponseSchema:
    """
    API для получения активности по категориям по выбранному периуду и категориям
    """
    response = [{"label": category, "count": count} for category, count in category_lenta_parser(**category_activity_schema.dict()).items()]
    return ListCategoryCountResponseSchema.parse_obj(response)
