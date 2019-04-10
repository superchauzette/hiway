import React from 'react'
import {
  Box,
  Home,
  Video,
  Frenlancing,
  MissionHiway,
  Speetch,
  Parcours,
  Faas,
  Hipay,
  Partenaires,
  Members,
  Contact,

  // EngagementHiway,
  // Formation,
  // ModesGestion,
  // Tools,
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
    <Hipay />
    <Partenaires />
    <Members />
    <Contact />
  </Box>
)

export default IndexPage
