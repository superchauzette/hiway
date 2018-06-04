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
    <Teams />
    <EngagementHiway />
    {/* <Way /> */}
    <Formation />

    <Box width="100%" py="40px" flexWrap="wrap">
      <Box width={["100%", "50%"]} style={{ borderRight: '0.5px solid #2724241f' }}>
        <Tools />
      </Box>
      <Box width={["100%", "50%"]} >
        <Support />
      </Box>
    </Box>
    <Box width="100%">
      <Partenaires />
    </Box>
    <ModesGestion />

    <Members />
    <Contact />
  </Box >
)

export default IndexPage
