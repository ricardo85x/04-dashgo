import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Ricardo</Text>
                    <Text color="gray.300" fontSize="small">ricardo@email.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Ricardo" src="https://github.com/ricardo85x.png" />
        </Flex>
    )
}