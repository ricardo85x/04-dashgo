// import { IconButton } from '@chakra-ui/core'
import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import React from 'react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'


export function Header() {

    const { onOpen  } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base:false,
        lg: true,
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            align="center"
            px="6"
        >
            { !isWideVersion && (
                <IconButton
                    icon={ <Icon as={RiMenuLine} />}
                    fontsize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    aria-label="Open navigation"
                    mr="2"
                    
                > 

                </IconButton>
            )}
            <Logo />

            { isWideVersion && <SearchBox /> }

            <Flex align="center" ml="auto" >
                <NotificationNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}