import Middle from "@/components/layouts/Middle";
import Span from "@/components/layouts/Span";
import Image from 'next/image';

export default function Login() {
    return (
        <>
            <Middle X Y className="w-full h-full ">
                <Span X className='justify-between'>
                    <Image src='/assets/images/logo.png' alt='logo' width={200} height={200} />
                </Span>
            </Middle>
        </>
    );
}