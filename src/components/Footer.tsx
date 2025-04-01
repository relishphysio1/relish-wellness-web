
import { NavLink } from "react-router-dom";
import { MapPin, Phone, MessageSquare, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-relish-600 mr-2">Relish</span>
              <span className="text-lg font-medium text-wellness-600">Physiotherapy</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Professional physiotherapy and wellness services dedicated to improving your quality of life.
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
                <span className="text-muted-foreground">123 Healing Street, Wellness City, WC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-relish-600 mr-3" />
                <span className="text-muted-foreground">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="w-5 h-5 text-relish-600 mr-3" />
                <span className="text-muted-foreground">contact@relishphysio.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-relish-600 mt-0.5 mr-3" />
                <div>
                  <span className="text-muted-foreground block">Mon-Fri: 9:00 AM - 7:00 PM</span>
                  <span className="text-muted-foreground block">Sat: 9:00 AM - 5:00 PM</span>
                </div>
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
