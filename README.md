# LOCAL NEWS PROJECT

This project is designed to provide local news experiences to cities in the United States. It uses a dataset of U.S. cities to map news articles to the correct geographical locations.

## How to Set Up the Project

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/local-news-project.git
cd local-news-project
```

### 2. Create and Activate a Virtual Environment

#### For Windows

```bash
python -m venv venv
venv\Scripts\activate
```

#### For Linux/Mac

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

Install the required dependencies using pip:

```bash
pip install -r requirements.txt
```

### 4. Download the Dataset

You need to download the U.S. cities dataset from SimpleMaps(https://simplemaps.com/data/us-cities). The dataset is not included in the repository.

Download the CSV file from the link above.
Name the file `uscities.csv`.
Place the file in the `dataset` directory (create the directory if it doesn't exist):

```bash
local-news-project/
├── dataset/
│   ├── uscities.csv
```

### 5. Clean the Dataset

Before loading the data into your database, the dataset needs to be cleaned. You can run the cleaning script by opening the Jupyter Notebook (`clean_dataset.ipynb`) located in the `scripts/` folder. This will generate a cleaned CSV file.

Alternatively, you can use the pre-cleaned version `cleaned_uscities.csv` if it has already been generated.

### 6. Set Up the Database

The project uses MS SQL Server as the database. Make sure you have MS SQL Server running locally or remotely. Update your `.env` file to reflect the correct database connection details.

#### Example .env:

```bash
{
    "DB_SERVER": "your-aws-rds-endpoint",
    "DB_PORT": "5432",
    "DB_NAME": "local_news_db",
    "DB_USER": "your_username",
    "DB_PASSWORD": "your_password",
    "DB_SSL_MODE": "require"
}

```

### 7. Load the Data

Once the dataset is ready and the database is set up, you can run the `load_data.py` script to load the cleaned dataset into the database:

```bash
python scripts/load_data.py
```

### 8. Run the Backend Server

After the data has been loaded, you can start the backend server:

```bash
python app/main.py
```

### 9. Run the Frontend

The frontend is built using React. To get it up and running, navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend
npm install
```

Once the dependencies are installed, you can run the frontend development server:

```bash
npm start
```

The frontend server will start, and you can access it at `http://localhost:3000`. The application provides a dropdown to select a city and displays local news for the selected city.

## Notes
- Make sure your `.gitignore` file is set up to exclude sensitive files like `.env`, virtual environment folders (`venv/`), and large datasets (`dataset/`).
- Always make sure you have the necessary database credentials in your `.env` file.
- You may need to handle CORS settings on the backend server to allow requests from the frontend (`http://localhost:3000`).

## Dataset Source

The U.S. cities dataset used in this project can be downloaded from the following link:
SimpleMaps U.S. Cities Dataset -> https://simplemaps.com/data/us-cities
