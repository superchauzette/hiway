import React from 'react'
import { Box, Heading1, Heading2, Text } from '../components'

const srcImg = name =>
  `https://res.cloudinary.com/kevin-even-io/image/upload/c_scale,w_auto,dpr_auto/hiway/${name}.png`
const coffee = srcImg('coffee')
const rocket = srcImg('rocket')

const Li = ({ children }) => (
  <li style={{display: 'flex'}}>
    <Text m={0}>{children}</Text>
  </li>
)

const Formation = () => (
  <Box
    bg="gray"
    width="100%"
    py={40}
    alignItems="center"
    flexDirection="column"
  >
    <Heading1 textAlign="center">
      Une formation pour devenir un bon chef d’entreprise
    </Heading1>

    <Box justifyContent="space-around" width="100%" flexWrap="wrap">
      <Box flexDirection="column" width={['100%', '50%', '50%']}>
        <Box justifyContent="center" mb="20px">
          <Box width="100px">
            <img src={coffee} width="100px" height="100%" />
          </Box>
        </Box>
        <Heading2 textAlign="center" color="yellow">
          Format
        </Heading2>
        <Box justifyContent="center">
          <ul className="square">
            <Li>Un parcours d’apprentissage en 10 ateliers</Li>
            <Li>100% individualisé</Li>
            <Li>100% en présentiel</Li>
            <Li>Des rdv où tu veux</Li>
            <Li>Un agenda adapté à tes disponibilités</Li>
            <Li>Dans des cadres de travail agréables</Li>
          </ul>
        </Box>
      </Box>

      <Box
        flexDirection="column"
        width={['95%', '50%', '50%']}
        alignItems="center"
      >
        <Box justifyContent="center" mb="20px">
          <Box width="100px">
            <img src={rocket} width="100px" height="100%" />
          </Box>
        </Box>
        <Heading2 textAlign="center" color="yellow">
          Parcours
        </Heading2>
        <Box
          justifyContent="center"
          width={['100%', '76%', '76%']}
          px={['5px', 0, 0]}
        >
          <ul className="square">
            <Li>
              Se lancer, choisir le statut le plus pertinent et créer sa société
            </Li>
            <Li>Mettre en place une protection sociale sur mesure</Li>
            <Li>Trouver sa mission rapidement </Li>
            <Li>Contractualiser dans les meilleures conditions</Li>
            <Li>Gérer son entreprise efficacement et sans erreur</Li>
            <Li>Optimiser sa fiscalité et maximiser sa rémunération</Li>
            <Li>Faire son bilan comptable</Li>
            <Li>Préparer l’avenir et construire son patrimoine</Li>
          </ul>
        </Box>
      </Box>
    </Box>
  </Box>
)

export default Formation
