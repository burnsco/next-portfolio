import { Center, chakra, VStack } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import Image from "next/image"
import MiniAppsCards from "./MiniApps"

const ChakraImage = chakra(Image)

export default function MiniAppsContainer({ miniapps }: any) {
  console.log("mini apps container")
  console.log(miniapps)
  return (
    <SectionContainer id="miniapps">
      <VStack>
        <chakra.div pos="relative" overflow="hidden" p="3em" w="full">
          <SectionHeading title="mini-apps" />
          <ChakraImage
            src="/bg/6.jpg"
            layout="fill"
            opacity={0.2}
            objectFit="cover"
            quality="100"
          />
        </chakra.div>
        <Center p="3em">
          <MiniAppsCards miniapps={miniapps} />
        </Center>
      </VStack>
    </SectionContainer>
  )
}
