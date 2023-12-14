import React from 'react'
import styles from './styles.module.css'
import SideBar from '../../../components/ELEMENTS/Nav/SideBar';
import Navbar from '../../../components/ELEMENTS/Nav/Navbar';
import Resource from '../../../components/CONTAINERS/Resource Library/Resource';
import Header from '../../../components/ELEMENTS/Header/Header';
import { useTranslation } from 'react-i18next';
import HeaderTwo from '../../../components/ELEMENTS/Header/HeaderTwo';

const StudentDash = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.dash}>
        <Navbar />
        <SideBar />
        <section className={styles.resource}>
          <Header text={t('resLibrary.title')} fontSize={'18px'} fontWeight={'700'} color={'#003976'} margin={'1rem 1.2rem'} />
          <section className={styles.resourceCont}>
            <Resource />
            <Resource />
            <Resource />
          </section>
        </section>
        <section className={styles.trackerCont}>
          <section className={styles.tracker}>
            <Header 
              text={t('perfTracker.title')} 
              fontSize={'18px'} 
              fontWeight={'700'} 
              color={'#003976'} 
              margin={'1rem 1.2rem'} 
              textAlign={'left'}
              width={'90%'}
            /> 
            <section className={styles.performance}>
              

            </section>
          </section>
          <section className={styles.calendarcont}>
            <Header 
              text={t('calendar.cal')} 
              fontSize={'18px'} 
              fontWeight={'700'} 
              color={'#003976'} 
              margin={'1rem 1.2rem'} 
            /> 
            <section className={styles.calendar}>

            </section>
          </section>
        </section>
    </div>
  )
}
export default StudentDash;


