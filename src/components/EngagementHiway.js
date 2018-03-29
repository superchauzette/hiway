import React from 'react'
import { Box, Text } from '../components'

const Engagement = ({ title, text }) => (
  <Box
    width="250px"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    mx="40px"
    mb="20px"
    p="10px"
    bg="white"
    style={{
      border: '1px solid rgba(228, 235, 238)',
      zIndex: 3,
      borderRadius: '10px',
    }}
  >
    <h3>{title}</h3>
    <p style={{ margin: 0 }}>{text}</p>
  </Box>
)

const Line = ({ top, translateX = -15 }) => (
  <Box
    mt={[top]}
    style={{
      position: 'absolute',
      transform: `translateX(${translateX}px)`,
    }}
    className="dotted-gradient yellow"
  />
)

const EngagementHiway = () => (
  <Box
    bg="white"
    flexDirection="column"
    p="30px"
    alignItems="center"
    textAlign="center"
  >
    <Line top={315} />
    <Line top={590} />

    <h1> L’engagement d’Hiway</h1>
    <h2 className="yellow">
      Hiway t’accompagne pour devenir freelance et garantit ta réussite
    </h2>
    <Box flexDirection="column" textAlign="center" width="80%">
      <Box justifyContent="space-around" mt="60px" flexWrap="wrap">
        <Engagement
          title="Démarre dans les meilleures conditions"
          text="Choix du bon statut juridique. Création complète de ta société.E"
        />
        <Engagement
          title="Entoure-toi de spécialistes"
          text="2 coachs, 1 expert-comptable, 1 banquier, 1 assureur spécialisé en protection sociale, 1 avocat, 1 CE"
        />
        <Engagement
          title="Signe le bon projet"
          text="Coaching pour trouver ta mission. Négociation. Contractualisation"
        />
      </Box>

      <Box justifyContent="space-around" mt="40px" flexWrap="wrap">
        <Engagement
          title="Gère facilement et sans erreur"
          text="Gestion administrative simplifiée. Fiscalité maîtrisée. Préparation du bilan"
        />
        <Engagement
          title="Gagne un maximum d’argent"
          text="Pilotage financier. Optimisation fiscale Maximisation des revenus"
        />
        <Engagement
          title="Rejoins une communauté"
          text="Réseau de développeurs freelances connectés et solidaires www.weareheroes.io"
        />
      </Box>
    </Box>
  </Box>
)

export default EngagementHiway
