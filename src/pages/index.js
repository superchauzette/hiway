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
  ModesGestion
} from '../components'

const IndexPage = () => (
  <Box flexDirection="column">
    <Home />
    <Video />
    <Formation />
    <ModesGestion />
    <Frenlancing />
    <Teams />
    <EngagementHiway />
    <Way />
    <Members />
    <Contact />
  </Box>
)

export default IndexPage
