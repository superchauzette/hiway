import React from 'react'
import Link from 'gatsby-link'
import { Box, Text } from '../components'

const IndexPage = () => (
  <Box>
    <Box bg="blue" height="100vh" py="50px" px="30px" color="mauve">
      <h1>Hi people</h1>
      <Text>Welcome to your new Gatsby site.</Text>
      <p>Now go build something great.</p>
    </Box>

    <Box bg="pink" py="50px" px="30px">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Box>
  </Box>
)

export default IndexPage
