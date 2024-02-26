'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SideNav() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <>
            {!isOpen && (
                <motion.div className="absolute w-full h-full">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-orange-400 rounded-full p-5 text-black absolute bottom-2 right-5"
                        onClick={() => setIsOpen(true)}
                    >
                        Open
                    </motion.button>
                </motion.div>
            )}
            <div
                className={`h-full absolute md:relative ${isOpen ? 'w-full md:w-[350px] animate' :'w-0 animate'} bg-gray-800 text-white`}
            >
                <div className="flex justify-center items-center h-16 bg-gray-900">
                    <h1 className="text-lg font-bold">TU Library</h1>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center w-full h-16 border-b border-gray-700">
                        <a href="/dashboard/setup-event" className="text-base font-bold">
                            Event
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-16 border-b border-gray-700">
                        <a href="/dashboard/setting-beacon" className="text-base font-bold">
                            Beacon
                        </a>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full h-16 border-b border-gray-700">
                        <a href="/dashboard/corporate" className="text-base font-bold">
                            Corporate
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-16 border-b border-gray-700">
                        <h1 className="text-base font-bold">Settings</h1>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="w-full h-16 bg-red-500">
                        Close
                    </button>
                </div>
            </div>
        </>
    );
}
