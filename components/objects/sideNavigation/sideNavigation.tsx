'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SideNav() {
    const [isOpen, setIsOpen] = useState<number>(350);

    return (
        <>
            {isOpen === 0 && (
                <motion.div className="absolute w-full h-full">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-orange-400 rounded-full p-5 text-black absolute bottom-2 right-5"
                        onClick={() => setIsOpen(350)}
                    >
                        Open
                    </motion.button>
                </motion.div>
            )}
            <motion.div
                initial={{ x: isOpen ? -700 : 0 }}
                animate={{ x: isOpen ? 0 : -700 }}
                transition={{ duration: 0.5 }}
                className={`h-full absolute sm:relative ${isOpen === 0 ? 'w-0 animate' :'w-full sm:w-[350px]'} bg-gray-800 text-white`}
            >
                <div className="flex justify-center items-center h-16 bg-gray-900">
                    <h1 className="text-2xl font-bold">TU Library</h1>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center w-full h-16 border-b border-gray-700">
                        <a href="/dashboard/setup-event" className="text-lg font-bold">
                            Event
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-16 border-b border-gray-700">
                        <a href="/dashboard/setting-beacon" className="text-lg font-bold">
                            Beacon
                        </a>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full h-16 border-b border-gray-700">
                        <a href="/dashboard/corporate" className="text-lg font-bold">
                            Corporate
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-16 border-b border-gray-700">
                        <h1 className="text-lg font-bold">Settings</h1>
                    </div>
                    <button onClick={() => setIsOpen(0)} className="w-full h-16 bg-red-500">
                        Close
                    </button>
                </div>
            </motion.div>
        </>
    );
}
