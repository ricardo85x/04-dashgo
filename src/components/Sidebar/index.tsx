import Icon from "@chakra-ui/icon";
import { Box, Link, Stack, Text } from "@chakra-ui/layout";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {

    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL">
                    <NavLink icon={RiDashboardLine} children="Dashboard" href="/dashboard" />
                    <NavLink icon={RiContactsLine} children="Usuários" href="/users" />
                </NavSection>

                <NavSection title="AUTOMAÇÃO">
                    <NavLink icon={RiInputMethodLine} children="Formulários"/>
                    <NavLink icon={RiGitMergeLine} children="Automação" />
                </NavSection>



            </Stack>
        </Box>
    )
}