import React from 'react'
import { Box, Text } from '../components'
import kev from '../assets/kev.jpg'

const Member = ({ name, metier, src }) => (
  <Box
    position="relative"
    flexDirection="column"
    mb="20px"
    style={{
      backgroundColor: 'white',
      // boxShadow:
      //   '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }}
  >
    <div
      style={{
        overflow: 'hidden',
        width: '170px',
        height: '200px',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <img src={src} alt="" height="250px" />
    </div>
    <div
      style={{
        bottom: '-40px',
        height: '60px',
        width: '100%',
      }}
    >
      <p>
        {name} <br />
        {metier}
      </p>
    </div>
  </Box>
)

const Members = () => (
  <Box
    bg="gray"
    flexDirection="column"
    p="30px"
    alignItems="center"
    textAlign="center"
  >
    <h1>Ils ont bien fait</h1>
    <h2>
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
        name="Me"
        metier="Dev PHP"
        src="https://images.unsplash.com/photo-1515506930109-d83b9248dccf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0cf359ea0952e2e08326dddfca10f94c&auto=format&fit=crop&w=334&q=80%20334w,%20"
      />
      <Member
        name="Me"
        metier="Dev Android"
        src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixlib=rb-0.3.5&s=9a589419e61e61d38471e345fd3b0026&auto=format&fit=crop&w=934&q=80"
      />
      <Member
        name="Me"
        metier="Dev JS"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&s=10f2e97699b156850d17285683b6ce81&auto=format&fit=crop&w=2134&q=80"
      />
      <Member
        name="Me"
        metier="Dev PHP"
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
