import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Phone } from "lucide-react";

const CallbackForm = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || !name) {
      toast({
        title: "Please fill all fields",
        description: "Name and phone number are required.",
        variant: "destructive",
      });
      return;
    }

    // Open WhatsApp with pre-filled callback request
    const message = `Callback Request:\nName: ${name}\nPhone: ${phone}\n\nPlease call me back at your earliest convenience.`;
    window.open(
      `https://wa.me/917601026596?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    toast({
      title: "Request Sent!",
      description: "We will call you back shortly.",
    });

    setPhone("");
    setName("");
  };

  return (
    <div className="bg-gradient-to-br from-relish-50 to-wellness-50 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-relish-600 p-2 rounded-full">
          <Phone className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Request a Callback</h3>
      </div>
      <p className="text-gray-600 mb-6">
        Leave your details and we'll call you back within 30 minutes during working hours.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white"
        />
        <Input
          type="tel"
          placeholder="Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white"
        />
        <Button 
          type="submit" 
          className="w-full bg-relish-600 hover:bg-relish-700 text-white"
        >
          Request Callback
        </Button>
      </form>
    </div>
  );
};

export default CallbackForm;
