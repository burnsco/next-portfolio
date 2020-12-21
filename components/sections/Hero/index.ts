/** @jsx jsx */
import { jsx, Flex, Heading, Image } from 'theme-ui'
import PropTypes from 'prop-types'
import avatar from '../../data/images/Me.jpg'
import SectionContainer from '../Container/SectionContainer'
import SocialIcons from '../../components/SocialIcons'
import AnimatedWave from '../../components/AnimatedWave'
import Header from '../../components/Header'

const Hero = ({ title }) => (
  <SectionContainer id={title} aria-label={title}>
    <Header />
    <Flex
      sx={{
        background: theme => [
          `${theme.colors.eerieblack}`,
          `linear-gradient(${theme.colors.primary}, ${theme.colors.secondary})`,
        ],
        minHeight: '95vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        sx={{
          height: 130,
          width: 130,
          mb: 3,
          objectFit: 'cover',
          objectPosition: '50% 50%',
          WebkitBoxShadow:
            '0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)',
          boxShadow:
            '0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)',
          borderRadius: '9999px',
          transform: `rotate(-35deg)`,
        }}
        src={avatar}
      />
      <Heading variant="textStyles.display">Corey Burns</Heading>
      <Heading variant="textStyles.subDisplay">Full-stack Developer</Heading>
      <SocialIcons />
      <AnimatedWave enableWave bottom />
    </Flex>
  </SectionContainer>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Hero
