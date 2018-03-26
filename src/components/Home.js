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
    <Box
      style={{ textAlign: 'center' }}
      flexDirection="column"
      mt={[0, 0, '-200px']}
      ml={[0, 0, '-400px']}
    >
      <div>
        <img src={logo} style={{ maxWidth: '80%' }} />
      </div>
      <h1 style={{ color: 'rgb(255, 200, 42)' }}>Freelancing is cool</h1>
      <h2 style={{ color: 'white' }}>Solutions pour devenir freelance</h2>
    </Box>
  </Box>
)

export default Home
