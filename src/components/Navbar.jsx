import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="w-full h-max bg-yellow-950 py-3 px-6 md:py-4 md:px-8 flex justify-between items-center shadow-lg">
            <Link to="/RawHerb/">
                <div className="flex items-center gap-3 cursor-default">
                    {/* Logo and name */}
                    <img src="/RawHerb/assets/images/logo1.png" alt="logo" className="w-18 h-20" />
                    <span className="font-bold text-2xl md:text-4xl text-white">RawHerb</span>
                </div>
            </Link>

            <ul className="flex gap-5 text-lg">
                <li>
                    <NavLink
                        to="/RawHerb/"
                        className={"text-gray-100 text-2xl italic font-medium"}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/RawHerb/cart/"
                        className={({ isActive }) =>
                            ` cursor-pointer font-medium ${isActive ? "text-gray-500 text-2xl italic font-medium" : "hover:text-gray-400 text-white"
                            }`
                        }
                    >
                        Cart
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/RawHerb/login/"
                        className={({ isActive }) =>
                            `cursor-pointer font-medium ${isActive ? "text-gray-500 text-2xl italic font-medium" : "hover:text-gray-400 text-white"
                            }`
                        }
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
