import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ConditionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
  altText: string;
}

const ConditionCard = ({ title, description, imageSrc, slug, altText }: ConditionCardProps) => {
  return (
    <Link 
      to={`/conditions/${slug}`}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageSrc} 
          alt={altText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-relish-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <span className="inline-flex items-center text-relish-600 font-medium group-hover:gap-2 transition-all">
          Read More <ArrowRight className="w-4 h-4 ml-1" />
        </span>
      </div>
    </Link>
  );
};

export default ConditionCard;
