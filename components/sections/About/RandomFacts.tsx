import { Heading, List, ListItem } from "@chakra-ui/react"
import RenderIcon from "@components/common/icons/socials"
import { CustomContainer } from "@components/common/index"
import randomFacts from "@data/randomFacts"

export default function RandomFacts() {
  return (
    <CustomContainer>
      <Heading
        sx={{
          fontSize: [2, 3],
          mb: 2
        }}
      >
        <RenderIcon iconname={randomFacts.iconName} />
        <Heading fontSize="tiny" sx={{ ml: 2 }}>
          {randomFacts.title}
        </Heading>
      </Heading>
      <List sx={{ m: 0, p: 0, fontSize: [0, 1, 2] }}>
        {randomFacts.facts.map((fact, i) => (
          <ListItem
            data-sal="slide-up"
            key={`random-fact-${fact}-${i}`}
            data-sal-delay={randomFacts.delay}
            data-sal-easing="ease"
          >
            {fact.title}
          </ListItem>
        ))}
      </List>
    </CustomContainer>
  )
}
