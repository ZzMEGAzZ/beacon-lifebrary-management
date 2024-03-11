type Props = {
    icon: any;
    title: any;
};

export const SidebarCategory = ({ icon, title}: Props) => {
    return (
        <>
            <div className="w-full h-10 px-4 flex flex-row items-center">
                <div className="flex items-center justify-center w-10 h-10">{icon}</div>
                <div className="flex items-center justify-center w-full h-10">
                    <span className="text-base">{title}</span>
                </div>
            </div>
        </>
    );
};
