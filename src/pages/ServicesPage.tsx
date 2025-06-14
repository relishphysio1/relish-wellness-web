import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    id: 1,
    title: "Ultrasound Therapy",
    description: "Ultrasound therapy uses high-frequency sound waves to stimulate deep tissue heating, increasing blood flow, reducing pain and swelling, and accelerating healing. It's particularly effective for treating chronic conditions such as tendonitis, muscle spasms, and joint contractures. Our trained physiotherapists use ultrasound therapy as part of a comprehensive treatment plan tailored to your specific needs.",
    imageSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", // Physical therapy session - ultrasound device being used
    altText: "Physiotherapist performing ultrasound therapy on patient"
  },
  {
    id: 2,
    title: "Interferential Therapy",
    description: "Interferential therapy utilizes two medium-frequency electrical currents that intersect within the tissues to create a low-frequency current at the point of intersection. This therapeutic approach helps to reduce pain, decrease inflammation, stimulate muscle, and promote healing. It's gentle on sensitive tissues and effective for treating a wide range of conditions, from acute injuries to chronic pain syndromes.",
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", // Medical equipment with electrodes for electrotherapy
    altText: "Interferential therapy electrical stimulation treatment"
  },
  {
    id: 3,
    title: "Exercise Therapy",
    description: "Our exercise therapy programs are custom-designed to address your specific condition and goals. Through a series of targeted movements and activities, we help improve your mobility, strength, coordination, and overall function. Whether recovering from an injury, managing a chronic condition, or seeking to enhance performance, our expert physiotherapists will guide you through appropriate exercises and progressively adjust your program as you improve.",
    imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", // Physical therapy exercise equipment and therapy session
    altText: "Patient doing exercise therapy with physiotherapist guidance"
  },
  {
    id: 4,
    title: "TENS Therapy",
    description: "Transcutaneous Electrical Nerve Stimulation (TENS) therapy uses low-voltage electrical currents to provide pain relief. The small electrical pulses, delivered through electrodes placed on the skin, work by either blocking pain signals from reaching the brain or by stimulating the production of endorphins, your body's natural painkillers. TENS therapy is particularly useful for both acute and chronic pain management with minimal side effects.",
    imageSrc: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", // TENS unit with electrodes for pain management therapy
    altText: "TENS therapy electrodes being applied for pain relief treatment"
  },
  {
    id: 5,
    title: "Consultation & Rehabilitation",
    description: "Our comprehensive consultation and rehabilitation services begin with a thorough assessment of your condition, medical history, and goals. Based on this evaluation, we develop a personalized treatment plan that may include a combination of hands-on techniques, therapeutic exercises, and advice on lifestyle modifications. We regularly reassess your progress and adjust your treatment plan to ensure optimal outcomes and help you return to your daily activities with confidence.",
    imageSrc: "https://images.unsplash.com/photo-1584516244728-606874168ae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", // Doctor consultation with patient - medical examination
    altText: "Physiotherapist consulting and examining patient"
  },
  {
    id: 6,
    title: "Manual Therapy",
    description: "Manual therapy encompasses a range of hands-on techniques performed by our skilled physiotherapists to treat musculoskeletal pain and disability. These may include joint mobilization, manipulation, soft tissue mobilization, and therapeutic massage. By applying controlled forces to joints and soft tissues, we help improve mobility, reduce pain, and enhance overall function, often achieving results where other approaches have been unsuccessful.",
    imageSrc: "https://images.unsplash.com/photo-1594824804732-ca8db4d13e4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", // Hands-on manual therapy treatment session
    altText: "Physiotherapist performing manual therapy and massage treatment"
  },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-relish-100 to-wellness-100 py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h1 className="heading-1 mb-6 text-gray-800">Our Services</h1>
            <p className="paragraph max-w-3xl mx-auto">
              At Relish Physiotherapy and Wellness Centre, we offer a comprehensive range of evidence-based treatments designed to address various conditions and promote optimal physical health.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                altText={service.altText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-relish-600 to-relish-700 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Healing Journey?</h2>
            <p className="text-lg mb-8 text-white/90">
              Our team of experienced physiotherapists is here to help you achieve optimal physical health and wellbeing.
            </p>
            <a href="/#appointment">
              <button className="bg-white text-relish-700 hover:bg-gray-100 rounded-lg px-8 py-3 font-medium transition-colors duration-200">
                Book an Appointment
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
