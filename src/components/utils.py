# utils.py

import logging
import json
import os
import uuid
import hashlib

from frontend_app.config import Config

def load_config() -> Config:
    """Loads the configuration from the environment variables"""
    return Config(os.environ)

def get_logger(name: str) -> logging.Logger:
    """Returns a logger instance with the given name"""
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)
    handler = logging.StreamHandler()
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    return logger

def json_dumps(data: any) -> str:
    """Returns a JSON string representation of the given data"""
    return json.dumps(data, default=str)

def generate_uuid() -> str:
    """Returns a random UUID as a string"""
    return str(uuid.uuid4())

def generate_hash(data: any) -> str:
    """Returns a SHA-256 hash of the given data as a string"""
    return hashlib.sha256(json.dumps(data, default=str).encode()).hexdigest()