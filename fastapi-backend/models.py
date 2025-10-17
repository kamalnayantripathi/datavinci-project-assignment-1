from sqlalchemy import Column, Integer, String, Float, Enum
from database import Base
import enum

class CampaignStatus(enum.Enum):
    active = "active"
    paused = "paused"

class Campaign(Base):
    __tablename__ = "campaign"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    status = Column(Enum(CampaignStatus), default=CampaignStatus.active, nullable=False)
    clicks = Column(Integer, default=0)
    cost = Column(Float, default=0.0)
    impressions = Column(Integer, default=0)
