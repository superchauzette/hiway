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
  Faas,
} from '../components'

const IndexPage = () => (
  <Box flexDirection="column" width="100%">
    <Home />
    <Video />
    <Frenlancing />
    <MissionHiway />
    <Speetch />
    <Parcours />
    <Faas />
    <Partenaires />
    <Members />
    <Contact />
  </Box>
)

export default IndexPage
