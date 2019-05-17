import React from 'react'
import { Box, Heading1, Heading3, Text } from '.'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const stepsData = [
  {
    title: 'Création de la société',
    items: [
      {
        title: 'Choix de la forme juridique et rédaction des statuts',
      },
      {
        title: 'Constitution du dossier d’immatriculation',
      },
      {
        title: 'Immatriculation et obtention du Kbis',
      },
    ],
  },
  {
    title: 'Mise en relation avec les partenaires Hiway',
    items: [
      {
        title: 'BNP Paribas',
        description:
          'Compte pro, solutions de financement et accompagnement patrimonial',
      },
      {
        title: 'AXA',
        description:
          'Assurance professionnelle et protection sociale personnalisée',
      },
    ],
  },
  {
    title: 'Coaching commercial',
    items: [
      {
        title: 'Mise en visibilité',
      },
      {
        title: 'Négociation & contractualisation',
      },
      {
        title: 'Proposition de missions',
      },
    ],
  },
  {
    title: 'Formation en gestion d’entreprise',
    items: [
      {
        title: 'Gestion commerciale',
      },
      {
        title: 'Gestion des dépenses',
      },
      {
        title: 'Gestion fiscale et sociale',
      },
    ],
  },
  {
    title: 'Formation en stratégie financière',
    items: [
      {
        title: 'Règles comptables et financières',
      },
      {
        title: 'Rémunération du dirigeant',
      },
      {
        title: 'Sécurisation de la trésorerie',
      },
    ],
  },
  {
    title:
      'Comptabilité: Partenariat avec un cabinet d’expertise-comptable intégré dans l’accompagnement Hiway',
    items: [
      {
        description:
          'Conseil personnalisé et validation des opérations comptables',
        title: '',
      },
      {
        description: 'Bilan et liasse fiscale',
        title: '',
      },
      {
        description: 'Assemblée générale et dépôt des comptes',
        title: '',
      },
    ],
  },
  {
    title: 'Préparation de l’avenir',
    items: [
      {
        title: '',
        description:
          'Accompagnement par un gestionnaire de patrimoine partenaire d’Hiway',
      },
      {
        title: '',
        description:
          'Définition d’une stratégie personnalisée d’investissements et de placements',
      },
      {
        title: '',
        description:
          'Conseil et mise en place des montages juridiques, fiscaux et financierss',
      },
    ],
  },
]

const Step = ({ title, items }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<Heading3 color="red">{title}</Heading3>}
    icon={
      <img src="https://res.cloudinary.com/hopwork/image/upload/v1508844479/home-malt/check.svg" />
    }
    iconStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgb(33, 150, 243)',
      color: '#fff',
    }}
  >
    {items.map(item => (
      <Box m="0px" flexDirection="column">
        <Text style={{ fontWeight: 'bold', margin: 0 }}>{item.title}</Text>
        <Text style={{ margin: '4px 0 8px' }}>{item.description}</Text>
      </Box>
    ))}
  </VerticalTimelineElement>
)

export const Parcours = () => (
  <Box
    p={['15px', '30px']}
    flexDirection="column"
    alignItems="center"
    bg="gray"
  >
    <Heading1>Parcours</Heading1>
    <Box flexDirection="column" mt={['0px', '30px']}>
      <VerticalTimeline>
        {stepsData.map((step, index) => <Step {...step} />)}
      </VerticalTimeline>
    </Box>
  </Box>
)
