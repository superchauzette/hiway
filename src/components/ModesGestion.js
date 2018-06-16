import React from 'react'
import { Box, Text, Heading1 } from '../components'
import check from '../assets/check.svg'

const TextImg = ({ text }) =>
  text === undefined
    ? <Text />
    : <img width="25px" height="25px" src={text} />


const Row = ({ text1, text2, text3, text4, text5 }) => (
  <Box flexDirection="column" width="100%" height={["", "45px", "45px"]}>
    <Box>
      <Text width={["51%", "50%", "45%"]} pl={["5px", 0, "80px"]} fontWeight="bold">{text1}</Text>
      <Box width="12%">
        <TextImg text={text2} />
      </Box>
      <Box width="19%">
        <TextImg text={text3} />
      </Box>
      <Box width="10%">
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

    <Heading1 textAlign="center" px="10px">Choisis entre 2 modes de gestion</Heading1>


    <Box width="100%" flexDirection="column">
      <Box flexDirection="column" alignItems="flex-end" mr={40} textAlign="center">
        <Box flexDirection="column" width={["90%", "100%", "60%"]}>
          <Box>
            <Text width="44%" fontWeight="900" color="yellow" fontSize="1.2rem"
            >Gestion déléguée à hiway</Text>
            <Text width="50%" fontWeight="900" color="yellow" fontSize="1.2rem"> Gestion autonome</Text>
          </Box>
        </Box>

        <Box flexDirection="column" width={["100%", "100%", "60%"]} mr={["0px", "50px", "50px"]}>
          <Box>
            <Text px={[0, "20px", "20px"]}>
              Fais ton CRA et Hiway s’occupe de tout le reste. <br />Tous les mois, tu reçois des dashboards de ta situation avec le montant de ta rémunération optimisée
            </Text>
            <Text px={[0, "20px", "20px"]}>
              Gère ton entreprise en autonomie avec le coaching et le support permanent d’Hiway
            </Text>
          </Box>
        </Box>
      </Box>

    </Box>

    <Box flexDirection="column" width="100%" height={["50px", "", ""]}>
      <Box>
        <Text width={["51%", "50%", "45%"]} pl={["5px", 0, "80px"]} color="lavender"></Text>
        <Text width={["8%", "25%", "12%"]} fontWeight="bold" style={{overflowX: 'hidden'}}>hiway</Text>
        <Text width={["12%", "25%", "19%"]}  fontWeight="bold" style={{overflowX: 'hidden'}}>Freelance</Text>
        <Text width={["12%", "25%", "10%"]} fontWeight="bold" style={{overflowX: 'hidden'}}>Freelance</Text>
        <Text width="12%" fontWeight="bold" style={{overflowX: 'hidden'}}>hiway</Text>
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
