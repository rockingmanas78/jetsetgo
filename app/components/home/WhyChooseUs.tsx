// pages/index.tsx
import { FC } from 'react';
import {
    GlobeAltIcon,
    SearchIcon,
    TagIcon,
    SupportIcon,
    ShieldCheckIcon,
    ClockIcon,
    TruckIcon,
  } from '@heroicons/react/outline';
  
  // Define the shape of a feature object
  interface Feature {
    icon: FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
  }
  
  // Updated array of features
  const features: Feature[] = [
    {
      icon: ClockIcon,
      title: 'Values Your Time',
      description: 'Always Punctual',
    },
    {
      icon: SearchIcon,
      title: '100% Transparency',
      description: 'Full clarity on what’s included and what’s not. No hidden tolls or extra charges.',
    },
    {
      icon: TagIcon,
      title: 'Amazing Prices',
      description: 'You won’t find better or fairer pricing. That’s a guarantee.',
    },
    {
      icon: SupportIcon,
      title: '24/7 Support',
      description: 'No hold time. Request a call and we’ll call you.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Safety First',
      description: 'Vaccinated drivers. Clean & Sanitized Vehicle.',
    },
    {
      icon: TruckIcon,
      title: 'Brand New Cabs',
      description: 'We service from Jamshedpur to all over Jharkhand.',
    },
  ];

const WhyChooseUs: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 md:py12 my-6 md:my-12">{/**  bg-[#003D60] */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Commitment to Excellence</h2>{/** text-gray-50 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 md:w-3/4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center text-[#003D60]">
            <feature.icon className="h-8 w-8 sm:w-12 sm:h-12 md:h-16 md:w-16 text-gray-400 font-thin" />
            <h3 className="text-base sm:text-lg md:text-xl font-bold mt-4 ">{feature.title}</h3>{/**  text-white */}
            <p className="text-xs sm:text-sm md:text-base">{feature.description}</p>{/** text-gray-300 */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
