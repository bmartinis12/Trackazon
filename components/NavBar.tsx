import Image from "next/image"
import Link from "next/link"
import { User, Search, Heart } from "lucide-react"


const NavBar = () => {
    return (
        <header className="w-full">
            <nav className="nav">
                <Link href='/' className="flex items-center gap-1">
                    <Image src='/assets/icons/logo.svg' width={27} height={27} quality={100} alt="Trackazon logo" />
                    <p className="nav-logo">Track<span className="text-primary">azon</span></p>
                </Link>
                <div className="flex items-center gap-5">
                    <Search className="object-contain w-[18px] h-[18px] sm:w-[28px] sm:h-[28px]" />
                    <Heart className="object-contain w-[18px] h-[18px] sm:w-[28px] sm:h-[28px]" />
                    <User className="object-contain w-[18px] h-[18px] sm:w-[28px] sm:h-[28px]" />
                </div>
            </nav>
        </header>
    )
}

export default NavBar