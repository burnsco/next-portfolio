/* eslint-disable no-unused-vars */
import gitIcon from "@iconify/icons-cib/git"
import githubIcon from "@iconify/icons-cib/github"
import icqIcon from "@iconify/icons-cib/icq"
import emailIcon from "@iconify/icons-entypo/email"
import gitAlt from "@iconify/icons-fa-brands/git-alt"
import telegramIcon from "@iconify/icons-fa-brands/telegram"
import apollostackIcon from "@iconify/icons-logos/apollostack"
import awsIcon from "@iconify/icons-logos/aws"
import babelIcon from "@iconify/icons-logos/babel"
import bootstrapIcon from "@iconify/icons-logos/bootstrap"
import css3 from "@iconify/icons-logos/css-3"
import dockerIcon from "@iconify/icons-logos/docker"
import firebaseIcon from "@iconify/icons-logos/firebase"
import gatsbyIcon from "@iconify/icons-logos/gatsby"
import googleCloud from "@iconify/icons-logos/google-cloud"
import graphqlIcon from "@iconify/icons-logos/graphql"
import herokuIcon from "@iconify/icons-logos/heroku"
import html5 from "@iconify/icons-logos/html-5"
import javascriptIcon from "@iconify/icons-logos/javascript"
import jestIcon from "@iconify/icons-logos/jest"
import linuxTux from "@iconify/icons-logos/linux-tux"
import mongodbIcon from "@iconify/icons-logos/mongodb"
import nodejsIcon from "@iconify/icons-logos/nodejs"
import postcssIcon from "@iconify/icons-logos/postcss"
import postgresqlIcon from "@iconify/icons-logos/postgresql"
import reactIcon from "@iconify/icons-logos/react"
import reduxIcon from "@iconify/icons-logos/redux"
import sassIcon from "@iconify/icons-logos/sass"
import tailwindcssIcon from "@iconify/icons-logos/tailwindcss-icon"
import tuxIcon from "@iconify/icons-logos/tux"
import vueIcon from "@iconify/icons-logos/vue"
import webpackIcon from "@iconify/icons-logos/webpack"
import webIcon from "@iconify/icons-ls/web"
import styledComponents from "@iconify/icons-simple-icons/styled-components"
import webauthIcon from "@iconify/icons-simple-icons/webauthn"
import { addIcon, InlineIcon } from "@iconify/react"
import PropTypes from "prop-types"

addIcon("react", reactIcon)
addIcon("gitAlt", gitAlt)
addIcon("webIcon", webIcon)
addIcon("email", emailIcon)
addIcon("gitIcon", gitIcon)
addIcon("telegram", telegramIcon)
addIcon("icq", icqIcon)
addIcon("github", githubIcon)
addIcon("styled", styledComponents)
addIcon("graphql", graphqlIcon)
addIcon("linux", linuxTux)
addIcon("linuxAlt", tuxIcon)
addIcon("javascript", javascriptIcon)
addIcon("redux", reduxIcon)
addIcon("gatsby", gatsbyIcon)
addIcon("webpack", webpackIcon)
addIcon("babel", babelIcon)
addIcon("html", html5)
addIcon("css", css3)
addIcon("postcss", postcssIcon)
addIcon("tailwind", tailwindcssIcon)
addIcon("sass", sassIcon)
addIcon("apollo", apollostackIcon)
addIcon("bootstrap", bootstrapIcon)
addIcon("vue", vueIcon)
addIcon("jest", jestIcon)
addIcon("nodejs", nodejsIcon)
addIcon("postgresql", postgresqlIcon)
addIcon("mongodb", mongodbIcon)
addIcon("firebase", firebaseIcon)
addIcon("auth", webauthIcon)
addIcon("docker", dockerIcon)
addIcon("aws", awsIcon)
addIcon("heroku", herokuIcon)
addIcon("google", googleCloud)

type RenderIconProps = {
  iconname: string
  color?: string
  height?: string
  width?: string
}

const RenderIcon: React.FC<RenderIconProps> = ({
  iconname,
  height,
  width,
  color
}) => <InlineIcon icon={iconname} height={height} width={width} color={color} />

export default RenderIcon

RenderIcon.propTypes = {
  iconname: PropTypes.string.isRequired
}
