import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Navitems from './Navitems'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href="/">
            <div>
                <Image src="/images/logo.svg"
                alt="Logo"
                width={44}
                height={48}
                />
            </div>
        </Link>

        <div className='flex items-center gap-8'>
            <Navitems/>
            <p>Sign In</p>
        </div>

    </nav>
  )
}

export default Navbar