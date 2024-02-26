import Middle from '@/components/layouts/Middle';

export default function NotFound() {
    return (
        <Middle X Y className="w-full h-full p-4 bg-black">
            <div className="flex flex-col items-center">
                <p className="text-white text-5xl font-bold">404</p>
                <p className="text-white text-2xl font-bold">Page not found</p>
                <a href="/" className="text-blue-500 hover:text-blue-700 text-base mt-4 cursor-pointer">
                    Go back home
                </a>
            </div>
        </Middle>
    );
}
