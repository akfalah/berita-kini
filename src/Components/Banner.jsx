import { useState, useEffect } from "react";
import banner1 from "../Assets/Images/banner-1.png";
import banner2 from "../Assets/Images/banner-2.png";
import banner3 from "../Assets/Images/banner-3.png";

const banners = [banner1, banner2, banner3];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col items-center space-y-6">
      <div className="relative w-full h-[407px] overflow-hidden rounded-3xl">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            className={`w-full h-[407px] object-cover object-center rounded-3xl absolute transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? 'translate-x-0'
                : index < currentIndex
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
          />
        ))}
      </div>

      <div className="flex items-center space-x-2">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`w-[9.29px] h-[9.29px] rounded-full ${
              index === currentIndex ? "bg-primary-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;