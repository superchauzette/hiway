import React from 'react'
import { Box, Text, Contact } from './index'
// import bgheader from '../assets/bg-header.jpg'
import bgheader from '../assets/road.jpg'
import logo from '../assets/hiway.png'

const Home = () => (
  <Box
    height="100vh"
    py="50px"
    px="30px"
    color="rgb(254, 209, 54)"
    flexDirection="column"
    justifyContent="center"
    backgroundImage={bgheader}
    textAlign="center"
    position="relative"
  >
    <div>
      <img src={logo} style={{ maxWidth: '80%' }} />
    </div>
    <h1 style={{ color: 'white', marginTop: '160px', fontWeight: 700 }}>
      Freelancing is cool
    </h1>
    <h2 style={{ color: 'white' }}>Solutions pour devenir freelance</h2>
  </Box>
)

export default Home
