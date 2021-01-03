import { EmailIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"

export default function RandomFacts({ randomFacts }: any) {
  return (
    <List>
      <ListItem textStyle="list-heading">
        <ListIcon as={EmailIcon} boxSize={5} color="red.500" />

        {randomFacts.title}
      </ListItem>

      {randomFacts.facts.map((fact: any) => (
        <ListItem key={`random-fact-${fact.title}`}>{fact.title}</ListItem>
      ))}
    </List>
  )
}
