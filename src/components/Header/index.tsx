import { Flex } from "@chakra-ui/react";
import { Profile } from './Profile'
import { NotificationNav } from "./NotificationNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

interface HeaderProps {

}
export function Header(props: HeaderProps) {
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
      <Logo />
      <SearchBox />
      <Flex
        align='center'
        ml='auto'
      >
        <NotificationNav />
        <Profile />

      </Flex>
    </Flex >
  )
}