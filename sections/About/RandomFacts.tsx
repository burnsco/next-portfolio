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
        <ListItem
          fontWeight="400"
          color="#606060"
          opacity="1"
          transform="matrix(1,0,0,1,0,0)"
          fontFamily="Lato"
          fontSize={{ base: "xs", md: "sm" }}
          key={`random-fact-${fact.title}`}
        >
          {fact.title}
        </ListItem>
      ))}
    </>
  </List>
)

export default RandomFacts
