import React from 'react'
import { Box, Text } from '../components'
import Banque from '../assets/maxime.png'
import Axa from '../assets/clement.jpg'
import expertsComptables from '../assets/experts_comptables.jpg'
import vince from '../assets/vince.jpg'
import alex from '../assets/alex.jpg'

const Partenaire = ({ src, subtitle, tab, styleImg }) => (
  <Box flexDirection="column" alignItems="center" >
    <Box width="120px" {...styleImg}>
      <img src={src} width="100%" height="100%" />
    </Box>
    <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{subtitle}</p>
    <ul style={{ listStyle: 'none', textAlign: 'center', marginLeft: 0 }}>
      {tab.map(i => <li key={i}>{i}</li>)}
    </ul>
  </Box>
)


const Team = ({ name, photo, children }) => (
  <Box flexDirection="column" p={[0, 0, "10px"]} alignItems="center">
    <img
      src={photo}
      className="picture"
      alt={name}
      width="150px"
      height="150px"
    />
    <Box mt="10px" flexDirection="column">
      <h3 className="yellow" style={{ textAlign: 'center' }}>{name}</h3>
      <Text width="200px" style={{ textAlign: 'center' }}>{children}</Text>
    </Box>
  </Box>
)


const Partenaires = () => (
  <Box bg="gray" width="100%" py="40px" alignItems="center" flexDirection="column">
    <h1 style={{ textAlign: 'center' }}>Une équipe à ton service</h1>
    <h2 className="yellow" style={{ textAlign: 'center' }}>
      Des spécialistes convaincus que le freelancing est le meilleur statut
    </h2>

    <Box justifyContent="space-around" width={["100%", "80%", "80%"]} flexWrap="wrap">
      <Team name="Vincenzo" photo={vince}>
        Coach administratif <br />et financier
      </Team>
      <Team name="Alexandre" photo={alex}>
        Coach gestion <br />et business
      </Team>
    </Box>

    <Box flexDirection="column" width="100%" >
      <Box justifyContent="space-around" width="100%" flexWrap="wrap">
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
          src={expertsComptables}
          styleImg={{ width: '90px', height: '90px', mt: '30px' }}
          subtitle="Expert-comptable"
          tab={[
            'Spécialisé dans le freelancing',
            'Garant du modèle Hiway'
          ]}
        />

        <Partenaire
          src={Axa}
          subtitle="Assurance & Protection sociale"
          styleImg={{ width: '90px', height: '90px', mt: '30px' }}
          tab={[
            'Mise en place de la protection sociale',
            '(Mutuelle, Prévoyance, Retraite)',
            'Assurance RC Pro',
          ]}
        />
      </Box>


    </Box>
  </Box >
)

export default Partenaires
