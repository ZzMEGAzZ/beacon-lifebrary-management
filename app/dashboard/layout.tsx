'use client';
import { Provider } from 'react-redux';
import '../../styles/globals.css';
// import SideNav from '@/components/objects/sideNavigation/SideNavigation';
import { store } from '@/redux/app/store';
import Header from '@/components/objects/header/Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <Provider store={store}>
            <div className="w-full h-full">
                <div className="absolute flex sm:relative h-full w-screen sm:w-full ">
                    {/* <SideNav /> */}
                    <div className="w-full h-full flex flex-col bg-Bg text-Black">
                        <div className='w-full h-16'>
                            <Header />
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </Provider>
    );
}
