import React from "react";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const Card = ({ skill }) => {
  const { skillName, skillId, providerName, rating, image, price } = skill;
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4 rounded-lg shadow-sm border border-gray-300 hover:bg-base-200 cursor-pointer bg-white">
      <img src={image} alt="" className="rounded-md" />
      <div>
        <h2 className="text-xl font-semibold text-blue-700">{skillName}</h2>
        <p className="text-gray-500">{providerName}</p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="text-xl font-bold text-green-500">$ {price}</div>
          <div className="flex gap-1 items-center">
            <div>
              <FaRegStar />
            </div>
            <div>{rating}/5</div>
          </div>
        </div>
        <div>
          <button
            onClick={() => navigate(`/${skillId}`)}
            className="btn  bg-blue-700 my-4 rounded-sm border-none text-white font-semibold"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
