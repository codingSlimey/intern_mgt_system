import React from 'react'
import styles from './styles.module.css'
import Navbar from '../../../components/ELEMENTS/Nav/Navbar';
import SideBar from '../../../components/ELEMENTS/Nav/SideBar';
import CoodSidebar from '../../../components/ELEMENTS/Nav/CoodSidebar';

const Announcements = () => {
  return (
    <>
        <Navbar />
        <CoodSidebar />
        <main className={styles.main}>

        </main>
    </>
  )
}

export default Announcements;


