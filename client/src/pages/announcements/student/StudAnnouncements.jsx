import React from 'react'
import styles from './styles.module.css'
import Navbar from '../../../components/ELEMENTS/Nav/Navbar';
import SideBar from '../../../components/ELEMENTS/Nav/SideBar';
import Header from '../../../components/ELEMENTS/Header/Header';
import { useTranslation } from 'react-i18next';

const StudAnnouncements = () => {

  const [t, i18n] = useTranslation('global')

  return (
    <>
        <Navbar />
        <SideBar />
        <main className={styles.announcements}>
          <Header
            text={t('announcements.title')}
            color={'#003796'}
            fontSize={'22px'}
            textAlign={'left'}
            width={'100%'}
            margin={'1.5rem 2rem'}
          />
        </main>
    </>
  )
}


export default StudAnnouncements;