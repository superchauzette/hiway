import React from 'react'
import { Box, Text, Contact } from './index'
import bgheader from '../assets/road.jpg'
import logo from '../assets/hiway.png'
import logoJaune from '../assets/LOGO-HIWAY-2018-Y.png'
import Linkedin from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'

const Home = () => (
  <Box
    height="100vh"
    width="100%"
    color="rgb(254, 209, 54)"
    flexDirection="column"
    justifyContent="center"
    backgroundImage='http://res.cloudinary.com/kevin-even-io/image/upload/ar_4:3,c_fill/c_scale,w_auto,dpr_auto/road.png'
    textAlign="center"
    position="relative"
  >
    <Box flexDirection="column" width="100%">
      <Box position="absolute" className="social-container slideUp">
        <Box flexDirection="column">
          <Text mb="5px" color="white">suivez-nous</Text>
          <Box justifyContent="space-around" alignItems="center">
            <Box >
              <a target="_blank" href="https://www.linkedin.com/in/hiway-accompagne-les-développeurs-et-experts-de-la-tech-au-freelancing-114368148/">
                <img className="social" src={Linkedin} width="35px" height="35px" />
              </a>
            </Box>
            <a target="_blank" href="https://twitter.com/HiwayFreelance">
              <img className="social" src={Twitter} width="35px" height="35px" />
            </a>
          </Box>
        </Box>
      </Box>

      <div>
        <img src={logoJaune} className="title logo" />
      </div>
      <h1 style={{ color: 'white', marginTop: '240px', fontWeight: 700 }} className="secondTitle">
        Freelancing is cool
      </h1>
      <h2 style={{ color: 'white', fontSize: '2rem' }} className="thirdTitle">
        Solutions pour devenir freelance
      </h2>
    </Box>
  </Box>
)

export default Home
