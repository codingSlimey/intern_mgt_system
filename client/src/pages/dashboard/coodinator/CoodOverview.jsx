import React from 'react'
import styles from './styles.module.css'
import supervisors from './supervisors.js'
import Navbar from '../../../components/ELEMENTS/Nav/Navbar'
import HeaderTwo from '../../../components/ELEMENTS/Header/HeaderTwo'
import Header from '../../../components/ELEMENTS/Header/Header'
import { Link } from 'react-router-dom'
import ApplicationsTable from './ApplicationsTable.jsx'
import CoodSidebar from '../../../components/ELEMENTS/Nav/CoodSidebar.jsx'

export default function CoodOverview() {


    const displaySupervisors = supervisors.map((item, index) => 
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.company}</td>
                <td>{item.email}</td>
                <td>{item.field}</td>
                <td>{item.tel}</td>
                <td>{item.intern}</td>
            </tr>
        )
  return (
    <>
        <Navbar />
        <CoodSidebar />
        <div className={styles.overview}>
            <Header 
                text={'Overview'}
                fontSize={'20px'}
                fontWeight={'800'}
                color={'#003679'}
                margin={'1rem 1rem'}
            />
            <div className={styles.one}>
                <div className={styles.supes}>
                    <HeaderTwo 
                        text={'Supervisors'}
                        fontSize={'18px'}
                        fontWeight={'800'}
                        color={'#003679'}
                        margin={'0.5rem 0 1rem 1rem'}
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Field</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Intern</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displaySupervisors}
                        </tbody>
                    </table>
                    <Link className={styles.allSupesLink}>View all supervisors</Link>
                </div>
                <div className={styles.cal}>
                    <HeaderTwo 
                        text={'Personal Calendar'}
                        fontSize={'18px'}
                        fontWeight={'800'}
                        color={'#003679'}
                        margin={'0.5rem 0 1rem 1rem'}
                    />
                </div>
            </div>
            <div className={styles.two}>
                <ApplicationsTable />
            </div>

        </div>
    </>
  )
}
