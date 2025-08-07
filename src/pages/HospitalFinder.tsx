import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, Navigation, Filter } from 'lucide-react';

const HospitalFinder = () => {
  const [zipCode, setZipCode] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [distance, setDistance] = useState('25');

  const services = [
    { value: 'all', label: 'All Services' },
    { value: 'emergency', label: 'Emergency Room' },
    { value: 'primary', label: 'Primary Care' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'orthopedics', label: 'Orthopedics' },
    { value: 'obstetrics', label: 'Obstetrics' },
    { value: 'mental-health', label: 'Mental Health' }
  ];

  const hospitals = [
    {
      name: 'Prairie View Medical Center',
      distance: '8 miles',
      address: '2500 Country Road 45, Prairie View, State 67890',
      phone: '(555) 987-6543',
      rating: 4.2,
      type: 'Critical Access Hospital',
      services: ['Emergency Room', 'Primary Care', 'Laboratory', 'Radiology'],
      acceptsMedicare: true,
      hasER: true,
      hours: '24/7 Emergency Services'
    },
    {
      name: 'Heartland Regional Hospital',
      distance: '15 miles',
      address: '1200 Medical Plaza Drive, Heartland, State 67890',
      phone: '(555) 876-5432',
      rating: 4.5,
      type: 'Regional Medical Center',
      services: ['Emergency Room', 'ICU', 'Surgery', 'Cardiology', 'Orthopedics'],
      acceptsMedicare: true,
      hasER: true,
      hours: '24/7 Full Service Hospital'
    },
    {
      name: 'Valley Health Clinic',
      distance: '12 miles',
      address: '850 Valley Road, Valley Town, State 67890',
      phone: '(555) 765-4321',
      rating: 4.0,
      type: 'Rural Health Clinic',
      services: ['Primary Care', 'Preventive Care', 'Minor Procedures'],
      acceptsMedicare: true,
      hasER: false,
      hours: 'Mon-Fri 8AM-6PM, Sat 9AM-1PM'
    },
    {
      name: 'Mountain View Hospital',
      distance: '22 miles',
      address: '3000 Mountain View Ave, Mountain View, State 67890',
      phone: '(555) 654-3210',
      rating: 4.3,
      type: 'Community Hospital',
      services: ['Emergency Room', 'Obstetrics', 'Mental Health', 'Rehabilitation'],
      acceptsMedicare: true,
      hasER: true,
      hours: '24/7 Emergency, Limited Weekend Services'
    },
    {
      name: 'Countryside Family Practice',
      distance: '18 miles',
      address: '456 Rural Route 12, Countryside, State 67890',
      phone: '(555) 543-2109',
      rating: 4.7,
      type: 'Family Practice',
      services: ['Primary Care', 'Chronic Disease Management', 'Wellness Exams'],
      acceptsMedicare: true,
      hasER: false,
      hours: 'Mon-Thu 8AM-5PM, Fri 8AM-4PM'
    }
  ];

  const handleSearch = () => {
    // In a real app, this would trigger an API call
    console.log('Searching for hospitals near', zipCode, 'within', distance, 'miles');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Rural Healthcare Providers</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Locate hospitals, clinics, and healthcare services in rural areas. All providers accept Medicare.
        </p>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Enter ZIP code"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Distance</label>
            <select
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="10">Within 10 miles</option>
              <option value="25">Within 25 miles</option>
              <option value="50">Within 50 miles</option>
              <option value="100">Within 100 miles</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        {hospitals.map((hospital, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900 mr-3">{hospital.name}</h3>
                  {hospital.hasER && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                      Emergency Services
                    </span>
                  )}
                  {hospital.acceptsMedicare && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium ml-2">
                      Medicare Accepted
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 font-medium mb-2">{hospital.type}</p>
                
                <div className="flex items-center text-gray-600 mb-1">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{hospital.address}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-1">
                  <Navigation className="h-4 w-4 mr-2" />
                  <span>{hospital.distance} away</span>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{hospital.hours}</span>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(hospital.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{hospital.rating} rating</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 lg:ml-6">
                <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
                  <Navigation className="h-4 w-4 mr-2" />
                  Directions
                </button>
                <a
                  href={`tel:${hospital.phone}`}
                  className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-2">Services Available:</h4>
              <div className="flex flex-wrap gap-2">
                {hospital.services.map((service, serviceIndex) => (
                  <span key={serviceIndex} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Medicare Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Medicare Coverage for Rural Healthcare</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">What's Covered:</h4>
            <ul className="text-blue-700 space-y-1">
              <li>• Emergency room visits</li>
              <li>• Hospital stays</li>
              <li>• Doctor visits</li>
              <li>• Preventive services</li>
              <li>• Medical transportation (in some cases)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">Rural Benefits:</h4>
            <ul className="text-blue-700 space-y-1">
              <li>• Critical Access Hospital coverage</li>
              <li>• Telehealth services</li>
              <li>• Extended travel coverage</li>
              <li>• Rural Health Clinic benefits</li>
              <li>• Ambulance services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalFinder;