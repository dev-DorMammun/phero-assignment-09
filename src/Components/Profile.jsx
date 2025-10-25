import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import ProfilePhoto from "../assets/profile.svg";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setLoading, setUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (event) => {
    event.preventDefault();

    const displayName = event.target.name.value;
    const photoURL = event.target.photo.value;
    if (displayName || photoURL) {
      setLoading(true);

      await updateProfile(user, {
        displayName,
        photoURL,
      });

      setUser(user);
      setLoading(false);
      toast.success("Profile Updated");
      event.target.reset();
    } else toast.error("Something happened");
  };

  return (
    <div className="flex flex-col gap-20 md:grid items-center md:grid-cols-2">
      <div data-aos="fade-right">
        <img src={ProfilePhoto} alt="" className="w-full" />
      </div>
      <div data-aos="fade-left" className="space-y-3">
        <img src={user.photoURL} alt="" className="rounded-full" width={150} />
        <div>
          <h1 className="text-2xl font-bold">{user.displayName}</h1>
          <p className="text-gray-500">{user.email}</p>
        </div>
        {!show && (
          <button
            className="btn bg-blue-700 text-white rounded-sm border-none"
            onClick={() => setShow(true)}
          >
            Update Profile
          </button>
        )}
        {show ? (
          <form className="fieldset w-4/6" onSubmit={handleUpdateProfile}>
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Name"
              name="name"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Photo URL"
              name="photo"
            ></input>
            <div className="flex gap-3 items-center">
              <button
                type="submit"
                className="btn my-3 bg-blue-700 text-white rounded-sm border-none"
              >
                Update Profile
              </button>
              <button className="btn" onClick={() => setShow(false)}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Profile;
