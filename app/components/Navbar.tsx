import Link from "next/link";
import Logo from "@/public/logo.png"
import Image from "next/image";

export function Navbar() {
    return (
        <div className="flex py-5 items-center justify-between">
            <Link href={"/"} className="flex items-center gap-2">
                <Image src={Logo} alt="Logo" className="size-12"/>
                <h3 className="text-3xl font-semibold">Calendar<span className="text-blue-500">App</span></h3>
            </Link>
            
            <button>
                botonprueba
            </button>
        </div>
    )
}