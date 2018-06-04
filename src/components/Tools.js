import React from 'react'
import { Box } from '../components'
import nuage from '../assets/nuage.png'
import cash from '../assets/cash.png'
import documents from '../assets/document.png'
import slack from '../assets/slack.png'

const Tool = ({ src, children }) => (
  <Box flexDirection="column" alignItems="center" width="250px">
    <Box width="100px">
      <img src={src} width="100%" height="100%" />
    </Box>
    {children}
  </Box>

)

const Tools = () => (
  <Box  width="100%" alignItems="center" flexDirection="column">
    <h2 style={{ textAlign: 'center' }}> Des outils et une méthodologie <br /> pour gérer efficacement </h2>
    <Box flexDirection="column" width="100%" >
      <Box justifyContent="space-around" width="100%">
        <Tool src={nuage}>
          <p style={{ textAlign: 'center' }}>Environnement <br /> de gestion en ligne</p>
        </Tool>
        <Tool src={cash}>
          <p style={{ textAlign: 'center' }}>Outil de calcul  <br />de la rémunération</p>
        </Tool>
      </Box>

      <Box justifyContent="space-around" width="100%">
        <Tool src={documents}>
          <p style={{ textAlign: 'center' }}>Tous les templates  <br />de documents nécessaires</p>
        </Tool>
        <Tool src={slack}>
          <p style={{ textAlign: 'center' }}>Informations & <br /> Alerting</p>
        </Tool>
      </Box>
    </Box>
  </Box>
)

export default Tools
