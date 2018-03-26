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
    <Members />
    <Way />

    <Box bg="gray" width="100%" justifyContent="center">
      <Box width="500px">
        <Contact />
      </Box>
    </Box>
  </Box>
)

export default IndexPage
