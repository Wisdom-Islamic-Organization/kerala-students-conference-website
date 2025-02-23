interface RegistrationPayload {
  event_id: number;
  name: string;
  email: string;
  age: string;
  class: string;
  sex: string;
  subject: string;
  institution: string;
  year_of_study: string;
  year_of_completion: string;
  district_name: string;
  district_name_other: string;
  local_body: string;
  mobile: string;
  whatsapp: string;
}

const API_BASE_URL = process.env.REACT_APP_GUIDE_API_BASE_URL;
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