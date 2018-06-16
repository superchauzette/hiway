import React from 'react'
import { Box, Heading1 } from '../components'

const srcImg = name =>
  `http://res.cloudinary.com/kevin-even-io/image/upload/c_scale,w_auto,dpr_auto/hiway/${name}.png`
const nuage = srcImg('nuage')
const cash = srcImg('cash')
const documents = srcImg('document')
const speaker = srcImg('speaker')

const Tool = ({ src, styleImg, children }) => (
  <Box flexDirection="column" alignItems="center" width="250px">
    <Box width="100px" {...styleImg}>
      <img
        src={src}
        width={(styleImg && styleImg.width) || '100px'}
        height="100%"
      />
    </Box>
    {children}
  </Box>
)

const Item = ({ src, children, styleImg }) => (
  <Box flexDirection="column" alignItems="center" width="250px">
    <Box width="150px" {...styleImg}>
      <img src={src} width="150px" height="100%" />
    </Box>
    {children}
  </Box>
)

const Tools = () => (
  <Box
    width="100%"
    alignItems="center"
    py="40px"
    flexDirection="column"
    bg="white"
  >
    <Heading1 textAlign="center" px="10px">
      Des outils et un support permanent <br />pour gérer sereinement
    </Heading1>

    <Box flexDirection="column" width="100%">
      <Box justifyContent="space-around" width="100%" flexWrap="wrap">
        <Tool src={nuage}>
          <p style={{ textAlign: 'center' }}>
            Application web de gestion<br /> et de comptabilité
          </p>
        </Tool>

        <Tool src={cash}>
          <p style={{ textAlign: 'center' }}>
            Outil de calcul <br />de la rémunération
          </p>
        </Tool>

        <Tool
          src={documents}
          styleImg={{ width: '70px', mb: '20px', mt: '15px' }}
        >
          <p style={{ textAlign: 'center' }}>
            Tous les templates <br />de documents nécessaires
          </p>
        </Tool>

        <Item src={speaker}>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Support permanent <br />sur tous les sujets
          </p>
        </Item>
      </Box>
    </Box>
  </Box>
)

export default Tools
