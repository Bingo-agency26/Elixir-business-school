import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_xuwlgk6';
const TEMPLATE_ID = 'template_6yf5o9f';
const PUBLIC_KEY = 'blS21FUZB-s4ml5Q2';

export interface EmailParams {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (params: EmailParams) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      // English keys
      firstname: params.firstname,
      lastname: params.lastname,
      email: params.email,
      phone: params.phone,
      subject: params.subject,
      message: params.message,
      // French keys matching user's template
      prenom: params.firstname,
      nom: params.lastname,
      telephone: params.phone,
      sujet: params.subject,
      // Combined fallbacks
      from_name: `${params.firstname} ${params.lastname}`,
      from_email: params.email,
      reply_to: params.email,
    },
    PUBLIC_KEY
  );
};
