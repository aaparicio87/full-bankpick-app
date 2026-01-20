"""Application configuration module."""

from pydantic import SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings."""
    model_config = SettingsConfigDict(
        # `.env.prod` takes priority over `.env`
        env_file=('.env', '.env.prod')
    )

    API_V1_STR: str = "/api/v1"
    db_user: str = ""
    db_password: SecretStr
    db_name: str = ""

    SECRET_KEY: SecretStr
    ALGORITHM: str = ""
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15


settings = Settings()
