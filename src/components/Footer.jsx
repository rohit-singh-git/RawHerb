import { NavLink } from "react-router-dom";
import Contact from "../pages/Contact";

function Footer() {
    return (
        <>
            <div className=" w-full bg-yellow-950 text-white py-4 text-center mt-auto shadow-lg h-auto">
                <p className="text-lg">&copy; {new Date().getFullYear()} Brand Name. All Rights Reserved.</p>
                <div className="flex justify-center gap-6 mt-2">
                    <ul>
                        <li><NavLink to="/" className="hover:text-gray-200">Privacy Policy</NavLink></li>
                        <li><NavLink to="/contact-us" className="hover:text-gray-200">Contact Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;