
import React from "react";
import { Star, Heart, Users, Award, Target, Lightbulb } from "lucide-react";
import StructuredData from "@/components/StructuredData";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <StructuredData 
        type="about" 
        pageTitle="About Dr. Hamid's Physio Clinic | Best Physiotherapist in Manikonda" 
        pageDescription="Learn about Dr. Mohammed Hamid Ali, BPT and Dr. Hamid's Physio Clinic in Puppalguda, Manikonda. Expert physiotherapy care since 2021 with 5-star ratings."
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-relish-50 via-wellness-50 to-blue-50 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-gray-900">
              About <span className="bg-gradient-to-r from-relish-600 to-wellness-600 bg-clip-text text-transparent">Dr. Hamid's Physio Clinic</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              & Wellness Centre
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                <strong>Alhamdulillah</strong>, since our founding in January 2021 by Dr. Hamid Ali, Dr. Hamid's Physio Clinic has grown into Manikonda's trusted destination for compassionate, five-star care. Located in Puppalguda near Friends Colony Park, <strong>Subhanallahi wabihamdihi</strong>, our commitment to excellence is reflected in every smile, every success story, and our consistent ⭐⭐⭐⭐⭐ ratings.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-gradient-to-br from-relish-50 to-wellness-50 rounded-2xl p-8 md:p-12 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-relish-600 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                To empower each patient on their journey to optimal movement and holistic wellness by delivering:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-relish-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-relish-600 rounded-full"></div>
                  </div>
                  <span>Personalized care tailored to individual goals and lifestyles</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-relish-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-relish-600 rounded-full"></div>
                  </div>
                  <span>Evidence-based treatments grounded in the latest physiotherapy research</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-relish-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-relish-600 rounded-full"></div>
                  </div>
                  <span>Spiritual sensitivity that honors our shared values</span>
                </li>
              </ul>
            </div>

            {/* Our Philosophy */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <div className="flex items-center mb-8">
                <div className="bg-wellness-600 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Philosophy</h2>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-4 border-relish-400 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Whole-Person Healing</h3>
                  <p className="text-gray-700">
                    We believe true rehabilitation addresses body, mind, and spirit—restoring not just function, but confidence and quality of life.
                  </p>
                </div>
                
                <div className="border-l-4 border-wellness-400 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Collaborative Partnership</h3>
                  <p className="text-gray-700">
                    You're at the center of your recovery plan. We listen, educate, and support you every step of the way.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Continuous Growth</h3>
                  <p className="text-gray-700">
                    Through ongoing training and advanced modalities, we remain at the forefront of physiotherapy innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Offer */}
            <div className="bg-gradient-to-br from-wellness-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="bg-wellness-600 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Orthopedic & Musculoskeletal Rehabilitation</h4>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Pain Management (Back, Neck, Joints)</h4>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Sports-Injury Prevention & Performance Enhancement</h4>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Soft-Tissue Mobilization & Corrective Exercise</h4>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md md:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-2">Ergonomic & Lifestyle Advice</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
