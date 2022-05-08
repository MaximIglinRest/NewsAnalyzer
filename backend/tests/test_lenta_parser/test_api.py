import pytest
from app.schema import (
    ListTopWordsResponseSchema,
    ActivityResponseSchema,
    ListCategoryCountResponseSchema,
)
from tests.fixtures.client_fixtures import (
    activity_parser_data,
    activity_by_categories_data,
)


class TestLentaParserApi:
    def test_top_words(self, api_client, top_words_data):
        response = api_client.post("/top-words", json=top_words_data)
        assert response.status_code == 200
        assert ListTopWordsResponseSchema(**response.json())

    @pytest.mark.parametrize("analyze_by", ["by_day", "by_week", "by_month"])
    def test_activity_parser(self, api_client, analyze_by):
        response = api_client.post(
            "/period-activity", json=activity_parser_data(analyze_by)
        )
        assert response.status_code == 200
        assert ActivityResponseSchema(**response.json())

    def test_activity_by_category_parser(self, api_client):
        categories_ids = [category["id"] for category in api_client.get("/categories-list").json()]
        data = activity_by_categories_data(categories_ids)
        response = api_client.post("/category-activity", json=data)
        assert response.status_code == 200
        assert ListCategoryCountResponseSchema(**response.json())
