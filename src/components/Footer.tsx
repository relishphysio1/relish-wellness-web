
import React from "react";
import { NavLink } from "react-router-dom";
import { MapPin, Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/aeedb6ef-0421-4a9b-a1c5-4c10e0e3b97d.png" 
                alt="Relish Physiotherapy Logo" 
                className="h-14 mr-2" 
              />
              <span className="text-lg font-semibold text-relish-600">Relish Physiotherapy & Wellness Centre</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Professional physiotherapy and wellness services by Dr. Mohammed Hamid Ali, BPT, dedicated to improving your quality of life.
            </p>
            <div className="flex gap-2">
              {/* Social Icons would go here */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-relish-600 transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-muted-foreground hover:text-relish-600 transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/reviews" className="text-muted-foreground hover:text-relish-600 transition-colors">
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/#appointment" className="text-muted-foreground hover:text-relish-600 transition-colors">
                  Book Appointment
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-relish-600 mt-0.5 mr-3" />
                <span className="text-muted-foreground">Relish Physiotherapy & Wellness Centre, near Masjid-e-Habeeba. Landmark: Green Chilla, Jamali Kunta, Toli Chowki, Hyderabad, Telangana 500008</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-relish-600 mr-3" />
                <span className="text-muted-foreground">+91 76010 26596</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="w-5 h-5 text-relish-600 mr-3" />
                <span className="text-muted-foreground">contact@relishphysio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Relish Physiotherapy and Wellness Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
