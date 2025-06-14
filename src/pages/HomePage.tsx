import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import AppointmentForm from "@/components/AppointmentForm";
import ContactMap from "@/components/ContactMap";
import { MapPin, Phone, MessageSquare, ArrowDown, Star, Stethoscope } from "lucide-react";

const HomePage = () => {
  // Featured services (simplified versions)
  const featuredServices = [
    {
      id: 1,
      title: "Ultrasound Therapy",
      description: "Non-invasive treatment using sound waves to reduce pain and promote healing in injured tissues.",
      imageSrc: "/lovable-uploads/01292324-cb51-41f6-bd7a-1c494545808a.png",
      altText: "Physiotherapist performing ultrasound therapy on patient's leg with handheld device and gel"
    },
    {
      id: 2,
      title: "Interferential Therapy",
      description: "Two medium-frequency electrical currents that intersect to create therapeutic low-frequency stimulation.",
      imageSrc: "/lovable-uploads/c220c26b-4bc1-4d9d-98b4-337454da8afb.png",
      altText: "Physiotherapist applying interferential therapy electrodes to patient's leg with visible wires and equipment"
    },
    {
      id: 3,
      title: "Exercise Therapy",
      description: "Custom-designed exercise programs to improve mobility, strength, coordination, and overall function.",
      imageSrc: "/lovable-uploads/0651f71a-9e1c-4cc0-ac06-d637f4c03ad3.png",
      altText: "Patient performing exercise therapy with physiotherapist guidance using resistance bands"
    },
  ];

  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-relish-400 to-wellness-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-wellness-400 to-relish-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-br from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <img 
                  src="/lovable-uploads/ef07cefb-61d9-43a4-9a0a-d7fea8f18b3f.png" 
                  alt="Relish Physiotherapy Logo" 
                  className="h-12 sm:h-16 lg:h-20 drop-shadow-lg" 
                />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight text-gray-900">
                  <span className="bg-gradient-to-r from-relish-600 to-wellness-600 bg-clip-text text-transparent">
                    Revitalize Your Body
                  </span>
                  <br />
                  <span className="text-gray-800">with Expert Care</span>
                </h1>
                
                <p className="text-base sm:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto lg:mx-0">
                  At Relish Physiotherapy and Wellness Centre, Dr. Mohammed Hamid Ali, BPT combines advanced techniques and personalized care to help you recover, strengthen, and live pain-free.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-relish-600 to-relish-700 hover:from-relish-700 hover:to-relish-800 text-white px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                  onClick={scrollToAppointment}
                >
                  Book Appointment
                </Button>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="border-2 border-relish-600 text-relish-600 hover:bg-relish-50 px-6 py-3 text-base font-semibold w-full sm:w-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 backdrop-blur-sm bg-opacity-95">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-relish-500 to-wellness-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Professional Care</h3>
                    <p className="text-gray-600 text-base">Excellence in Every Treatment</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-3">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-relish-600">40+</div>
                      <div className="text-xs sm:text-sm text-gray-600">5-Star Reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-wellness-600">6+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden sm:flex">
          <p className="text-sm text-gray-600 mb-2">Discover our services</p>
          <ArrowDown className="w-5 h-5 text-relish-600 animate-bounce" />
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-relish-100 p-3 rounded-full flex-shrink-0">
                <MapPin className="h-6 w-6 text-relish-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Our Location</p>
                <p className="text-gray-600">Toli Chowki, Hyderabad</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-end gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-relish-100 p-3 rounded-full flex-shrink-0">
                <Phone className="h-6 w-6 text-relish-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone Number</p>
                <p className="text-gray-600">+91 76010 26596</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Doctor Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="bg-relish-100 p-3 rounded-full">
                  <Stethoscope className="h-8 w-8 text-relish-600" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900">
                  About the <span className="bg-gradient-to-r from-relish-600 to-wellness-600 bg-clip-text text-transparent">Doctor</span>
                </h2>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    👨‍⚕️ About Dr. Mohammed Hamid Ali
                  </h3>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p className="text-lg sm:text-xl">
                    Dr. Mohammed Hamid Ali is a certified physiotherapist, holding a Bachelor of Physiotherapy (BPT) degree, with over 6 years of hands-on clinical experience in guiding patients toward pain-free, active living. Known for his gentle demeanor and precise approach, Dr. Hamid combines deep medical knowledge with a sincere commitment to patient wellbeing.
                  </p>
                  
                  <p className="text-lg sm:text-xl">
                    His treatment philosophy is rooted in both science and compassion — ensuring each patient receives not just professional care, but also understanding, encouragement, and respect. From chronic pain to post-injury rehab, Dr. Hamid's expertise helps individuals regain mobility, confidence, and joy in everyday movement.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="bg-relish-50 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">BPT Certified</h4>
                    <p className="text-sm text-gray-600">Professional Qualification</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-wellness-50 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">⏱️</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">6+ Years</h4>
                    <p className="text-sm text-gray-600">Clinical Experience</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-50 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">❤️</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Compassionate</h4>
                    <p className="text-sm text-gray-600">Patient-Centered Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-relish-600 to-wellness-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of physiotherapy treatments tailored to meet your specific needs and promote optimal recovery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                altText={service.altText}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-2 border-relish-600 text-relish-600 hover:bg-relish-50 px-8 py-4 text-lg font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Appointment and Map Section */}
      <section id="appointment" className="py-16 md:py-24 px-4 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 text-gray-900">
              Book Your <span className="bg-gradient-to-r from-relish-600 to-wellness-600 bg-clip-text text-transparent">Appointment</span>
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Take the first step towards recovery. Schedule a consultation with Dr. Mohammed Hamid Ali, BPT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AppointmentForm />
            <ContactMap 
              mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.326836341144!2d78.4064509!3d17.3960958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97c8eb026f65%3A0x5e83196a16a5e123!2sRelish%20Physiotherapy%20%26%20Wellness%20Centre!5e0!3m2!1sen!2sin!4v1743524668355!5m2!1sen!2sin" 
              className="h-full min-h-[400px] rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-relish-50 to-wellness-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 text-gray-900">
              What Our <span className="bg-gradient-to-r from-relish-600 to-wellness-600 bg-clip-text text-transparent">Patients Say</span>
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Read what our patients have to say about their experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "After months of back pain, I found relief after just a few sessions at Relish Physiotherapy. The therapists are knowledgeable, caring, and attentive."
              </p>
              <p className="text-gray-900 font-semibold">- R.K.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "The exercise therapy program designed for me was excellent. I've regained strength in my knee and can now walk without pain. Highly recommended!"
              </p>
              <p className="text-gray-900 font-semibold">- S.M.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "Professional, punctual, and effective treatment. The clinic is clean and well-equipped. Will definitely continue my therapy here."
              </p>
              <p className="text-gray-900 font-semibold">- A.P.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/reviews">
              <Button variant="outline" size="lg" className="border-2 border-relish-600 text-relish-600 hover:bg-relish-50 px-8 py-4 text-lg font-semibold">
                Read All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
