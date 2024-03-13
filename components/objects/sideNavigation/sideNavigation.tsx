'use client';
import React, { use, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { useAppDispatch } from '@/redux/app/hooks';
import Image from 'next/image';

import { SideBarItem } from '@/components/objects/sideNavigation/SideBarItem';
import { selectNavigation, setNavigation } from '@/redux/modules/navigationBar/navigationBarState';
import { NavigationBar } from '@/redux/modules/navigationBar/@type';
import Accordion from '@/components/layouts/Accordion';
import { SidebarCategory } from '@/components/objects/sideNavigation/SidebarCategory';
import { CubeIcon, HomeIcon, SettingIcon, UserIcon } from '@/assets/svg/SidebarIcon';
import Logo from '@/assets/Image/Library.png';
import Span from '@/components/layouts/Span';
import Middle from '@/components/layouts/Middle';
import { DoubleArrow } from '@/assets/svg/SystemIcon';

export default function SideNav() {
    const pathname = usePathname();
    const path = pathname.split('/').filter((x) => x);
    const currentPage = (path[path.length - 1 > 0 ? path.length - 1 : 0]);
    const dispatch = useAppDispatch();
    const navbar = useSelector(selectNavigation);

    const page = {
        Dashboard: {
            overview: {
                label: 'Overview',
                link: '/dashboard/overview',
                isActive: navbar.page === 'overview',

                onChangeItem: () => {
                    handleSideBar({ isOpen: 'open', page: 'overview' });
                },
            },
            dashboard: {
                label: 'Dashboard',
                link: '/dashboard',
                isActive: navbar.page === 'dashboard',
                onChangeItem: () => {
                    handleSideBar({ isOpen: 'open', page: 'dashboard' });
                },
            },
        },
        Event: {
            event: {
                label: 'Event',
                link: '/dashboard/event',
                isActive: navbar.page === 'event',
                onChangeItem: () => {
                    handleSideBar({ isOpen: 'open', page: 'event' });
                },
            },
            // 'setup-event': {
            //     label: 'Setup Event',
            //     link: '/dashboard/event/setup-event',
            //     isActive: navbar.page === 'setup-event',
            //     onChangeItem: () => {
            //         handleSideBar({ isOpen: 'open', page: 'setup-event' });
            //     },
            // },
        },
        Beacon: {
            beacon: {
                label: 'Beacon',
                link: '/dashboard/beacon',
                isActive: navbar.page === 'beacon',
                onChangeItem: () => {
                    handleSideBar({ isOpen: 'open', page: 'beacon' });
                },
            },
            // 'setting-beacon': {
            //     label: 'Setting Beacon',
            //     link: '/dashboard/beacon/setting-beacon',
            //     isActive: navbar.page === 'setting-beacon',
            //     onChangeItem: () => {
            //         handleSideBar({ isOpen: 'open', page: 'setting-beacon' });
            //     },
            // },
        },
        Corporate: {
            corporate: {
                label: 'Corporate',
                link: '/dashboard/corporate',
                isActive: navbar.page === 'corporate',
                onChangeItem: () => {
                    handleSideBar({ isOpen: 'open', page: 'corporate' });
                },
            },
            // 'manage-corporate': {
            //     label: 'Manage Corporate',
            //     link: '/dashboard/corporate/manage-corporate',
            //     isActive: navbar.page === 'manage-corporate',
            //     onChangeItem: () => {
            //         handleSideBar({ isOpen: 'open', page: 'manage-corporate' });
            //     },
            // },
        },
    }

    const [deviceHandle, setDeviceHandle] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    const [dashboardAccordion, setDashboardAccordion] = useState<boolean>((Object.keys(page.Dashboard).filter((key) => page.Dashboard[key as keyof typeof page.Dashboard])).includes(currentPage) ? true : false);
    const [eventAccordion, setEventAccordion] = useState<boolean>((Object.keys(page.Event).filter((key) => page.Event[key as keyof typeof page.Event])).includes(currentPage) ? true : false);
    const [beaconAccordion, setBeaconAccordion] = useState<boolean>((Object.keys(page.Beacon).filter((key) => page.Beacon[key as keyof typeof page.Beacon])).includes(currentPage) ? true : false);
    const [corporateAccordion, setCorporateAccordion] = useState<boolean>((Object.keys(page.Corporate).filter((key) => page.Corporate[key as keyof typeof page.Corporate])).includes(currentPage) ? true : false);

    const handleSideBar = (value: NavigationBar) => {
        dispatch(
            setNavigation({
                page: value.page,
                isOpen: value.isOpen === 'forceOpen' ? 'open' : deviceHandle === true ? 'close' : value.isOpen,
            }),
        );
    };

    useEffect(() => {
        currentPage !== navbar.page
            ? handleSideBar({ isOpen: 'open', page: currentPage as NavigationBar['page'] })
            : handleSideBar({ isOpen: navbar.isOpen, page: navbar.page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', () => {
                setDeviceHandle(window.innerWidth < 768);
            });
        }
    }, []);

    return (
        <>
            <div
                className={`${navbar.isOpen !== 'close' ? 'w-full h-full md:w-[350px] animate bg-white' : `${deviceHandle === true ? 'w-0' : 'w-[50px]'} animate`} overflow-x-hidden overflow-y-auto absolute md:relative h-full box-border border-r border-r-Gray-light`}
            >
                <>
                    <Middle X Y className='w-full p-2 hidden md:flex'>
                        <Image className={`${navbar.isOpen === 'close' && 'hidden'}`} src={Logo.src} alt="logo" width={75} height={75} />

                        <div className={`w-full flex flex-row justify-between items-center`}>
                            <Span Y className={`${navbar.isOpen !== 'close' ? 'opacity-100' : 'opacity-0 hidden'}  w-full px-2 text-black text-xs -translate-y-0.5 animate`}>
                                <span className='text-md font-semibold'>
                                    TU Library
                                </span>
                                <div className="w-full h-[1px] bg-Primary" />
                                <span className={`text-sm`}>
                                    TU Library x Jumbo
                                </span>
                            </Span>
                            <button className={`w-4 transform ${navbar.isOpen === 'close' ? 'rotate-180 w-full h-12 flex justify-center items-center' : ''} anmate`} onClick={() => handleSideBar({ isOpen: navbar.isOpen === 'close' ? 'forceOpen' : 'close', page: navbar.page })} >
                                <DoubleArrow />
                            </button>
                        </div>
                    </Middle>
                    <div className={`${navbar.isOpen !== 'close' ? 'opacity-100' : 'opacity-0 hidden md:transition-all duration-300 md:duration-100'} flex flex-col w-full my-2 pt-16 md:pt-0`}>
                        <Accordion
                            title={SidebarCategory({
                                icon: <HomeIcon className={``} color={(Object.keys(page.Dashboard).filter((key) => page.Dashboard[key as keyof typeof page.Dashboard])).includes(currentPage) ? '#B42935' : undefined} />,
                                title: <span className={`${(Object.keys(page.Dashboard).filter((key) => page.Dashboard[key as keyof typeof page.Dashboard])).includes(currentPage) ? 'text-Primary-dark' : ''} animate`}>Dashboard</span>,
                            })}
                            isOpen={dashboardAccordion}
                            onClick={() => setDashboardAccordion(!dashboardAccordion)}
                        >
                            {
                                Object.keys(page.Dashboard).map((key: string) => {
                                    const dashboardItem = page.Dashboard[key as keyof typeof page.Dashboard];
                                    return (
                                        <div className="w-full h-8" key={key}>
                                            {SideBarItem({
                                                label: dashboardItem.label,
                                                link: dashboardItem.link,
                                                isActive: dashboardItem.isActive,
                                                onChangeItem: dashboardItem.onChangeItem,
                                            })}
                                        </div>
                                    );
                                })
                            }
                        </Accordion>
                        <Accordion
                            title={SidebarCategory({
                                icon: <CubeIcon className={``} color={(Object.keys(page.Event).filter((key) => page.Event[key as keyof typeof page.Event])).includes(currentPage) ? '#B42935' : undefined} />,
                                title: <span className={`${(Object.keys(page.Event).filter((key) => page.Event[key as keyof typeof page.Event])).includes(currentPage) ? 'text-Primary-dark' : ''} animate`}>Event</span>,
                            })}
                            isOpen={eventAccordion}
                            onClick={() => setEventAccordion(!eventAccordion)}
                        >
                            {
                                Object.keys(page.Event).map((key: string) => {
                                    const eventItem = page.Event[key as keyof typeof page.Event];
                                    return (
                                        <div className="w-full h-8" key={key}>
                                            {SideBarItem({
                                                label: eventItem.label,
                                                link: eventItem.link,
                                                isActive: eventItem.isActive,
                                                onChangeItem: eventItem.onChangeItem,
                                            })}
                                        </div>
                                    );
                                })
                            }
                        </Accordion>
                        <Accordion
                            title={SidebarCategory({
                                icon: <SettingIcon className={``} color={(Object.keys(page.Beacon).filter((key) => page.Beacon[key as keyof typeof page.Beacon])).includes(currentPage) ? '#B42935' : undefined} />,
                                title: <span className={`${(Object.keys(page.Beacon).filter((key) => page.Beacon[key as keyof typeof page.Beacon])).includes(currentPage) ? 'text-Primary-dark' : ''} animate`}>Beacon</span>,
                            })}
                            isOpen={beaconAccordion}
                            onClick={() => setBeaconAccordion(!beaconAccordion)}
                        >
                            {
                                Object.keys(page.Beacon).map((key: string) => {
                                    const beaconItem = page.Beacon[key as keyof typeof page.Beacon];
                                    return (
                                        <div className="w-full h-8" key={key}>
                                            {SideBarItem({
                                                label: beaconItem.label,
                                                link: beaconItem.link,
                                                isActive: beaconItem.isActive,
                                                onChangeItem: beaconItem.onChangeItem,
                                            })}
                                        </div>
                                    );
                                })
                            }
                        </Accordion>
                        <Accordion
                            title={SidebarCategory({
                                icon: <UserIcon className={``} color={(Object.keys(page.Corporate).filter((key) => page.Corporate[key as keyof typeof page.Corporate])).includes(currentPage) ? '#B42935' : undefined} />,
                                title: <span className={`${(Object.keys(page.Corporate).filter((key) => page.Corporate[key as keyof typeof page.Corporate])).includes(currentPage) ? 'text-Primary-dark' : ''} animate`}>Corporate</span>,
                            })}
                            isOpen={corporateAccordion}
                            onClick={() => setCorporateAccordion(!corporateAccordion)}
                        >
                            {
                                Object.keys(page.Corporate).map((key: string) => {
                                    const corporateItem = page.Corporate[key as keyof typeof page.Corporate];
                                    return (
                                        <div className="w-full h-8" key={key}>
                                            {SideBarItem({
                                                label: corporateItem.label,
                                                link: corporateItem.link,
                                                isActive: corporateItem.isActive,
                                                onChangeItem: corporateItem.onChangeItem,
                                            })}
                                        </div>
                                    );
                                })
                            }
                        </Accordion>
                    </div></>

            </div>
        </>
    );
}
