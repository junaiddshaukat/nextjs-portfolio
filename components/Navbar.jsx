import { Briefcase, Folder, House, SquarePen, Wrench } from "lucide-react";
import React from "react";

const Navbar = () => {
  const menu = [
    { icon: <House size="22" />, label: "Home" },
    { icon: <Folder size="22" />, label: "Projects" },
    { icon: <Briefcase size="22" />, label: "Experience" },
    { icon: <Wrench size="22" />, label: "Tools" },
    { icon: <SquarePen  size="22" />, label: "Blog" },
  ];

  return (
    <div className="text-white mb-3 ">
      <div className="flex justify-center">
        <div className="bg-[#242424] h-[48px] flex items-center justify-center mt-[30px] w-64 rounded-xl">
          <ul className="flex justify-center cursor-pointer gap-6">
            {menu.map((item, index) => (
              <li key={index} className="group relative">
                {/* Icon */}
                {item.icon}
                {/* Tooltip */}
                <span className="  absolute top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-[12px] bg-[#242424] text-white py-1 px-2 rounded-xl shadow-lg">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
