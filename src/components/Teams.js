import React from 'react'
import { Box, Text } from '../components'
import bgheader from '../assets/bg-header.jpg'
import vince from '../assets/vince.jpg'
import alex from '../assets/alex.jpg'
import maxime from '../assets/maxime.png'
import clement from '../assets/clement.jpg'
import user from '../assets/user.png'

const Team = ({ name, photo, children }) => (
  <Box flexDirection="column" p="10px" alignItems="center">
    <img src={photo} className="picture" alt="" width="150px" height="150px" />
    <Box mt="10px" flexDirection="column">
      <h3 className="yellow">{name}</h3>
      <Text width="200px">{children}</Text>
    </Box>
  </Box>
)

const Teams = () => (
  <Box
    bg="gray"
    flexDirection="column"
    p={['15px', '20px', '30px']}
    alignItems="center"
    textAlign="center"
  >
    <h1>Les gardiens de ta réussite</h1>
    <h2 className="yellow">
      Des spécialistes convaincus que le freelancing est le meilleur statut
    </h2>

    <Box
      width="100%"
      mt="40px"
      justifyContent="space-around"
      flexWrap="wrap"
      textAlign="center"
    >
      <Team name="Vincenzo" photo={vince}>
        Coach gestion <br />et Business
      </Team>
      <Team name="Alexandre" photo={alex}>
        Coach administratif <br />et financier
      </Team>
      <Team name="Maxime" photo={maxime}>
        Conseiller professionnel et patrimonial <br />Crédit du Nord
      </Team>
      <Team name="Clememt" photo={clement}>
        Agent assureur <br /> Axa
      </Team>
      <Team name="Fredédric" photo={user}>
        Expert-comptable
      </Team>
    </Box>
  </Box>
)

export default Teams
