import {
  AcademicCapIcon,
  ArrowRightIcon,
  BookOpenIcon,
  GlobeAltIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";
import stImg from "../../images/software-testing.jpeg";
import csImg from "../../images/Cyber-testing.webp";
import azureImg from "../../images/azure.jpeg";
import computingImg from "../../images/basic-computing.webp";
import iosImg from "../../images/ios-dev.png";
import bannerBg from "../../images/banner-bg.jpg";
import aboutImg from "../../images/about.jpg";
import shapeImg from "../../images/shape.svg";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export const HeroSectionContent = () => {
  return (
    <>
      {/* hero section start here */}
      <section
        className="h-[100vh] flex items-center justify-center bg-no-repeat bg-cover bg-fixed relative"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50 md:opacity-70"></div>
        <div className="container">
          <div className="max-w-[600px] relative">
            <h1 className="text-6xl font-bold leading-[120%] text-[#fff] mb-6">
              Start Your New Career In Tech.
            </h1>
            <p className="text-lg font-normal leading[180%] text-[#fff]">
              Transform into a software engineer with our top-notch curriculum,
              flexible scheduling options, skilled instructors, and affordable
              rates. Join us to begin your path to success!
            </p>
          </div>
        </div>
      </section>
      {/* hero section end here */}

      {/* about us section start here */}
      <section className="py-20">
        <div className="container">
          <div className="about-inner grid grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden">
              <img src={aboutImg} alt="" />
            </div>
            <div className="col-right">
              <span className="block text-xl uppercase font-medium leading[120%] text-[#06BBCC] mb-3">
                About Us
              </span>
              <h2 className="text-4xl font-bold leading-[120%] text-[#000] mb-5">
                Welcome to E-Class
              </h2>
              <p className="text-lg font-normal leading[180%] text-[#000] mb-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                quo illum inventore aliquam obcaecati laboriosam eum expedita
                laborum!
              </p>
              <p className="text-lg font-normal leading[180%] text-[#000] mb-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                quo illum inventore aliquam obcaecati laboriosam eum expedita
                laborum!
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                <li className="text-lg font-normal leading-[120%] text-[#000] flex items-center gap-3">
                  <ArrowRightIcon className="w-6 h-6 text-[#06BBCC]" /> Skilled
                  Instructors
                </li>
                <li className="text-lg font-normal leading-[120%] text-[#000] flex items-center gap-3">
                  <ArrowRightIcon className="w-6 h-6 text-[#06BBCC]" /> Online
                  Classes
                </li>
                <li className="text-lg font-normal leading-[120%] text-[#000] flex items-center gap-3">
                  <ArrowRightIcon className="w-6 h-6 text-[#06BBCC]" />{" "}
                  International Certificate
                </li>
                <li className="text-lg font-normal leading-[120%] text-[#000] flex items-center gap-3">
                  <ArrowRightIcon className="w-6 h-6 text-[#06BBCC]" /> Skilled
                  Instructors
                </li>
                <li className="text-lg font-normal leading-[120%] text-[#000] flex items-center gap-3">
                  <ArrowRightIcon className="w-6 h-6 text-[#06BBCC]" /> Online
                  Classes
                </li>
                <li className="text-lg font-normal leading-[120%] text-[#000] flex items-center gap-3">
                  <ArrowRightIcon className="w-6 h-6 text-[#06BBCC]" /> Online
                  Classes
                </li>
              </ul>
              <button className="text-lg font-bold uppercase bg-[#06BBCC] text-[#fff] h-12 border-2 border-[#06BBCC] rounded-3xl flex items-center justify-center px-8 transition-all hover:bg-[#fff] hover:text-[#06BBCC]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* about us section end here */}

      {/* courses section start here */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-20">
            <span className="block text-xl uppercase font-medium leading[120%] text-[#06BBCC] mb-3">
              Courses
            </span>
            <h2 className="text-4xl font-bold leading-[120%] text-[#000]">
              Popular Courses
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-12">
            <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer">
              <img src={stImg} alt="" className="w-full h-[220px] object-cover" />
              <div className="px-5 py-8">
                <h5 className="text-xl font-bold leading-[120%] text-[#000] mb-4">
                  Software Testing
                </h5>
                <p className="text-base font-normal leading-[160%] text-[#000]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  expedita assumenda neque laboriosam cupiditate,!
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer">
              <img src={csImg} alt="" className="w-full h-[220px] object-cover" />
              <div className="px-5 py-8">
                <h5 className="text-xl font-bold leading-[120%] text-[#000] mb-4">
                  Cyber Security
                </h5>
                <p className="text-base font-normal leading-[160%] text-[#000]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  expedita assumenda neque laboriosam cupiditate,!
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer">
              <img src={azureImg} alt="" className="w-full h-[220px] object-cover" />
              <div className="px-5 py-8">
                <h5 className="text-xl font-bold leading-[120%] text-[#000] mb-4">
                  Azure DevOps
                </h5>
                <p className="text-base font-normal leading-[160%] text-[#000]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  expedita assumenda neque laboriosam cupiditate,!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* courses section end here */}

      {/* courses list section start here */}
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-4 gap-5">
            <div className="cl-card text-center border border-[#06BBCC] rounded-xl py-6 px-8 cursor-pointer">
              <div className="inline-block border border-[#06BBCC] rounded-[50%] p-3">
                <AcademicCapIcon className="w-20 h-20 bg-[#06BBCC] p-5 text-[#fff] rounded-[50%] mx-auto" />
              </div>
              <h5 className="text-xl font-medium leading-[120%] my-5 text-[#000]">
                Skilled Instructors
              </h5>
              <p className="text-base font-normal leading-[160%] text-[#000]">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
            <div className="cl-card text-center border border-[#06BBCC] rounded-xl py-6 px-8 cursor-pointer">
              <div className="inline-block border border-[#06BBCC] rounded-[50%] p-3">
                <GlobeAltIcon className="w-20 h-20 bg-[#06BBCC] p-5 text-[#fff] rounded-[50%] mx-auto" />
              </div>
              <h5 className="text-xl font-medium leading-[120%] my-5 text-[#000]">
                Language Learning
              </h5>
              <p className="text-base font-normal leading-[160%] text-[#000]">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
            <div className="cl-card text-center border border-[#06BBCC] rounded-xl py-6 px-8 cursor-pointer">
              <div className="inline-block border border-[#06BBCC] rounded-[50%] p-3">
                <HomeIcon className="w-20 h-20 bg-[#06BBCC] p-5 text-[#fff] rounded-[50%] mx-auto" />
              </div>
              <h5 className="text-xl font-medium leading-[120%] my-5 text-[#000]">
                Home Learning
              </h5>
              <p className="text-base font-normal leading-[160%] text-[#000]">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
            <div className="cl-card text-center border border-[#06BBCC] rounded-xl py-6 px-8 cursor-pointer">
              <div className="inline-block border border-[#06BBCC] rounded-[50%] p-3">
                <BookOpenIcon className="w-20 h-20 bg-[#06BBCC] p-5 text-[#fff] rounded-[50%] mx-auto" />
              </div>
              <h5 className="text-xl font-medium leading-[120%] my-5 text-[#000]">
                Wide Knowledge
              </h5>
              <p className="text-base font-normal leading-[160%] text-[#000]">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* courses list section end here */}

      {/* courses section start here */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-20">
            <span className="block text-xl uppercase font-medium leading[120%] text-[#06BBCC] mb-3">
              Services
            </span>
            <h2 className="text-4xl font-bold leading-[120%] text-[#000]">
              Courses Categories
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-12 mb-20">
            <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer">
              <img src={computingImg} alt="" className="w-full h-[220px] object-cover" />
              <div className="px-5 py-8">
                <h5 className="text-xl font-bold leading-[120%] text-[#000] mb-4">
                  Basic Computing
                </h5>
                <p className="text-base font-normal leading-[160%] text-[#000] mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  expedita assumenda neque laboriosam cupiditate,!
                </p>
                <Link
                  to="/"
                  className="text-lg font-normal leading-[160%] text-[#06BBCC] inline-flex items-center gap-3"
                >
                  Enroll Now
                  <ArrowRightIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer">
              <img src={csImg} alt="" className="w-full h-[220px] object-cover" />
              <div className="px-5 py-8">
                <h5 className="text-xl font-bold leading-[120%] text-[#000] mb-4">
                  Cyber Security
                </h5>
                <p className="text-base font-normal leading-[160%] text-[#000] mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  expedita assumenda neque laboriosam cupiditate,!
                </p>
                <Link
                  to="/"
                  className="text-lg font-normal leading-[160%] text-[#06BBCC] inline-flex items-center gap-3"
                >
                  Enroll Now
                  <ArrowRightIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer">
              <img src={iosImg} alt="" className="w-full h-[220px] object-cover" />
              <div className="px-5 py-8">
                <h5 className="text-xl font-bold leading-[120%] text-[#000] mb-4">
                  IOS Development
                </h5>
                <p className="text-base font-normal leading-[160%] text-[#000] mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  expedita assumenda neque laboriosam cupiditate,!
                </p>
                <Link
                  to="/"
                  className="text-lg font-normal leading-[160%] text-[#06BBCC] inline-flex items-center gap-3"
                >
                  Enroll Now
                  <ArrowRightIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* courses section end here */}
    </>
  );
};
