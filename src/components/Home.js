import React from 'react'
import { Box, Text, Contact } from './index'
import bgheader from '../assets/bg-header.jpg'
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
  >
    <div
      style={{ textAlign: 'center', marginTop: '-200px', marginLeft: '-400px' }}
    >
      <img src={logo} />
      <h1 style={{ color: 'rgb(255, 200, 42)' }}>Freelancing is cool</h1>
      <h2 style={{ color: 'white' }}>Solutions pour devenir freelance</h2>
    </div>
    <div
      style={{
        position: 'absolute',
        backgroundColor: '#ffffff75',
        right: '30px',
        width: '416px',
      }}
    >
      <Contact />
    </div>
  </Box>
)

export default Home
