import React from 'react'
import { Box, Text, Heading1, Heading2 } from '../components'
import Charley from '../assets/CharleyFROMAGE.jpg'
import NicolasR from '../assets/NicolasROSADO.jpg'
import AlexandreLANGUE from '../assets/AlexandreLANGUE.jpg'
import FrancoisBOULAIS from '../assets/FrancoisBOULAIS.jpg'

const data = {
  title: 'Une communauté de 100 freelances',
  subtitle:
    'Ensemble, nous avons créé CLUSTER, la 1ère communauté collaborative et solidaire de développeurs et experts de la Tech freelances : ',

  link: {
    label: 'www.cluster-freelance.io',
    url: 'http://www.cluster-freelance.io',
  },

  members: [
    {
      name: 'Ghislain',
      metier: 'Dev Node.js / GO',
      formation: 'EPITECH 2015',
      temoignage:
        "J'étais pas rassuré mais j'avais envie de devenir Freelance. Hiway m'a permis de passer le cap",
    },
    {
      name: 'Robin',
      metier: 'Lead Dev PHP Symfony',
      formation: 'ETNA 2015',
      temoignage: "Hiway m'a appris à devenir un vrai chef d'entreprise",
    },
    {
      name: 'Charly',
      metier: 'Dev PHP Symfony',
      formation: 'EPITECH 2014',
      temoignage:
        "Je ne me serais jamais lancé sans eux. Aujourd'hui, je recommande Hiway à tous mes amis",
    },
    {
      name: 'Kevin',
      metier: 'Kevin - Dev React.js',
      formation: 'ISTY 2012',
      temoignage:
        "Trop d'inconnu sur comment devenir freelance, Hiway m'a éclairé et accompagné sur le chemin de ma réussite",
    },
    {
      name: 'Souheil',
      metier: 'Lead Dev Java',
      formation: 'UPMC 2012',
      temoignage: 'Je suis devenu Freelance en toute sérénité grâce à Hiway',
    },
    {
      name: 'Remi',
      metier: 'Dev PHP',
      formation: 'EPITECH 2013',
      temoignage:
        "Des ateliers de coaching clairs, de l'expertise, de la disponibilité/flexibilité et du suivi au top",
    },
    {
      name: 'Antoine',
      metier: 'Dev React.js',
      formation: 'IUT Paris 2012',
      temoignage:
        "Leur suivi est vraiment complet et ils sont toujours là pour répondre à toutes les questions qu'un nouveau freelance peut se poser",
    },
    {
      name: 'Matthieu',
      metier: 'Dev React.js',
      formation: 'ESIAL 2011',
      temoignage:
        'Depuis le début de mon aventure freelance fin 2017, HIWAY est mon guide et mon filet de sécurité qui me laisse me concentrer sereinement sur ma mission',
    },
    {
      name: 'Raphaël',
      metier: 'Dev React.js',
      formation: 'ETNA 2015',
      temoignage:
        "Hiway, m'a donné toutes les clés pour trouver rapidement ma première mission et ils m'ont également fourni le modèle du contrat",
    },
    {
      name: 'Christopher',
      metier: 'Lead Dev Mobile',
      formation: 'EPITA 2012',
      temoignage:
        'Avec Hiway, je connais, mois après mois, le montant optimal de ma rémunération',
    },
    {
      name: 'Hedi',
      metier: 'Dev IOS',
      formation: 'ESPRIT 2012',
      temoignage:
        "J'avais jamais entendu parlé d'optimisation financière, maintenant je l'applique au quotidien",
    },
    {
      name: 'Charley',
      metier: 'Dev IOS',
      formation: 'Polytech Nantes 2011',
      temoignage:
        "Depuis Hiway, c'est moi et moi seul qui récolte tout les fruits de mon travail !",
    },
    {
      name: 'Nicolas V',
      metier: 'Dev Mobile',
      formation: 'Univ Toulon 2014',
      temoignage:
        'Grâce à HIWAY, j’ai pu démarrer mon activité dans les meilleurs conditions et apprendre à gérer ma société sereinement',
    },
    {
      name: 'Alexandre',
      metier: 'Scrum Master',
      formation: 'EPSI Arras 2012',
      temoignage:
        "Grâce à Hiway, je suis passé de freelance junior à freelance confirmé en l'espace d'un mois. Hiway a changé la vision que j'avais du freelancing, je ne peux pas être mieux accompagné !",
    },
    {
      name: 'Nicolas R',
      metier: 'Dev Full-Stack',
      formation: 'PolyTech Tours 2013',
      temoignage:
        'Hiway m’a permis de concrétiser mon envie d’entreprendre. Grâce à leur accompagnement je me suis lancé dans ce projet en toute confiance !',
    },
    {
      name: 'François',
      metier: 'Dev iOS',
      formation: 'ESIR 2014',
      temoignage:
        'Une transition du salariat au freelancing on ne peut plus facile et agréable avec Hiway. La promesse est largement tenue',
    },
  ],
}

function srcImg(name) {
  const srcs = {
    Charley: Charley,
    Alexandre: AlexandreLANGUE,
    'Nicolas R': NicolasR,
    François: FrancoisBOULAIS,
    'Nicolas V':
      'https://res.cloudinary.com/kevin-even-io/image/upload/c_crop,h_3648,w_3648/v1542660136/hiway/Nicolas_Viry.jpg',
  }

  return (
    srcs[name] ||
    `https://res.cloudinary.com/kevin-even-io/image/upload/c_scale,w_auto,dpr_auto/hiway/${name}.jpg`
  )
}

export function Members() {
  return (
    <Box
      bg="white"
      flexDirection="column"
      p={['5px', '30px', '30px']}
      pt="40px"
      alignItems="center"
      textAlign="center"
    >
      <Heading1>{data.title}</Heading1>
      <Box px={[0, 150, 150]}>
        <Heading2 color="yellow">
          {data.subtitle}
          <a
            target="_blank"
            href={data.link.url}
            style={{ whiteSpace: 'nowrap', color: '#5A5A5A' }}
          >
            {data.link.label}
          </a>
        </Heading2>
      </Box>
      <Box
        flexDirection="flex"
        textAlign="center"
        width="100%"
        justifyContent="space-around"
        mt="40px"
        flexWrap="wrap"
        style={{ maxWidth: '1400px' }}
      >
        {data.members.map(member => (
          <Member
            name={member.name}
            src={srcImg(member.name)}
            metier={member.metier}
            formation={member.formation}
            temoignage={member.temoignage}
          />
        ))}
      </Box>
    </Box>
  )
}

function Member({ name, metier, formation, src, temoignage }) {
  return (
    <Box
      position="relative"
      flexDirection="column"
      mb="20px"
      width={['100%', '300px', '320px']}
    >
      <Box justifyContent="space-around">
        <img
          src={src}
          alt={name}
          height="150px"
          width="150px"
          className="picture"
        />
      </Box>
      <Box>
        <Box flexDirection="column" p="10px" width="100%" m="0">
          <Text m={0}>{name}</Text>
          <Text m={0} color="yellow">
            {metier}
          </Text>
          <Text m={0} color="yellow">
            {formation}
          </Text>
        </Box>
      </Box>
      <Text textAlign="center">&ldquo;{temoignage}&rdquo;</Text>
    </Box>
  )
}
