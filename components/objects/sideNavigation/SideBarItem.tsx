import React from 'react';
import Link from 'next/link';

type Props = {
    label: string;
    link: string;
    isActive: boolean;
    onChangeItem?: () => void;
};

export const SideBarItem = ({ label, link, isActive, onChangeItem }: Props) => {
    return (
        <Link href={link} className="flex flex-row items-center mb-3 w-full h-full" onClick={onChangeItem}>
            {isActive && <div className="w-1.5 h-full bg-Primary-dark rounded-e-xl border animate" />}
            <div className={`${isActive && 'text-Primary-dark'} text-md text-start pl-12 animate`}><ul className='list-disc'><li>{label}</li></ul></div>
        </Link>
    );
};
