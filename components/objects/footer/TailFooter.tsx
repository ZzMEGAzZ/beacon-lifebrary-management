import Middle from '@/components/layouts/Middle'

export default function TailFooter() {
    return (
        <>
            <Middle X Y className="relative w-full h-full p-4 bg-slate-200 text-sm">
                <span className="text-black">Copyright © 2024 &nbsp;</span>
                <span className="text-red-500">Thammasat University Library</span>
            </Middle>
        </>
    );
}
