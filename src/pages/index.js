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
  Partenaires
} from '../components'

const IndexPage = () => (
  <Box flexDirection="column">
    <Home />
    <Video />
    <Frenlancing />
    <EngagementHiway />
    <Formation />
    <ModesGestion />
    <Tools />
    <Partenaires />
    <Members />
    <Contact />
  </Box >
)

export default IndexPage
