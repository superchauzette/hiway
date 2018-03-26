import React from 'react'
import { Box, Text } from '../components'

const Frenlancing = () => (
  <Box bg="white" flexDirection="column" p="30px" alignItems="center">
    <h1>C’est le moment de devenir freelance</h1>
    <h2>
      Le freelancing est le meilleur statut pour s’épanouir dans sa vie comme
      dans son job
    </h2>

    <Box flexDirection="column" textAlign="center" width="80%">
      <Box justifyContent="space-around" mt="60px" flexWrap="wrap">
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Liberté</h3>
          <p>
            Sois libre de décider : missions, clients, durée, technos, tarifs
          </p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Revenus</h3>
          <p>Gagne 2 fois plus qu’en CDI</p>
        </Box>
      </Box>

      <Box
        flexDirection="row"
        justifyContent="space-between"
        mt="40px"
        flexWrap="wrap"
      >
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Bonheur</h3>
          <p>Organise ta vie comme tu veux et fais toi plaisir</p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Compétences</h3>
          <p>Deviens un chef d’entreprise</p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Missions</h3>
          <p>Tes compétences sont très recherchées</p>
        </Box>
      </Box>
    </Box>
  </Box>
)

export default Frenlancing
