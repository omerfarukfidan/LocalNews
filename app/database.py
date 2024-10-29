import pyodbc
from dotenv import load_dotenv
import os
import sys
# Load environment variables from .env
load_dotenv()

# Add the root directory to sys.path to make sure 'app' is found
current_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.abspath(os.path.join(current_dir, '..', '..'))  # Adjust as per your folder structure
sys.path.append(root_dir)

def get_db_connection():
    # Fetching the connection details from environment variables
    server = os.getenv('DB_SERVER', 'localhost')  # Default to 'localhost' if not found
    database = os.getenv('DB_DATABASE', 'local_news_db')  # Default to 'local_news_db'
    
    conn = pyodbc.connect(
        f'DRIVER={{ODBC Driver 18 for SQL Server}};'  # Be sure the ODBC driver matches your setup
        f'SERVER={server};'
        f'DATABASE={database};'
        'Trusted_Connection=yes;'  # Assuming passwordless login
        'Encrypt=no;'  # Disable encryption for local development
    )
    return conn
