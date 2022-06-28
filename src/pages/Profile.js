import React from "react";
import { useAuth } from "../context/Auth/AuthContext";

const Profile = () => {
  const { auth } = useAuth();

  return (
    <div>
      <h1 className="w-72">profile: </h1>
      <li>{auth.name}</li>
      <li>{auth.phoneNumber}</li>
      <li>{auth.email}</li>
    </div>
  );
};

export default Profile;
