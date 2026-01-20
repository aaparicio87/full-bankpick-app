"""Main application module."""
from fastapi import FastAPI

# routes and settings
from app.api.main import api_router
from app.core.config import settings

app = FastAPI()

app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/")
async def root():
    """Root endpoint."""
    return {"message": "Hello World"}
