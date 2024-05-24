import { Box } from "@chakra-ui/react"

const CustomButton2 = (props: any) => (
  <Box
    {...props}
    as="button"
    height="28px"
    lineHeight="1.2"
    animation="1.5s ease infinite alternate running shimmer"
    background="linear-gradient(90deg, #FFE27D 0%, #64E3FF 30%, #9192FF 85%)"
    backgroundSize="200% 100%"
    border="none"
    boxShadow="-2px -2px 10px rgba(255, 227, 126, 0.5), 2px 2px 10px rgba(144, 148, 255, 0.5)"
    px="12px"
    borderRadius="2px"
    fontSize="14px"
    fontWeight="semibold"
    bg="#f5f6f7"
    borderColor="#ccd0d5"
    color="#4b4f56"
    _hover={{ bg: "#ebedf0" }}
    _active={{
      bg: "#dddfe2",
      transform: "scale(0.98)",
      borderColor: "#bec3c9"
    }}
    _focus={{
      boxShadow:
        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)"
    }}
  >
    {props.title}
  </Box>
)

export default CustomButton2
