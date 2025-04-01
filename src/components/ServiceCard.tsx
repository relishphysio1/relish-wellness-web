
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  className?: string;
}

const ServiceCard = ({ title, description, imageSrc, altText, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "group bg-white rounded-xl overflow-hidden card-shadow", 
      className
    )}>
      <div className="h-56 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={altText}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-relish-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
