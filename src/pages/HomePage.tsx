
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Heart, 
  Truck, 
  Shield, 
  Clock, 
  Users, 
  ArrowRight,
  AlertTriangle,
  Stethoscope
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: 'Emergency Services',
      description: 'Find the nearest emergency room or urgent care facility in rural areas',
      link: '/emergency',
      urgent: true
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-500" />,
      title: 'Hospital Finder',
      description: 'Locate rural hospitals and healthcare facilities near you',
      link: '/hospitals'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Medicare Plans',
      description: 'Compare Medicare plans and coverage options for rural residents',
      link: '/plans'
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-purple-500" />,
      title: 'Telemedicine',
      description: 'Connect with healthcare providers remotely when travel is difficult',
      link: '/telemedicine'
    }
  ];

  const stats = [
    { icon: <Heart className="h-6 w-6" />, value: '2,000+', label: 'Rural Hospitals' },
    { icon: <Users className="h-6 w-6" />, value: '50,000+', label: 'Members Served' },
    { icon: <Clock className="h-6 w-6" />, value: '24/7', label: 'Support Available' },
    { icon: <Truck className="h-6 w-6" />, value: '500+', label: 'Transport Services' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
       <section className=" text-white bg-[url(images/banner.png)]  bg-no-repeat bg-cover bg-center w-full h-screen">
      

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
    <h1 className="text-2xl md:text-6xl font-bold mb-6 text-white drop-shadow-md  text-outline-1px-black">
      Medicare Support for Rural India
    </h1>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        to="/emergency"
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center"
      >
        <Phone className="h-5 w-5 mr-2" />
        Emergency Services
      </Link>
      <Link
        to="/hospitals"
        className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center"
      >
        Find Healthcare
        <ArrowRight className="h-5 w-5 ml-2" />
      </Link>
    </div>
  </div>
</section>


      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Healthcare Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to access quality healthcare in rural areas, from emergency services to ongoing Medicare support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className={`group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${
                feature.urgent ? 'border-red-500 ring-2 ring-red-100' : 'border-blue-500'
              }`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-lg mb-4 group-hover:bg-gray-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                Learn More <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving Rural Areas of India</h2>
            <p className="text-xl text-gray-600">Our impact across rural communities nationwide</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Having a Medical Emergency?</h2>
            <p className="text-xl mb-6">Get immediate help and find the nearest emergency facility</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:108"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call 108 Now
              </a>
              <Link
                to="/emergency"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Find Emergency Care
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Medicare Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Medicare Support for Rural Areas</h2>
              <p className="text-lg text-gray-600 mb-6">
                Rural communities face unique healthcare challenges. Our Medicare specialists understand these challenges and provide personalized support to help you access the care you need.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Transportation assistance for medical appointments
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Extended telemedicine coverage
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Rural hospital network partnerships
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  24/7 support and guidance
                </li>
              </ul>
              <Link
                to="/plans"
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
              >
                Explore Medicare Plans
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Help Now?</h3>
                <p className="text-gray-600 mb-4">Speak with a Medicare specialist</p>
                <a
                  href="tel:1-800-633-4227"
                  className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  1-800-MEDICARE
                </a>
                <p className="text-sm text-gray-500 mt-2">Available 24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
