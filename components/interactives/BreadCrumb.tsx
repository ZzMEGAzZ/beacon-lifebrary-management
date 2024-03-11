import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
    className?: string;
};

export default function BreadCrumb(props: Props) {
    const pathName = usePathname();
    const path = pathName.split('/').filter((x) => x !== '');

    return (
        <>
            <div className={`flex ${props.className}`}>
                {path.map((x, i) => (
                    <span key={i} className="flex items-center">
                        <Link className='hover:underline underline-offset-2 animate' href={`/${path.slice(0, i + 1).join('/')
                            }`}>
                            {x}
                        </Link>
                        {i !== path.length - 1 && <div className="mx-1 w-3 h-[1px] bg-white" /> }
                    </span>
                ))}
            </div>
        </>
    );
}
