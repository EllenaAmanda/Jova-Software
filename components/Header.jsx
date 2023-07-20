"use client"
//allow us to move to other pages
import Link from "next/link";
//automatically optimize image
import Image from "next/image";
import { useState } from "react";


function Header() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const url = window.location.hash.slice(2);
    

    const _splitUrl = (url) => {
        const splittedUrl = url.split('/');
        return {
          home : splittedUrl[0] || null,
          page : splittedUrl[1] || null,
        };
    };

    const splittedUrl = _splitUrl(url);

  return (
    <div className="absolute w-full z-10">
        <div className='container mx-auto py-3 px-8'>
            <div className='flex justify-between items-center'>
                <Link href="/">
                    <img src="/assets/LOGOHEADER.png" alt="Logo" className="w-14"/>
                </Link>
            <ul className='flex gap-8 text-white items-center'>
                <li><Link href="/" className="border-white hover:border-b-2 ease-in-out duration-100">Home</Link></li>
                <li><Link href="/" className="border-white hover:border-b-2 ease-in-out duration-100">Portofolio</Link></li>
                <li><Link href="/" className="border-white hover:border-b-2 ease-in-out duration-100">Pricing</Link></li>
                <li><Link href="/" className="border-white hover:border-b-2 ease-in-out duration-100">About</Link></li>
                <li><Link href="/" className="border-white hover:border-b-2 ease-in-out duration-100">Career</Link></li>
                <li><Link href="/" className="border-white hover:border-b-2 ease-in-out duration-100">Blog</Link></li>
                <li><Link href="/" className="border-white hover:border-b-2 ease-in-out duration-100">Contact</Link></li>
                <li><Link href="/" className="rounded-full bg-gradient-to-r from-orange-600 to-amber-400 px-5 pb-2 pt-1 flex items-center hover:to-pink-500 hover:from-yellow-500 ">
                    Login
                    <Image className="m-1" src="/assets/login.png" alt="login" width={15} height={15}/>
                    </Link>
                </li>
                
                
                <li className="relative">
                    <button className="flex items-center" onClick={toggleDropdown}>
                        <Image src="/assets/usa.png" alt="USA" width={20} height={20} className="mr-1"/>
                        EN
                        <Image src="/assets/down-arrow.png" alt="arrow" width={20} height={20}/>
                    </button>
                    <ul className={`absolute z-10 top-10 right-0 bg-white rounded-md ${isDropdownOpen ? '' : 'hidden'}`}>
                        <li><a href="#" className="flex pl-3 w-52 p-3 text-sm text-slate-600 hover:bg-amber-400 hover:rounded-t gap-1 items-center">
                            <Image src="/assets/indonesia.png" alt="IDN" width={20} height={20}/>
                            Bahasa Indonesia (ID)</a></li>
                        <li><a href="#" className="pl-3 w-52 p-3 text-sm text-slate-600 hover:bg-amber-400 hover:rounded-b flex items-center gap-1">
                            <Image src="/assets/usa.png" alt="USA" width={20} height={20}/>
                            English (EN)</a></li>
                    </ul>
                </li>
                
            </ul>
            </div>
            <br/>
            <p className="text-white flex items-center">{splittedUrl ? splittedUrl.home : `home`} / {splittedUrl ? splittedUrl.page : `page`}</p>
        </div>
    </div>
  )
}

export default Header
