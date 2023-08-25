import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'


interface SidebarNavProps {

}
export function SidebarNav(props: SidebarNavProps) {
  return (
    <Stack spacing='12' align='flex-start'>
      <NavSection title="GERAL" >
        <NavLink href="/dashboard" icon={RiDashboardLine}>Dashbord</NavLink>
        <NavLink href="/users" icon={RiContactsLine}>Usuarios</NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO" >
        <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink icon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>
    </Stack >
  )
}