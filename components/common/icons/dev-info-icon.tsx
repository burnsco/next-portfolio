import { Icon, IconProps } from "@chakra-ui/react"

const DevInfoIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M3 4v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1zm8 3h2v2h-2V7zm0 4h2v6h-2v-6z"
    />
  </Icon>
)

export default DevInfoIcon
