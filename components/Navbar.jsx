'use client'

import { Briefcase, Folder, HomeIcon as House, SquarePen, Wrench } from 'lucide-react';
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const menu = [
    { icon: <House size="22" />, label: "Home", href: "/" },
    { icon: <Folder size="22" />, label: "Projects", href: "/projects" },
    { icon: <Wrench size="22" />, label: "Tools", href: "/tools" },
    { icon: <Briefcase size="22" />, label: "Experience", href: "/experience" },
    { icon: <SquarePen  size="22" />, label: "Blog", href: "/blog" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24"><path fill="currentColor" d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"></path></svg>, label: "Leetcode", href: "https://leetcode.com/junaiddshaukat/" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5z"></path></svg>, label: "Codeforces", href: "https://codeforces.com/profile/junaidshaukat" },
  ];

  return (
    <nav className="text-white mb-4">
      <div className="flex justify-center">
        <div className="bg-[#242424] h-[48px] flex items-center justify-center mt-[30px] w-auto px-5 rounded-xl">
          <ul className="flex justify-center gap-6">
            {menu.map((item, index) => (
              <li key={index} className="group relative">
                {item.href.startsWith('http') ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {item.icon}
                  </a>
                ) : (
                  <Link href={item.href} className="block">
                    {item.icon}
                  </Link>
                )}
                {/* Tooltip */}
                <span className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-[12px] bg-[#242424] text-white py-1 px-2 rounded-xl shadow-lg whitespace-nowrap">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

