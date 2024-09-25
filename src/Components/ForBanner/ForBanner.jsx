import { NavLink } from "react-router-dom";

const ForBanner = () => {
    return (
        <div className="bg-gray-400 w-full flex justify-center rounded">
            <div className="lg:flex">
                <div className="flex flex-col justify-center p-20 gap-20">
                    <h3 className="text-7xl font-bold text-black">No One Goes Bankrupt By Buying Books</h3>
                    <div>
                        <NavLink to={'/listed'}><button className="btn bg-green-500 text-white border-none text-xl">View The List</button></NavLink>
                    </div>
                </div>
                <div className="p-20 flex justify-center">
                    <img className="w-6/12" src="/src/assets/img/react book.jpg" alt="Book" />
                </div>
            </div>
        </div>
    );
};

export default ForBanner;