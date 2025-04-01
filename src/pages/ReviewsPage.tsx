
import { useState } from "react";
import ReviewCard from "@/components/ReviewCard";
import { Star } from "lucide-react";

const ReviewsPage = () => {
  // Mock data for reviews
  const allReviews = [
    { id: 1, patientInitials: "RK", rating: 5, comment: "After months of back pain, I found relief after just a few sessions at Relish Physiotherapy. The therapists are knowledgeable, caring, and attentive.", date: "June 15, 2023" },
    { id: 2, patientInitials: "SM", rating: 5, comment: "The exercise therapy program designed for me was excellent. I've regained strength in my knee and can now walk without pain. Highly recommended!", date: "July 3, 2023" },
    { id: 3, patientInitials: "AP", rating: 5, comment: "Professional, punctual, and effective treatment. The clinic is clean and well-equipped. Will definitely continue my therapy here.", date: "May 28, 2023" },
    { id: 4, patientInitials: "JD", rating: 4, comment: "Very satisfied with the ultrasound therapy I received for my shoulder injury. The pain has significantly reduced.", date: "August 10, 2023" },
    { id: 5, patientInitials: "MK", rating: 5, comment: "The staff is friendly and the physiotherapists are very knowledgeable. My recovery has been faster than I expected.", date: "July 22, 2023" },
    { id: 6, patientInitials: "VS", rating: 5, comment: "Best physiotherapy clinic in the area! The TENS therapy worked wonders for my chronic back pain.", date: "June 5, 2023" },
    { id: 7, patientInitials: "PL", rating: 4, comment: "Excellent service and care. The exercise routine they provided has helped me immensely.", date: "August 15, 2023" },
    { id: 8, patientInitials: "RS", rating: 5, comment: "The interferential therapy was very effective for my knee pain. I can now walk comfortably.", date: "July 10, 2023" },
    { id: 9, patientInitials: "AK", rating: 5, comment: "The physiotherapists here are incredibly skilled. My recovery from surgery has been smooth thanks to their rehabilitation program.", date: "August 2, 2023" },
    { id: 10, patientInitials: "BT", rating: 4, comment: "Great experience overall. The manual therapy sessions have significantly improved my mobility.", date: "June 20, 2023" },
    { id: 11, patientInitials: "CM", rating: 5, comment: "I've been to many physiotherapy clinics, but Relish stands out for their personalized approach and effective treatments.", date: "July 15, 2023" },
    { id: 12, patientInitials: "DW", rating: 5, comment: "After my accident, I thought I'd never walk normally again. The team at Relish proved me wrong. Forever grateful!", date: "May 10, 2023" },
    { id: 13, patientInitials: "EJ", rating: 4, comment: "Prompt appointments, clean facility, and most importantly, effective treatment. My shoulder is much better now.", date: "August 5, 2023" },
    { id: 14, patientInitials: "FH", rating: 5, comment: "The consultation was thorough and the treatment plan was tailored to my specific needs. Seeing great improvement!", date: "July 8, 2023" },
    { id: 15, patientInitials: "GS", rating: 5, comment: "I appreciate the holistic approach to treatment. They didn't just treat my symptoms but addressed the root cause.", date: "June 12, 2023" },
    { id: 16, patientInitials: "HN", rating: 4, comment: "Professional and effective. The ultrasound therapy combined with exercises has been very beneficial.", date: "August 8, 2023" },
    { id: 17, patientInitials: "IP", rating: 5, comment: "Excellent care and attention to detail. The therapists are patient and ensure you understand the exercises.", date: "July 20, 2023" },
    { id: 18, patientInitials: "JM", rating: 5, comment: "After years of chronic pain, I finally found relief thanks to the comprehensive treatment at Relish.", date: "June 25, 2023" },
    { id: 19, patientInitials: "KL", rating: 4, comment: "The TENS therapy has been a game-changer for my chronic pain. Thank you for the excellent care.", date: "August 12, 2023" },
    { id: 20, patientInitials: "LB", rating: 5, comment: "I'm impressed with the knowledge and professionalism of the staff. My recovery has been better than expected.", date: "July 5, 2023" },
    { id: 21, patientInitials: "MA", rating: 5, comment: "The exercise program was challenging but effective. I've regained strength and flexibility in my injured leg.", date: "June 8, 2023" },
    { id: 22, patientInitials: "NP", rating: 4, comment: "Excellent physiotherapy services. The clinic is well-equipped and the staff is very professional.", date: "August 18, 2023" },
    { id: 23, patientInitials: "OT", rating: 5, comment: "I had severe neck pain that other treatments couldn't fix. After a few sessions here, I experienced significant relief.", date: "July 25, 2023" },
    { id: 24, patientInitials: "QZ", rating: 5, comment: "The therapists are attentive and the treatment is effective. My back pain has reduced significantly.", date: "June 30, 2023" },
    { id: 25, patientInitials: "RY", rating: 4, comment: "Prompt service, clean environment, and most importantly, effective treatment. Highly recommended!", date: "August 22, 2023" },
    { id: 26, patientInitials: "SX", rating: 5, comment: "I'm extremely satisfied with the care I received. The staff is knowledgeable and the treatment was effective.", date: "July 18, 2023" },
    { id: 27, patientInitials: "TV", rating: 5, comment: "After my sports injury, I thought I'd be out for months. Thanks to Relish, I was back in action in just weeks!", date: "June 15, 2023" },
    { id: 28, patientInitials: "UF", rating: 4, comment: "The rehabilitation program was comprehensive and effective. I've made great progress in a short time.", date: "August 25, 2023" },
    { id: 29, patientInitials: "WC", rating: 5, comment: "The personalized care and attention to detail is impressive. My shoulder mobility has improved significantly.", date: "July 28, 2023" },
    { id: 30, patientInitials: "XE", rating: 5, comment: "After trying various treatments for my chronic back pain, the approach at Relish finally provided relief.", date: "June 22, 2023" },
    { id: 31, patientInitials: "YR", rating: 4, comment: "The interferential therapy combined with exercises has been very effective for my knee pain.", date: "August 30, 2023" },
    { id: 32, patientInitials: "ZQ", rating: 5, comment: "Professional, friendly, and effective. The clinic is clean and well-organized. Highly recommended!", date: "July 12, 2023" },
    { id: 33, patientInitials: "AA", rating: 5, comment: "The consultation was thorough and the treatment plan was tailored to my specific condition. Seeing great results!", date: "June 3, 2023" },
    { id: 34, patientInitials: "BB", rating: 4, comment: "Excellent physiotherapy services. The staff is knowledgeable and the treatment is effective.", date: "August 5, 2023" },
    { id: 35, patientInitials: "CC", rating: 5, comment: "After my accident, the team at Relish helped me regain mobility and strength. Forever grateful!", date: "July 15, 2023" },
    { id: 36, patientInitials: "DD", rating: 5, comment: "The ultrasound therapy combined with manual techniques has significantly reduced my shoulder pain.", date: "June 18, 2023" },
    { id: 37, patientInitials: "EE", rating: 4, comment: "Professional and caring staff. The treatment plan was effective and I've made great progress.", date: "August 28, 2023" },
    { id: 38, patientInitials: "FF", rating: 5, comment: "I had chronic neck pain for years. After a few sessions at Relish, I experienced significant relief.", date: "July 30, 2023" },
    { id: 39, patientInitials: "GG", rating: 5, comment: "The exercise therapy program was challenging but very effective. My mobility has improved tremendously.", date: "June 25, 2023" },
    { id: 40, patientInitials: "HH", rating: 4, comment: "Excellent service and care. The clinic is clean, the staff is friendly, and the treatment is effective.", date: "August 15, 2023" },
  ];

  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter reviews based on rating and search term
  const filteredReviews = allReviews.filter((review) => {
    const matchesRating = filterRating === null || review.rating === filterRating;
    const matchesSearch = review.comment.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRating && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-relish-100 to-wellness-100 py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h1 className="heading-1 mb-6 text-gray-800">Patient Reviews</h1>
            <p className="paragraph max-w-3xl mx-auto">
              Read what our patients have to say about their experiences at Relish Physiotherapy and Wellness Centre.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-relish-500 w-full sm:w-64"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <div className="flex justify-center gap-2">
                <button 
                  onClick={() => setFilterRating(null)} 
                  className={`px-3 py-1 rounded-md border ${filterRating === null ? 'bg-relish-600 text-white border-relish-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                >
                  All
                </button>
                {[5, 4, 3].map((rating) => (
                  <button 
                    key={rating}
                    onClick={() => setFilterRating(rating)}
                    className={`px-3 py-1 rounded-md border flex items-center ${filterRating === rating ? 'bg-relish-600 text-white border-relish-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                  >
                    {rating} <Star className="w-4 h-4 ml-1 fill-current" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding">
        <div className="container">
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  patientInitials={review.patientInitials}
                  rating={review.rating}
                  comment={review.comment}
                  date={review.date}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No reviews found matching your criteria.</p>
              <button 
                onClick={() => {setFilterRating(null); setSearchTerm("");}}
                className="mt-4 text-relish-600 hover:text-relish-700 underline font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-wellness-600 to-wellness-700 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Satisfied Patients</h2>
            <p className="text-lg mb-8 text-white/90">
              Experience the difference quality physiotherapy can make in your life. Book your appointment today.
            </p>
            <a href="/#appointment">
              <button className="bg-white text-wellness-700 hover:bg-gray-100 rounded-lg px-8 py-3 font-medium transition-colors duration-200">
                Book an Appointment
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
