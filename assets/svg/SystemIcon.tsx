import Middle from '@/components/layouts/Middle';

export const ArrowUp = ({ className, color }: { className?: string; color?: string }) => {
    return (
        <Middle X Y className={className}>
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Middle>
    );
};

export const DoubleArrow = ({ className, color }: { className?: string; color?: string }) => {
    return (
        <Middle X Y className={className}>
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 11L8 6L13 1M6 11L1 6L6 1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </Middle>
    );
};
