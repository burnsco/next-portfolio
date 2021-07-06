import { Fade, List, ListItem } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer"

export default function DeveloperInfo({ developerInfo }: any) {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    trackVisibility: true,
    delay: 350
  })

  return (
    <div ref={ref}>
      {inView ? (
        <Fade in={inView}>
          <List pt="1em">
            {developerInfo.excerpt.map((p: any) => (
              <ListItem
                fontWeight="400"
                color="#606060"
                opacity="1"
                transform="matrix(1,0,0,1,0,0)"
                fontSize={{ base: "xs", md: "sm" }}
                key={`devInfo-${p.text}`}
              >
                {p.text}
              </ListItem>
            ))}
          </List>
        </Fade>
      ) : null}
    </div>
  )
}
