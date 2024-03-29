import { Box, ButtonGroup, Center, chakra, Img } from "@chakra-ui/react"
import CustomButton2 from "@common/buttons/customButton2"
import { SectionContainer, SectionHeading } from "@common/index"
import { miniapps } from "@configs/miniapps"
import Image from "next/image"
import miniappsBgImage from "../../public/bg/spiralarch.webp"

export default function MiniAppsContainer() {
  return (
    <SectionContainer id="apps">
      <chakra.div pos="relative" overflow="hidden" w="full">
        <SectionHeading title="miniapps" />
        <Image
          alt=""
          src={miniappsBgImage}
          placeholder="blur"
          quality={80}
          fill
          sizes="100vw"
          style={{
            opacity: 0.2,
            objectFit: "cover"
          }}
        />
      </chakra.div>

      <Box px={["4em", "6em"]}>
        <chakra.section
          id="Cards"
          p={2}
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(230px, 1fr))"
          gap="20px"
        >
          {miniapps.map((app: any) => (
            <chakra.article
              display="grid"
              key={`mini-apps-${app.title}`}
              borderRadius="md"
              border="2px solid purple"
              gridTemplateRows="max-content 200px 1fr"
            >
              <chakra.header
                bg="l3"
                color="p5"
                fontWeight="semibold"
                fontSize="md"
                opacity={0.7}
                p={1}
                textAlign="center"
              >
                {app.title}
              </chakra.header>

              <Img
                w="100%"
                h="200px"
                maxW="100%"
                src={app.image}
                alt={`mini app ${app.title}`}
                objectFit="cover"
              />
              <Box
                border="2px solid blue"
                fontSize={{ base: "xs", md: "sm" }}
                p="0.5rem"
                opacity={0.8}
              >
                {app.excerpt}
              </Box>

              <Center p="2">
                <ButtonGroup
                  as="footer"
                  alignSelf="center"
                  gap="4"
                  border="2px solid red"
                >
                  <CustomButton2
                    as="a"
                    title="Source"
                    href={app.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />

                  <CustomButton2
                    as="a"
                    href={app.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Demo"
                  />
                </ButtonGroup>
              </Center>
            </chakra.article>
          ))}
        </chakra.section>
      </Box>
    </SectionContainer>
  )
}
