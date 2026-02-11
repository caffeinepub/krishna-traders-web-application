// Business contact information for Krishna Traders

export const businessContact = {
  // Primary phone number
  phone: '+91-9970279004',
  
  // Secondary phone number
  phone2: '+91-9921624211',
  
  // Email address
  email: 'traderskrishna682@gmail.com',
  
  // WhatsApp number (using primary phone)
  whatsapp: '+919970279004',
  
  // WhatsApp message template
  whatsappMessage: 'Hello Krishna Traders, I would like to inquire about your products.',
  
  // Business address (optional)
  address: 'Industrial Area, City, State, India',
  
  // Business hours (optional)
  hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
};

// Helper function to normalize phone numbers for tel: links
// Strips spaces and dashes while preserving leading '+'
const normalizePhoneForTel = (phone: string): string => {
  return phone.replace(/[\s-]/g, '');
};

// Helper functions to generate contact links with normalized phone numbers
export const getPhoneLink = () => `tel:${normalizePhoneForTel(businessContact.phone)}`;
export const getPhone2Link = () => `tel:${normalizePhoneForTel(businessContact.phone2)}`;
export const getEmailLink = () => `mailto:${businessContact.email}`;
export const getWhatsAppLink = () => 
  `https://wa.me/${businessContact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(businessContact.whatsappMessage)}`;
