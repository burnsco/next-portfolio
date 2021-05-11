import { EmailIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"
import data from "@configs/About/random-facts"

const RandomFacts = () => (
  <List>
    <ListItem textStyle="list-heading">
      <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
      {data.title}
    </ListItem>
    <>
      {data.facts.map((fact: any) => (
        <ListItem key={`random-fact-${fact.title}`}>{fact.title}</ListItem>
      ))}
    </>
  </List>
)

export default RandomFacts
