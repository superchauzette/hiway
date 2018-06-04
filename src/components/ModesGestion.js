import React from 'react'
import { Box, Text } from '../components'

const Row = ({ text1, text2, text3 }) => (
  <Box flexDirection="column" width="100%" height={["50px", "45px", "45px"]}>
    <Box>
      <Text width={["51%", "50%", "50%"]} pl={["5px", 0, "80px"]} color="lavender">{text1}</Text>
      <Text width={["24%", "25%", "25%"]}>{text2}</Text>
      <Text width="25%">{text3}</Text>
    </Box>
  </Box>
)

const ModesGestion = () => (
  <Box bg="silver" width="100%" py={40} alignItems="center" flexDirection="column">

    <h1 style={{ textAlign: 'center' }}> Choisis entre 2 modes de gestion </h1>


    <Box width="100%" flexDirection="column">

      <Box flexDirection="column" alignItems="flex-end" mr={40} textAlign="center">
        <Box flexDirection="column" width="60%">
          <Box>
            <Text width="44%" fontWeight="900" color="yellow" fontSize="1.2rem"
            >Gestion déléguée à Hiway</Text>
            <Text width="50%" fontWeight="900" color="yellow" fontSize="1.2rem"> Gestion déléguée à Hiway</Text>
          </Box>
        </Box>

        <Box flexDirection="column" width={["100%", "100%", "60%"]} mr={["0px", "50px", "50px"]}>
          <Box>
            <Text px={[0, "20px", "20px"]}>
              Deviens un chef d’entreprise libéré en confiant la totalité de la gestion de ta société à Hiway
            </Text>
            <Text px={[0, "20px", "20px"]}>
              Deviens un chef d’entreprise autonome en apprenant à gérer avec des coachs à tes côtés
            </Text>
          </Box>
        </Box>
      </Box>

    </Box>


    <Row text1="Édition du CRA" text2="Freelance" text3="Freelance" />
    <Row text1="Contractualisation, facturation et relance client" text2="Hiway" text3="Freelance" />
    <Row text1="Traitement du courrier" text2="Hiway" text3="Freelance" />
    <Row text1="Gestion des obligations fiscales" text2="Hiway" text3="Freelance" />
    <Row text1="Tenue de la comptabilité " text2="Hiway" text3="Freelance" />
    <Row text1="Calcul de la rémunération " text2="Hiway" text3="Freelance" />
    <Row text1="Pilotage des partenaires et de l’administration" text2="Hiway" text3="Freelance" />

  </Box >
)

export default ModesGestion
