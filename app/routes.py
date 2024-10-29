from flask import Blueprint, jsonify, request
from app.database import get_db_connection

main_routes = Blueprint('main_routes', __name__)

# Root route
@main_routes.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Local News API!"})

# Route to fetch all cities
@main_routes.route('/cities', methods=['GET'])
def get_cities():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM Cities")
    rows = cursor.fetchall()

    cities = []
    for row in rows:
        city = {
            'city': row[0],
            'city_ascii': row[1],
            'state_id': row[2],
            'state_name': row[3],
            'lat': row[4],
            'lng': row[5],
            'population': row[6],
            'zips': row[7]
        }
        cities.append(city)

    conn.close()

    return jsonify(cities)

# Route to fetch a single city by name
@main_routes.route('/cities/<city_name>', methods=['GET'])
def get_city(city_name):
    print(f"Fetching city: {city_name}")
    
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM Cities WHERE city = ?", city_name)
    row = cursor.fetchone()

    if row:
        city = {
            'city': row[0],
            'city_ascii': row[1],
            'state_id': row[2],
            'state_name': row[3],
            'lat': row[4],
            'lng': row[5],
            'population': row[6],
            'zips': row[7]
        }
        conn.close()
        return jsonify(city)
    else:
        conn.close()
        return jsonify({"error": "City not found"}), 404
