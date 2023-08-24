import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";

interface SidebarProps {

}
export function Sidebar(props: SidebarProps) {
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })
  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={true} placement="left" onClose={() => { }}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" padding='4'>
            <DrawerCloseButton mt='6' />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as='aside' w='64' mr='8'>
      <SidebarNav />
    </Box >
  )
}