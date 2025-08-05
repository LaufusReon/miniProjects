import { Button, Menu, Portal } from '@chakra-ui/react';
import { Box, Field, Input, defineStyle } from "@chakra-ui/react"


const Demo = () => {
  return (
    <Field.Root>
      <Box pos="relative" w="full">
        <Input className="peer" placeholder="" />
        <Field.Label css={floatingStyles}>Email</Field.Label>
      </Box>
    </Field.Root>
  )
}

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
});

function AvatarIconMenu(){
  return(
     <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Menu
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="rename">Rename</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
            <Menu.Item
              value="delete"
              color="fg.error"
              _hover={{ bg: "bg.error", color: "fg.error" }}
            >
              Delete...
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export {Demo, AvatarIconMenu}