import BreadCrumb from '@/components/interactives/BreadCrumb';
import Middle from '@/components/layouts/Middle'
import Span from '@/components/layouts/Span';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const path = pathname.split('/').filter((x) => x);
    const currentPage = (path[path.length - 1 > 0 ? path.length - 1 : 0]).slice(0, 1).toUpperCase() + (path[path.length - 1 > 0 ? path.length - 1 : 0]).slice(1).replace(/-/g, ' ');
    return (
        <>
            <Middle X Y className="relative w-full h-full p-4 bg-Primary-light text-sm drop-shadow-xl shadow-xl">
                <Span X Y className="text-white w-full">
                    <div>
                        <Span Y>
                            <span className="text-base font-bold">{currentPage}</span>
                            <BreadCrumb />
                        </Span>
                    </div>
                    <div>
                        <span className="text-black">Thammasat University Library</span>
                    </div>
                </Span>
            </Middle>
        </>
    );
}
