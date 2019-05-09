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
        description:
          'Analyse de toutes les possibilités en matière juridique, fiscale, sociale ainsi que leur impact sur la rémunération et préconisation du statut juridique le plus intéressant',
      },
      {
        title: 'Constitution du dossier d’immatriculation',
        description:
          'Formulaires obligatoires, attestation de dépôt du capital social, annonce légale, contrat de domiciliation du siège social',
      },
      {
        title: 'Immatriculation et obtention du Kbis',
        description:
          'Immatriculation auprès du Greffe du Tribunal de Commerce et obtention du Kbis en 48h',
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
        description:
          'Profil value, CV, mise en visibilité, préparation aux entretiens, suivi des opportunités',
      },
      {
        title: 'Négociation & contractualisation',
        description:
          'Définition du tarif, négociation, étude des contrats clients, templates (devis, contrats, etc.)',
      },
      {
        title: 'Proposition de missions',
        description:
          'Mise en relation directe avec des clients finaux, partenariats avec des plateformes de freelances et ESN, cooptation entre freelances de la communauté Hiway',
      },
    ],
  },
  {
    title: 'Formation en gestion d’entreprise',
    items: [
      {
        title: 'Gestion commerciale',
        description:
          'Règles commerciales, contractualisation, suivi des contrats, facturation, suivi des paiements, gestion de la relation client',
      },
      {
        title: 'Gestion des dépenses',
        description:
          'Règles, formalisme, classement, comptabilisation, gestion de trésorerie.	Achat de matériel, frais de repas, déplacements, dépenses courantes',
      },
      {
        title: 'Gestion fiscale et sociale',
        description:
          'Règles, taux, calendrier, process. TVA, Impôt sur les sociétés, Cotisation Foncière des Entreprises, SSI, URSSAF, CIPAV',
      },
    ],
  },
  {
    title: 'Formation en stratégie financière',
    items: [
      {
        title: 'Règles comptables et financières',
        description: 'Produits, charges, amortissements, rentabilité',
      },
      {
        title: 'Rémunération du dirigeant',
        description: 'Calcul, optimisation, déclaration',
      },
      {
        title: 'Sécurisation de la trésorerie',
        description:
          'Gestion des variations d’activité, anticipation de la fiscalité et des cotisations sociales',
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
