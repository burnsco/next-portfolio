import { Badge, List, ListIcon, ListItem } from "@chakra-ui/react"
import EmailIcon from "@common/icons/email-icon"
import { Container } from "@common/index"
import data from "@configs/Skills/my-skills"
import { motion } from "framer-motion"

const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } }
}

const AnimatedContainer = motion.custom(Container)

const MySkills = () => (
  <AnimatedContainer
    initial="initial"
    animate="enter"
    exit="exit"
    variants={blogVariants}
  >
    {data.map(item => (
      <List key={`my-skills-${item.title}`}>
        <ListItem textStyle="list-heading">
          <ListIcon as={EmailIcon} boxSize={5} color="red.500" />
          {item.title}
        </ListItem>
        <ListItem>
          {item.skills.map(skill => (
            <Badge
              m={1}
              variant="solid"
              colorScheme="green"
              key={`MySkills-badge-${skill.title}`}
            >
              {skill.title}
            </Badge>
          ))}
        </ListItem>
      </List>
    ))}
  </AnimatedContainer>
)

export default MySkills
