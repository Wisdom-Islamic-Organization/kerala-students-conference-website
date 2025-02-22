interface RegistrationPayload {
  event_id: number;
  event_type: string;
  country_code: string;
  mobile: string;
  name: string;
  age: string;
  sex: string;
  whatsapp_country_code: string;
  whatsapp: string;
  email: string;
  pin_code: string;
  place: string;
  job: string;
}

const API_BASE_URL = 'https://guideportal.wisdomislam.org/api';
const API_TOKEN = process.env.REACT_APP_GUIDE_API_TOKEN;

export const submitRegistration = async (data: RegistrationPayload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/p/event-registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('API submission failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}; 