import { List, ListIcon, ListItem } from "@chakra-ui/react"
import EmailIcon from "@common/icons/socials/email-icon"

export default function DeveloperInfo({ devInfo }: any) {
  return (
    <List>
      <ListItem textStyle="list-heading">
        <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
        {devInfo.title}
      </ListItem>

      {devInfo.excerpt.map((p: any) => (
        <ListItem
          as="h2"
          fontSize={{ base: "xs", md: "sm" }}
          key={`devInfo-${p.text}`}
        >
          {p.text}
        </ListItem>
      ))}
    </List>
  )
}
