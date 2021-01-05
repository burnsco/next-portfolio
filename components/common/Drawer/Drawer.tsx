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
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  useDisclosure
} from "@chakra-ui/react"
import React, { useRef } from "react"

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
            <DrawerHeader borderBottomWidth="1px">
              Create a new account
            </DrawerHeader>

            <DrawerBody>
              <form id="contact-form">
                <Stack spacing="24px">
                  <Box>
                    <FormLabel htmlFor="username">Name</FormLabel>
                    <Input
                      ref={firstField}
                      id="username"
                      placeholder="Please enter user name"
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="url">Url</FormLabel>
                    <InputGroup>
                      <InputLeftAddon>http://</InputLeftAddon>
                      <Input
                        type="url"
                        id="url"
                        placeholder="Please enter domain"
                      />
                      <InputRightAddon>.com</InputRightAddon>
                    </InputGroup>
                  </Box>

                  <Box>
                    <FormLabel htmlFor="owner">Select Owner</FormLabel>
                    <Select id="owner" defaultValue="segun">
                      <option value="segun">Segun Adebayo</option>
                      <option value="kola">Kola Tioluwani</option>
                    </Select>
                  </Box>

                  <Box>
                    <FormLabel htmlFor="desc">Description</FormLabel>
                    <Textarea id="desc" />
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
