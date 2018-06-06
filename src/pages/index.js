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
    <Formation />
    <ModesGestion />
    <Tools />
    <Partenaires />
    <Members />
    <Contact />
  </Box >
)

export default IndexPage
