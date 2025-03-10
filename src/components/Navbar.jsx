import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className=" w-screen h-max bg-yellow-950 py-3 px-6 flex justify-between items-center shadow-lg ">
                <Link to="/RawHerb/" >
                    <div className="flex items-center gap-3 cursor-default">
                        {/*logo, name*/}
                        <img src="/RawHerb/assets/images/logo1.png" alt="logo" className=" w-18 h-20" />
                        <span className=" font-bold text-4xl ">RawHerb</span>
                    </div>
                </Link>

                <div>
                    {/*Home, Cart, Login */}
                    <ul className=" flex gap-6 text-lg">
                        <li><NavLink to="/RawHerb/" className={({ isActive }) => `${isActive ? " text-gray-500 text-2xl italic" : ""} hover:text-gray-400 cursor-pointer font-medium`}>Home</NavLink></li>
                        <li><NavLink to="/RawHerb/cart/" className={({ isActive }) => `${isActive ? " text-gray-500 text-2xl italic" : ""} hover:text-gray-400 cursor-pointer font-medium`}>Cart</NavLink></li>
                        <li><NavLink to="/RawHerb/login/" className={({ isActive }) => `${isActive ? " text-gray-500 text-2xl italic" : ""} hover:text-gray-400 cursor-pointer font-medium`}>Login</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
}

export default Navbar;