import React from 'react'
import { Box, Text } from '../components'
import bgheader from '../assets/bg-header.jpg'

const Teams = () => (
  <Box bg="gray" flexDirection="column" p="30px" alignItems="center">
    <h1>Les gardiens de ta réussite</h1>
    <h2>
      Des spécialistes convaincus que le freelancing est le meilleur statut
    </h2>
    <Box
      flexDirection="flex"
      textAlign="center"
      width="100%"
      justifyContent="space-between"
      mt="40px"
      flexWrap="wrap"
    >
      <img
        src={bgheader}
        className="picture"
        alt=""
        width="150px"
        height="150px"
      />
      <img
        src={bgheader}
        className="picture"
        alt=""
        width="150px"
        height="150px"
      />
      <img
        src={bgheader}
        className="picture"
        alt=""
        width="150px"
        height="150px"
      />
      <img
        src={bgheader}
        className="picture"
        alt=""
        width="150px"
        height="150px"
      />
      <img
        src={bgheader}
        className="picture"
        alt=""
        width="150px"
        height="150px"
      />
    </Box>
  </Box>
)

export default Teams
