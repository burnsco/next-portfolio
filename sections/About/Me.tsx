import { EmailIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"

export default function AboutMe({ aboutMe }: any) {
  return (
    <List>
      <ListItem textStyle="list-heading">
        <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
        {aboutMe.title}
      </ListItem>
      <>
        {aboutMe.excerpt.map((paragraph: any) => (
          <ListItem
            fontWeight="400"
            color="#606060"
            opacity="1"
            transform="matrix(1,0,0,1,0,0)"
            fontSize={{ base: "xs", md: "sm" }}
            key={`p-${paragraph.text}`}
          >
            {paragraph.text}
          </ListItem>
        ))}
      </>
    </List>
  )
}
