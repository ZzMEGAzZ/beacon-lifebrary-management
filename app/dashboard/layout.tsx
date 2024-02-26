import '../../styles/globals.css';
import SideNav from '@/components/objects/sideNavigation/sideNavigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full">
            <div className="absolute sm:relative h-[95dvh] w-screen sm:w-full flex">
                <SideNav />
                <div className="w-full h-full">{children}</div>
            </div>
        </div>
    );
}
