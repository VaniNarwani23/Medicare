import React, { useState } from 'react';
import { Video, Calendar, Clock, Users, Wifi, Shield, CheckCircle } from 'lucide-react';

const Telemedicine = () => {
  const [selectedAppointmentType, setSelectedAppointmentType] = useState('general');

  const appointmentTypes = [
    { value: 'general', label: 'General Consultation' },
    { value: 'followup', label: 'Follow-up Visit' },
    { value: 'mental-health', label: 'Mental Health' },
    { value: 'chronic-care', label: 'Chronic Disease Management' },
    { value: 'specialist', label: 'Specialist Consultation' }
  ];

  const providers = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Family Medicine',
      rating: 4.9,
      nextAvailable: 'Today 2:30 PM',
      languages: ['English', 'Spanish'],
      image: 'https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Internal Medicine',
      rating: 4.8,
      nextAvailable: 'Tomorrow 10:00 AM',
      languages: ['English'],
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Mental Health',
      rating: 4.9,
      nextAvailable: 'Today 4:00 PM',
      languages: ['English', 'Spanish'],
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: 'Save Travel Time',
      description: 'No need for long drives to distant medical facilities'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: 'Medicare Covered',
      description: 'Telemedicine visits are covered by Medicare for rural residents'
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: 'Access Specialists',
      description: 'Connect with specialists who may not be available locally'
    },
    {
      icon: <Wifi className="h-6 w-6 text-orange-500" />,
      title: 'Reliable Technology',
      description: 'Simple, user-friendly platform that works with basic internet'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Telemedicine for Rural Communities</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with healthcare providers from the comfort of your home. No travel required - just a reliable internet connection.
        </p>
      </div>

      {/* Quick Booking Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Book Your Telemedicine Appointment</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Get the healthcare you need without leaving home. Perfect for routine check-ups, follow-ups, and consultations.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center">
              <Video className="h-5 w-5 mr-2" />
              Start Video Consultation
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-gray-900">
            <h3 className="text-xl font-semibold mb-4">Quick Appointment</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Type</label>
                <select
                  value={selectedAppointmentType}
                  onChange={(e) => setSelectedAppointmentType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  {appointmentTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button className="w-full bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-md font-medium transition-colors duration-200">
                Find Available Times
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Available Providers */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Healthcare Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {providers.map((provider, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-center mb-4">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                <p className="text-blue-600 font-medium">{provider.specialty}</p>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating:</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-bold">{provider.rating}</span>
                    <span className="text-gray-500 ml-1">/5.0</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Next Available:</span>
                  <span className="text-green-600 font-medium">{provider.nextAvailable}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Languages:</span>
                  <span className="text-gray-700">{provider.languages.join(', ')}</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Telemedicine?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mx-auto mb-3 shadow-md">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements & Setup */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Requirements</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-700">Internet connection (minimum 1 Mbps)</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-700">Computer, tablet, or smartphone with camera</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-700">Microphone and speakers (or headphones)</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-700">Updated web browser</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 text-sm">
              <strong>Having trouble?</strong> Our technical support team can help you set up your device before your appointment.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Medicare Coverage</h3>
          <p className="text-gray-600 mb-4">
            Medicare covers telemedicine services for rural residents, making it easier and more affordable to access healthcare.
          </p>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-700">Primary care visits</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-700">Specialist consultations</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-700">Mental health services</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-700">Follow-up appointments</span>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 text-sm">
              <strong>Rural Advantage:</strong> Enhanced telemedicine benefits for residents in rural areas with limited healthcare access.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-blue-600 text-white rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-blue-100 mb-6">
          Schedule your first telemedicine appointment today and experience convenient healthcare from home.
        </p>
        <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 mr-4">
          Book Appointment
        </button>
        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Telemedicine;