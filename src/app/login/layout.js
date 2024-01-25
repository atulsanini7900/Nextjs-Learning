'use client'
import Link from 'next/link'
import React from 'react'
import styles from "./layout.module.css"
import { usePathname } from 'next/navigation'
const layout = ({ children }) => {
    const pathname=usePathname();
    return (
        <>
            <div>
                {
                    pathname!=="/login/student"?
                    <ul className={styles.myul}>
                    <li> <Link href="/">Home </Link></li>
                    <li> <Link href="/login">Login </Link></li>
                    <li>
                        <Link href="/student">Student Login </Link>
                        
                    </li>
                
                    <li>
                        <Link href="/login/admin">Admin Login</Link>

                    </li>
                </ul>
                    :
                    <ul className={styles.myul}>
                    <li> <Link href="/">Home </Link></li>
                    <li> <Link href="/login">Login </Link></li>
                   
                    <li>
                        <Link href="/login/admin">Admin Login</Link>

                    </li>
                </ul>
                }
              



            </div>


            {children}
        </>
    )
}

export default layout