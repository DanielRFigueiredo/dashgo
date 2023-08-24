import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";
import { useSidebar } from "@/context/SidebarDrawerContext";

interface SidebarProps {

}
export function Sidebar(props: SidebarProps) {
  const { isOpen, onClose } = useSidebar()

  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })
  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
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