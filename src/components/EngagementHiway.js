import React from 'react'
import { Box, Text } from '../components'

const EngagementHiway = () => (
  <Box bg="white" flexDirection="column" p="30px" alignItems="center">
    <h1> L’engagement d’Hiway</h1>
    <h2>Hiway t’accompagne pour devenir freelance et garantit ta réussite</h2>
    <Box flexDirection="column" textAlign="center" width="80%">
      <Box justifyContent="space-around" mt="60px" flexWrap="wrap">
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Démarre dans les meilleures conditions</h3>
          <p>Choix du bon statut juridique. Création complète de ta société.</p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Entoure-toi de spécialistes</h3>
          <p>
            2 coachs, 1 expert-comptable, 1 banquier, 1 assureur spécialisé en
            protection sociale, 1 avocat, 1 CE
          </p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Signe le bon projet</h3>
          <p>
            Coaching pour trouver ta mission. Négociation. Contractualisation
          </p>
        </Box>
      </Box>

      <Box
        flexDirection="row"
        justifyContent="space-between"
        mt="40px"
        flexWrap="wrap"
      >
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Gère facilement et sans erreur</h3>
          <p>
            Gestion administrative simplifiée. Fiscalité maîtrisée. Préparation
            du bilan
          </p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Gagne un maximum d’argent</h3>
          <p>
            Pilotage financier. Optimisation fiscale Maximisation des revenus.
          </p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Rejoins une communauté</h3>
          <p>
            Réseau de développeurs freelances connectés et solidaires
            www.weareheroes.io
          </p>
        </Box>
      </Box>
    </Box>
  </Box>
)

export default EngagementHiway
