import React from 'react'
import { Box, Heading1, Heading2, Heading3, Text } from '.'
import { Zoom } from 'react-reveal'

const Item = ({ title, text, revert }) => (
  <Zoom right>
    <Box justifyContent={revert ? 'flex-end' : 'flex-start'}>
      <Box flexDirection="column" width="60%">
        <Heading3 color="white" mb="5px">
          {title}
        </Heading3>
        <Text color="#ffffffa1">{text}</Text>
      </Box>
    </Box>
  </Zoom>
)

export const Hipay = () => (
  <Box
    p="30px"
    flexDirection="column"
    style={{ position: 'relative' }}
    bg="#343a5e"
  >
    <Box flexDirection="column" alignItems="center" textAlign="center">
      <Heading1 color="white">Hipay</Heading1>
      <Heading2 width={['100%', '60%']} color="#ffffffa1">
        Les freelances de la communauté Hiway ont développé une application web
        et mobile pour simplifier ta vie de freelance
      </Heading2>
    </Box>
    <Box mb="20px">
      <Box
        flexDirection="column"
        width={['100%', '60%']}
        mt="30px"
        justifyContent="space-between"
      >
        <Item
          title="Rémunération"
          text="Chaque mois, tu connais le montant de ta rémunération optimisée."
        />
        <Item
          title="Dashboard"
          text="Maîtrise les chiffres clés de ta société"
          revert
        />
        <Item title="Reporting" text="Fais ton reporting en ligne" />
        <Item
          title="Charges"
          text="Déclare tes dépenses, notes de frais et indemnités en un instant"
          revert
        />
      </Box>
      <Box
        style={{ height: '350px' }}
        width={['0%', '40%']}
        display={['none', 'flex']}
      >
        <img
          src="https://images.pexels.com/photos/2084974/pexels-photo-2084974.jpeg?cs=srgb&dl=brunette-computer-computer-keyboard-2084974.jpg&fm=jpg"
          style={{ height: 'auto', maxWidth: '100%' }}
        />
      </Box>
    </Box>
  </Box>
)
