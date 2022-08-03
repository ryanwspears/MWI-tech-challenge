import React from 'react'
import LayoutStyles from '../styles/Layout.module.css'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <>
        <div className={LayoutStyles.container}>
            <main className={LayoutStyles.main}>
                <Nav />
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout