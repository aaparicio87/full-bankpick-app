"""Main application module."""
from fastapi import FastAPI

# routes and settings
from app.api.main import api_router
from app.core.config import settings

app = FastAPI()

app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/healtcheck", tags=["health"])
async def root():
    """Healthcheck endpoint."""
    print(settings)
    return {"message": "All working fine!"}
