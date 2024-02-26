import { Button } from '@/components/interactives/Button';
import Middle from '@/components/layouts/Middle';
import SideNav from '@/components/objects/sideNavigation/sideNavigation';
import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {

    return (
        <>
            <Middle X Y className="w-full h-full p-4 bg-white">
                <h1 className="text-black">Home</h1>
                <div className='flex flex-col mx-5'>
                    <p className="text-black text-xs">xs</p>
                <p className="text-black text-sm">sm</p>
                <p className="text-black text-md">md</p>
                <p className="text-black text-base">base</p>
                <p className="text-black text-lg">lg</p>
                <p className="text-black text-xl">xl</p>
                <p className="text-black text-2xl">2xl</p>
                <p className="text-black text-3xl">3xl</p>
                <p className="text-black text-4xl">4xl</p>
                <p className="text-black text-5xl">5xl</p>
                </div>
                
            </Middle>
        </>
    );
}
