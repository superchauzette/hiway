import React from 'react'
import { Box, Text, Heading1, Heading2 } from '../components'

const srcImg = (name, extention = 'jpg') =>
  `https://res.cloudinary.com/kevin-even-io/image/upload/c_scale,w_auto,dpr_auto/hiway/${name}.${extention}`

const vince = srcImg('vince')
const alex = srcImg('alex')
const maxime = srcImg('maxime', 'png')
const clement = srcImg('clement')
const experts_comptables = srcImg('experts_comptables')

const Team = ({ name, photo, children, props }) => (
  <Fade>
    <Box flexDirection="column" p="10px" alignItems="center">
      <img
        {...props}
        src={photo}
        className="picture"
        alt={name}
        width="150px"
        height="150px"
      />
      <Box mt="10px" flexDirection="column">
        <h3 className="yellow">{name}</h3>
        <Text width="200px">{children}</Text>
      </Box>
    </Box>
  </Fade>
)

const Teams = () => (
  <Box
    bg="gray"
    flexDirection="column"
    p={['15px', '20px', '30px']}
    alignItems="center"
    textAlign="center"
  >
    <Heading1>Une équipe à ton service</Heading1>
    <Heading2 color="yellow" px="10px">
      Des spécialistes en chair et en os
    </Heading2>

    <Box
      width="100%"
      mt="40px"
      justifyContent="space-around"
      flexWrap="wrap"
      textAlign="center"
      px="5px"
    >
      <Team name="Vincenzo" photo={vince}>
        Coach administratif <br />et financier
      </Team>
      <Team name="Alexandre" photo={alex}>
        Coach gestion <br />et business
      </Team>
      <Team name="Maxime" photo={maxime}>
        Conseiller professionnel et patrimonial <br />Crédit du Nord
      </Team>
      <Team name="Clément" photo={clement}>
        Agent assureur <br /> Axa
      </Team>
      <Team name="Fredédric" photo={experts_comptables}>
        Expert-comptable
      </Team>
    </Box>
  </Box>
)

export default Teams
