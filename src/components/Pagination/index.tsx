import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return (
        <Stack direction={["column","row"]} mt="8" justify="space-between" align="center" spacing={["4","4","6"]} >
            <Box>
                <strong>0</strong> até <strong>10</strong> de <strong>100</strong>
            </Box> 

            <Stack direction="row" spacing="2">
                <PaginationItem pg={1} isCurrent={true} />
                
                {[2, 3, 4, 5].map(pg => (
                    <PaginationItem key={pg} pg={pg} />
                ))}

            </Stack>

        </Stack>
    )
}