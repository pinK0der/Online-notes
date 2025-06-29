from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os
from dotenv import load_dotenv


load_dotenv() # load env vars

DB_URL = os.getenv('DATABASE_URL')

engine = create_engine(DB_URL) #thats kinda bandwind (bottleneck) of our db
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
