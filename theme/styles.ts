import { mode } from "@chakra-ui/theme-tools"

export const styles = {
  global: (props: any) => ({
    "html, body": {
      color: mode("gray.800", "gray.700")(props),
      bg: mode("gray.100", "gray.100")(props),
      height: "100%",
      width: "100%",
      position: "relative",
      fontSize: ["sm", "md"],
      lineHeight: "tall"
    },
    p: {
      fontSize: "sm",
      lineHeight: "1.4"
    }
  })
}
