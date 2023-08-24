import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { Profile } from './Profile'
import { NotificationNav } from "./NotificationNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";
import { useSidebar } from "@/context/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

interface HeaderProps {

}
export function Header(props: HeaderProps) {
  const { onOpen } = useSidebar()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as='header'
      w='100%'
      maxW={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >

      {!isWideVersion && (
        <IconButton
          aria-label="open navegation"
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
          display={'flex'}
        ></IconButton>
      )}


      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex
        align='center'
        ml='auto'
      >
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />

      </Flex>
    </Flex >
  )
}