import { Outlet } from "react-router-dom";
// import HomePage from "../HomePage/HomePage";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="w-[90%] mx-auto my-6 flex flex-col gap-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;