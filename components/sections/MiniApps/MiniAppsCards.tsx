import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text
} from "@chakra-ui/react"
import data from "@data/mini-apps"
import React from "react"

const styles = {
  position: "absolute",
  top: "unset",
  width: "100%",
  objectFit: "contain",
  objectPosition: "center",
  userSelect: "none"
}

export default function MiniAppsCards() {
  return (
    <Grid
      sx={{
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
      }}
    >
      {data.map((app, i) => (
        <Flex
          boxShadow="md"
          flexDirection="column"
          key={`mini-apps-${app.title}-${i}`}
        >
          <Heading p={1} textAlign="center" fontSize={[1, 2]}>
            {app.title}
          </Heading>

          <Image
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Coins"
            src={app.image}
            sx={{
              ...styles
            }}
          />

          <Text>{app.excerpt}</Text>

          <Flex
            sx={{
              mt: 1,
              justifyContent: "space-evenly"
            }}
          >
            <Link
              href={app.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "background" }}
            >
              <Button
                sx={{
                  fontSize: [0, 1],
                  fontWeight: 500,
                  backgroundColor: "white",
                  color: "text",
                  transition: "all 0.3s ease",
                  border: "1px solid #e7e7e7",
                  ":hover": {
                    backgroundColor: "#e7e7e7"
                  }
                }}
              >
                Source
              </Button>
            </Link>
            <Link
              href={app.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "background" }}
            >
              <Button
                sx={{
                  fontSize: [0, 1],
                  fontWeight: 500,
                  backgroundColor: "white",
                  color: "text",
                  transition: "all 0.3s ease",
                  border: theme => `1px solid ${theme.colors.gray[5]}`,
                  ":hover": {
                    color: "white",
                    bg: "gray.5"
                  }
                }}
              >
                Demo
              </Button>
            </Link>
          </Flex>
        </Flex>
      ))}
    </Grid>
  )
}
