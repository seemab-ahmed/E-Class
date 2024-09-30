import React from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import bannerBg from "../../images/banner-bg.jpg";
import { Link } from "react-router-dom";
import { FunnelIcon, ArrowRightIcon, StarIcon } from "@heroicons/react/16/solid";
import csImg from "../../images/Cyber-testing.webp";
import computingImg from "../../images/basic-computing.webp";
import iosImg from "../../images/ios-dev.png";

export default function CoursesPage() {
    return (
        <div className="">
            <Navbar />
            {/* hero section start here */}
            <section
                className="py-[200px] flex items-center justify-center bg-no-repeat bg-cover bg-fixed relative"
                style={{ backgroundImage: `url(${bannerBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50 md:opacity-70"></div>
                <div className="container">
                    <div className="relative">
                        <h1 className="text-6xl font-bold leading-[120%] text-[#fff] text-center">
                            Start Learning Courses.
                        </h1>
                    </div>
                </div>
            </section>
            {/* hero section end here */}
            <div className=""></div>
            <div className="py-20">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-4">
                            <Link
                                to="/"
                                className="text-xl font-normal leading-[160%] text-[#06BBCC] ml-5 border border-[#06BBCC] py-3 px-5 rounded-md inline-flex items-center gap-2"
                            >
                                <FunnelIcon className="w-5 h-5" />
                                Filters
                            </Link>
                        </div>
                        <div className="col-span-8">
                            <div className="grid grid-cols-2 gap-12 mb-20">
                                <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer">
                                    <img src={computingImg} alt="" className="w-full h-[220px] object-cover" />
                                    <div className="px-5 py-8">
                                        <h5 className="text-xl font-bold leading-[120%] text-[#000] mb-4">
                                            Basic Computing
                                        </h5>
                                        <p className="text-base font-normal leading-[160%] text-[#000] mb-2">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                                            expedita assumenda neque laboriosam cupiditate,!
                                        </p>
                                        <div className="flex items-center gap-1 mb-2">
                                            <span className="text-sm font-bold text-black">4.1</span>
                                            <div className="flex items-center gap-1">
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                            </div>
                                        </div>
                                        <span className="text-base font-bold text-black block mb-2">$178</span>
                                        <Link
                                            to="/"
                                            className="text-sm font-normal leading-[160%] px-2 py-1 text-white bg-[#06BBCC] inline-flex items-center gap-3 capitalize"
                                        >
                                            enroll now
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
                                        <div className="flex items-center gap-1 mb-2">
                                            <span className="text-sm font-bold text-black">4.1</span>
                                            <div className="flex items-center gap-1">
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                            </div>
                                        </div>
                                        <span className="text-base font-bold text-black block mb-2">$158</span>
                                        <Link
                                            to="/"
                                            className="text-sm font-normal leading-[160%] px-2 py-1 text-white bg-[#06BBCC] inline-flex items-center gap-3 capitalize"
                                        >
                                            enroll now
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
                                        <div className="flex items-center gap-1 mb-2">
                                            <span className="text-sm font-bold text-black">4.1</span>
                                            <div className="flex items-center gap-1">
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                                <StarIcon className="w-4 h-4 text-[#b5690d]" />
                                            </div>
                                        </div>
                                        <span className="text-base font-bold text-black block mb-2">$128</span>
                                        <Link
                                            to="/"
                                            className="text-sm font-normal leading-[160%] px-2 py-1 text-white bg-[#06BBCC] inline-flex items-center gap-3 capitalize"
                                        >
                                            enroll now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
