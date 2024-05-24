import { chakra, HStack } from "@chakra-ui/react"
import CustomGithubIconColor from "@common/icons/github-icon-color"
import WebIcon from "@common/icons/web-icon"

const CustomButton = (props: any) => (
  <HStack
    backgroundColor={props.demo ? "#3DD1E7" : "#E5E7EB"}
    border={props.demo ? "0 solid #E5E7EB" : "0 solid #3DD1E7"}
    boxSizing="border-box"
    color={props.source ? "#000000" : "#E5E7EB"}
    fontSize={["1rem", "1.45rem"]}
    fontWeight="700"
    justifyContent="center"
    lineHeight="1.75rem"
    padding={[".35rem 1.45rem", ".45rem 2.5re,"]}
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
    {props.source ? <CustomGithubIconColor /> : <WebIcon />}
  </HStack>
)

export default CustomButton
