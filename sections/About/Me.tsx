import { EmailIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"
import data from "@configs/About/more-about-me"

export default function AboutMe() {
  return (
    <List>
      <ListItem textStyle="list-heading">
        <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
        {data.title}
      </ListItem>
      <>
        {data.excerpt.map((paragraph: any) => (
          <ListItem key={`p-${paragraph.text}`}>{paragraph.text}</ListItem>
        ))}
      </>
    </List>
  )
}
