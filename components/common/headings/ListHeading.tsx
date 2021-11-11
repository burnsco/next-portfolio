import { chakra } from "@chakra-ui/react"

const ListHeading = (data: { title: string }) => (
  <>
    <chakra.h3
      fontSize="22px"
      mb="2.5"
      fontWeight="700"
      px="1"
      maxW="150px"
      color="mainBlack"
      opacity={0.8}
      background="linear-gradient(120deg,  rgba(243,147, 55,1), rgb(250, 112, 154) 100%)"
      backgroundRepeat="no-repeat"
      backgroundSize="100% 0.2em"
      backgroundPosition="0 89%"
      letterSpacing="tighter"
      fontFamily="Nunito, sans-serif"
      lineHeight="1.2"
    >
      {data.title}
    </chakra.h3>
  </>
)

export default ListHeading
