import React from 'react'
import { Box, Text } from '../components'

const ModesGestion = () => (
  <Box bg="white" width="100%" py={40} alignItems="center" flexDirection="column">

    <h1> Choisis entre 2 modes de gestion </h1>


    <Box width="100%" flexDirection="column">

      <Box flexDirection="column" alignItems="flex-end" mr={40} textAlign="center">
        <Box flexDirection="column" width="50%" >
          <Box>
            <Text mr={10} >Gestion déléguée à Hiway</Text>
            <Text> Gestion déléguée à Hiway</Text>
          </Box>
        </Box>

        <Box flexDirection="column" width="50%">
          <Box>
            <Text mr={10}>
              Deviens un chef d’entreprise libéré en confiant la totalité de la gestion de ta société à Hiway
            </Text>
            <Text>
              Deviens un chef d’entreprise autonome en apprenant à gérer avec des coachs à tes côtés
            </Text>
          </Box>
        </Box>
      </Box>

    </Box>

    <Box flexDirection="column">
      <Box flexDirection="column">

      </Box>
    </Box>


  </Box >
)

export default ModesGestion
