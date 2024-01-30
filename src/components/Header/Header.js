import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProfile, setProfile } from "../../store/profile/profileSlice";
import { getApi } from "../../api/api";

const Header = () => {
  const profile = useSelector(getProfile);
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    const response = await getApi('/user/profile');
    dispatch(setProfile(response?.data));
  }

  useEffect(() => {
    if (!Object.keys(profile).length)
      fetchProfile();
  }, []);
  return (
    <div>
      <div className="header">
        <Link to="/">
          <div className="logo">Movie App</div>
        </Link>
        <div className="flex gap-5">
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <div className="logo">Home</div>
          </Link>
          <Link to="/recomended-movies" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <div className="logo">Recomended Movies</div>
          </Link>
        </div>
        <div className=" flex">
          <button
            className=" text-white font-bold py-2 px-4 rounded"
          >
            Change Password
          </button>
          <img src={user} alt="user" className="user-image" />

        </div>
      </div>
    </div>
  );
};

export default Header;
