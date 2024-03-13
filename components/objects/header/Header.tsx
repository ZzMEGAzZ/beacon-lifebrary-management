import BreadCrumb from '@/components/interactives/BreadCrumb';
import Middle from '@/components/layouts/Middle'
import Span from '@/components/layouts/Span';
import { useAppDispatch } from '@/redux/app/hooks';
import { NavigationBar } from '@/redux/modules/navigationBar/@type';
import { selectNavigation, setNavigation } from '@/redux/modules/navigationBar/navigationBarState';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
    const pathname = usePathname();
    const path = pathname.split('/').filter((x) => x);
    const currentPage = (path[path.length - 1 > 0 ? path.length - 1 : 0]).slice(0, 1).toUpperCase() + (path[path.length - 1 > 0 ? path.length - 1 : 0]).slice(1).replace(/-/g, ' ');
    const dispatch = useAppDispatch();
    const navbar = useSelector(selectNavigation);

    const handleSideBar = (value: NavigationBar) => {
        dispatch(
            setNavigation({
                page: value.page,
                isOpen: value.isOpen === 'forceOpen' ? 'open' : 'close'
            }),
        );
    };

    return (
        <>
            <Middle X Y className="relative w-full h-full p-4 bg-Primary-light text-sm drop-shadow-xl shadow-xl">
                <Span X Y className="text-white w-full">
                    <div>
                        <Span Y className='hidden md:block'>
                            <span className="text-base font-bold">{currentPage}</span>
                            <BreadCrumb />
                        </Span>

                        <Span Y className='bloack md:hidden'>

                            <button onClick={
                                () => handleSideBar({
                                    page: navbar.page,
                                    isOpen: navbar.isOpen === 'open' ? 'close' : 'forceOpen'
                                })
                            }
                                className="flex flex-col justify-center items-center">
                                <span className={`bg-white block animate
                    h-0.5 w-6 rounded-sm ${navbar.isOpen !== 'close' ?
                                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                                    }`} >
                                </span>
                                <span className={`bg-white block animate
                    h-0.5 w-6 rounded-sm my-0.5 ${navbar.isOpen !== 'close' ?
                                        'opacity-0' : 'opacity-100'
                                    }`} >
                                </span>
                                <span className={`bg-white block animate
                                h-0.5 w-6 rounded-sm ${navbar.isOpen !== 'close' ?
                                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                                    }`} >
                                </span>
                            </button>
                        </Span>
                    </div>
                    <div>
                        <span className="text-black">Thammasat University Library</span>
                    </div>
                </Span>
            </Middle >
        </>
    );
}
