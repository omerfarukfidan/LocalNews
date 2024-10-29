import pyodbc
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env if needed

def get_db_connection():
    conn = pyodbc.connect(
        'DRIVER={ODBC Driver 18 for SQL Server};'
        'SERVER=DESKTOP-31EMK53;'  # Example: localhost or DESKTOP-31EMK53
        'DATABASE=local_news_db;'  # Your database name
        'Trusted_Connection=yes;'  # For passwordless login
        'Encrypt=no;'  # Disable encryption for local connections
    )
    return conn
