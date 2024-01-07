import { Box, Card, Container, Grid, Link, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import './Section2.css'
import NetflixImg from '../../img/NetflixShowApart.jpeg'
import LazadaImg from '../../img/LazadaAdapt.png'
import BlueProtocolImg from '../../img/Blue Protocol.png'
import PokemonAPIImg from '../../img/PokemonAPI.png'
import LandingPage from '../../img/landingPage.png'
import Currency from '../../img/Currency.png'
import "aos/dist/aos.css";
import Aos from 'aos';
import IosShareIcon from '@mui/icons-material/IosShare';
const Section2 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <Container maxWidth="lg">
      <Box className="control-port" id="projectSection" sx={{ paddingTop: { md: '50px', sm: '50px', xs: '120px' } }}>
        <Typography data-aos="fade-up" variant='h1' sx={{ fontSize:{md:'48px',sm:'48px',xs:'35px'}}}>PORTFOLIO</Typography>
        <Box className="control-item">
          <Grid container spacing={2}>
            <Grid item md={6} sm={6} xs={12}>
              <Box data-aos="flip-right" >
                <img src={NetflixImg} width='100%' height="100%" />
              </Box>
            </Grid>
            <Grid item md={6} sm={6} xs={12} order={{ md: -1, }}>
              <Card variant="outlined" sx={{ position: 'relative', height: '100%' }}>
                <Box sx={{ padding: '15px' }}>
                  <Typography variant='h3' sx={{fontSize:{md:"40px",sm:"40px",xs:'35px'}}}>Netflix Clone</Typography>
                  <Typography variant='h5'>I have create this WebSite for Practice skill Clone</Typography>
                  <Typography variant='h4'><span style={{ fontWeight: '700' }}>Build With : </span>React.js , Material UI (MUI)</Typography>
                  <Box sx={{ display: 'flex' }}>
                    <Typography variant='h4'>Demo Web :</Typography>
                    <Link href="https://ororaro.github.io/NetflixClone/" target='_blank'><IosShareIcon sx={{ margin: '20px', fontSize: '40px' }} /></Link>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12} order={{ md: 2, xs: 3 }}>
              <Box data-aos="flip-right">
                <img src={LazadaImg} width='100%' height="100%" />
              </Box>
            </Grid>
            <Grid item md={6} sm={6} xs={12} order={{ md: 2, xs: 3 }} >
              <Card variant="outlined" sx={{ position: 'relative', height: '100%' }} >
                <Box sx={{ padding: '15px' }}>
                  <Typography variant='h3' sx={{fontSize:{md:"40px",sm:"40px",xs:'35px'}}}>Lazada Clone</Typography>
                  <Typography variant='h5'>I have create this site because I wanted to Practice About CreateContext for manage Buy and Cart to display amount , Total Price on Cart</Typography>
                  <Typography variant='h4'><span style={{ fontWeight: '700' }}>Build With : </span>React.js , Material UI (MUI)</Typography>
                  <Box sx={{ display: 'flex' }}>
                    <Typography variant='h4'>Demo Web :</Typography>
                   <Link href="https://ororaro.github.io/LazadaClone/"  target='_blank'><IosShareIcon sx={{ margin: '20px', fontSize: '40px' }} /></Link> 
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}  >
              <Box data-aos="flip-left" >
                <img src={BlueProtocolImg} width='100%' />
              </Box>
            </Grid>
            <Grid item md={6} sm={6} xs={12} >
              <Card variant="outlined" sx={{ position: 'relative', height: '100%' }}>
                <Box sx={{ padding: '15px' }}>
                  <Typography variant='h3' sx={{fontSize:{md:"40px",sm:"40px",xs:'35px'}}}>Blue Protocol Adapt</Typography>
                  <Typography variant='h5'>This website for learned about React-Switch and Animation.css by AOS</Typography>
                  <Typography variant='h4'><span style={{ fontWeight: '700' }}>Build With : </span>React.js , Material UI (MUI) , AOS , React-Switch</Typography>
                  <Box sx={{ display: 'flex' }}>
                    <Typography variant='h4'>Demo Web :</Typography>
                    <Link href="https://ororaro.github.io/blueProtocolAdapt/"  target='_blank'><IosShareIcon sx={{ margin: '20px', fontSize: '40px' }} /></Link>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12} order={{ xs: 5 }}>
              <Card variant="outlined" sx={{ position: 'relative', height: '100%' }}>
                <Box sx={{ padding: '15px' }}>
                  <Typography variant='h3' sx={{fontSize:{md:"40px",sm:"40px",xs:'35px'}}}>PokemonAPI</Typography>
                  <Typography variant='h5'>This website will show Pokemon information and can be searched. </Typography>
                  <Typography variant='h4'><span style={{ fontWeight: '700' }}>Build With : </span>React.js , Bootstrap</Typography>
                  <Box sx={{ display: 'flex' }}>
                    <Typography variant='h4'>Demo Web :</Typography>
                    <Link href='https://ororaro.github.io/pokemonCard/' target='_blank'><IosShareIcon sx={{ margin: '20px', fontSize: '40px' }} /></Link>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12} order={{ md: 3, xs: 3 }}>
              <Box data-aos="flip-right">
                <img src={PokemonAPIImg} width='100%' />
              </Box>
            </Grid>
            <Grid item md={6} sm={6} xs={12} order={{ md: 0, xs: 1}}>
              <Card variant="outlined" sx={{ position: 'relative', height: '100%' }}>
                <Box sx={{ padding: '15px' }}>
                  <Typography variant='h3' sx={{fontSize:{md:"40px",sm:"40px",xs:'35px'}}}>LandingPageClone</Typography>
                  <Typography variant='h5'>I have create this WebSite for Practice skill Clone</Typography>
                  <Typography variant='h4'><span style={{ fontWeight: '700' }}>Build With : </span>React.js , Material UI (MUI)</Typography>
                  <Box sx={{ display: 'flex' }}>
                    <Typography variant='h4'>Demo Web :</Typography>
                    <Link href="https://ororaro.github.io/LandingPageClone/" target='_blank'><IosShareIcon sx={{ margin: '20px', fontSize: '40px' }} /></Link>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12} order={{ md: 0, xs: 0 }}>
              <Box data-aos="flip-right" >
                <img src={LandingPage} width='100%' height="100%" />
              </Box>
            </Grid>
            <Grid item md={6} sm={6} xs={12} order={{  xs: 2 }} >
              <Card variant="outlined" sx={{ position: 'relative', height: '100%' }} >
                <Box sx={{ padding: '15px' }}>
                  <Typography variant='h3' sx={{fontSize:{md:"40px",sm:"40px",xs:'35px'}}}>Currency Convert</Typography>
                  <Typography variant='h5'>This website will Calculate Currency to THB</Typography>
                  <Typography variant='h4'><span style={{ fontWeight: '700' }}>Build With : </span>Vue.js</Typography>
                  <Box sx={{ display: 'flex' }}>
                    <Typography variant='h4'>Demo Web :</Typography>
                   <Link href="https://ororaro.github.io/vue-currency/"  target='_blank'><IosShareIcon sx={{ margin: '20px', fontSize: '40px' }} /></Link> 
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12} order={{ md: 2, xs: 1 }}>
              <Box data-aos="flip-right">
                <img src={Currency} width='100%' height="100%" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Section2