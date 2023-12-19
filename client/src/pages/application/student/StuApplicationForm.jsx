import React, { useState } from 'react';
import styles from './styles.module.css';
import { BsDownload } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import Navbar from '../../../components/ELEMENTS/Nav/Navbar';
import SideBar from '../../../components/ELEMENTS/Nav/SideBar';
import Header from '../../../components/ELEMENTS/Header/Header';
import HeaderTwo from '../../../components/ELEMENTS/Header/HeaderTwo';
import Paragraph from '../../../components/ELEMENTS/Paragraph/Paragraph';
import { useTranslation } from 'react-i18next';
// import insurance from '../../../assets/SocialInsuranceForm.docx';

const StuApplicationForm = () => {


    const [t, i18n] = useTranslation('global');
    const [userData, setUserData] = useState({
        stdNo: '',
        fname: '',
        lname: '',
        mobile: '',
        email: '',
        duration: ''
    })

    console.log(userData)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
  return (
    <>
        <Navbar />
        <SideBar />
        <section className={styles.appCont}>
            <Header
                text={'Application Form'}
                color={'#003679'}
                fontSize={'28px'}
                margin={'1.5rem 2rem'}
            />
            <div className={styles.formCont}>
                    <form className={styles.form}>
                        <HeaderTwo 
                            text={t('application.stuInfo')}
                            color={'#003679'}
                            fontSize={'20px'}
                            margin={'1rem 1.5rem'}
                        />

                        <label htmlFor='stdNo'>{t('profile.stdNo')} <span style={{color: '#ff1a2f'}}>*</span></label>
                        <input text={'text'} name={'stdNo'} value={userData.stdNo} onChange={handleChange} placeholder={t('profile.stdNo')} />

                        <label htmlFor='fname'>{t('profile.fname')} <span style={{color: '#ff1a2f'}}>*</span></label>
                        <input text={'text'} name={'fname'} value={userData.fname} onChange={handleChange} placeholder={t('profile.fname')} />

                        <label htmlFor='lname'>{t('profile.lname')} <span style={{color: '#ff1a2f'}}>*</span></label>
                        <input text={'text'} name={'lname'} value={userData.lname} onChange={handleChange} placeholder={t('profile.lname')} />

                        <label htmlFor='email'>{t('profile.email')} <span style={{color: '#ff1a2f'}}>*</span></label>
                        <input text={'email'} name={'email'} value={userData.email} onChange={handleChange} placeholder={t('profile.email')} />

                        <label htmlFor='mobile'>{t('application.tel')} <span style={{color: '#ff1a2f'}}>*</span></label>
                        <input text={'text'} name={'mobile'} value={userData.mobile} onChange={handleChange} placeholder={t('application.tel')} />

                        {/* FIX DURATION */}
                        <label htmlFor='duration'>{t('application.dur')} <span style={{color: '#ff1a2f'}}>*</span></label>
                        <select name='duration' id='duration' onChange={handleChange}>
                            <option value={userData.duration}>20 days</option>
                            <option value={userData.duration}>40 days</option>
                        </select>

                        <button>{t('application.submit')}</button>
                    </form>
                    <div className={styles.info}>
                        <div className={styles.details}>
                            <HeaderTwo 
                                text={t('internships.intInfo')}
                                color={'#003679'}
                                fontSize={'20px'}
                                margin={'1rem 1.5rem'}
                            />

                            <div>
                                <h3>{t('internships.company')}</h3>
                                <p>Apple Inc</p>
                            </div>
                            <div>
                                <h3>{t('internships.role')}</h3>
                                <p>IT Specialist</p>
                            </div>
                            <div>
                                <h3>{t('internships.desc')}</h3>
                                <p>A brief description of the internship's details and requirements...</p>
                            </div>

                        </div>
                        <div className={styles.trnc}>
                            <HeaderTwo 
                                text={'For TRNC/Turkey Students'}
                                color={'#003679'}
                                fontSize={'20px'}
                                margin={'1rem 1.5rem'}
                            />
                            <Paragraph 
                                text={t('application.trncStu')}
                                color={'#101110BF'}
                                width={'80%'}
                                margin={'0 1.5rem'}
                                fontSize={'16px'}
                                fontWeight={'700'}
                                lineHeight={'20px'}
                            />
                            <div className={styles.downloadBtn}>
                                <a href='../../../assets/SocialInsuranceForm.docx' download>
                                    <button><BsDownload /> Download Insurance Form</button>
                                </a>
                            </div>
                            <div className={styles.upload}>
                                <FiUpload style={{marginRight: '0.5rem'}} /> Upload Social Insurance Form
                            </div> 
                        </div>
                    </div>

                </div>
        </section>
    </>
  )
}


export default StuApplicationForm;
