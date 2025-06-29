from pydantic import BaseModel
from datetime import datetime
import uuid


class NoteCreate(BaseModel):
    content: str
    ttl: int

class NoteOut(BaseModel):
    id: uuid.UUID
    token: str
    created_at: datetime
    expires_at: datetime
    content: str

    class Config:
        from_attributes = True  # to convert pydantic model into orm

class NoteReturn(BaseModel):
    created_at: datetime
    expires_at: datetime
    content: str

    class Config:
        from_attributes = True