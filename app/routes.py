from flask import Blueprint, jsonify, request
from app.database import get_db_connection

from flask_cors import CORS

main_routes = Blueprint('main_routes', __name__)
CORS(main_routes)

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

# Route to fetch news by city name
@main_routes.route('/news/<city_name>', methods=['GET'])
def get_news_by_city(city_name):
    conn = get_db_connection()
    cursor = conn.cursor()

    query = '''
    SELECT N.id AS NewsID, C.city, N.title, N.content 
    FROM [News] AS N
    JOIN [CityNews] AS CN ON CN.news_id = N.id
    JOIN [City] AS C ON C.id = CN.city_id
    WHERE C.city = ?
    '''

    cursor.execute(query, (city_name,))
    rows = cursor.fetchall()

    news_list = []
    for row in rows:
        news_item = {
            'NewsID': row[0],
            'city': row[1],
            'title': row[2],
            'content': row[3]
        }
        news_list.append(news_item)

    conn.close()

    return jsonify(news_list)
