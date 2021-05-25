import { Box, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import QuickEatsIconsList from "@common/icons/QuickEatsIconsList"
import RedditCloneIconsList from "@common/icons/RedditCloneIconsList"
import data from "@configs/Projects/projects"
import dynamic from "next/dynamic"
import { title } from "process"
import React from "react"
import ProjectInfo from "./ProjectInfo"

const QuickEatsVideos = dynamic(() => import("./QuickEatsVideo"))
const RedditCloneVideos = dynamic(() => import("./RedditVideo"))

export default function Projects() {
  return (
    <>
      {data.map((project: any) => (
        <>
          <SimpleGrid
            key={`MainProject-${project.title}`}
            px="5em"
            pt="3em"
            columns={{ base: 1, md: 2 }}
            spacing={8}
          >
            <VStack>
              {project.video === "reddit" ? (
                <RedditCloneVideos />
              ) : (
                <QuickEatsVideos />
              )}

              <HStack>
                <Heading
                  fontWeight="400"
                  color="#606060"
                  opacity="1"
                  transform="matrix(1,0,0,1,0,0)"
                  fontFamily="Lato"
                  fontSize={{ base: "xs", md: "sm" }}
                >
                  Title:{" "}
                </Heading>
                <Heading
                  lineHeight="2"
                  opacity={0.9}
                  fontWeight="900"
                  letterSpacing="wide"
                  color="#414a6b !important;"
                  mb={[2, 3]}
                  fontSize={["xl", "2xl", "3xl"]}
                >
                  {project.title}
                </Heading>
              </HStack>
              <HStack>
                <Heading
                  fontWeight="400"
                  color="#606060"
                  opacity="1"
                  transform="matrix(1,0,0,1,0,0)"
                  fontFamily="Lato"
                  fontSize={{ base: "xs", md: "sm" }}
                >
                  Tech:{" "}
                </Heading>
                {title === "Reddit Clone" ? (
                  <RedditCloneIconsList />
                ) : (
                  <QuickEatsIconsList />
                )}
              </HStack>
            </VStack>

            <ProjectInfo
              title={project.title}
              description={project.description}
              webUrl={project.webUrl}
              gitUrl={project.gitUrl}
            />
          </SimpleGrid>
          <Box h="10em" />
        </>
      ))}
    </>
  )
}
