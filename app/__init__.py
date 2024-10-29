from flask import Flask
from app.database import get_db_connection

# Initialize the Flask app
def create_app():
    app = Flask(__name__)
    
    # Register routes
    from app.routes import main_routes
    app.register_blueprint(main_routes)

    return app
