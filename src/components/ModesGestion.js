import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

import { Box, Text, Heading1 } from '../components'
import check from '../assets/check.svg'

const TextImg = ({ text }) => (
  <Box justifyContent="center">
    <img width="25px" height="25px" src={text} />
  </Box>
)


const Row = ({ text }) => (
  <Tr>
    <Td>
      <Text fontWeight="bold">
        {text}
      </Text>
    </Td>
    <Td><TextImg text={check} /></Td>
    <Td><Text/></Td>
    <Td><TextImg text={check} /></Td>
    <Td><Text/></Td>
  </Tr>
)

const ModesGestion = () => (
  <Box
    bg="silver"
    width="100%"
    py={40}
    alignItems="center"
    flexDirection="column"
  >
    <Heading1 textAlign="center" px="10px">
      Choisis entre 2 modes de gestion
    </Heading1>

    <Box width="100%" flexDirection="column">
      <Box
        flexDirection="column"
        alignItems="flex-end"
        mr={40}
        textAlign="center"
      >
        <Box flexDirection="column" width={['90%', '100%', '60%']}>
          <Box>
            <Text width="44%" fontWeight="900" color="yellow" fontSize="1.2rem">
              Gestion déléguée à hiway
            </Text>
            <Text width="50%" fontWeight="900" color="yellow" fontSize="1.2rem">
              Gestion autonome
            </Text>
          </Box>
        </Box>

        <Box
          flexDirection="column"
          width={['100%', '100%', '60%']}
          mr={['0px', '50px', '50px']}
        >
          <Box>
            <Text px={[0, '20px', '20px']}>
              Hiway révolutionne le freelancing en te libérant entièrement de la
              gestion de ton entreprise
            </Text>
            <Text px={[0, '20px', '20px']}>
              Gère ton entreprise en autonomie avec le coaching et le support
              permanent d’Hiway
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box bg="silver" width="90%">
      <Table>
        <Thead>
          <Tr>
            <Th style={{ width: '40%' }} />
            <Th><Text>Hiway</Text></Th>
            <Th><Text>Freelance</Text></Th>
            <Th><Text>Freelance</Text></Th>
            <Th><Text>Hiway</Text></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Text fontWeight="bold">Édition du CRA</Text>
            </Td>
            <Td><Text/></Td>
            <Td><TextImg text={check} /></Td>
            <Td><TextImg text={check} /></Td>
            <Td><Text/></Td>
          </Tr>
          <Row text="Contractualisation, facturation et relance client" />
          <Row text="Traitement du courrier" />
          <Row text="Gestion des obligations fiscales" />
          <Row text="Gestion des obligations sociales" />
          <Row text="Tenue de la comptabilité" />
          <Row text="Calcul de la rémunération optimisée" />


        </Tbody>
      </Table>
    </Box>
  </Box>
)

export default ModesGestion
