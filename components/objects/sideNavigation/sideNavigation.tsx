import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';

export default function SideNav() {
    const [isOpen, setIsOpen] = useState<number>(350);
    const windowSize = window.innerWidth;

    return (
        <>
            {isOpen === 0 && (
                <motion.div className="absolute w-full h-full">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white rounded-full p-5 text-black absolute bottom-[6dvh] right-10"
                        onClick={() => setIsOpen(350)}
                    >
                        Open
                    </motion.button>
                </motion.div>
            )}
            <motion.div
                initial={{ x: windowSize > 576 ? -576 : -windowSize }}
                animate={{ x: isOpen ? 0 : windowSize > 576 ? -576 : -windowSize }}
                transition={{ duration: 0.5 }}
                className="h-full w-full sm:w-[350px] bg-gray-800 text-white"
            >
                <div className="flex justify-center items-center h-16 bg-gray-900">
                    <h1 className="text-2xl font-bold">TU Library</h1>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center w-full h-16 border-b border-gray-700">
                        <h1 className="text-lg font-bold">Dashboard</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-16 border-b border-gray-700">
                        <h1 className="text-lg font-bold">Books</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-16 border-b border-gray-700">
                        <h1 className="text-lg font-bold">Members</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-16 border-b border-gray-700">
                        <h1 className="text-lg font-bold">Librarians</h1>
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
