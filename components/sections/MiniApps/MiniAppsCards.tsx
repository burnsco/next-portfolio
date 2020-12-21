/** @jsx jsx */
import { jsx, Flex, Link, Grid, Card, Text, Heading, Button } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

const styles = {
  position: 'absolute',
  top: 'unset',
  width: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
  userSelect: 'none',
}

export default function MiniAppsCards() {
  const { data } = useStaticQuery(graphql`
    {
      data: allMiniAppsJson {
        nodes {
          title
          webUrl
          gitUrl
          excerpt
          image {
            childImageSharp {
              fluid(fit: CONTAIN) {
                aspectRatio
                base64
                sizes
                src
                srcWebp
                srcSet
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grid
      sx={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      }}
    >
      {data.nodes.map((app, i) => (
        <Card
          sx={{ display: 'flex', flexDirection: 'column' }}
          variant="compact"
          key={`mini-apps-${app.title}-${i}`}
        >
          <Heading sx={{ textAlign: 'center', fontSize: [1, 2, 3], p: 1 }}>
            {app.title}
          </Heading>

          <Img
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Coins"
            sx={{
              ...styles,
            }}
            fluid={{ ...app.image.childImageSharp.fluid, aspectRatio: 1 }}
          />

          <Text sx={{ fontSize: [0, 1], p: 1, flexGrow: 2 }}>
            {app.excerpt}
          </Text>

          <Flex
            sx={{
              mt: 1,
              justifyContent: 'space-evenly',
            }}
          >
            <Link
              href={app.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'background' }}
            >
              <Button
                sx={{
                  fontSize: [0, 1],
                  fontWeight: 500,
                  backgroundColor: 'white',
                  color: 'text',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e7e7e7',
                  ':hover': {
                    backgroundColor: '#e7e7e7',
                  },
                }}
              >
                Source
              </Button>
            </Link>
            <Link
              href={app.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'background' }}
            >
              <Button
                sx={{
                  fontSize: [0, 1],
                  fontWeight: 500,
                  backgroundColor: 'white',
                  color: 'text',
                  transition: 'all 0.3s ease',
                  border: theme => `1px solid ${theme.colors.gray[5]}`,
                  ':hover': {
                    color: 'white',
                    bg: 'gray.5',
                  },
                }}
              >
                Demo
              </Button>
            </Link>
          </Flex>
        </Card>
      ))}
    </Grid>
  )
}
