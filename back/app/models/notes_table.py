from sqlalchemy import Column, Integer, String, Text, DateTime, func
import uuid     # new lib
from sqlalchemy.dialects.postgresql import UUID     #one more lib to connect sqlalchemy and uuid
from app.database import Base


class Note(Base):
    __tablename__ = 'notes'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)   #unique ID using uuid
    token = Column(String(32), unique=True, nullable=False)     # token of note (this str we will use in api requests)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    expires_at = Column(DateTime(timezone=True), nullable=False)
    content = Column(Text, nullable=False)
