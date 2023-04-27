import React from 'react'
import './Section1.css'
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "aos/dist/aos.css";
import Aos from 'aos';
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [userNameColor, setUserNameColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [messageColor, setMessageColor] = useState('')
    const [checkCorrect, setCheckCorrect] = useState('')
    const userCollectionRef = collection(db, "contactdata")

    const validateForm = (e) => {
        e.preventDefault()
        if (name.length > 0) {
            setUserNameColor('green')

        }
        else {
            setUserNameColor('red')
        }
        if (email.includes('@')) {
            setEmailColor('green')

        }
        else {
            setEmailColor('red')
        }
        if (message != '') {
            setMessageColor('green')

        }
        else {
            setMessageColor('red')
        }
    }
    const handleSubmit = () => {
        if (name.length > 0 && email.includes('@') && message != '') {
            addDoc(userCollectionRef, {
                name: name,
                email: email,
                message: message
            }).then(() => {
                setCheckCorrect("Submit Successfully!")
                setName('')
                setEmail('')
                setMessage('');
            })

        }
    }
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setCheckCorrect('')
        }, 3000)
        return () => clearTimeout(timeOut)
        // eslint-disable-next-line 
    }, [checkCorrect])
    return (
        <Container maxWidth="lg">
            <Typography variant='h2' sx={{ fontSize: { md: '48px', sm: '48px', xs: '35px' }, fontWeight: '700', fontFamily: 'initial', padding: '20px', textAlign: 'center', marginBottom: '15px', letterSpacing: '7px' }}>Contact Me</Typography>
            <Typography variant='h2' sx={{ fontSize: { md: '48px', sm: '48px', xs: '35px' }, fontWeight: '700', fontFamily: 'initial', textAlign: 'center', marginBottom: '15px', letterSpacing: '4px', color: 'green' }}>{checkCorrect}</Typography>
            <Box className="form" id='contactSection' >
                <form onSubmit={validateForm}>
                    <Grid container >
                        <Grid item md={8} container spacing={3}>
                            <Grid item md={6} sm={6} xs={12}>
                                <Box className="labeldata">
                                    <input type='text' placeholder='Name' value={name} style={{ borderColor: userNameColor }}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={6} sm={6} xs={12}>
                                <Box className="labeldata">
                                    <input type='email' placeholder='Email' value={email} style={{ borderColor: emailColor }}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <Box className="labeldata">
                                    <textarea type='text' placeholder='Enter Your Message' value={message} style={{ borderColor: messageColor }}
                                        onChange={(e) => {
                                            setMessage(e.target.value)
                                        }}
                                    ></textarea>
                                </Box>
                            </Grid>
                            <Box className="btnContact">
                                <Button type="submit" onClick={handleSubmit} sx={{ color: '#fff', borderRadius: '10px', fontSize: '16px', textTransform: 'none', padding: '15px' }}>Send Message</Button>
                            </Box>
                        </Grid>

                        <Grid item md={4} container  >
                            <Grid item md={12} sm={6} xs={12} >
                                <Box className="contact-icon" sx={{ padding: { md: '1rem 5rem', sm: '1rem 5rem', xs: '1rem 1rem' } }} >
                                    <CallIcon />
                                    <Box className="contact-text">
                                        <Typography variant='h5'>Call</Typography>
                                        <Typography variant='h4'>064-934-4956</Typography>
                                    </Box>
                                </Box>

                            </Grid>
                            <Grid item md={12} sm={6} xs={12}>
                                <Box className="contact-icon" sx={{ padding: { md: '1rem 5rem', sm: '1rem 5rem', xs: '1rem 1rem' } }}>
                                    <EmailIcon />
                                    <Box className="contact-text">
                                        <Typography variant='h5'>Email</Typography>
                                        <Typography variant='h4'>ch.natpakal_st@tni.ac.th</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={12} sm={6} xs={12}>
                                <Box className="contact-icon" sx={{ padding: { md: '1rem 5rem', sm: '1rem 5rem', xs: '1rem 1rem' } }}>
                                    <GitHubIcon />
                                    <Box className="contact-text">
                                        <Typography variant='h5'>Github</Typography>
                                        <Typography variant='h4'><Link sx={{ textDecoration: 'none', color: 'gray' }} href="https://github.com/Ororaro">https://github.com/Ororaro</Link></Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    )
}

export default Contact