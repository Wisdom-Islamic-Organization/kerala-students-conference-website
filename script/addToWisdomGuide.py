import csv
import requests
from dotenv import load_dotenv
import os

load_dotenv()

# API Configuration
API_BASE_URL = os.getenv('REACT_APP_GUIDE_API_BASE_URL')
API_TOKEN = os.getenv('REACT_APP_GUIDE_API_TOKEN')

def submit_registration(data):
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {API_TOKEN}'
    }
    
    # Transform data to match API requirements
    payload = {
        'event_id': 84,  # Fixed event ID as per the codebase
        'name': data.get('name', ''),
        'email': data.get('email', ''),
        'age': data.get('age', ''),
        'class': data.get('standard', ''),
        'sex': 'Male' if data.get('gender', '').lower() == 'male' else 'Female',
        'subject': data.get('subject', ''),
        'institution': data.get('institution', ''),
        'year_of_study': data.get('yearOfStudy', ''),
        'year_of_completion': data.get('yearOfCompletion', ''),
        'district_name': data.get('district', ''),
        'district_name_other': data.get('otherDistrict', ''),
        'local_body': data.get('localBody', ''),
        'mobile': data.get('contactNumber', ''),
        'whatsapp': data.get('whatsappNumber', '') or data.get('contactNumber', '')
    }

    try:
        response = requests.post(
            f'{API_BASE_URL}/p/event-registration',
            headers=headers,
            json=payload
        )
        
        if response.status_code == 200:
            print(f"Successfully registered {data.get('name')}")
            return True
        else:
            print(f"Failed to register {data.get('name')}: {response.text}")
            return False
    except Exception as e:
        print(f"Error registering {data.get('name')}: {str(e)}")
        return False

def process_csv(file_path):
    successful = 0
    failed = 0
    
    with open(file_path, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if submit_registration(row):
                successful += 1
            else:
                failed += 1
    
    return successful, failed

if __name__ == "__main__":
    csv_file = "registrations.csv"  # Path to your CSV file
    print("Starting registration process...")
    
    successful, failed = process_csv(csv_file)
    
    print("\nRegistration Summary:")
    print(f"Successfully registered: {successful}")
    print(f"Failed registrations: {failed}")
    print(f"Total processed: {successful + failed}")