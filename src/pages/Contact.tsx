import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Users, HelpCircle, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you within 24 hours.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-blue-500" />,
      title: 'Phone Support',
      description: '24/7 Medicare assistance and emergency support',
      contact: '1-800-MEDICARE',
      hours: 'Available 24/7'
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-green-500" />,
      title: 'Live Chat',
      description: 'Instant help with Medicare questions',
      contact: 'Start Chat',
      hours: 'Mon-Fri 8AM-8PM EST'
    },
    {
      icon: <Mail className="h-8 w-8 text-purple-500" />,
      title: 'Email Support',
      description: 'Detailed responses to your questions',
      contact: 'info@ruralmedicare.gov',
      hours: 'Response within 24 hours'
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-500" />,
      title: 'Local Offices',
      description: 'Find a Medicare office near you',
      contact: 'Find Locations',
      hours: 'Varies by location'
    }
  ];

  const resources = [
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      title: 'Medicare Handbook',
      description: 'Complete guide to Medicare coverage and benefits'
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: 'Rural Health Resources',
      description: 'Special programs and services for rural communities'
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-purple-500" />,
      title: 'FAQ',
      description: 'Answers to the most common Medicare questions'
    },
    {
      icon: <Phone className="h-6 w-6 text-orange-500" />,
      title: 'Emergency Contacts',
      description: 'Important numbers for medical emergencies'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Help & Support</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to help you navigate Medicare and access healthcare in rural areas. Contact us anytime for assistance.
        </p>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white p-6 rounded-lg mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Medical Emergency?</h2>
            <p>For life-threatening emergencies, call 108 immediately.</p>
          </div>
          <a
            href="tel:108"
            className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call 108
          </a>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mx-auto mb-4">
              {method.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{method.description}</p>
            <div className="text-blue-600 font-semibold mb-1">{method.contact}</div>
            <div className="text-gray-500 text-xs">{method.hours}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="general">General Question</option>
                <option value="medicare">Medicare Coverage</option>
                <option value="emergency">Emergency Services</option>
                <option value="telemedicine">Telemedicine</option>
                <option value="hospital">Hospital Information</option>
                <option value="technical">Technical Support</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Please describe how we can help you..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Office Information */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Medicare Support Center</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>1-800-MEDICARE (1-800-633-4227)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>24 hours a day, 7 days a week</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Rural Health Initiative</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>rural-health@medicare.gov</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Emergency Services</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>108 - Life-threatening emergencies</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>1-800-222-1222 - Poison Control</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Language Assistance</h4>
            <p className="text-blue-700 text-sm">
              Medicare information is available in multiple languages. Interpreters are available at no cost to you.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Helpful Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg mb-3">
                {resource.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;