import React from 'react'
import { Box, Text, Heading1, Heading2 } from '.'
import { Zoom, Slide } from 'react-reveal'

const data = [
  {
    textImg: 'Business sécurisé & contrats gérés',
    src:
      'https://images.pexels.com/photos/1435192/pexels-photo-1435192.jpeg?cs=srgb&dl=cash-close-up-counting-1435192.jpg&fm=jpg',
    bg: '#343a5e',
    title: 'Hiway gère tout ton administratif commercial',
    textColor: '#ffffffa1',
    texts: [
      'Édition de ton contrat de prestation',
      'Facturation mensuelle de tes prestations',
      'Suivi des paiements',
      'Relance en cas de retard de paiement',
    ],
  },
  {
    textImg: 'Zéro stres',
    src:
      'https://images.pexels.com/photos/2068411/pexels-photo-2068411.jpeg?cs=srgb&dl=blurred-background-close-up-colors-2068411.jpg&fm=jpg',
    bg: 'yellow',
    title: 'Hiway gère tout le fiscal et le social de ta société',
    texts: [
      'Création des comptes impôts.gouv, SSI, URSSAF, CIPAV',
      'Calcul des montants dus : TVA, Impôt sur les Sociétés, Cotisation Financière des Entreprises, URSSAF, CIPAV',
      'Mise en paiement et suivi',
      'Relation avec les organismes fiscaux et sociaux',
    ],
  },
  {
    textImg: 'Revenu maximisé tous les mois',
    src:
      'https://images.pexels.com/photos/2084239/pexels-photo-2084239.jpeg?cs=srgb&dl=4k-wallpaper-citrus-fruit-close-up-2084239.jpg&fm=jpg',
    bg: '#ff396c',
    title: 'Hiway pilote les finances de ta société',
    textColor: '#ffffffa1',
    texts: [
      'Calcul mensuel de ta rémunération',
      'Optimisation de ta fiscalité',
      'Sécurisation de ta trésorerie',
    ],
  },
  {
    textImg: 'Concentre-toi sur ton job',
    src:
      'https://images.pexels.com/photos/1093904/pexels-photo-1093904.jpeg?cs=srgb&dl=afternoon-background-beverage-1093904.jpg&fm=jpg',
    bg: 'grey',
    title: 'Hiway gère tout l’administratif',
    textColor: '#ffffffa1',
    texts: [
      'Gestion permanente et en temps réel de ta comptabilité',
      'Réception, traitement et classement du courrier',
      'Création de documents à la demande',
      'Support permanent sur tous les sujets',
    ],
  },
]

export function Faas() {
  return (
    <Box flexDirection="column" alignItems="center" pt="30px" bg="white">
      <Zoom>
        <Heading1 textAlign="center">
          <b>F</b>reelance <b>a</b>s <b>a</b> <b>s</b>ervice
        </Heading1>
      </Zoom>

      <Box flexDirection="column" width="100%">
        {data.map((item, index) => (
          <Item
            textImg={item.textImg}
            src={item.src}
            bg={item.bg}
            revert={index % 2 === 1}
            text={
              <div>
                <Slide right={index % 2 === 0} left={index % 2 === 1}>
                  <Heading2 color="white">{item.title}</Heading2>
                  {item.texts.map(text => (
                    <Text color={item.textColor}>{text}</Text>
                  ))}
                </Slide>
              </div>
            }
          />
        ))}
      </Box>
    </Box>
  )
}

function Item({ text, textImg, src, revert, bg }) {
  const BlocText = ({ text, bg }) => (
    <Box
      width={['100%', '60%']}
      bg={bg}
      p="30px"
      flexDirection="column"
      justifyContent="center"
    >
      {text}
    </Box>
  )

  const BlocImg = ({ textImg, src }) => (
    <Box width={['100%', '40%']} bg="#00000070" position="relative">
      <img
        style={{ minHeight: '100%', height: '300px', width: '100%' }}
        src={src}
      />
      <Box
        width="100%"
        position="absolute"
        style={{ height: '100%' }}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Heading2 color="white">{textImg}</Heading2>
      </Box>
    </Box>
  )

  return (
    <Box style={{ position: 'relative' }} flexWrap={['wrap', 'noWrap']}>
      {!revert && <BlocImg textImg={textImg} src={src} />}
      <BlocText text={text} bg={bg} />
      {revert && <BlocImg textImg={textImg} src={src} />}
    </Box>
  )
}
