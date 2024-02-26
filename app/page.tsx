'use client';
import { Button } from '@/components/interactives/Button';
import Middle from '@/components/layouts/Middle';
import SideNav from '@/components/objects/sideNavigation/sideNavigation';
import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <SideNav />
        </>
    );
}
