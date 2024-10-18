import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useGlobalContext } from "../context/ecomContext";
const Login = () => {
  const { users, setUsers, setLogin } = useGlobalContext();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://umex.annenoaltd.com/api/login",
        user
      );
      localStorage.setItem("token", res.data.token);
      window.localStorage.setItem("islogin", true);
      setLogin(true);
      setUsers(res.data.user);
      setLoading(false);
      toast.success("Login Successfully");
      <Navigate to="/" />;
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error.response.data.message);

      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-xs">
        <form
          className="bg-white  rounded px-8 pt-6 pb-8 mb-4 authshadow"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="******************"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 w-[100%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {loading ? "Processing..." : "Login"}
            </button>
          </div>
          <div>
            <Link
              className="block text-center mt-5 font-bold text-sm text-stone-700"
              to="/Register"
            >
              Don't have an account ?{" "}
              <span className="text-blue-500 hover:text-blue-800">
                Register
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
