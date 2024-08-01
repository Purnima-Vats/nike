import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { headerLogo } from '../public/images'

    const Navbar = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav>
                <Link
                    href="/"
                >
                    <Image
                        src={headerLogo}
                        alt="logo"
                        width={130}
                        height={29}
                    />
                </Link>
            </nav>
        </header>
    )
}

export default Navbar