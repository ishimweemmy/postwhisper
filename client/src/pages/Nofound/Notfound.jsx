import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Notfound = () => {
const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000)
    }, [navigate])
    return (
        <div className="w-full flex justify-center h-full items-center pt-32 ">
            <div className="w-3/4 bg-white rounded shadow-md py-20 space-y-12">
                <p className="text-center text-3xl font-semibold text-primary"> 😓404😓</p>
                <p className="text-xl text-center font-semibold"> NOT FOUND</p>
                <p className="text-center text-xl">The page you are looking for is currently unavailable</p>
                <div className="w-full flex justify-center items-center">
                    <div className="w-3/4 flex justify-center">
                        <button className="w-1/4 py-2 bg-primary text-white font-semibold rounded flex items-center justify-center">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Notfound;