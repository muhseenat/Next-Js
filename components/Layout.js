import Navbar from './Navbar'
import Meta from './Meta'
import styles from '../styles/Layout.module.css'
import React from 'react'

const Layout = ({children}) => {
  return (
      <>
      <Meta/>
  <Navbar/>
    <div className={styles.container}>
        <main className={styles.main}>
  {children}
        </main>


    </div>
    </>
  )
}

export default Layout