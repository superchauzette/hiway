import React from 'react'
import { Box, Text, Contact, Heading1, Heading2 } from './index'
import logoJaune from '../assets/LOGO-HIWAY-2018-Y.png'
import Linkedin from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'

const link = {
  linkedin:
    'https://www.linkedin.com/in/hiway-accompagne-les-développeurs-et-experts-de-la-tech-au-freelancing-114368148/',
  twitter: 'https://twitter.com/HiwayFreelance',
}

const Social = ({ link, img }) => (
  <a target="_blank" href={link}>
    <img className="social" src={img} width="35px" height="35px" />
  </a>
)

const Home = () => (
  <Box
    height="100vh"
    width="100%"
    color="rgb(254, 209, 54)"
    backgroundImage="http://res.cloudinary.com/kevin-even-io/image/upload/ar_4:3,c_fill/c_scale,w_auto,dpr_auto/road.png"
    textAlign="center"
    flexDirection="column"
  >
    <img src={logoJaune} className="title" width="700px" />

    <Heading1 color="white" mt="260px" fontWeight="700" className="secondTitle">
      Freelancing is cool
    </Heading1>

    <Heading2 color="white" fontSize="2rem" className="thirdTitle">
      Solutions pour devenir freelance
    </Heading2>

    <Box
      flexDirection="column"
      position="absolute"
      className="social-container slideUp"
    >
      <Text mb="5px" color="white">
        suivez-nous
      </Text>
      <Box justifyContent="space-around" alignItems="center">
        <Social link={link.linkedin} img={Linkedin} />
        <Social link={link.twitter} img={Twitter} />
      </Box>
    </Box>
  </Box>
)

export default Home
