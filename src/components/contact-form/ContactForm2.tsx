'use client'

import { useState, useEffect, FormEvent } from "react";
import CountryList, { Country } from 'country-list-with-dial-code-and-flag';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  dialCode: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const ContactForm2 = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    dialCode: '+880',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  console.log(CountryList.getAll());

  useEffect(() => {
    try {
      const countryList = CountryList.getAll()
        .sort((a, b) => a.name.localeCompare(b.name));
      setCountries(countryList);
    } catch (error) {
      console.error('Error loading countries:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError(null);
    
    // Validate required fields
    if (!formData.email || !formData.message) {
      setFormError('Please fill in all required fields');
      setFormSubmitting(false);
      return;
    }
    
    try {
      // In a real application, you would send this data to your backend
      // For demonstration, we'll simulate a successful submission
      console.log('Form submitted with data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setFormSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        dialCode: formData.dialCode,
        phoneNumber: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError('Failed to submit form. Please try again later.');
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-3xl">
      {formSuccess ? (
        <div className="text-center py-8">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">Your message has been sent successfully. We&apos;ll get back to you shortly.</p>
          <button 
            onClick={() => setFormSuccess(false)} 
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {formError && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {formError}
            </div>
          )}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone/Mobile</label>
              <div className="flex">
                <select 
                  name="dialCode"
                  value={formData.dialCode}
                  onChange={handleInputChange}
                  className="w-1/3 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                >
                  {loading ? (
                    <option>Loading...</option>
                  ) : (
                    countries.map((country: Country, index) => (
                      <option key={`${country.code}-${index}`} value={country.dial_code}>
                        {country.flag} {country.dial_code}
                      </option>
                    ))
                  )}
                </select>
                <input 
                  type="tel" 
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Mobile Number" 
                  className="w-2/3 p-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Message <span className="text-red-500">*</span></label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
              rows={4}
            ></textarea>
          </div>
          <button 
            type="submit"
            disabled={formSubmitting}
            className={`w-full ${formSubmitting ? 'bg-gray-500' : 'bg-gray-800 hover:bg-gray-700'} text-white p-3 rounded-lg transition-colors flex justify-center items-center`}
          >
            {formSubmitting ? 'Submitting...' : 'Submit Form'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm2;