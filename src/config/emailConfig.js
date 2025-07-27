// EmailJS Configuration
// Values are loaded from environment variables
// For local development, create a .env.local file with your credentials
// For production (Vercel), add these as environment variables in the dashboard

export const EMAIL_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  AUTOREPLY_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID,
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

// Template variables for EmailJS
export const EMAIL_TEMPLATE_PARAMS = {
  from_name: '',
  from_email: '',
  message: '',
  to_name: 'Paras Jagdale',
  to_email: 'parasjagdale15@gmail.com',
};
