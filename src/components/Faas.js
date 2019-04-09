import React from 'react'
import { Box, Text, Heading1, Heading2, Heading3 } from '.'

const BB = ({ text, bg }) => (
  <Box
    width="60%"
    bg={bg}
    p="30px"
    flexDirection="column"
    justifyContent="center"
  >
    {text}
  </Box>
)

const AAImg = ({ textImg, src, revert }) => (
  <Box
    width="40%"
    style={{ overflow: 'hidden' }}
    justifyContent="center"
    alignItems="center"
    bg="#00000070"
  >
    <Heading2 color="white">{textImg}</Heading2>
    <div
      style={{
        position: 'absolute',
        height: '300px',
        overflow: 'hidden',
        zIndex: -1,
      }}
    >
      <img style={{ height: 'auto', maxWidth: '100%' }} src={src} />
    </div>
  </Box>
)

const Item = ({ text, textImg, src, revert, bg }) => (
  <Box style={{ height: '300px', position: 'relative' }}>
    {!revert && <AAImg textImg={textImg} src={src} revert={revert} />}
    <BB text={text} bg={bg} />
    {revert && <AAImg textImg={textImg} src={src} />}
  </Box>
)

export const Faas = () => (
  <Box flexDirection="column" alignItems="center" pt="30px">
    <Heading1>Faas</Heading1>

    <Box flexDirection="column" width="100%">
      <Item
        text={
          <div color="white">
            <Heading2 color="white">
              Hiway gère tout ton administratif commercial
            </Heading2>
            <Text color="#ffffffa1">Édition de ton contrat de prestation</Text>
            <Text color="#ffffffa1">
              Facturation mensuelle de tes prestations
            </Text>
            <Text color="#ffffffa1">Suivi des paiements</Text>
            <Text color="#ffffffa1">Relance en cas de retard de paiement </Text>
          </div>
        }
        textImg="Facturation mensuelle & contrats gérés"
        src="https://images.pexels.com/photos/2096580/pexels-photo-2096580.jpeg?cs=srgb&dl=architecture-black-and-white-building-exterior-2096580.jpg&fm=jpg"
        bg="grey"
      />
      <Item
        text={
          <div>
            <Heading2>
              Hiway gère tout le fiscal et le social de ta société
            </Heading2>
            <Text>Création des comptes impôts.gouv, SSI, URSSAF, CIPAV</Text>
            <Text>
              Calcul des montants dus : TVA, Impôt sur les Sociétés, Cotisation
              Financière des Entreprises, URSSAF, CIPAV
            </Text>
            <Text>Mise en paiement et suivi</Text>
            <Text>Relation avec les organismes fiscaux et sociaux</Text>
          </div>
        }
        textImg="Obligations fiscales et sociales traitées"
        src="https://images.pexels.com/photos/2068411/pexels-photo-2068411.jpeg?cs=srgb&dl=blurred-background-close-up-colors-2068411.jpg&fm=jpg"
        revert
        bg="white"
      />
      <Item
        text={
          <div>
            <Heading2 color="white">
              Hiway pilote les finances de ta société
            </Heading2>
            <Text color="#ffffffa1">Calcul mensuel de ta rémunération</Text>
            <Text color="#ffffffa1">Optimisation de ta fiscalité</Text>
            <Text color="#ffffffa1">Sécurisation de ta trésorerie</Text>
          </div>
        }
        textImg="Gagne un maximum d’argent tous les mois"
        src="https://images.pexels.com/photos/2084239/pexels-photo-2084239.jpeg?cs=srgb&dl=4k-wallpaper-citrus-fruit-close-up-2084239.jpg&fm=jpg"
        bg="grey"
      />
      <Item
        text={
          <div>
            <Heading2>Hiway gère tout l’administratif</Heading2>
            <Text>Gestion permanente et en temps réel de ta comptabilité</Text>
            <Text>Réception, traitement et classement du courrier</Text>
            <Text>Création de documents à la demande</Text>
            <Text>Support permanent sur tous les sujets</Text>
          </div>
        }
        textImg="Concentre-toi sur ton job"
        src="https://images.pexels.com/photos/1093904/pexels-photo-1093904.jpeg?cs=srgb&dl=afternoon-background-beverage-1093904.jpg&fm=jpg"
        revert
        bg="white"
      />
    </Box>
  </Box>
)
