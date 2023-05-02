import { useNavigate } from "react-router-dom";
import Button from "../buttons";
import { api } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    await api.post(
      "/logout/",
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="w-full flex justify-end bg-white fixed shadow-md py-6">
      <div className="flex justify-between w-1/4 mr-4">
        <Button
          handleClick={handleLogin}
          name={"Log out"}
          className="bg-primary text-white text-center border-none outline-none"
        />
      </div>
    </div>
  );
};
export default Navbar;
