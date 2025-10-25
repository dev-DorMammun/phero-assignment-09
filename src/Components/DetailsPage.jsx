import React from "react";
import { FaRegStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import FormPhoto from "../assets/form.svg";
import { toast } from "react-toastify";

const DetailsPage = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const handleBooking = (event) => {
    event.preventDefault();
    toast.success("Session Booked! You'll receive a follow up email soon");
  };

  const {
    skillName,
    image,
    providerName,
    rating,
    price,
    providerEmail,
    slotsAvailable,
    description,
    category,
  } = data.find((element) => element.skillId == id);

  return (
    <div className="flex flex-col gap-5 md:gap-20">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5  ">
        <img src={image} alt="" className="w-full rounded-lg" />
        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-blue-700">{skillName}</h1>
          <div>
            <p className="text-gray-500">
              by <a className="link">{providerName}</a>
            </p>
            <a className="link text-gray-500">{providerEmail}</a>
          </div>
          <div className="flex gap-2 items-center text-xl font-semibold">
            Rating:
            <div>
              <FaRegStar />
            </div>
            <div>{rating}/5</div>
          </div>
          <div className="text-4xl text-green-500 font-bold">$ {price}</div>
          <div className="font-semibold">
            Hurry Up! Only{" "}
            <span className="text-blue-700">{slotsAvailable}</span> seats
            available.
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-xl text-gray-500 italic">
              Description
            </h3>
            <p className="text-gray-500">{description}</p>
          </div>
          <button className="btn">{category}</button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-5">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold my-5">Book a Session</h1>

          <form className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" required name="name" />
            <label className="label">E-mail</label>
            <input type="email" className="input" required name="email" />
            <div>
              <button
                type="submit"
                onClick={handleBooking}
                className="btn bg-blue-700 my-4 rounded-sm border-none text-white font-semibold"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-1">
          <img src={FormPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
