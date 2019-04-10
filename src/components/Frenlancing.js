import React from 'react'
import { Box, Text, Heading1, Heading2 } from '../components'
import freedom from '../assets/freedom.svg'
import coins from '../assets/coins.svg'
import missions from '../assets/handshake.svg'

const Svg = ({ src }) => (
  <Box height="100px" mb={'20px'} justifyContent="center">
    <img src={src} height="100px" />
  </Box>
)

const Point = ({ title, src, text, bgt, bgb, revert = false, ...props }) => (
  <Box flexDirection="column" width="100%" {...props}>
    {!revert && (
      <Box bg={bgt} justifyContent="center" height="100px">
        <Svg src={src} />
      </Box>
    )}
    <Box bg={bgb} height="100px" flexDirection="column" alignItems="center">
      <Heading2 mt="10px" color="white">
        {title}
      </Heading2>
      <Text color="white" fontSize="11px">
        {text}
      </Text>
    </Box>
    {revert && (
      <Box bg={bgt} justifyContent="center" height="100px">
        <Svg src={src} />
      </Box>
    )}
  </Box>
)

const Frenlancing = () => (
  <Box
    bg="white"
    flexDirection="column"
    pt="30px"
    alignItems="center"
    textAlign="center"
  >
    <Heading1>C’est le moment de devenir freelance</Heading1>
    <Heading2 color="yellow">
      Le marché de la Tech réunit toutes les conditions pour se lancer dans le
      freelancing et ça vaut vraiment le coup
    </Heading2>

    <Box flexDirection="column" textAlign="center" width="70%" mb="40px">
      <Box justifyContent="space-around" mt="30px">
        <Point
          src={freedom}
          title="Liberté"
          text="C’est toi qui décide : projet, client, stack, durée, remote, tarif"
          bgt="white"
          bgb="yellow"
        />
        <Point
          src={coins}
          title="Revenus"
          text="Gagne 2 fois plus qu’en CDI"
          bgt="white"
          bgb="yellow"
          revert
        />
        <Point
          src={missions}
          title="Entrepreneuriat"
          text="Ouvre-toi à de nouvelles perspectives"
          bgt="white"
          bgb="yellow"
        />
      </Box>
    </Box>
  </Box>
)

export default Frenlancing
