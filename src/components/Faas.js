import React from 'react'
import { Box, Text, Heading1, Heading2 } from '.'
import { Zoom, Slide } from 'react-reveal'

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

const Item = ({ text, textImg, src, revert, bg }) => (
  <Box style={{ position: 'relative' }} flexWrap={['wrap', 'noWrap']}>
    {!revert && <BlocImg textImg={textImg} src={src} />}
    <BlocText text={text} bg={bg} />
    {revert && <BlocImg textImg={textImg} src={src} />}
  </Box>
)

export const Faas = () => (
  <Box flexDirection="column" alignItems="center" pt="30px" bg="white">
    <Zoom>
      <Heading1>
        <b>F</b>reelance <b>a</b>s <b>a</b> <b>s</b>ervice
      </Heading1>
    </Zoom>

    <Box flexDirection="column" width="100%">
      <Item
        text={
          <div>
            <Slide right>
              <Heading2 color="white">
                Hiway gère tout ton administratif commercial
              </Heading2>
              <Text color="#ffffffa1">
                Édition de ton contrat de prestation
              </Text>
              <Text color="#ffffffa1">
                Facturation mensuelle de tes prestations
              </Text>
              <Text color="#ffffffa1">Suivi des paiements</Text>
              <Text color="#ffffffa1">
                Relance en cas de retard de paiement
              </Text>
            </Slide>
          </div>
        }
        textImg="Facturation mensuelle & contrats gérés"
        src="https://images.pexels.com/photos/1435192/pexels-photo-1435192.jpeg?cs=srgb&dl=cash-close-up-counting-1435192.jpg&fm=jpg"
        bg="#343a5e"
      />
      <Item
        text={
          <div>
            <Slide left>
              <Heading2>
                Hiway gère tout le fiscal et le social de ta société
              </Heading2>
              <Text>Création des comptes impôts.gouv, SSI, URSSAF, CIPAV</Text>
              <Text>
                Calcul des montants dus : TVA, Impôt sur les Sociétés,
                Cotisation Financière des Entreprises, URSSAF, CIPAV
              </Text>
              <Text>Mise en paiement et suivi</Text>
              <Text>Relation avec les organismes fiscaux et sociaux</Text>
            </Slide>
          </div>
        }
        textImg="Obligations fiscales et sociales traitées"
        src="https://images.pexels.com/photos/2068411/pexels-photo-2068411.jpeg?cs=srgb&dl=blurred-background-close-up-colors-2068411.jpg&fm=jpg"
        revert
        bg="yellow"
      />
      <Item
        text={
          <div>
            <Slide right>
              <Heading2 color="white">
                Hiway pilote les finances de ta société
              </Heading2>
              <Text color="#ffffffa1">Calcul mensuel de ta rémunération</Text>
              <Text color="#ffffffa1">Optimisation de ta fiscalité</Text>
              <Text color="#ffffffa1">Sécurisation de ta trésorerie</Text>
            </Slide>
          </div>
        }
        textImg="Gagne un maximum d’argent tous les mois"
        src="https://images.pexels.com/photos/2084239/pexels-photo-2084239.jpeg?cs=srgb&dl=4k-wallpaper-citrus-fruit-close-up-2084239.jpg&fm=jpg"
        bg="#ff396c"
      />
      <Item
        text={
          <div>
            <Slide left>
              <Heading2 color="white">Hiway gère tout l’administratif</Heading2>
              <Text color="#ffffffa1">
                Gestion permanente et en temps réel de ta comptabilité
              </Text>
              <Text color="#ffffffa1">
                Réception, traitement et classement du courrier
              </Text>
              <Text color="#ffffffa1">Création de documents à la demande</Text>
              <Text color="#ffffffa1">
                Support permanent sur tous les sujets
              </Text>
            </Slide>
          </div>
        }
        textImg="Concentre-toi sur ton job"
        src="https://images.pexels.com/photos/1093904/pexels-photo-1093904.jpeg?cs=srgb&dl=afternoon-background-beverage-1093904.jpg&fm=jpg"
        revert
        bg="grey"
      />
    </Box>
  </Box>
)
