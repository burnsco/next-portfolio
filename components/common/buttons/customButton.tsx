import { chakra, Flex } from "@chakra-ui/react"
import WebIcon from "@common/icons/web-icon"
import CustomGithubIcon from "../icons/github-icon"

const CustomButton = (props: any) => (
  <Flex
    backgroundColor="#3DD1E7"
    border="0 solid #E5E7EB"
    boxSizing="border-box"
    color="#000000"
    fontSize={["1rem", "1.75rem"]}
    fontWeight="700"
    justifyContent="center"
    lineHeight="1.75rem"
    padding={[".75rem 1.65rem", ".75rem 3re,"]}
    position="relative"
    textAlign="center"
    textDecoration="none #000000 solid"
    textDecorationThickness="auto"
    width="100%"
    maxWidth="md"
    cursor="pointer"
    transform="rotate(-2deg)"
    userSelect="none"
    WebkitUserSelect="none"
    touchAction="manipulation"
    _focus={{
      outline: 0
    }}
    _after={{
      content: '""',
      position: "absolute",
      border: "1px solid #000000",
      bottom: "2px",
      left: "2px",
      width: "calc(100% - 1px)",
      height: "calc(100% - 1px)"
    }}
    _hover={{
      _after: {
        bottom: "2px",
        left: "2px"
      }
    }}
    {...props}
  >
    <chakra.span mr="1">{props.title}</chakra.span>{" "}
    {props.source ? <CustomGithubIcon /> : <WebIcon />}
  </Flex>
)

export default CustomButton
