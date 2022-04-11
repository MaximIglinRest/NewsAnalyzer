from fastapi import FastAPI

from backend.lenta_parser.top_words_parser import lenta_analyzer
from fastapi.middleware.cors import CORSMiddleware

from backend.schema import TopWordsRequestSchema, TopWordsResponseSchema, ListTopWordsResponseSchema

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
