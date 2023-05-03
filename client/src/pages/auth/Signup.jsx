import { useCallback, useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
// import { useDispatch } from 'react-redux';
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import { api } from "../../api";
import { getURLWithQueryParams } from "../../utils";

// eslint-disable-next-line react/prop-types
const Signup = ({ receiveProviderToken, failToReceiveProviderToken }) => {
  const LINKEDIN_STATE = "DCEeFWf45A53sdfKef424";
  const LINKEDIN_SCOPE = "r_liteprofile r_emailaddress";
  const LINKEDIN_RIDERECT = "http://127.0.0.1:5173";
  const LINKEDIN_CLIENT_ID = "864d1ftwkz3fhx";
  const LINKEDIN_URL = getURLWithQueryParams(
    "https://www.linkedin.com/oauth/v2/authorization",
    {
      response_type: "code",
      client_id: LINKEDIN_CLIENT_ID,
      redirect_uri: LINKEDIN_RIDERECT,
      state: LINKEDIN_STATE,
      scope: LINKEDIN_SCOPE,
    }
  );
  const PROVIDER = {
    LINKEDIN: "linkedin",
  };
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const signInWithLinkedin = useCallback(() => {
    window.open(LINKEDIN_URL, "_blank", "width=600,height=600");
    window.addEventListener("message", receiveLinkedInMessage);
  }, [])

  const popup = signInWithLinkedin();

  const receiveLinkedInMessage = useCallback((data) => {
    console.log(`data is ${data}`);
    if (origin !== window.location.origin || state !== LINKEDIN_STATE) return;
    
    if (code) {
      console.log(`data is ${rest}`);
      receiveProviderToken({ provider: PROVIDER.LINKEDIN, token: code });
    } else if (
      error &&
      !["user_cancelled_login", "user_cancelled_authorize"].includes(error)
    ) {
      console.log(`err is${error}`);
      failToReceiveProviderToken({
        provider: PROVIDER.LINKEDIN,
        error: { error, ...rest },
      });
    }
    popup.current?.close();
  }, [])

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
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(`Error is ${Object.keys(err.response)}`);
    }
  };
  useEffect(() => {
    const popup = signInWithLinkedin();
    window.addEventListener("message", receiveLinkedInMessage);

    return () => {
      popup?.close();
      window.removeEventListener("message", receiveLinkedInMessage);
    };
  }, [receiveLinkedInMessage, signInWithLinkedin]);
  return (
    <div className="flex items-center justify-center px-20 py-8 sm:px-10 pt-40 w-2/3 mx-auto">
      <div
        className={`bg-white shadow-md w-1/3 space-y-6 p-6 ${
          error && "space-y-[12px]"
        } sm:w-full sm:px-12 sm:border md:w-3/4 lg:w-3/4 xl:w-3/4 `}
      >
        {error && (
          <div className="flex w-full justify-center text-primary text-2xl">
            <p>Please fill all required fields</p>
          </div>
        )}
        <div>
          <p className="font-semibold text-center">Join us</p>
        </div>
        <div className="flex w-full justify-center">
          {/* <img src={'/signup.svg'} alt={"signupvg"} width={150} height={150} /> */}
        </div>
        <p className="text-center font-semibold">OR</p>
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
            className="bg-primary w-3/4 text-white py-2 rounded text-semibold text-lg outline-none border-none sm:py-1 w-2/3"
            onClick={handleSignup}
            type="submit"
          >
            Join Chat
          </button>
        </div>
        <p className="text-xl text-center">Or</p>
        <div className="w-full flex justify-center">
          <button
            className="bg-primary w-3/4 text-white py-2 rounded text-semibold text-lg outline-none border-none sm:py-1 w-2/3"
            onClick={signInWithLinkedin}
            type="submit"
          >
            Sign in with linkedin
          </button>
        </div>
        <div className="w-full flex justify-center">
          <p>
            Have account?{" "}
            <Link to="/auth" className="text-primary font-semibold">
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
