import React from "react";
import { BookOpenIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div className="grid grid-cols-4 gap-5 py-12">
          <div>
            <Link
              to="/"
              className="text-4xl font-bold leading-[120%] text-[#06BBCC] flex items-center gap-2 mb-5"
            >
              <BookOpenIcon className="w-10 h-10" />
              E-class
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              expedita assumenda neque laboriosam cupiditate,
            </p>
          </div>
          <div>
            <h5 className="text-xl font-bold leading-[120%] text-[#06BBCC] mb-5">
              Quick Links
            </h5>
            <Link
              to="/"
              className="block text-base font-normal leading-[160%] text-[#000] hover:text-[#06BBCC]"
            >
              About Us
            </Link>
            <Link
              to="/"
              className="block text-base font-normal leading-[160%] text-[#000] hover:text-[#06BBCC]"
            >
              Courses
            </Link>
            <Link
              to="/"
              className="block text-base font-normal leading-[160%] text-[#000] hover:text-[#06BBCC]"
            >
              Contact Us
            </Link>
            <Link
              to="/"
              className="block text-base font-normal leading-[160%] text-[#000] hover:text-[#06BBCC]"
            >
              Terms and Conditions
            </Link>
            <Link
              to="/"
              className="block text-base font-normal leading-[160%] text-[#000] hover:text-[#06BBCC]"
            >
              FAQs and Help
            </Link>
          </div>
          <div>
            <h5 className="text-xl font-bold leading-[120%] text-[#06BBCC] mb-5">Gallery</h5>
            <Link
              to="/"
              className="text-base font-normal leading-[160%] text-[#000] hover:text-[#06BBCC]"
            >
              Some gallery content...
            </Link>
          </div>
          <div>
            <h5 className="text-xl font-bold leading-[120%] text-[#06BBCC] mb-5">Contact Us</h5>
            <Link
              to="/"
              className="block text-base font-normal leading-[160%] text-[#000] hover:text-[#06BBCC]"
            >
              +1 234 567 890
            </Link>
            <Link
              to="/"
              className="block text-base font-normal leading-[160%] text-[#000] hover:text-[#06BBCC]"
            >
              info@eclass.com
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4 bg-[#06BBCC]">
        <div className="container">
          <p className="text-sm font-medium text-center leading-[120%] text-white">
            Copyright © 2024 E Class. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
