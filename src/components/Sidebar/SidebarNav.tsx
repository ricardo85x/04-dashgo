import { Stack } from "@chakra-ui/layout";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {

    return (
    <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
            <NavLink icon={RiDashboardLine} children="Dashboard" href="/dashboard" />
            <NavLink icon={RiContactsLine} children="Usuários" href="/users" />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
            <NavLink icon={RiInputMethodLine} children="Formulários" href="#" />
            <NavLink icon={RiGitMergeLine} children="Automação" href="#" />
        </NavSection>
    </Stack>
    )
}