from fastapi import FastAPI
from pydantic import BaseModel

from lenta_parser.parser import lenta_analyzer

app = FastAPI()

class TopWordsRequestSchema(BaseModel):
    source: int
    nouns: bool
    percent: bool
    verbs: bool
    analyze_by: str
    words_count: int

class TopWordsResponseSchema(BaseModel):
    label: str
    count: int

@app.post("/get-top-words")
def get_top_words_api(top_words_schema: TopWordsRequestSchema) -> TopWordsResponseSchema:
    if top_words_schema.source == 1:
        response = lenta_analyzer(**top_words_schema)
    return response


