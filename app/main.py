from fastapi import FastAPI
from app.routes import router

app = FastAPI()

# Include routes from the routes.py file
app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "Local News API is running"}
