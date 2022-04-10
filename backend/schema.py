from pydantic import BaseModel
from pydantic.utils import to_camel


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