import React from 'react'
import Link from 'gatsby-link'
import { Box, Text } from '../components'
import bgheader from '../assets/bg-header.jpg'
import logo from '../assets/hiway.png'

const Home = () => (
  <Box
    height="90vh"
    py="50px"
    px="30px"
    color="rgb(254, 209, 54)"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    backgroundImage={bgheader}
  >
    <div style={{ textAlign: 'center', marginTop: '-200px' }}>
      <img src={logo} />
      <h2>Freelancing is cool</h2>
      <h3>Solutions pour devenir freelance</h3>
    </div>
  </Box>
)

const Frenlancing = () => (
  <Box bg="white" flexDirection="column" p="30px" alignItems="center">
    <h1>C’est le moment de devenir freelance</h1>
    <h2>
      Le freelancing est le meilleur statut pour s’épanouir dans sa vie comme
      dans son job
    </h2>

    <Box flexDirection="column" textAlign="center" width="80%">
      <Box justifyContent="space-around" mt="60px" flexWrap="wrap">
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Liberté</h3>
          <p>
            Sois libre de décider : missions, clients, durée, technos, tarifs
          </p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Revenus</h3>
          <p>Gagne 2 fois plus qu’en CDI</p>
        </Box>
      </Box>

      <Box
        flexDirection="row"
        justifyContent="space-between"
        mt="40px"
        flexWrap="wrap"
      >
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Bonheur</h3>
          <p>Organise ta vie comme tu veux et fais toi plaisir</p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Compétences</h3>
          <p>Deviens un chef d’entreprise</p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Missions</h3>
          <p>Tes compétences sont très recherchées</p>
        </Box>
      </Box>
    </Box>
  </Box>
)

const EngagementHiway = () => (
  <Box bg="white" flexDirection="column" p="30px" alignItems="center">
    <h1> L’engagement d’Hiway</h1>
    <h2>Hiway t’accompagne pour devenir freelance et garantit ta réussite</h2>
    <Box flexDirection="column" textAlign="center" width="80%">
      <Box justifyContent="space-around" mt="60px" flexWrap="wrap">
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Démarre dans les meilleures conditions</h3>
          <p>Choix du bon statut juridique. Création complète de ta société.</p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Entoure-toi de spécialistes</h3>
          <p>
            2 coachs, 1 expert-comptable, 1 banquier, 1 assureur spécialisé en
            protection sociale, 1 avocat, 1 CE
          </p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Signe le bon projet</h3>
          <p>
            Coaching pour trouver ta mission. Négociation. Contractualisation
          </p>
        </Box>
      </Box>

      <Box
        flexDirection="row"
        justifyContent="space-between"
        mt="40px"
        flexWrap="wrap"
      >
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Gère facilement et sans erreur</h3>
          <p>
            Gestion administrative simplifiée. Fiscalité maîtrisée. Préparation
            du bilan
          </p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Gagne un maximum d’argent</h3>
          <p>
            Pilotage financier. Optimisation fiscale Maximisation des revenus.
          </p>
        </Box>
        <Box width="250px" flexDirection="column" mx="40px">
          <h3>Rejoins une communauté</h3>
          <p>
            Réseau de développeurs freelances connectés et solidaires
            www.weareheroes.io
          </p>
        </Box>
      </Box>
    </Box>
  </Box>
)

const Members = () => (
  <Box bg="gray" flexDirection="column" p="30px" alignItems="center">
    <h1>Ils ont bien fait</h1>
    <h2>
      100% des développeurs devenus freelance avec Hiway ont recommandé un ami
    </h2>
    <Box
      flexDirection="flex"
      textAlign="center"
      width="100%"
      justifyContent="space-between"
      mt="40px"
      flexWrap="wrap"
    >
      <img src={bgheader} alt="" width="150px" height="150px" />
      <img src={bgheader} alt="" width="150px" height="150px" />
      <img src={bgheader} alt="" width="150px" height="150px" />
      <img src={bgheader} alt="" width="150px" height="150px" />
      <img src={bgheader} alt="" width="150px" height="150px" />
      <img src={bgheader} alt="" width="150px" height="150px" />
      <img src={bgheader} alt="" width="150px" height="150px" />
    </Box>
  </Box>
)

const Teams = () => (
  <Box bg="gray" flexDirection="column" p="30px" alignItems="center">
    <h1>Les gardiens de ta réussite</h1>
    <h2>
      Des spécialistes convaincus que le freelancing est le meilleur statut
    </h2>
    <Box
      flexDirection="flex"
      textAlign="center"
      width="100%"
      justifyContent="space-between"
      mt="40px"
      flexWrap="wrap"
    >
      <img
        src={bgheader}
        className="picture"
        alt=""
        width="150px"
        height="150px"
      />
      <img
        src={bgheader}
        className="picture"
        alt=""
        width="150px"
        height="150px"
      />
      <img
        src={bgheader}
        className="picture"
        alt=""
        width="150px"
        height="150px"
      />
      <img
        src={bgheader}
        className="picture"
        alt=""
        width="150px"
        height="150px"
      />
      <img
        src={bgheader}
        className="picture"
        alt=""
        width="150px"
        height="150px"
      />
    </Box>
  </Box>
)

const Contact = () => (
  <Box bg="gray" flexDirection="column" p="30px" alignItems="center">
    <h1> Be freelance / Contact</h1>
    <form name="contact" method="POST" data-netlify="true">
      <Box bg="gray" flexDirection="column" width={['100%', '100%', '500px']}>
        <Box mb="10px" width="100%">
          <input
            type="text"
            name="name"
            style={{ width: '100%' }}
            placeholder="Nom Prénom"
          />
        </Box>
        <Box mb="10px" width="100%">
          <input
            style={{ width: '100%' }}
            type="text"
            name="phone"
            placeholder="Numéro"
          />
        </Box>
        <Box mb="25px" width="100%">
          <input
            style={{ width: '100%' }}
            type="email"
            name="email"
            placeholder="Email"
          />
        </Box>
        <textarea
          style={{ width: '100%' }}
          type=""
          name="message"
          placeholder="Message"
        />
      </Box>
    </form>
  </Box>
)

const Offre2Way = () => (
  <Box flexDirection="column" p={['30px']} alignItems="center" className="way">
    <h1 style={{ color: 'black' }}>
      2 voies pour devenir un chef d’entreprise
    </h1>
    <Way />
    <Way1 />
    <Way2 />
  </Box>
)

const Way = () => (
  <Box
    p={[0, 0, '30px']}
    justifyContent="space-around"
    width="100%"
    flexWrap="wrap"
  >
    <Box
      bg="mauve"
      flexDirection="column"
      p="30px"
      width="580px"
      textAlign="center"
      color="white"
    >
      <h2>Coaching</h2>
      <p>
        Devient un chef d’entreprise autonome en apprenant pendant un an avec
        des coachs à tes côtés
      </p>
    </Box>
    <Box
      bg="blue"
      flexDirection="column"
      p="30px"
      width="580px"
      textAlign="center"
      color="white"
    >
      <h2>Freelancing as a Service</h2>
      <p>
        Devient un chef d’entreprise libéré en confiant la gestion
        administrative aux spécialistes Hiway
      </p>
    </Box>
  </Box>
)

const Way1 = () => (
  <Box
    p={[0, 0, '30px']}
    justifyContent="space-around"
    width="100%"
    flexWrap="wrap"
  >
    <Box
      bg="blue"
      flexDirection="column"
      p="20px"
      width="580px"
      textAlign="center"
      color="white"
    >
      <h2>Apprendre</h2>
      <p>
        Un parcours d’apprentissage pragmatique pour devenir un parfait chef
        d’entreprise en 1 an :
      </p>

      <p style={{ textAlign: 'left', color: 'white' }}>
        <b>
          13 ateliers de coaching délivrés par les spécialistes Hiway de la
          gestion d’entreprise sur les thémes suivants :
        </b>
      </p>
      <ul style={{ textAlign: 'left' }}>
        <li>Se lancer et créer sa société dans les meilleures conditions</li>
        <li> S’entourer de partenaires de confiance</li>
        <li> Trouver sa 1ère mission</li>
        <li> Gérer son entreprise efficacement</li>
        <li> Optimiser sa fiscalité et maximiser sa rémunération</li>
        <li>Faire son bilan</li>
      </ul>

      <p style={{ textAlign: 'left' }}>
        <b>
          Un format centré sur l’humain qui associe le travail à des moments de
          partage agréables
        </b>
      </p>
      <ul style={{ textAlign: 'left' }}>
        <li>Ateliers individuels et personnalisés</li>
        <li> Toujours en présentiel</li>
        <li> Lieux de rencontre sympas et proches de toi</li>
        <li> Agenda adapté au tien </li>
        <li> Événements au sein de la Communauté Hiway </li>
      </ul>
    </Box>
    <Box
      bg="mauve"
      flexDirection="column"
      p="30px"
      width="580px"
      textAlign="center"
      color="white"
    >
      <h2>Comprendre</h2>
      <p>
        Un accompagnent pour réussir ton démarrage dans le freelancing et une
        formation centrée sur les principes essentiels de la gestion d’une
        entreprise :
      </p>

      <p style={{ textAlign: 'left', color: 'white' }}>
        <b>2 bootcamps d’une journée sur les thèmes suivants :</b>
      </p>
      <ul style={{ textAlign: 'left' }}>
        <li>Création de la société</li>
        <li> Trouver sa 1ère mission</li>
        <li> Comprendre les principes de gestion et d’optimisation</li>
      </ul>

      <p style={{ textAlign: 'left' }}>
        <b>Toute l’équipe Hiway à ta disposition :</b>
      </p>
      <ul style={{ textAlign: 'left' }}>
        <li>Bootcamps individuels et personnalisés</li>
        <li> Support permament sur tous les sujets</li>
        <li>
          Présentation des partenaires : expert-comptable, banque, assurance /
          protection sociale
        </li>
        <li> Rencontres à ta demande </li>
        <li> Événements au sein de la Communauté Hiway </li>
      </ul>
    </Box>
  </Box>
)

const Way2 = () => (
  <Box
    p={[0, 0, '30px']}
    justifyContent="space-around"
    width="100%"
    flexWrap="wrap"
  >
    <Box
      bg="mauve"
      flexDirection="column"
      p="20px"
      width="580px"
      textAlign="center"
      color="white"
    >
      <h2>Gérer</h2>
      <p>
        Des outils faciles, des méthodologies efficaces et un support permanent
        de spécialistes pour que tu gères ton entreprise sereinement
      </p>

      <p style={{ textAlign: 'left' }}>
        <b>La gestion de mon entreprise sans erreur avec :</b>
      </p>
      <ul style={{ textAlign: 'left' }}>
        <li>Environnement de gestion collaboratif</li>
        <li> Outil de pilotage financier</li>
        <li> Édition de facture</li>
        <li> Calcul automatisé de la rémunération optimale</li>
        <li> Calcul des provisions fiscales et sociales</li>
        <li>Tous les templates de documents nécessaires</li>
        <li>
          Support permament de l’équipe Hiway : tes coachs, ton
          expert-comptable, ton assureur, ton banquier, ton avocat
        </li>
      </ul>
    </Box>
    <Box
      bg="blue"
      flexDirection="column"
      p="30px"
      width="580px"
      textAlign="center"
      color="white"
    >
      <h2>DÉLÉGUER</h2>
      <p>
        En confiant la gestion administrative de ta société à Hiway, tu décides
        de te libérer des contraintes quotidiennes d’un chef d’entreprise et tu
        te concentres uniquement sur ton métier. Bien sur, tu restes le patron !
      </p>
      <p style={{ textAlign: 'left' }}>
        <b>
          Hiway révolutionne l’entrepreneuriat en créant la le « Freelancing as
          a Service » :
        </b>
      </p>

      <ul style={{ textAlign: 'left' }}>
        <li>Ce que tu fais : nous envoyer ton CRA</li>
        <li> Ce que Hiway fait pour toi :</li>
      </ul>
      <ul style={{ textAlign: 'left', paddingLeft: '30px' }}>
        <li>Gestion commerciale</li>
        <li> Gestion comptable</li>
        <li>Gestion administrative</li>
        <li> Gestion fiscale et sociale </li>
        <li> Optimisation et rémunération</li>
        <li> Bilan comptable</li>
        <li>
          Gestion de tous les partenaires : expert-comptable, banque, assurance
          / protection sociale, organismes sociaux, administration fiscale,
          clients, fournisseurs
        </li>
        <li> Reporting de gestion réguliers </li>
      </ul>
    </Box>
  </Box>
)

const IndexPage = () => (
  <Box flexDirection="column">
    <Home />
    <Frenlancing />
    <Teams />
    <EngagementHiway />
    <Members />
    <Offre2Way />
    <Contact />
  </Box>
)

export default IndexPage
