import React from 'react'
import { Box, Text } from '../components'
import kev from '../assets/kev.jpg'

const Member = ({ name, metier, src, temoignage }) => (
  <Box
    position="relative"
    flexDirection="column"
    mb="20px"
    bg="white"
    width={['100%', '450px', '450px']}
    className="card"
  >
    <Box justifyContent="space-around" style={{ overflow: 'hidden' }}>
      <img
        src={src}
        alt=""
        height="360px"
        style={{ transform: 'scale(2.8)' }}
      />
    </Box>
    <Box>
      <Text p="10px" width="100%" m="0">
        {name} <br />
        <span className="yellow">{metier}</span>
      </Text>
    </Box>
    <Box className="overlay">
      <blockquote>
        <Text color="white" pt="10px">
          &ldquo;{temoignage}&rdquo;
        </Text>
      </blockquote>
    </Box>
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
        name="Antoine"
        metier="Dev Angular & React chez un Leader du E-Commerce"
        src="https://images.unsplash.com/photo-1515506930109-d83b9248dccf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0cf359ea0952e2e08326dddfca10f94c&auto=format&fit=crop&w=334&q=80%20334w,%20"
        temoignage="Ayant beaucoup de collègues en freelance, il me paraissait intéressant de changer de statut d'une part pour des raisons financières et d'autre part pour le gain de liberté que ce soit du coté des missions ou du temps travaillé. Mais par où commencer ? Comment créer sa structure ? Quel sont les risques ? Comment gérer ses finances ? Quels impôts payer et quand ? Combien je me rémunère ?
        A toutes ses questions, Hiway m'a répondu et a même répondu à des questions que je ne me posais pas, telles que l'assurance, la protection sociale, la stratégie financière, l'optimisation fiscale...de façon très pédagogue. Il ont rédigé les statuts juridiques, créé la structure, mis en contact avec un expert comptable et un assureur. Ils m'ont même proposé des missions, donné des outils pour trouver une mission et plus encore ! Bref j'ai pu passer freelance de façon très confortable"
      />
      <Member
        name="Robin"
        metier="Dev Back Symfony chez La Poste"
        src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixlib=rb-0.3.5&s=9a589419e61e61d38471e345fd3b0026&auto=format&fit=crop&w=934&q=80"
        temoignage="Ça fait un moment que j'envisageais de devenir freelance, mais n'ayant aucune compétence en la matière je ne pensais pas m'en sortir. La partie administrative, la création ainsi que la manière de gérer l'entreprise au quotidien m'effrayaient.
        HIWAY m'a permis de passer le cap en me concentrant uniquement sur ma future mission sans avoir à m'inquiéter du reste. Leur suivi est vraiment complet et ils sont toujours là pour répondre à toutes les questions qu'un nouveau freelance peut se poser. Je ne regrette vraiment pas et je les recommande !"
      />
      <Member
        name="Charly"
        metier="Dev PHP chez un grand group Média"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&s=10f2e97699b156850d17285683b6ce81&auto=format&fit=crop&w=2134&q=80"
        temoignage="Avant de me lancer en freelance, j'étais hésitant et angoissé à l'idée de cette aventure !
        Trop d'inconnu se dressait sur mon chemin !
        HIWAY a su m'orienter dans le bon sens et m'enlever tous ce stresse,
        ils m'ont accompagné depuis la prise de cette décision jusqu'à la maîtrise de tous les tenants et aboutissants de ce statut !
        Je ne pense pas que je me serais lancé sans eux et, avec le recul je ne regrette absolument pas cette décision,
        je les recommande même à tous ceux qui m'entourent aujourd'hui !"
      />
      <Member
        name="Alex"
        metier="Lead Développeur Front-End Web chez un grand groupe média"
        src="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-0.3.5&s=c8b924490710b66886b7ad9bb1f0bfa5&auto=format&fit=crop&w=934&q=80"
      />
      <Member
        name="Me"
        metier="Dev Mobile"
        src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-0.3.5&s=3e7897b8446c9c938ba93eb82431bd13&auto=format&fit=crop&w=1951&q=80"
      />
      <Member
        name="Me"
        metier="Dev Mobile"
        src="https://images.unsplash.com/photo-1506089676908-3592f7389d4d?ixlib=rb-0.3.5&s=1a67353f6ca96d377ff7fe1571da4c88&auto=format&fit=crop&w=1951&q=80"
      />
    </Box>
  </Box>
)

export default Members
