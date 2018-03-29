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

    {/* <Box
      position={['relative', 'relative', 'absolute']}
      bg={['gray', 'gray', '#ffffff75']}
      mt={[0, 0, '100px']}
      ml={[0, 0, '65%']}
      width={['100%', '100%', '416px']}
    >
      <Contact />
    </Box> */}

    <Frenlancing />
    <Teams />
    <EngagementHiway />
    <Way />
    <Members />

    <Box bg="gray" width="100%" justifyContent="center">
      <Box width="500px">
        <Contact />
      </Box>
    </Box>
  </Box>
)

export default IndexPage
