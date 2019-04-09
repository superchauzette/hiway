import React from 'react'
import {
  Box,
  Home,
  Frenlancing,
  EngagementHiway,
  Members,
  Contact,
  Video,
  Formation,
  ModesGestion,
  Tools,
  Partenaires,
  MissionHiway,
  Speetch,
  Parcours,
} from '../components'

const IndexPage = () => (
  <Box flexDirection="column" width="100%">
    <Home />
    <Video />
    <Frenlancing />
    <MissionHiway />
    <Speetch />
    <Parcours />
    {/* <Formation /> */}
    {/* <ModesGestion />
    <Tools /> */}
    <Partenaires />
    <Members />
    <Contact />
  </Box>
)

export default IndexPage
