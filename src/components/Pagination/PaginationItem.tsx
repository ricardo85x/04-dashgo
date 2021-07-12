import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    isCurrent?: boolean;
    pg: number;
    onPageChange: (page: number) => void;
}

export function PaginationItem( {isCurrent = false, pg, onPageChange } : PaginationItemProps ) {

    if (isCurrent) {

        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bg: 'pink.500',
                    cursor: 'default'
                }}
            >{pg}</Button>
        )
    } else {
        return (
            <Button
                key={pg}
                size="sm"
                fontSize="xs"
                width="4"
                bg="gray.700"
                _hover={{
                    bg: 'gray.500'
                }}
                onClick={ () => onPageChange(pg) }
            >
                {pg}
            </Button>
        )
    }
}