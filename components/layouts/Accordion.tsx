import { ArrowUp } from '@/assets/svg/SystemIcon';
import { useEffect, useState } from 'react';
import { useMeasure } from 'react-use';

type Props = {
    children: React.ReactNode;
    title: React.ReactNode;
    isOpen: boolean;
    onClick?: () => void;
    className?: String;
};

export default function Accordion(props: Props) {
    const [contentHeight, setContentHeight] = useState<number>(0);

    const [refContentDetail, { height }] = useMeasure<HTMLDivElement>();

    useEffect(() => {
        setContentHeight(height + 20);
    }, [height]);

    return (
        <div className={`w-full ${props.className}`}>
            <div className="flex justify-between items-center w-full cursor-pointer" onClick={props.onClick}>
                <div className=""> {props.title} </div>
                <div onClick={props.onClick} className={`mr-4 cursor-pointer ${props.isOpen ? 'transform rotate-180' : ''} animate`}>
                    <ArrowUp className="w-4 h-4" />
                </div>
            </div>
            <div style={{ height: props.isOpen ? `${contentHeight}px` : '0px' }} className={`overflow-hidden ${props.isOpen && `py-[10px]`} animate`}>
                <div ref={refContentDetail} className="w-[90%]">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
