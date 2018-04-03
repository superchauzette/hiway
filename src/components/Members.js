import React from 'react'
import { Box, Text } from '../components'
import user from '../assets/user.png'

const Member = ({ name, metier, src, temoignage }) => (
  <Box
    position="relative"
    flexDirection="column"
    mb="20px"
    bg="white"
    width={['100%', '300px', '300px']}
  >
    <Box justifyContent="space-around">
      <img src={user} alt="" height="150px" />
    </Box>
    <Box>
      <Text p="10px" width="100%" m="0">
        {name} <br />
        <span className="yellow">{metier}</span>
      </Text>
    </Box>

    <Text color="black" textAlign="center" pt="10px">
      &ldquo;{temoignage}&rdquo;
    </Text>
  </Box>
)

const Members = () => (
  <Box
    bg="white"
    flexDirection="column"
    p="30px"
    alignItems="center"
    textAlign="center"
  >
    <h1>Ils ont bien fait</h1>
    <h2 className="yellow">
      100% des développeurs devenus freelance avec Hiway ont recommandé un ami
    </h2>
    <Box
      flexDirection="flex"
      textAlign="center"
      width="100%"
      justifyContent="space-around"
      mt="40px"
      flexWrap="wrap"
    >
      <Member
        name="Florent"
        metier="Lead Dev Node.js - EFREI 2014"
        temoignage="Je suis devenu Freelance en toute sérénité grâce à Hiway"
      />
      <Member
        name="Robin"
        metier="Lead Dev PHP Symfony - ETNA 2015"
        temoignage="Hiway m'a appris à devenir un vrai chef d'entreprise"
      />
      <Member
        name="Charly"
        metier="Dev PHP Symphony - EPITECH 2014"
        temoignage="Je ne me serais jamais lancé sans eux. Aujourd'hui, je recommande Hiway à tous mes amis"
      />
      <Member
        name="Alexandre"
        metier=" Lead Dev Front - Gobelins 2014"
        temoignage="Hiway m'a conseillé sur le meilleur statut et s'est chargé de toutes les démarches de création de ma société"
      />
      <Member
        name="Kevin"
        metier="Kevin - Dev React.js - ISTY 2012"
        temoignage="Trop d'inconnu sur comment devenir freelance, Hiway m'a éclairé et accompagné sur le chemin de ma réussite"
      />
      <Member
        name="Souheil"
        metier="Lead Dev Java - UPMC 2012"
        temoignage="J'avais à la fois peur et envie de devenir Freelance. Hiway m'a permis de passer le cap"
      />

      <Member
        name="Remi"
        metier="Dev PHP - EPITECH 2013"
        temoignage="Des ateliers de coaching clairs, de l'expertise, de la disponibilité/flexibilité et du suivi au top"
      />

      <Member
        name="Antoine"
        metier="Dev React.js - IUT Paris 2012"
        temoignage="Leur suivi est vraiment complet et ils sont toujours là pour répondre à toutes les questions qu'un nouveau freelance peut se poser"
      />

      <Member
        name="Matthieu"
        metier="Dev React.js - ESIAL 2011"
        temoignage="Un seul RDV avec Hiway, via une recommandation, m'a décidé à me lancer dans le freelancingp"
      />

      <Member
        name="Raphael"
        metier="Dev React.js - ETNA 2015"
        temoignage="Hiway, m'a donné toutes les clés pour trouver rapidement ma première mission et ils m'ont également fourni le modèle du contrat"
      />

      <Member
        name="Christopher"
        metier="Lead Dev Mobile - EPITA 2012"
        temoignage="Avec Hiway, je connais, mois après mois, le montant optimal de ma rémunération"
      />
      <Member
        name="Hedi"
        metier="Dev IOS - ESPRIT 2012"
        temoignage="J'avais jamais entendu parlé d'optimisation financière, maintenant je l'applique au quotidien"
      />
    </Box>
  </Box>
)

export default Members
