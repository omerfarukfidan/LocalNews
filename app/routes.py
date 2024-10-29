from fastapi import APIRouter
from app.database import get_db_connection

router = APIRouter()

@router.get("/cities")
def get_cities():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT CityName, State FROM Cities")
    rows = cursor.fetchall()
    conn.close()
    return [{"CityName": row[0], "State": row[1]} for row in rows]
