import { chakra } from "@chakra-ui/react"
import Textarea from "react-input-autosize"

const AutoResizeInput = chakra(Textarea)

export default function AutoResizeTextArea(props: any) {
  return <AutoResizeInput bg="red.200" fontSize="12px" {...props} />
}
