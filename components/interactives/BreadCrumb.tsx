import React from 'react';
import { useRouter } from 'next/router';

type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function BreadCrumb(props: Props) {
    const router = useRouter();
    const path = router.asPath.split('/').filter((x) => x);

    return (
        <>
            <div className={`flex ${props.className}`}>
                {path.map((x, i) => (
                    <span key={i} className="text-gray-500">
                        {x}
                    </span>
                ))}
            </div>
        </>
    );
}
