import React from 'react'
import {
  Box,
  Text,
  Home,
  Frenlancing,
  EngagementHiway,
  Members,
  Teams,
  Contact,
  Way,
  Video,
  Formation,
  ModesGestion,
  Tools,
  Support,
  Partenaires
} from '../components'

const IndexPage = () => (
  <Box flexDirection="column">
    <Home />
    <Video />
    <Frenlancing />

    <EngagementHiway />
    {/* <Way /> */}
    <Formation />

    <h1 style={{ textAlign: 'center', marginTop: '20px', }}> Des outils et un support permanent <br />pour gérer sereinement </h1>

    <Box width="100%" py="40px" flexWrap="wrap">


      <Tools />


    </Box>
    <Box width="100%">
      <Partenaires />
    </Box>
    <ModesGestion />
    {/* <Teams /> */}
    <Members />
    <Contact />
  </Box >
)

export default IndexPage
