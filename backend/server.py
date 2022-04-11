from fastapi import FastAPI

from backend.lenta_parser.parser import lenta_analyzer
from fastapi.middleware.cors import CORSMiddleware

from backend.schema import TopWordsRequestSchema, TopWordsResponseSchema

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
) -> TopWordsResponseSchema:
    if top_words_schema.source == 1:
        response = lenta_analyzer(**top_words_schema.dict())
    return response
