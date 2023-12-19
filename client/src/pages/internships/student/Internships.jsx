import React from 'react'
import styles from './styles.module.css'
import Navbar from '../../../components/ELEMENTS/Nav/Navbar';
import SideBar from '../../../components/ELEMENTS/Nav/SideBar';
import Header from '../../../components/ELEMENTS/Header/Header';
import HeaderTwo from '../../../components/ELEMENTS/Header/HeaderTwo';
import Internship from './Internship';

const Internships = () => {

    const internships = [
        {
          companyName: 'ABC Corp',
          country: 'USA',
          city: 'New York',
          fieldOfWork: 'IT Specialist',
          year: 2023,
        },
        {
            companyName: 'Osmancik Corp',
            country: 'TRNC',
            city: 'Lefkosa',
            fieldOfWork: 'Web Development',
            year: 2022,
        },
        {
            companyName: 'Northernland Group',
            country: 'TRNC',
            city: 'Magusa',
            fieldOfWork: 'Software Development',
            year: 2021,
        },
 
      ];

        const showCompletedInternships = internships.map((item, index) => 
            <tr key={index}>
                <td>{item.companyName}</td>
                <td>{item.country}</td>
                <td>{item.city}</td>
                <td>{item.fieldOfWork}</td>
                <td>{item.year}</td>
            </tr>
        )

      
  return (
    <>
        <Navbar />
        <SideBar />
        <div className={styles.main}>
            <Header 
                text={'Available Internships'}
                fontSize={'26px'}
                color={'#003679'}
                width={'100%'}
                margin={'1.5rem 1.5rem'}
            />
            <div className={styles.mainCont}>
                <Internship />
                <Internship />
                <Internship />
                <Internship />
                <Internship />
                <Internship />
            </div>
            <HeaderTwo 
                text={'Completed Internships'}
                fontSize={'26px'}
                color={'#000'}
                width={'100%'}
                margin={'1.5rem 1.5rem'}
            />
            <div className={styles.completed}>
                <table>
                    <thead>
                        <tr>
                        <th>Name of the Company</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Working Field</th>
                        <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showCompletedInternships}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Internships;
