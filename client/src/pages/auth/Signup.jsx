import { useState } from "react";
import { MdEmail } from "react-icons/md";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";

const Signup = () => {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSignup = async (e) => {
    try {
      if (
        formData.username != "" &&
        formData.email != "" &&
        formData.password != ""
      ) {
        e.preventDefault();
        await api.post("/register/", {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });

        navigate('/login')
      } else {
        setError('PLease fill all required fields');
      }
    } catch (err) {
      console.log(`Error is ${err}`);
      setError('Server error')
    }
  };
  return (
    <div className="flex items-center justify-center px-20 py-8 sm:px-10 pt-40 w-2/3 mx-auto">
      <div
        className={`bg-white shadow-md w-1/3 space-y-6 p-6 ${
          error && "space-y-[12px]"
        } sm:w-full sm:px-12 sm:border md:w-3/4 lg:w-3/4 xl:w-3/4 `}
      >
        {error && (
          <div className="flex w-full justify-center text-primary text-2xl">
            <p>{error}</p>
          </div>
        )}
        <div>
          <p className="font-semibold text-center">Join us</p>
        </div>
        <div className="w-full flex justify-center">
          <Input
            type={"text"}
            placeholder={"Enter  Names"}
            handleChange={handleChange}
            name={"username"}
            value={formData.names}
          />
        </div>
        <div className="w-full flex justify-center">
          <Input
            type={"email"}
            placeholder={"Enter Your Email"}
            icon={<MdEmail />}
            handleChange={handleChange}
            name={"email"}
            value={formData.email}
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
            Sign up
          </button>
        </div>
        <div className="w-full flex justify-center">
          <p>
            Have account?{" "}
            <Link to="/login" className="text-primary font-semibold">
              {" "}
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
