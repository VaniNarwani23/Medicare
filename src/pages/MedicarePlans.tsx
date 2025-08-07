import React, { useState } from 'react';
import { Shield, CheckCircle, DollarSign, Users, Phone, ArrowRight } from 'lucide-react';

const MedicarePlans = () => {
  const [selectedPlan, setSelectedPlan] = useState('original');

  const plans = [
    {
      id: 'original',
      name: 'Original Medicare',
      subtitle: 'Parts A & B',
      monthlyPremium: '$174.70*',
      description: 'Basic Medicare coverage with the freedom to see any doctor who accepts Medicare.',
      benefits: [
        'Hospital insurance (Part A)',
        'Medical insurance (Part B)',
        'No network restrictions',
        'Accepted nationwide',
        'Rural hospital coverage'
      ],
      rural: [
        'Critical Access Hospital coverage',
        'Rural Health Clinic benefits',
        'Extended travel allowances'
      ],
      popular: false
    },
    {
      id: 'advantage',
      name: 'Medicare Advantage',
      subtitle: 'Part C',
      monthlyPremium: '$0 - $200+',
      description: 'All-in-one alternative to Original Medicare, often with extra benefits.',
      benefits: [
        'Includes Parts A & B',
        'Often includes Part D',
        'May include dental/vision',
        'Prescription drug coverage',
        'Telehealth services'
      ],
      rural: [
        'Special rural plan options',
        'Transportation benefits',
        'Extended provider networks'
      ],
      popular: true
    },
    {
      id: 'supplement',
      name: 'Medicare Supplement',
      subtitle: 'Medigap',
      monthlyPremium: '$50 - $300',
      description: 'Helps pay for costs not covered by Original Medicare.',
      benefits: [
        'Fills gaps in Original Medicare',
        'Predictable costs',
        'No network restrictions',
        'Guaranteed renewable',
        'Travel coverage'
      ],
      rural: [
        'Coverage for long-distance travel',
        'No referrals needed',
        'Works with any Medicare provider'
      ],
      popular: false
    }
  ];

  const ruralBenefits = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Critical Access Hospitals',
      description: 'Special coverage for rural hospitals that provide essential services to remote communities.'
    },
    {
      icon: <Phone className="h-8 w-8 text-green-500" />,
      title: 'Telehealth Services',
      description: 'Extended coverage for remote consultations when travel to providers is difficult.'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: 'Rural Health Clinics',
      description: 'Enhanced benefits for federally qualified health centers in underserved areas.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-orange-500" />,
      title: 'Transportation Assistance',
      description: 'Some plans offer help with medical transportation costs for rural residents.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Medicare Plans for Rural Communities</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore Medicare options designed to meet the unique healthcare needs of rural Americans, including extended coverage and special benefits.
        </p>
      </div>

      {/* Plan Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white rounded-xl shadow-lg p-6 relative transition-all duration-200 cursor-pointer hover:shadow-xl ${
              selectedPlan === plan.id ? 'ring-2 ring-blue-500 transform scale-105' : ''
            } ${plan.popular ? 'border-2 border-blue-500' : ''}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-gray-600">{plan.subtitle}</p>
              <div className="text-3xl font-bold text-blue-600 mt-2">{plan.monthlyPremium}</div>
              <p className="text-sm text-gray-500">per month</p>
            </div>
            
            <p className="text-gray-600 mb-4 text-center">{plan.description}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Standard Benefits:</h4>
              <ul className="space-y-1">
                {plan.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Rural Benefits:</h4>
              <ul className="space-y-1">
                {plan.rural.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-4 py-2 rounded-lg font-medium transition-colors duration-200">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Rural-Specific Benefits */}
      <div className="bg-blue-50 rounded-xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Special Rural Healthcare Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ruralBenefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-auto mb-4 shadow-md">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enrollment Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Enrollment Periods</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900">Initial Enrollment Period</h4>
              <p className="text-gray-600">7-month period around your 65th birthday</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-900">Annual Open Enrollment</h4>
              <p className="text-gray-600">October 15 - December 7 each year</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-gray-900">Special Enrollment</h4>
              <p className="text-gray-600">When you move or lose coverage</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Help Choosing</h3>
          <p className="text-gray-600 mb-6">
            Rural Medicare decisions can be complex. Our specialists understand the unique challenges of rural healthcare and can help you find the right plan.
          </p>
          
          <div className="space-y-4">
            <a
              href="tel:1-800-633-4227"
              className="flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call 1-800-MEDICARE
            </a>
            
            <button className="flex items-center justify-center w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-medium transition-colors duration-200">
              Schedule Consultation
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Cost Information */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Understanding Medicare Costs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Premiums</h4>
            <p className="text-gray-600 text-sm">Monthly payments for your plan</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Deductibles</h4>
            <p className="text-gray-600 text-sm">Amount you pay before coverage begins</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Copayments</h4>
            <p className="text-gray-600 text-sm">Fixed amount for services</p>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-4 text-sm">
          *Premium amounts shown are for 2025 and may vary based on income and location.
        </p>
      </div>
    </div>
  );
};

export default MedicarePlans;