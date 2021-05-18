import { Text } from '@chakra-ui/react'
import React from 'react'


export function Logo() {
    return (
        <Text
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
        >DashGo<Text as="span" ml="1" color="pink.500">.</Text>
        
        </Text>
    )
}