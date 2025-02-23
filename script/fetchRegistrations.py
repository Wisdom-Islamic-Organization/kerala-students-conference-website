import firebase_admin
import pandas as pd
import os
from firebase_admin import credentials, firestore
from dotenv import load_dotenv

load_dotenv()

def initialize_firestore():
    """Initialize Firestore connection"""
    # Replace with your Firebase service account key path
    cred = credentials.Certificate(os.getenv('REACT_APP_SERVICE_ACCOUNT_JSON_PATH'))
    firebase_admin.initialize_app(cred)
    return firestore.client()

def fetch_registrations(db):
    """Fetch registrations from Firestore"""
    registrations = []
    # Fetch documents ordered by timestamp descending
    docs = db.collection('registrations').order_by('timestamp').stream()
    
    for doc in docs:
        data = doc.to_dict()
        # Convert timestamp to string if it exists
        if 'timestamp' in data and data['timestamp']:
            data['timestamp'] = data['timestamp'].strftime('%Y-%m-%d %H:%M:%S')
        data['id'] = doc.id
        registrations.append(data)
    
    return registrations

def save_to_csv(registrations):
    """Save registrations to CSV file with duplicates removed"""
    # Convert to DataFrame
    df = pd.DataFrame(registrations)
    
    # Get all columns except 'timestamp' for duplicate comparison
    columns_for_comparison = [col for col in df.columns if col != 'timestamp']
    
    # Keep first occurrence of duplicates (which will be the latest due to timestamp ordering)
    df_distinct = df.drop_duplicates(subset=columns_for_comparison, keep='first')
    
    # Save to CSV
    filename = f'registrations.csv'
    df_distinct.to_csv(filename, index=False)
    
    print(f"Data saved to {filename}")
    print(f"Total registrations before removing duplicates: {len(df)}")
    print(f"Total registrations after removing duplicates: {len(df_distinct)}")
    
    if len(df) > len(df_distinct):
        print(f"Removed {len(df) - len(df_distinct)} duplicate entries")

def main():
    # Initialize Firestore
    db = initialize_firestore()
    
    # Fetch registrations
    registrations = fetch_registrations(db)
    
    # Save to CSV
    save_to_csv(registrations)

if __name__ == "__main__":
    main()