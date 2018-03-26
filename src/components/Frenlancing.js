import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '../components'
import freedom from '../assets/freedom.svg'
import coins from '../assets/coins.svg'
import happy from '../assets/happiness.svg'
import skills from '../assets/skills.svg'
import missions from '../assets/handshake.svg'

const Svg = ({ src }) => (
  <Box height="100px" mb={'20px'} justifyContent="center">
    <img src={src} />
  </Box>
)

const H3 = styled.h3`
  color: rgb(255, 200, 42);
`

const Frenlancing = ({ isVisible }) => (
  <Box
    bg="white"
    flexDirection="column"
    p="30px"
    alignItems="center"
    textAlign="center"
    // className={`${isVisible ? 'visible' : 'transparent'}`}
  >
    <h1>C’est le moment de devenir freelance</h1>
    <h2>
      Le freelancing est le meilleur statut pour s’épanouir dans sa vie comme
      dans son job
    </h2>

    <Box flexDirection="column" textAlign="center" width="80%">
      <Box justifyContent="space-around" mt="60px" flexWrap="wrap">
        <Box width="250px" flexDirection="column" mx="40px">
          <Svg src={freedom} />
          <H3>Liberté</H3>
          <p>
            Sois libre de décider : missions, clients, durée, technos, tarifs
          </p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <Svg src={coins} />
          <H3>Revenus</H3>
          <p>Gagne 2 fois plus qu’en CDI</p>
        </Box>
      </Box>

      <Box justifyContent="space-around" mt="40px" flexWrap="wrap">
        <Box width="250px" flexDirection="column" mx="40px">
          <Svg src={happy} />
          <H3>Bonheur</H3>
          <p>Organise ta vie comme tu veux et fais toi plaisir</p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <Svg src={skills} />
          <H3>Compétences</H3>
          <p>Deviens un chef d’entreprise</p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <Svg src={missions} />
          <H3>Missions</H3>
          <p>Tes compétences sont très recherchées</p>
        </Box>
      </Box>
    </Box>
  </Box>
)

export default Frenlancing
