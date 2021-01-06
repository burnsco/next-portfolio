import { EmailIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  useDisclosure
} from "@chakra-ui/react"
import React, { useRef } from "react"
import { AutoResizeTextArea } from ".."

export default function ContactDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef<HTMLInputElement | null>(null)
  const btnRef = useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <Button
        ref={btnRef}
        leftIcon={<EmailIcon />}
        colorScheme="teal"
        onClick={onOpen}
      >
        Contact
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Contact Me</DrawerHeader>

            <DrawerBody mt={4}>
              <form id="contact-form">
                <Stack spacing="24px">
                  <Box>
                    <FormLabel htmlFor="username">Name</FormLabel>
                    <Input ref={firstField} id="username" />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="url">E-Mail</FormLabel>
                    <InputGroup>
                      <Input type="email" id="email" />
                    </InputGroup>
                  </Box>

                  <Box>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <AutoResizeTextArea id="message" />
                  </Box>
                </Stack>
              </form>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" type="submit" form="contact-form">
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
