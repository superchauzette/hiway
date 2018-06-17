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
  <Box className="home-container">
    <img src={logoJaune} className="title" />

    <Heading1 className="secondTitle">Freelancing is cool</Heading1>

    <Heading2 className="thirdTitle">Solutions pour devenir freelance</Heading2>

    <Box className="social-container slideUp">
      <Text className="text-social">suivez-nous</Text>
      <Box className="link-social-container">
        <Social link={link.linkedin} img={Linkedin} />
        <Social link={link.twitter} img={Twitter} />
      </Box>
    </Box>
  </Box>
)

export default Home
