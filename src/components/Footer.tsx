import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Emergency Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-400" />
                <span>108 - Emergency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>1-800-MEDICARE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-green-400" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/emergency" className="block text-gray-300 hover:text-white transition-colors">Emergency Services</a>
              <a href="/hospitals" className="block text-gray-300 hover:text-white transition-colors">Find Hospitals</a>
              <a href="/plans" className="block text-gray-300 hover:text-white transition-colors">Medicare Plans</a>
              <a href="/telemedicine" className="block text-gray-300 hover:text-white transition-colors">Telemedicine</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <span className="block text-gray-300">Rural Hospital Network</span>
              <span className="block text-gray-300">Medical Transportation</span>
              <span className="block text-gray-300">Prescription Assistance</span>
              <span className="block text-gray-300">Provider Directory</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@ruralmedicare.gov</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span>Serving Rural Areas Of India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Rural Medicare. A service for rural healthcare access.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-300 text-sm">
                This is not an official Medicare website. For official information, visit Medicare.gov
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;