import React, { useState } from 'react'
import styles from './styles.module.css'
import Image from '../../../components/ELEMENTS/Image/Image'
import Button from '../../../components/ELEMENTS/Button/Button'
import HeaderTwo from '../../../components/ELEMENTS/Header/HeaderTwo'
import Paragraph from '../../../components/ELEMENTS/Paragraph/Paragraph'
import { Link } from 'react-router-dom'
import SignupSuccess from '../SignupSuccess'

const StudentSignup = () => {
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        stdNo: '',
        confPwd: '',
    })
    const [passwordMatch, setPasswordMatch] = useState(true);

    // handle form fields change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    // FUNCTION TO HANDLE FORM SUBMIT
    const handleSubmit = (event) => {
        event.preventDefault();
        if(user.password === user.confPwd){
            alert('Signup Successful')
        } else {
            alert('Password does not match')
            setPasswordMatch(prev => !prev)
        } 
    }

    // const signupSuccessful = (bool) => {
    //     bool ? <SignupSuccess /> : <></>
    // }
  return (
    <main className={styles.main}>
        <section>
            <Image 
                src={'https://res.cloudinary.com/dmyvdqjso/image/upload/v1700391819/navijje30m4wcf2epexl.png'}
                height={"80px"}
                width={"80px"}
                margin={"0.8rem auto 0.8rem auto"}
            />
            <HeaderTwo 
                text={"Create Account"} 
                color={'#003976'} 
                fontSize={'22px'} 
                margin={'0'}
            />
            <form className={styles.form}>
                <label htmlFor={'fname'}>First Name:</label>
                <input type={'text'} name={'fname'} value={user.fname} onChange={handleChange} placeholder={'First Name'} className={styles.inp} />

                <label htmlFor={'lname'}>Last Name:</label>
                <input type={'text'} name={'lname'} value={user.lname} onChange={handleChange} placeholder={'Last Name'} className={styles.inp} />

                <label htmlFor={'email'}>Email:</label>
                <input type={'email'} name={'email'} value={user.email} onChange={handleChange} placeholder={'Email'} className={styles.inp} />

                <label htmlFor={'stdNo'}>Student Number:</label>
                <input type={'text'} name={'stdNo'} value={user.stdNo} onChange={handleChange} placeholder={'20****69'} className={styles.inp} />

                <label htmlFor={'password'}>Password:</label>
                <input type={'password'} name={'password'} value={user.password} onChange={handleChange} placeholder={'Password'} className={styles.inp} />

                <label htmlFor={'confPwd'}>Confirm Password:</label>
                <input type={'password'} name={'confPwd'} value={user.confPwd} onChange={handleChange} placeholder={'Confirm Password'} className={styles.inp} />
                { !passwordMatch && <Paragraph text={'*Passwords do not match'} fontSize={'12px'} fontWeight={'400'} color={'#ff1a2f'} margin={'0 0.5rem'} /> }

                <input type='submit' value={'Sign up'} onClick={handleSubmit} onKeyDown={handleSubmit} className={styles.btn} />
            </form>
            <Paragraph text={'By creating an account, you are agreeing to our terms of service and privacy policy'} fontSize={'13px'} fontWeight={'500'} textAlign={'center'} width={'50%'} margin={'0.5rem auto'} />
            <Paragraph text={'Already have an account?'} fontSize={'13px'} fontWeight={'500'} textAlign={'center'} width={'50%'} margin={'0 auto 0.5rem auto'}  />
            <Link to={'/student/login'} style={{textDecoration: 'none', color: '#406A98', fontSize: '16px', fontWeight: '600', marginBottom: '2rem'}}>Sign in</Link>
        </section>
    </main>
  )
}

export default StudentSignup;
