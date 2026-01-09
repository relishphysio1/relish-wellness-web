import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  const handleCall = () => {
    window.location.href = "tel:+917601026596";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/917601026596?text=Hi,%20I%20would%20like%20to%20book%20a%20physiotherapy%20appointment.",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg p-3">
      <div className="flex gap-3">
        <Button 
          onClick={handleCall}
          className="flex-1 bg-relish-600 hover:bg-relish-700 text-white py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </Button>
        <Button 
          onClick={handleWhatsApp}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
