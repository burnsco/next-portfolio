import { mode } from "@chakra-ui/theme-tools"

export const styles = {
  global: (props: any) => ({
    "html, body": {
      color: mode("gray.800", "gray.800")(props),
      bg: mode("white", "white")(props),
      height: "100%",
      width: "100%",
      position: "relative",
      fontSize: ["xs", "sm"],
      lineHeight: "tall"
    }
  })
}
