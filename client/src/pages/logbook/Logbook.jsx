import React from 'react'
import styles from './styles.module.css'
import SideBar from '../../components/ELEMENTS/Nav/SideBar';
import Navbar from '../../components/ELEMENTS/Nav/Navbar';
import Log from './Log';
import { FiEdit3 } from 'react-icons/fi'
import { useTranslation } from 'react-i18next';
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from 'react-router-dom';

const Logbook = () => {

    const [t, i18n] = useTranslation("global");

  return (
    <>
        <Navbar />
        <SideBar />
        <section className={styles.logbook}>
            <div className={styles.header}>
                <Link to={'/student/add/new/log'} className={styles.addLogBtn}><FiEdit3 style={{marginRight: '0.2rem'}} /> {t('logbook.add')}</Link>
                <button className={styles.downloadBtn}>{t('logbook.download')} <MdOutlineFileDownload /></button>
            </div>
            <main className={styles.main}>
                <Log to={"/student/view-log"} />
                <Log to={"/student/view-log"} />
                <Log to={"/student/view-log"} />
                <Log to={"/student/view-log"} />
                <Log to={"/student/view-log"} />
                <Log to={"/student/view-log"} />
                <Log to={"/student/view-log"} />
                <Log to={"/student/view-log"} />
            </main>

        </section>
    </>
  )
}

export default Logbook;