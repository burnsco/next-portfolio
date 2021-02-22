import { BoxProps, Flex } from "@chakra-ui/react"

const SmallCard = (props: BoxProps) => (
  <Flex
    flexDirection="column"
    h="full"
    bg="white"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    rounded="md"
    shadow="md"
    {...props}
  />
)

export default SmallCard
