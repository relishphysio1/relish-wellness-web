interface TherapyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TherapyCard = ({ title, description, icon }: TherapyCardProps) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="w-14 h-14 bg-gradient-to-br from-relish-100 to-wellness-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-relish-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default TherapyCard;
