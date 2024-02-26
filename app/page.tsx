'use client';
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
                <Button onClick={() => toast.success('Hello, world!')}>Click me</Button>
                <Toaster />
            </Middle>
        </>
    );
}
