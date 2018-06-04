import React from 'react'
import { Box } from '../components'
import Banque from '../assets/maxime.png'
import Axa from '../assets/clement.jpg'
import expertsComptables from '../assets/experts_comptables.jpg'


const Partenaire = ({ src, subtitle, tab, styleImg }) => (
  <Box flexDirection="column" alignItems="center" >
    <Box width="120px" {...styleImg}>
      <img src={src} width="100%" height="100%" />
    </Box>
    <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{subtitle}</p>
    <ul style={{ listStyle: 'none', textAlign: 'center', marginLeft: 0 }}>
      {tab.map(i => <li>{i}</li>)}
    </ul>
  </Box>

)

const Partenaires = () => (
  <Box bg="gray" width="100%" py="40px" alignItems="center" flexDirection="column">
    <h1 style={{ textAlign: 'center', marginBottom: '60px' }}> Des partenaires de confiance </h1>

    <Box flexDirection="column" width="100%" >
      <Box justifyContent="space-around" width="100%">
        <Partenaire
          src={Banque}
          subtitle="Banque"
          tab={[
            'Sécurisation de la rémunération au démarrage',
            'Services bancaires pro & financements',
            'Solutions patrimoniales : Immobilier',
            'Placements, Défiscalisation',
          ]}
        />

        <Partenaire
          src={Axa}
          subtitle="Assurance & Protection sociale"
          styleImg={{ width: '90px', height: '90px', mt: '30px', mb: '20px' }}
          tab={[
            'Mise en place de la protection sociale',
            '(Mutuelle, Prévoyance, Retraite)',
            'Assurance RC Pro',
          ]}
        />
      </Box>
      <Box justifyContent="center" width="100%">
        <Partenaire
          src={expertsComptables}
          subtitle="Expert-comptable"
          tab={[
            'Spécialisé dans le freelancing',
            'Garant du modèle Hiway'
          ]}
        />


      </Box>

    </Box>
  </Box >
)

export default Partenaires
