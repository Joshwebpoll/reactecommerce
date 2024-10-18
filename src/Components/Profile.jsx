import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState([]);
  data;
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch user profile data
        const response = await axios.get(
          "https://umex.annenoaltd.com/api/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Fetch token from local storage
            },
          }
        );
        response.data.user;
        setData(response.data.user);
        if (response.data.user) {
          <Navigate to="/" />;
        } else {
          <Navigate to="/login" />;
        }
      } catch (error) {
        error.response.data.message;
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <div>
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
      </div>
      ;
    </div>
  );
};

export default Profile;
