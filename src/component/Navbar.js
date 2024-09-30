import { BookOpenIcon } from "@heroicons/react/16/solid";
import React from "react";
import { Link } from "react-router-dom";
export default function Navbar({ className }) {
  return (
    <header className="py-6 absolute left-0 top-0 w-full z-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-4xl font-bold leading-[120%] text-[#06BBCC] flex items-center gap-2"
          >
            <BookOpenIcon className="w-10 h-10" />
            E-class
          </Link>
          <nav className="nav">
            <ul className="flex items-center gap-5">
              <li>
                <Link
                  to="/"
                  className="text-xl font-medium transition-all leading-[160%] text-[#fff] hover:text-[#06BBCC]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-xl font-medium transition-all leading-[160%] text-[#fff] hover:text-[#06BBCC]"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-xl font-medium transition-all leading-[160%] text-[#fff] hover:text-[#06BBCC]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="text-xl font-medium transition-all leading-[160%] text-[#fff] hover:text-[#06BBCC]"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-xl font-medium transition-all leading-[160%] text-[#fff] ml-5 bg-[#06BBCC] py-3 px-5 rounded-md inline-block"
                >
                  Enroll Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
