import { chakra } from "@chakra-ui/react"
import { SectionContainer, SectionHeading } from "@common/index"
import Image from "next/legacy/image"
import MiniAppsCards from "./MiniApps"

const ChakraImage = chakra(Image)

export default function MiniAppsContainer() {
  return (
    <SectionContainer id="apps">
      <chakra.div pos="relative" overflow="hidden" w="full">
        <SectionHeading title="miniapps" />
        <ChakraImage
          src="/bg/staircase.webp"
          layout="fill"
          opacity={0.3}
          objectFit="cover"
        />
      </chakra.div>


        <MiniAppsCards  />

    </SectionContainer>
  )
}
