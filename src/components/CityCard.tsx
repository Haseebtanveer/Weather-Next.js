import React from 'react';

interface CityCardProps {
  city: string;
  onClick: () => void;
}
//Hasebjbj

const CityCard: React.FC<CityCardProps> = ({ city, onClick }) => {
  return (
    <div 
      className="p-4 m-2 border-rose-900 bg-teal-600 rounded shadow-md cursor-pointer hover:bg-teal-700 transition max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
      onClick={onClick}
    >
      <h3 className="text-slate-200 text-center text-lg font-semibold">{city}</h3>
    </div>
  );
};

export default CityCard;
