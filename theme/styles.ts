import { mode } from "@chakra-ui/theme-tools"

export const styles = {
  global: (props: any) => ({
    "html, body": {
      color: mode("gray.800", "gray.800")(props),
      bg: mode("gray.50", "gray.50")(props),
      minW: "100%",
      minH: "100vh",
      fontSize: ["xs", "sm"],
      lineHeight: "tall"
    },

    ".active": {
      color: "p2"
    }
  })
}
