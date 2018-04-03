import React from 'react'
import { Box, Text, Contact } from './index'
import bgheader from '../assets/road.jpg'
import logo from '../assets/hiway.png'
import logoJaune from '../assets/LOGO_HIWAY_JAUNE.png'
import logoGris from '../assets/LOGO_HIWAY_GRIS.png'

const Home = () => (
  <Box
    height="100vh"
    width="100%"
    py="50px"
    px="30px"
    color="rgb(254, 209, 54)"
    flexDirection="column"
    justifyContent="center"
    backgroundImage={bgheader}
    textAlign="center"
    position="relative"
  >
    <div style={{ marginTop: '-40px' }}>
      <img src={logoJaune} className="logo" />
    </div>
    <h1 style={{ color: 'white', marginTop: '240px', fontWeight: 700 }}>
      Freelancing is cool
    </h1>
    <h2 style={{ color: 'white', fontSize: '2rem' }}>
      Solutions pour devenir freelance
    </h2>
  </Box>
)

export default Home
