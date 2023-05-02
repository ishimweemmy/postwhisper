import { useState } from "react";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSignup = async (e) => {
    try {
      if (formData.username != "" && formData.password != "") {
        e.preventDefault();
        await api
          .post("/login/", {
            username: formData.username,
            password: formData.password,
          })
          .then(response => {
            dispatch(login(response.data));
          });

        navigate("/");
      } else {
        setError('Please fill all required fields');
      }
    } catch (err) {
      console.log(`Error is ${err}`);
      setError('Server error ')
    }
  };
  return (
    <div className="flex items-center justify-center px-20 py-8 sm:px-10 pt-40 w-2/3 mx-auto">
      <div
        className={`bg-white shadow-md w-1/3 space-y-12 p-6 ${
          error && "space-y-[12px]"
        } sm:w-full sm:px-12 sm:border md:w-3/4 lg:w-3/4 xl:w-3/4 `}
      >
        {error && (
          <div className="flex w-full justify-center text-primary text-2xl">
            <p>{error}</p>
          </div>
        )}
        <div>
          <p className="font-semibold text-center">Login</p>
        </div>
        <div className="w-full flex justify-center">
          <Input
            type={"text"}
            placeholder={"Enter Your username"}
            handleChange={handleChange}
            name={"username"}
            value={formData.username}
          />
        </div>
        <div className="w-full flex justify-center">
          <Input
            type={"password"}
            placeholder={"Password"}
            handleChange={handleChange}
            name={"password"}
            value={formData.password}
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-primary w-[75%] text-white py-2 rounded text-semibold text-lg outline-none border-none sm:py-1"
            onClick={handleSignup}
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="w-full flex justify-center">
          <p>
            Don&apos;t have account?{" "}
            <Link to="/register" className="text-primary font-semibold">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
