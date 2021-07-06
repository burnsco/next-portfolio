import { EmailIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"

export default function RandomFacts(randomFacts: FactsType) {
  return (
    <List>
      <ListItem textStyle="list-heading">
        <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
        {randomFacts.title}
      </ListItem>
      <>
        {randomFacts.facts.map((fact: any) => (
          <ListItem
            fontWeight="400"
            color="#606060"
            opacity="1"
            transform="matrix(1,0,0,1,0,0)"
            fontSize={{ base: "xs", md: "sm" }}
            key={`random-fact-${fact.title}`}
          >
            {fact.title}
          </ListItem>
        ))}
      </>
    </List>
  )
}
