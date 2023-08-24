import { Box, Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

interface SidebarProps {

}
export function Sidebar(props: SidebarProps) {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <NavSection title="GERAL" >
          <NavLink icon={RiDashboardLine}>Dashbord</NavLink>
          <NavLink icon={RiContactsLine}>Usuarios</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO" >
          <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </NavSection>
      </Stack >
    </Box >
  )
}