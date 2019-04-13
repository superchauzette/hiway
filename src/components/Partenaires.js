import React from 'react'
import Fade from 'react-reveal/Fade'
import { Box, Text, Heading1, Heading2 } from '../components'
import Banque from '../assets/maxime.png'
import Axa from '../assets/clement.jpg'
import expertsComptables from '../assets/experts_comptables.jpg'
import vince from '../assets/vince.jpg'
import alex from '../assets/alex.jpg'

const Partenaire = ({ src, subtitle, tab, styleImg }) => (
  <Fade>
    <Box flexDirection="column" alignItems="center">
      <Box width="120px" {...styleImg}>
        <img src={src} width="100%" height="100%" />
      </Box>
      <Text mt="10px" fontWeight="bold" textAlign="center">
        {subtitle}
      </Text>
      <ul style={{ listStyle: 'none', textAlign: 'center', marginLeft: 0 }}>
        {tab.map(i => (
          <li key={i}>
            <Text m={0}>{i}</Text>
          </li>
        ))}
      </ul>
    </Box>
  </Fade>
)

const Team = ({ name, photo, children }) => (
  <Fade>
    <Box flexDirection="column" p={[0, 0, '10px']} alignItems="center">
      <img
        src={photo}
        className="picture"
        alt={name}
        width="150px"
        height="150px"
      />
      <Box mt="10px" flexDirection="column">
        <h3 className="yellow" style={{ textAlign: 'center' }}>
          {name}
        </h3>
        <Text width="200px" style={{ textAlign: 'center' }}>
          {children}
        </Text>
      </Box>
    </Box>
  </Fade>
)

const Partenaires = () => (
  <Box
    bg="gray"
    width="100%"
    py="40px"
    alignItems="center"
    flexDirection="column"
  >
    <Heading1 textAlign="center">Une équipe à ton service</Heading1>
    <Heading2 className="yellow" textAlign="center" px="5px">
      Des spécialistes convaincus que le freelancing est le meilleur statut
    </Heading2>

    <Box
      justifyContent="space-around"
      width={['100%', '80%', '80%']}
      flexWrap="wrap"
    >
      <Team name="Vincenzo" photo={vince}>
        Coach administratif <br />et financier
      </Team>
      <Team name="Alexandre" photo={alex}>
        Coach gestion <br />et business
      </Team>
    </Box>

    <Box flexDirection="column" width="100%">
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
          tab={['Spécialisé dans le freelancing', 'Garant du modèle Hiway']}
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
  </Box>
)

export default Partenaires
