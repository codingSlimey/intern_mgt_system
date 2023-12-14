import React, { useState } from 'react'
import styles from './styles.module.css'
import Button from '../../../components/ELEMENTS/Button/Button'
import Image from '../../../components/ELEMENTS/Image/Image'
import HeaderTwo from '../../../components/ELEMENTS/Header/HeaderTwo'
import Form from '../../../components/ELEMENTS/Form/Form'
import { Link } from 'react-router-dom'
import Paragraph from '../../../components/ELEMENTS/Paragraph/Paragraph'


const StudentLogin = () => {
  const [userData, setUserData] = useState({email: '', password: ''})
  const [loginSuccess, setLoginSuccess] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevValue => ({...prevValue, [name]:value}))
  }

  // FUNCTION TO HANDLE LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userData)
  }

  return (
    <main className={styles.main}>
        <section>
            <Image 
                src={'https://res.cloudinary.com/dmyvdqjso/image/upload/v1700391819/navijje30m4wcf2epexl.png'}
                height={"100px"}
                width={"100px"}
                margin={"2rem auto 1rem auto"}
            />
            <HeaderTwo 
                text={"Login"} 
                color={'#003976'} 
                fontSize={'22px'} 
                margin={'0'}
            />
          <form className={styles.form}>
            <label htmlFor={'email'}>Email or Student ID:</label>
            <input type={'email'} name={'email'} value={userData.email} onChange={handleChange} placeholder={'Username or Email'} className={styles.inp} />

            <label htmlFor={'password'}>Password:</label>
            <input type={'password'} name={'password'} value={userData.password} onChange={handleChange} placeholder={'Password'} className={styles.inp} />
            {!loginSuccess && <Paragraph text={'*Wrong Email or Password'} fontSize={'12px'} fontWeight={'400'} color={'#ff1a2f'} margin={'0 0.5rem'} />}

            <input type='submit' value={'Login'} onClick={handleLogin} onKeyDown={handleLogin} className={styles.btn} />

            <div>
              <input type={'checkbox'} name='remember' className={styles.checkbox} />
              <label htmlFor={'remember'} className={styles.checkboxLabel}>Remember me</label>
            </div>

            <p>Don't have an account?</p>
            <Link style={{textAlign: 'center', textDecoration: 'none', marginLeft: '7rem'}}>Create Account</Link>
          </form>  
        </section>
    </main>
  )
}

export default StudentLogin;
