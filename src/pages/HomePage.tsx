
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import AppointmentForm from "@/components/AppointmentForm";
import ContactMap from "@/components/ContactMap";
import { MapPin, Phone, MessageSquare, ArrowDown, Star } from "lucide-react";

const HomePage = () => {
  // Featured services (simplified versions)
  const featuredServices = [
    {
      id: 1,
      title: "Ultrasound Therapy",
      description: "Non-invasive treatment using sound waves to reduce pain and promote healing in injured tissues.",
      imageSrc: "https://images.unsplash.com/photo-1631044558476-eae244bb3071?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      altText: "Ultrasound therapy treatment"
    },
    {
      id: 2,
      title: "Exercise Therapy",
      description: "Customized exercise programs designed to improve mobility, strength, and overall function.",
      imageSrc: "https://images.unsplash.com/photo-1624538000860-19a5d808f1e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      altText: "Physical therapist helping patient with exercise"
    },
    {
      id: 3,
      title: "Consultation & Rehabilitation",
      description: "Comprehensive assessment and personalized treatment plans for recovery and prevention.",
      imageSrc: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      altText: "Doctor consulting with patient"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-relish-100 to-wellness-100 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/aeedb6ef-0421-4a9b-a1c5-4c10e0e3b97d.png" 
                  alt="Relish Physiotherapy Logo" 
                  className="h-20 mr-3" 
                />
              </div>
              <h1 className="heading-1 mb-6 leading-tight text-gray-800">
                Revitalize Your Body with Expert Physiotherapy
              </h1>
              <p className="paragraph mb-8 max-w-xl">
                At Relish Physiotherapy and Wellness Centre, Dr. Mohammed Hamid Ali, BPT combines advanced techniques and personalized care to help you recover, strengthen, and live pain-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/7601026596">
                  <Button className="btn-primary w-full sm:w-auto">
                    Book an Appointment
                  </Button>
                </a>
                <Link to="/services">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Physiotherapist treating a patient"
                  className="rounded-xl shadow-xl object-cover h-[400px] w-full animate-float"
                />
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="bg-wellness-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-wellness-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Proven Results</p>
                      <p className="text-xs text-gray-500">40+ 5-star reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-sm text-gray-600 mb-2">Scroll to learn more</p>
          <ArrowDown className="w-5 h-5 text-relish-600 animate-bounce" />
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="bg-relish-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-relish-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Our Location</p>
                <p className="text-sm text-gray-600">Toli Chowki, Hyderabad</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <div className="bg-relish-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-relish-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Phone Number</p>
                <p className="text-sm text-gray-600">+91 76010 26596</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Services</h2>
            <p className="paragraph max-w-2xl mx-auto">
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
              <Button variant="outline" className="btn-outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Appointment and Map Section */}
      <section id="appointment" className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Book Your Appointment</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Take the first step towards recovery. Schedule a consultation with Dr. Mohammed Hamid Ali, BPT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AppointmentForm />
            <ContactMap 
              mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.326836341144!2d78.4064509!3d17.3960958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97c8eb026f65%3A0x5e83196a16a5e123!2sRelish%20Physiotherapy%20%26%20Wellness%20Centre!5e0!3m2!1sen!2sin!4v1743524668355!5m2!1sen!2sin" 
              className="h-full min-h-[300px]"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">What Our Patients Say</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Don't just take our word for it. Read what our patients have to say about their experiences.
            </p>
          </div>
          
          <div className="relative overflow-hidden px-4 py-8 bg-gradient-to-r from-relish-50 to-wellness-50 rounded-2xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-gray-700 italic">
                  "After months of back pain, I found relief after just a few sessions at Relish Physiotherapy. The therapists are knowledgeable, caring, and attentive."
                </p>
                <p className="mt-4 text-gray-900 font-medium">- R.K.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-gray-700 italic">
                  "The exercise therapy program designed for me was excellent. I've regained strength in my knee and can now walk without pain. Highly recommended!"
                </p>
                <p className="mt-4 text-gray-900 font-medium">- S.M.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-gray-700 italic">
                  "Professional, punctual, and effective treatment. The clinic is clean and well-equipped. Will definitely continue my therapy here."
                </p>
                <p className="mt-4 text-gray-900 font-medium">- A.P.</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/reviews">
                <Button variant="outline">
                  Read All Reviews
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
