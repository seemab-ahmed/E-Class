import { ChevronDownIcon, EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import React from "react";

const Sidebar = () => {
  return (
    <div className="col-span-3 py-10 px-5 border-r border-[#c1c1c1]">
      <h5 className="text-lg font-bold leading-[120%] text-[#000] mb-5">
        Course Navigator
      </h5>
      <ul>
        <li className="flex items-center justify-between p-4 shadow-lg rounded-lg mb-4 cursor-pointer">
            <span className="text-base font-normal leading-[120%] text-black flex items-center gap-1"><ChevronDownIcon className="w-6 h-6" /> Intro</span>
            <EllipsisVerticalIcon className="w-5 h-5 text-[#9c9c9c]" />
        </li>
        <li className="flex items-center justify-between p-4 shadow-lg rounded-lg mb-4 cursor-pointer">
            <span className="text-base font-normal leading-[120%] text-black flex items-center gap-1"><ChevronDownIcon className="w-6 h-6" /> DevOp</span>
            <EllipsisVerticalIcon className="w-5 h-5 text-[#9c9c9c]" />
        </li>
        <li className="flex items-center justify-between p-4 shadow-lg rounded-lg mb-4 cursor-pointer">
            <span className="text-base font-normal leading-[120%] text-black flex items-center gap-1"><ChevronDownIcon className="w-6 h-6" /> Tools</span>
            <EllipsisVerticalIcon className="w-5 h-5 text-[#9c9c9c]" />
        </li>
        <li className="flex items-center justify-between p-4 shadow-lg rounded-lg mb-4 cursor-pointer">
            <span className="text-base font-normal leading-[120%] text-black flex items-center gap-1"><ChevronDownIcon className="w-6 h-6" /> Collaboration</span>
            <EllipsisVerticalIcon className="w-5 h-5 text-[#9c9c9c]" />
        </li>
        <li className="flex items-center justify-between p-4 shadow-lg rounded-lg mb-4 cursor-pointer">
            <span className="text-base font-normal leading-[120%] text-black flex items-center gap-1"><ChevronDownIcon className="w-6 h-6" /> CaseStudies</span>
            <EllipsisVerticalIcon className="w-5 h-5 text-[#9c9c9c]" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
