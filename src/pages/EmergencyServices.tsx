import React, { useState } from 'react';
import { Phone, MapPin, Clock, AlertTriangle, Navigation, Car } from 'lucide-react';

const EmergencyServices = () => {
  const [zipCode, setZipCode] = useState('');

  const emergencyContacts = [
    { name: 'Emergency Services', number: '911', description: 'Life-threatening emergencies' },
    { name: 'Poison Control', number: '1-800-222-1222', description: 'Poison emergencies' },
    { name: 'Medicare Helpline', number: '1-800-MEDICARE', description: 'Medicare questions' },
    { name: 'Crisis Text Line', number: 'Text HOME to 741741', description: 'Mental health crisis' }
  ];

  const nearbyEmergencyRooms = [
    {
      name: 'Rural General Hospital',
      distance: '12 miles',
      address: '123 Main St, Smalltown, State 12345',
      phone: '(555) 123-4567',
      waitTime: '15 minutes',
      services: ['Emergency Room', 'Trauma Center', 'Helicopter Landing']
    },
    {
      name: 'County Medical Center',
      distance: '18 miles',
      address: '456 Hospital Ave, County Seat, State 12345',
      phone: '(555) 234-5678',
      waitTime: '25 minutes',
      services: ['Emergency Room', 'ICU', 'Cardiac Care']
    },
    {
      name: 'Regional Healthcare',
      distance: '28 miles',
      address: '789 Health Blvd, Regional City, State 12345',
      phone: '(555) 345-6789',
      waitTime: '30 minutes',
      services: ['Level II Trauma', 'Stroke Center', 'Air Ambulance']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white p-6 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          <AlertTriangle className="h-8 w-8 mr-3" />
          <h1 className="text-3xl font-bold">Emergency Services</h1>
        </div>
        <p className="text-xl mb-4">If you're experiencing a life-threatening emergency, call 911 immediately.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:911"
            className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call 911
          </a>
          <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
            <Navigation className="h-5 w-5 mr-2" />
            Get Directions to Nearest ER
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Emergency Contacts */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Contacts</h2>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                  <a 
                    href={`tel:${contact.number}`}
                    className="text-lg font-bold text-red-600 hover:text-red-700 transition-colors"
                  >
                    {contact.number}
                  </a>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                <Car className="h-5 w-5 mr-2" />
                Request Medical Transport
              </button>
              <button className="w-full bg-green-600 text-white hover:bg-green-700 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Telehealth Urgent Care
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Room Finder */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Nearest Emergency Room</h2>
            
            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter your ZIP code to find nearby emergency services
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="Enter ZIP code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition-colors duration-200">
                  Search
                </button>
              </div>
            </div>

            {/* Emergency Rooms List */}
            <div className="space-y-4">
              {nearbyEmergencyRooms.map((hospital, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{hospital.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {hospital.waitTime} wait
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{hospital.address}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <Navigation className="h-4 w-4 mr-2" />
                    <span>{hospital.distance} away</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">Available Services:</p>
                    <div className="flex flex-wrap gap-2">
                      {hospital.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center">
                      <Navigation className="h-4 w-4 mr-2" />
                      Directions
                    </button>
                    <a
                      href={`tel:${hospital.phone}`}
                      className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* When to Seek Emergency Care */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-bold text-yellow-800 mb-4">When to Seek Emergency Care</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-yellow-800 mb-2">Call 911 Immediately for:</h4>
            <ul className="text-yellow-700 space-y-1">
              <li>• Chest pain or heart attack symptoms</li>
              <li>• Difficulty breathing</li>
              <li>• Severe bleeding or trauma</li>
              <li>• Stroke symptoms</li>
              <li>• Loss of consciousness</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-800 mb-2">Consider Urgent Care for:</h4>
            <ul className="text-yellow-700 space-y-1">
              <li>• Minor cuts and sprains</li>
              <li>• Fever and flu symptoms</li>
              <li>• Minor burns</li>
              <li>• Ear infections</li>
              <li>• Minor allergic reactions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServices;