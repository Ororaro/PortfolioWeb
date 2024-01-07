import React, { useEffect } from 'react'
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import './Section1.css'
import "aos/dist/aos.css";
import Aos from 'aos';
import csslogo from '../../img/css.png'
const Section1 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <Container maxWidth='lg'>
            <Box className="control-skills" id="skillsSection">
                <Typography data-aos="fade-down" sx={{ fontSize:{md:'48px',sm:'48px',xs:'35px'}, fontWeight: '700', fontFamily: 'initial', padding: '15px', textAlign: 'center',letterSpacing:'7px' }}>Skills</Typography>
                <Grid container spacing={1}>
                    <Grid item md={4} sm={4} xs={6}>
                        <Card data-aos="fade-down" sx={{ boxShadow:'2px 2px 2px 2px',height: '100%', textAlign: 'center', paddingTop: '2rem' }}>
                            <img src={`https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png`} width="60%" />
                            <Typography sx={{fontFamily:'initial',textAlign:'center',padding:'10px 0'}}>HTML</Typography>
                        </Card>
                    </Grid>

                    <Grid item md={4} sm={4} xs={6}>
                        <Card data-aos="fade-down" sx={{ boxShadow:'2px 2px 2px 2px',height: '100%', textAlign: 'center',  }}>
                            <img src={csslogo} width="80%" />
                            <Typography sx={{position:'fixed',bottom:'0',left:'45%',fontFamily:'initial',marginTop: '-15px !important',padding:'10px 0'}}>CSS</Typography>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={4} xs={6}>
                        <Card data-aos="fade-down" sx={{boxShadow:'2px 2px 2px 2px', height: '100%', textAlign: 'center', paddingTop: '1rem' }}>
                            <img src={`https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png`} width="65%" />
                            <Typography sx={{fontFamily:'initial',padding:'10px 0'}}>JavaScript</Typography>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={4} xs={6}>
                        <Card data-aos="fade-up" sx={{ boxShadow:'2px 2px 2px 2px',height: '100%', textAlign: 'center', paddingTop: '2rem' }}>
                            <img src={`https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png`} width="60%" />
                            <Typography sx={{fontFamily:'initial',padding:'10px 0'}}>React.js</Typography>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={4} xs={6}>
                        <Card data-aos="fade-up" sx={{boxShadow:'2px 2px 2px 2px', height: '100%', textAlign: 'center', paddingTop: '2rem' }}>
                            <img src={`https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png`} width="75%" />
                            <Typography sx={{fontFamily:'initial',padding:'10px 0'}}>Material UI</Typography>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={4} xs={6}>
                        <Card data-aos="fade-up" sx={{boxShadow:'2px 2px 2px 2px', height: '100%', textAlign: 'center', paddingTop: '2rem' }}>
                            <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png`} width="75%" />
                            <Typography sx={{fontFamily:'initial',padding:'10px 0'}}>Bootstrap</Typography>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={4} xs={6}>
                        <Card data-aos="fade-up" sx={{boxShadow:'2px 2px 2px 2px', height: '100%', textAlign: 'center', paddingTop: '2rem' }}>
                            <img src={`https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png?20170311074507`} width="75%" />
                            <Typography sx={{fontFamily:'initial',padding:'10px 0'}}>Vue.js</Typography>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={4} xs={6}>
                        <Card data-aos="fade-up" sx={{boxShadow:'2px 2px 2px 2px', height: '100%', textAlign: 'center', paddingTop: '2rem' }}>
                            <img src={`https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png`} width="75%" />
                            <Typography sx={{fontFamily:'initial',padding:'10px 0'}}>Ant Design</Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Box >
        </Container >
    )
}

export default Section1