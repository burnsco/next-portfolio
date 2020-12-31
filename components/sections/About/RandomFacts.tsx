import { Heading, List, ListItem } from "@chakra-ui/react"
import { Container } from "@common/index"
import RenderIcon from "@common/render-icon/RenderIcon"
import data from "configs/random-facts"

export default function RandomFacts() {
  return (
    <Container>
      <RenderIcon height="1.5em" width="1.5em" iconname={data.iconName} />
      <Heading fontSize="md" ml="2">
        {data.title}
      </Heading>

      <List m="0" p="0">
        {data.facts.map(fact => (
          <ListItem key={`random-fact-${fact}`}>{fact.title}</ListItem>
        ))}
      </List>
    </Container>
  )
}
