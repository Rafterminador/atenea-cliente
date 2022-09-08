import React from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <nav className="hidden md:flex md:justify-center md:py-6 md:border-b-2 md:border-[#DBD8FF] md:h-[120px] mx-16">
                <Link to='/'>
                    <img src={Logo} alt='img' />
                </Link>

                <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-6">
                    <li className="font-sans text-[16px] cursor-pointer">
                        <Link to='/' className="cursor-pointer">
                            Inicio
                        </Link>
                    </li>
                    <li>
                    <Link to='/' className="cursor-pointer">
                            Acerca de
                        </Link>
                    </li>
                    <li>
                    <Link to='/login' className="cursor-pointer">
                            Ingresar
                        </Link>
                    </li>

                    <li className="bg-[#7064FF] rounded-[20px] px-[32px] py-[10px] text-white cursor-pointer hover:bg-[#8D83FF]">
                    <Link to='/registro/usuario' className="cursor-pointer">
                            Registrarse
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;