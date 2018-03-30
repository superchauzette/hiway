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
} from '../components'

const IndexPage = () => (
  <Box flexDirection="column">
    <Home />
    <Frenlancing />
    <Teams />
    <EngagementHiway />
    <Way />
    <Members />
    <Contact />
  </Box>
)

export default IndexPage
