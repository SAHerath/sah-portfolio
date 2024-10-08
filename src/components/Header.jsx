import { Link } from "react-router-dom";
import {PiListBold, PiXBold} from "react-icons/pi";

const Header = () => {
    const handleResume = () => {
        console.log("hello handleResume!");
    }
     
    return ( 
        <header className="fixed w-full z-40 bg-gradient-to-b from-gray-800 from-5% backdrop-blur-lg shadow-xl">
            <nav className="font-nunito text-slate-300">
                <div className="h-16 flex justify-between items-strech px-4">
                    <h1 className="self-center">
                        <a href="" className="hover:shadow-glow">MyLogo</a>
                    </h1>
                    <ul className="hidden sm:flex items-center">
                        <li>
                            <Link className="block w-20 md:w-24 py-5 rounded-t-lg hover:border-b-2 text-white" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="block w-20 md:w-24 py-5 rounded-t-lg hover:border-b-2" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="block w-20 md:w-24 py-5 rounded-t-lg hover:border-b-2" to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link className="block w-20 md:w-24 py-5 rounded-t-lg hover:border-b-2" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="flex self-center gap-3 ">
                        <li>
                            <a onClick={handleResume} className="px-4 py-2 rounded-md cursor-pointer text-white bg-green-600 hover:text-black hover:shadow-glow-green">Resume</a>
                        </li>
                        <li className="sm:hidden">
                            <a href="" className="cursor-pointer text-2xl group">
                                {/* <i className="block group-[.open]:hidden">{icons.menuOpen}</i>
                                <i className="hidden group-[.open]:block">{icons.menuClose}</i> */}
                                <i className="block group-[.open]:hidden"><PiListBold/></i>
                                <i className="hidden group-[.open]:block"><PiXBold/></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="pb-2 sm:hidden">
                    <ul className="flex flex-col items-stretch px-8 sm:px-16 text-lg">
                        <li>
                            <Link className="block py-1 rounded-full hover:bg-gradient-to-t from-black text-white" to="">Home</Link>
                        </li>
                        <li>
                            <Link className="block py-1 rounded-full hover:bg-gradient-to-t from-black" to="">About</Link>
                        </li>
                        <li>
                            <Link className="block py-1 rounded-full hover:bg-gradient-to-t from-black" to="">Projects</Link>
                        </li>
                        <li>
                            <Link className="block py-1 rounded-full hover:bg-gradient-to-t from-black" to="">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
     );
}
 
export default Header;