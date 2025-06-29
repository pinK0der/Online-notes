from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.notes_table import Note
from app.schemas import notes_schemas as schemas
from datetime import datetime, timedelta, timezone
import secrets


router = APIRouter()

@router.get("/ping-notes")
def ping_notes(db: Session = Depends(get_db)):
    notes_all = db.query(Note).all()
    count = db.query(Note).count()

    return {
        "pong": True,
        "notes_count": count,
        "notes": notes_all
    }

@router.post("/notes", response_model=schemas.NoteOut)
def create_note(note: schemas.NoteCreate, db: Session = Depends(get_db)):
    expires = datetime.now(timezone.utc) + timedelta(seconds=note.ttl)
    new_note = Note(
        content=note.content,
        token=secrets.token_hex(16),  #ofc random unique
        expires_at=expires
    )
    db.add(new_note)
    db.commit()
    db.refresh(new_note)
    return new_note

@router.get("/notes/{token}", response_model=schemas.NoteReturn)
def get_note(token: str, db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.token == token).first()

    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    if note.expires_at < datetime.now(timezone.utc):
        raise HTTPException(status_code=410, detail="Note expired")

    return note