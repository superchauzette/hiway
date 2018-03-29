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

const Point = ({ title, src, text }) => (
  <Box width="230px" flexDirection="column" mx="30px">
    <Svg src={src} />
    <H3>{title}</H3>
    <p>{text}</p>
  </Box>
)

const Frenlancing = () => (
  <Box
    bg="white"
    flexDirection="column"
    p="30px"
    alignItems="center"
    textAlign="center"
  >
    <h1>C’est le moment de devenir freelance</h1>
    <h2 className="yellow">
      Le freelancing est le meilleur statut pour s’épanouir dans sa vie comme
      dans son job
    </h2>

    <Box flexDirection="column" textAlign="center" width="100%">
      <Box justifyContent="space-around" mt="60px">
        <Point
          src={freedom}
          title="Liberté"
          text="Sois libre de décider : missions, clients, durée, technos, tarifs"
        />
        <Point src={coins} title="Revenus" text="Gagne 2 fois plus qu’en CDI" />
        <Point
          src={happy}
          title="Bonheur"
          text="Organise ta vie comme tu veux et fais toi plaisir"
        />

        <Point
          src={skills}
          title="Compétences"
          text="Deviens un chef d’entreprise"
        />
        <Point
          src={missions}
          title="Missions"
          text="Tes compétences sont très recherchées"
        />
      </Box>
    </Box>
  </Box>
)

export default Frenlancing
