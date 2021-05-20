import { Icon, HStack } from '@chakra-ui/react'
import React from 'react'

import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'


export function NotificationNav() {
    return (
        <HStack
            spacing={["6","8"]}
            mx={["2","6","8"]}
            pr={["2","6","8"]}
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
        >
            <Icon as={RiNotificationLine} fontSize="20" />
            <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
    )
}