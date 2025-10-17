from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

# Create all tables
# models.Base.metadata.create_all(bind=engine)

origins = [
    "http://localhost:3000",   
    "https://your-frontend.vercel.app", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],     
    allow_headers=["*"],    
)

@app.get("/")
def read_root():
    return {"message": "Hello fastapi and python"}

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/campaigns")
def read_campaigns(db: Session = Depends(get_db)):
    campaigns = db.query(models.Campaign).all()
    return campaigns


@app.post("/seed-campaigns")
def seed_campaigns(db: Session = Depends(get_db)):
    campaigns = [
        {"name": "Holiday Discount", "status": "active", "clicks": 200, "cost": 60.75, "impressions": 1800},
        {"name": "Spring Launch", "status": "active", "clicks": 90, "cost": 25.30, "impressions": 900},
        {"name": "Cyber Monday", "status": "paused", "clicks": 400, "cost": 120.00, "impressions": 3000},
        {"name": "Flash Sale", "status": "active", "clicks": 75, "cost": 15.50, "impressions": 700},
        {"name": "New Year Offer", "status": "active", "clicks": 180, "cost": 50.00, "impressions": 1500},
        {"name": "Valentine Promo", "status": "paused", "clicks": 60, "cost": 20.00, "impressions": 500},
        {"name": "Back to School", "status": "active", "clicks": 130, "cost": 40.00, "impressions": 1200},
        {"name": "Year-End Clearance", "status": "paused", "clicks": 250, "cost": 70.25, "impressions": 2200}
    ]

    existing_names = [row.name for row in db.query(models.Campaign.name).all()]

    for c in campaigns:
        if c["name"] not in existing_names:
            new_campaign = models.Campaign(
                name=c["name"],
                status=c["status"],
                clicks=c["clicks"],
                cost=c["cost"],
                impressions=c["impressions"]
            )
            db.add(new_campaign)

    db.commit()
    return {"message": "8 campaigns inserted successfully!"}
