from fastapi import FastAPI
from pydantic import BaseModel
from pydantic.utils import to_camel
from starlette.middleware.trustedhost import TrustedHostMiddleware

from backend.lenta_parser.parser import lenta_analyzer
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://127.0.0.1:3000",
]

app.add_middleware(
    TrustedHostMiddleware, allowed_hosts=["example.com", "*.example.com"]
)

class TopWordsRequestSchema(BaseModel):
    source: int
    nouns: bool
    percent: bool
    verbs: bool
    analyze_by: str
    words_count: int
    news_count: int
    class Config:
        alias_generator = to_camel
        allow_population_by_field_name = True

class TopWordsResponseSchema(BaseModel):
    label: str
    count: int

@app.post("/get-top-words")
def get_top_words_api(top_words_schema: TopWordsRequestSchema) -> TopWordsResponseSchema:
    if top_words_schema.source == 1:
        response = lenta_analyzer(**top_words_schema.dict())
    return response


