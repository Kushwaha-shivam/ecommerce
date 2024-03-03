import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
    return (
        <header className="text-gray-600  shadow-md">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center ">

                <Link href={'/'}>
                    <span className="flex title-font items-center text-gray-900 ml-3 text-2xl font-extrabold mb-4 md:mb-0">sKart</span>
                </Link>

                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
                    <Link href={'/tshirts'} className="mr-5 hover:text-gray-800 cursor-pointer text-sm font-semibold">T-shirts</Link>
                    <Link href={'/shoes'} className="mr-5 hover:text-gray-800 cursor-pointer text-sm font-semibold">Shoes</Link>
                    <Link href={'/mobiles'} className="mr-5 hover:text-gray-800 cursor-pointer text-sm font-semibold">Mobiles</Link>
                    <Link href={'/watches'} className="mr-5 hover:text-gray-800 cursor-pointer text-sm font-semibold">Watches</Link>
                </nav>
            </div>

            <Link href={'/login'}>
                <FaRegUserCircle className='text-2xl cursor-pointer absolute md:right-28 right-20 top-3 ' />
            </Link>
            <Link href={'/cart'}>
                <AiOutlineShoppingCart className='text-2xl cursor-pointer absolute right-10 top-3' />
            </Link>


        </header>
    )
}

export default Navbar
