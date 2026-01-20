"""Users routes module."""

from fastapi import APIRouter


router = APIRouter(prefix="/users", tags=["users"])
