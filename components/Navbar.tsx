import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Navitems from './Navitems'
import { SignInButton,SignedIn,SignedOut,UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
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
            {/*           {// if signed out then show this} */}
                <SignedOut> 
                <SignInButton>
                  <Button className='btn-signin'>Signin</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>      
              <UserButton afterSignOutUrl='/'></UserButton>
            </SignedIn>
        </div>

    </nav>
  )
}

export default Navbar