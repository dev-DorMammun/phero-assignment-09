import React, { use } from "react";
import HeroPhoto from "../assets/hero.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { useNavigate } from "react-router";

const data = fetch("data.json").then((response) => response.json());

const Hero = () => {
  const skills = use(data);
  const navigate = useNavigate();

  return (
    <div
      data-aos="zoom-out"
      className="flex flex-col gap-5 justify-center items-center"
    >
      <div className="text-center w-5/7 space-y-3">
        <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
          Learn. Share. Grow.
        </h1>
        <p className="text-gray-500">
          Discover new opportunities, connect with skilled individuals, and
          build a stronger local community through learning.
        </p>
        <button className="btn animate__heartBeat bg-linear-to-r from-blue-700 to-blue-400 border-none text-white font-semibold">
          Discover More
        </button>
      </div>

      <div className="flex justify-end">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          speed={3000} //
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          className="mySwiper w-4/7"
          style={{ transitionTimingFunction: "linear" }}
        >
          {skills.map((skill) => (
            <SwiperSlide
              key={skill.id}
              onClick={() => navigate(`/${skill.skillId}`)}
            >
              <img src={skill.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
