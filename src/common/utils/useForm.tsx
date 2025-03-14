import { useState } from "react";
import { notification } from "antd";
import { db } from "../../config/firebase";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useHistory } from "react-router-dom";
import { submitRegistration } from "../../services/api";

interface IContactValues {
  name?: string;
  contactNumber?: string;
}

interface IRegistrationValues {
  name?: string;
  email?: string;
  age?: string;
  standard?: string;
  gender?: string;
  subject?: string;
  institution?: string;
  yearOfStudy?: string;
  yearOfCompletion?: string;
  district?: string;
  otherDistrict?: string;
  localBody?: string;
  contactNumber?: string;
  whatsappNumber?: string;
  isDifferentWhatsApp?: string;
}

interface APIRegistrationResponse {
  message: string;
  status: string;
  data: {
    id: number;
    name: string;
    mobile: string;
  }
}

const initialRegistrationValues: IRegistrationValues = {
  name: "",
  email: "",
  age: "",
  standard: "",
  gender: "",
  subject: "",
  institution: "",
  yearOfStudy: "1",
  yearOfCompletion: "2025",
  district: "",
  otherDistrict: "",
  localBody: "",
  contactNumber: "",
  whatsappNumber: "",
  isDifferentWhatsApp: 'no',
};

const initialContactValues: IContactValues = {
  name: "",
  contactNumber: "",
};

export const useForm = <T extends IRegistrationValues | IContactValues>(
  validate: (values: T) => T,
  formType: 'registration' | 'contact' = 'registration'
) => {
  const history = useHistory();
  const [formState, setFormState] = useState<{
    values: T;
    errors: T;
  }>({
    values: (formType === 'registration' ? initialRegistrationValues : initialContactValues) as T,
    errors: (formType === 'registration' ? initialRegistrationValues : initialContactValues) as T,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    try {
      if (Object.values(errors).every((error) => error === "")) {
        // Add registration data to Firestore
        const registrationsRef = collection(db, 'registrations');
        await addDoc(registrationsRef, {
          ...values,
          timestamp: serverTimestamp()
        });

        let response: APIRegistrationResponse | null = null;
        // Submit to external API
        if (formType === 'registration') {
          response = await submitRegistration({
            event_id: 84,
            mobile: (values as IRegistrationValues).contactNumber || '',
            name: values.name || '',
            age: (values as IRegistrationValues).age || '',
            sex: (values as IRegistrationValues).gender === 'male' ? 'Male' : 'Female',
            whatsapp: (values as IRegistrationValues).whatsappNumber || (values as IRegistrationValues).contactNumber || '',
            email: (values as IRegistrationValues).email || '',
            class: (values as IRegistrationValues).standard || '',
            subject: (values as IRegistrationValues).subject || '',
            institution: (values as IRegistrationValues).institution || '',
            year_of_study: (values as IRegistrationValues).yearOfStudy || '1',
            year_of_completion: (values as IRegistrationValues).yearOfCompletion || '2025',
            district_name: (values as IRegistrationValues).district || '',
            district_name_other: (values as IRegistrationValues).otherDistrict || '',
            local_body: (values as IRegistrationValues).localBody || '',
          });
        }

        console.log(response);

        // Reset form state
        setFormState({
          values: (formType === 'registration' ? { ...initialRegistrationValues } : { ...initialContactValues }) as T,
          errors: (formType === 'registration' ? { ...initialRegistrationValues } : { ...initialContactValues }) as T,
        });

        // Scroll to top first
        scrollToTop();

        // Show success notification after scrolling
        setTimeout(() => {
          notification["success"]({
            message: response?.message || "Registration Successful",
            description: "Thank you for registering! We'll contact you soon.",
            duration: 3,
          });
        }, 500);

        // Redirect to home page after notification
        setTimeout(() => {
          history.push('/');
        }, 2500);
      }
    } catch (error) {
      console.error('Registration error:', error);
      notification["error"]({
        message: "Error",
        description: "Failed to submit registration. Please try again later.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  const handleContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    try {
      if (Object.values(errors).every((error) => error === "")) {
        // Add contact message to Firestore
        const contactsRef = collection(db, 'contacts');
        await addDoc(contactsRef, {
          name: values.name,
          contactNumber: values.contactNumber,
          timestamp: serverTimestamp()
        });

        // Reset form state
        setFormState({
          values: { ...initialContactValues } as T,
          errors: { ...initialContactValues } as T,
        });

        // Show success notification
        notification["success"]({
          message: "Message Sent",
          description: "Thank you for contacting us! We'll get back to you soon.",
          duration: 3,
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      notification["error"]({
        message: "Error",
        description: "Failed to send message. Please try again later.",
      });
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleContact,
    values: formState.values,
    errors: formState.errors,
  };
};
