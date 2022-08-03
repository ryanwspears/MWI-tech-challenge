import React from 'react'
import NavStyles from '../styles/Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Nav = () => {
  const router = useRouter();

  if(router.pathname == '/') {
    return (
      <div className={NavStyles.top}>
          <Image src={'/Logo.png'} alt={'Logo'} width={350} height={73} />
          <Link href={'/contact'}>contact</Link>
      </div>
    )
  }
  else if(router.pathname == '/contact') {
    return (
      <div className={NavStyles.top}>
          <Image src={'/Logo.png'} alt={'Logo'} width={350} height={73} />
          <Link href={'/'}>home</Link>
      </div>
    )
  }
}

export default Nav