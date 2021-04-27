import { Box, List, ListIcon, ListItem } from "@chakra-ui/react"
import data from "@configs/Skills/about-me"
import DevInfoIcon from "../../components/common/icons/dev-info-icon"

export default function DeveloperInfo() {
  return (
    <Box p={2}>
      <List>
        <ListItem textStyle="list-heading">
          <ListIcon as={DevInfoIcon} boxSize={5} color="red.500" />
          {data.title}
        </ListItem>
        <>
          {data.excerpt.map(p => (
            <ListItem
              fontWeight="300"
              fontSize={{ base: "xs", md: "sm" }}
              key={`devInfo-${p.text}`}
            >
              {p.text}
            </ListItem>
          ))}
        </>
      </List>
    </Box>
  )
}
