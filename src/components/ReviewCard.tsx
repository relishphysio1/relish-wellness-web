
import { Star } from "lucide-react";

interface ReviewCardProps {
  patientInitials: string;
  rating: number;
  comment: string;
  date?: string;
}

const ReviewCard = ({ patientInitials, rating, comment, date }: ReviewCardProps) => {
  // For comments that are too long, truncate them
  const truncateComment = (text: string, maxLength: number = 250) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="bg-white rounded-xl p-6 card-shadow h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-relish-100 flex items-center justify-center text-relish-700 font-medium mr-3">
          {patientInitials}
        </div>
        <div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          {date && <p className="text-xs text-gray-500 mt-1">{date}</p>}
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-grow">{truncateComment(comment)}</p>
    </div>
  );
};

export default ReviewCard;
