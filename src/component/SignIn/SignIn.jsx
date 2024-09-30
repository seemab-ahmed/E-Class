import { BookOpenIcon } from "@heroicons/react/16/solid";
import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <>
            <div className='flex items-center justify-center py-3 border-b border-[#c1c1c1]'>
                <Link
                    to="/"
                    className="text-4xl font-bold leading-[120%] text-[#06BBCC] flex items-center gap-2"
                >
                    <BookOpenIcon className="w-12 h-12" />
                    E-class
                </Link>
            </div>
            <div className="py-20">
                <div className="max-w-[375px] mx-auto">
                    <h5 className="text-2xl font-bold leading-[120%] text-black mb-8">Sign In to E-Class</h5>
                    <form>
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-base font-medium leading-[120%] text-black mb-3">
                                Email
                            </label>
                            <input
                                id="email"
                                name="pmail"
                                type="email"
                                placeholder="Email"
                                className="border border-[#c1c1c1] rounded-md w-full h-14 px-5 outline-none bg-[#f1f4f6] text-base font-normal leading-[120%] text-black placeholder:text-black"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block text-base font-medium leading-[120%] text-black mb-3">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="border border-[#c1c1c1] rounded-md w-full h-14 px-5 outline-none bg-[#f1f4f6] text-base font-normal leading-[120%] text-black placeholder:text-black"
                            />
                        </div>
                        <button
                            className="text-xl font-medium transition-all leading-[160%] text-[#fff] ml-auto bg-[#06BBCC] max-w-[120px] w-full h-14 rounded-md flex justify-center items-center"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn