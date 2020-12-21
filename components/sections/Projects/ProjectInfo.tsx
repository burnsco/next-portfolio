/** @jsx jsx */
import { jsx, Text, Flex, Link, Heading } from 'theme-ui'

import CoolButton from '../../components/Buttons/CoolButton'
import RenderIcon from '../../components/SocialIcons/RenderIcon'

const ProjectInfo = ({ description, webUrl, gitUrl, title, builtWith }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      fontSize: [0, 1],
    }}
  >
    {' '}
    <Flex sx={{ my: 2 }}>
      <Heading
        sx={{
          color: 'black',
          fontWeight: '800',
        }}
      >
        <span
          sx={{
            color: 'blackolive',
          }}
        >
          {title}
        </span>
      </Heading>
    </Flex>
    <Flex sx={{ my: [1, 2], flexWrap: 'wrap' }}>
      {builtWith.map((item, i) => (
        <span
          key={`BuiltWith-${item.title}-${i}`}
          sx={{ ml: 2, fontSize: [0, 1, 2, 3] }}
        >
          <RenderIcon iconname={item.iconName} />
        </span>
      ))}
    </Flex>
    {description.map(p => (
      <Text key={`paragraph-${p.text}`} my="2">
        {p.text}
      </Text>
    ))}
    <Flex
      sx={{
        mt: 3,
        justifyContent: 'space-evenly',
      }}
    >
      <Link
        href={gitUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'background' }}
      >
        <CoolButton
          sx={{
            fontSize: [0, 1],
            backgroundColor: 'white',
            color: 'text',
            alignSelf: 'flex-start',
            border: '2px solid #e7e7e7',
            m: 2,

            ':hover': {
              backgroundColor: '#e7e7e7',
            },
          }}
          title="Source"
        >
          <RenderIcon width="1.4em" height="1.5em" iconname="gitAlt" />
        </CoolButton>
      </Link>
      <Link
        href={webUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'background' }}
      >
        <CoolButton
          sx={{
            fontSize: [0, 1],
            backgroundColor: 'white',
            color: 'text',
            alignSelf: 'flex-start',
            border: '2px solid #e7e7e7',
            m: 2,

            ':hover': {
              backgroundColor: '#e7e7e7',
            },
          }}
          title="Demo"
        >
          <RenderIcon width="1.4em" height="1.5em" iconname="webIcon" />
        </CoolButton>
      </Link>
    </Flex>
  </Flex>
)

export default ProjectInfo
