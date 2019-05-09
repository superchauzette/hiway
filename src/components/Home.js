import React from 'react'
import { Box, Text, Heading1 } from './index'
import logoJaune from '../assets/LOGO-HIWAY-2018-Y.png'
import Linkedin from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'

const data = {
  title: 'Réalise parfaitement ton projet de devenir freelance',
  link: {
    linkedin:
      'https://www.linkedin.com/in/hiway-accompagne-les-développeurs-et-experts-de-la-tech-au-freelancing-114368148/',
    twitter: 'https://twitter.com/HiwayFreelance',
  },
}

export const Home = () => (
  <Box className="home-container">
    <img src={logoJaune} className="title" />
    <Heading1
      className="secondTitle"
      fontSize={['28px', '2.75rem']}
      mx="10px"
      mb="5px"
    >
      {data.title}
    </Heading1>

    <Box className="social-container slideUp">
      <Text className="text-social">suivez-nous</Text>
      <Box className="link-social-container">
        <Social link={data.link.linkedin} img={Linkedin} />
        <Social link={data.link.twitter} img={Twitter} />
      </Box>
    </Box>
  </Box>
)

function Social({ link, img }) {
  return (
    <a target="_blank" href={link}>
      <img
        className="social"
        src={img}
        rel="noopener"
        width="35px"
        height="35px"
      />
    </a>
  )
}
