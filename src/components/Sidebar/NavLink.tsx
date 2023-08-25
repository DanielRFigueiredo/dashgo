import { Icon, Link as LinkChakra, LinkProps, Text, } from "@chakra-ui/react";
import { ReactNode, ElementType } from "react";
import { LinkActive } from "./LinkActive";
interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: ReactNode;
  href?: string;
}
export function NavLink({ icon, children, href = '#', ...rest }: NavLinkProps) {
  return (
    <LinkActive href={href}>
      <LinkChakra as='div' display='flex' alignItems='center'  {...rest} >
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium' >{children}</Text>
      </LinkChakra>
    </LinkActive>

  )
}


