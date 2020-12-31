import { EmailIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { Container } from "@common/index"
import data from "configs/random-facts"
import React from "react"

export default function RandomFacts() {
  return (
    <Container as="article">
      <List>
        <ListItem textStyle="list-heading">
          <ListIcon as={EmailIcon} boxSize={5} color="red.500" />

          {data.title}
        </ListItem>

        {data.facts.map(fact => (
          <ListItem key={`random-fact-${fact.title}`}>{fact.title}</ListItem>
        ))}
      </List>
    </Container>
  )
}
