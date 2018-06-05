import React from 'react'
import { Box, Text } from '../components'
import check from '../assets/check.svg'

const TextImg = ({ text }) =>
  text === undefined
    ? <Text />
    : <img width="25px" height="25px" src={text} />


const Row = ({ text1, text2, text3, text4, text5 }) => (
  <Box flexDirection="column" width="100%" height={["50px", "45px", "45px"]}>
    <Box>
      <Text width={["51%", "50%", "40%"]} pl={["5px", 0, "80px"]} fontWeight="bold">{text1}</Text>
      <Box width="14%">
        <TextImg text={text2} />
      </Box>
      <Box width="19%">
        <TextImg text={text3} />
      </Box>
      <Box width="12%">
        <TextImg text={text4} />
      </Box>
      <Box width="12%">
        <Text>{text5}</Text>
      </Box>
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
            >Gestion déléguée à hiway</Text>
            <Text width="50%" fontWeight="900" color="yellow" fontSize="1.2rem"> Gestion autonome</Text>
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

    <Box flexDirection="column" width="100%" height={["50px", "45px", "45px"]}>
      <Box>
        <Text width={["51%", "50%", "40%"]} pl={["5px", 0, "80px"]} color="lavender"></Text>
        <Text width={["12%", "25%", "14%"]} fontWeight="bold">hiway</Text>
        <Text width="19%" fontWeight="bold">Freelance</Text>
        <Text width={["12%", "25%", "12%"]} fontWeight="bold">Freelance</Text>
        <Text width="12%" fontWeight="bold">hiway</Text>
      </Box>
    </Box>


    <Row text1="Édition du CRA" text3={check} text4={check} text5="" />
    <Row text1="Contractualisation, facturation et relance client" text2={check} text4={check} text5="" />
    <Row text1="Traitement du courrier" text2={check} text4={check} />
    <Row text1="Gestion des obligations fiscales" text2={check} text4={check} text5="" />
    <Row text1="Tenue de la comptabilité" text2={check} text4={check} text5="" />
    <Row text1="Calcul de la rémunération" text2={check} text4={check} />
    <Row text1="Pilotage des partenaires et de l’administration" text2={check} text4={check} />

  </Box >
)

export default ModesGestion
