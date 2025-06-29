import uvicorn
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from sqlalchemy import inspect
from app.database import engine, Base, get_db
from app.routes import notes_route
from fastapi.middleware.cors import CORSMiddleware
import datetime
# from models.notes_table import Note



#   todo:
#   📄 Збереження в файл	Зберігати content в файл (якщо буде багато тексту), а в БД тільки шлях
#   📊 Аналітика/лічильник	Скільки разів переглянута нотатка


Base.metadata.create_all(bind=engine)
app = FastAPI()

origins = [
    "http://localhost:3000",  # твій фронт
    "http://127.0.0.1:3000",  # запасний варіант
    # Якщо заллєш на Netlify/Vercel або інше — додай тут адресу
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # або ["*"] для всіх, але небезпечно у продакшні
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(notes_route.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/ping")
def ping():
    return {"pong": True}

@app.get("/ping-db")
def ping_db(db: Session = Depends(get_db)):
    inspector = inspect(engine)
    tables = inspector.get_table_names()

    return {
        "message": "DB connection OK7",
        "time": datetime.datetime.now(),
        "tables": tables
    }

if __name__ == '__main__':
    uvicorn.run("main:app", reload=True)