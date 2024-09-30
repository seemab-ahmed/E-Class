import { BookOpenIcon } from "@heroicons/react/16/solid";
import { BellIcon, PhotoIcon, QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div>
            <div className='px-5 py-2 flex items-center justify-between border-b border-[#c1c1c1]'>
                <div className='flex items-center gap-5 min-h-12'>
                    <Link
                        to="/"
                        className="text-[#06BBCC] pr-5 border-r border-[#c1c1c1] inline-block"
                    >
                        <BookOpenIcon className="w-12 h-12" />
                    </Link>
                    <ul className="flex items-center gap-5">
                        <li>
                            <Link
                                to="/"
                                className="text-lg font-medium transition-all leading-[160%] text-[#000] hover:text-[#06BBCC]"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/courses"
                                className="text-lg font-medium transition-all leading-[160%] text-[#000] hover:text-[#06BBCC]"
                            >
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="text-lg font-medium transition-all leading-[160%] text-[#000] hover:text-[#06BBCC]"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='pl-5 border-l border-[#c1c1c1] min-h-12 flex justify-center'>
                    <ul className='flex items-center gap-3'>
                        <li>
                            <Link>
                                <PhotoIcon className='w-8 h-8 text-[#9c9c9c]' />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <BellIcon className='w-8 h-8 text-[#9c9c9c]' />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <QuestionMarkCircleIcon className='w-8 h-8 text-[#9c9c9c]' />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <UserCircleIcon className='w-8 h-8 text-[#9c9c9c]' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-12 min-h-[calc(100vh-65px)]">
                <Sidebar />
                <div className="col-span-9"></div>
            </div>
        </div>
    )
}

export default Dashboard