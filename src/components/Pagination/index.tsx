import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";


interface PaginationProps {
    totalCountOfRegisters: number;
    registerPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}


const siblingsCount = 2;

// return a range between from and to and filter to bigger than 0
const generatePagesArray = (from: number, to: number) => {
    return [...new Array(to - from)]
        .map((_, index) => {
            return from + index + 1;
        })
        .filter(page => page > 1)
}


export function Pagination({
    totalCountOfRegisters,
    currentPage = 1,
    onPageChange,
    registerPerPage = 10
}: PaginationProps) {

    // round up
    const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

    // desired format on page 5 with 10 pages total
    // 1...456...10


    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage  - 1)
        : []

    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : []


        console.log("previousPages", previousPages)
        console.log("siblingsCount", siblingsCount)
        console.log("currentPage", currentPage)

    return (
        <Stack direction={["column", "row"]} mt="8" justify="space-between" align="center" spacing={["4", "4", "6"]} >
            <Box>
                <strong>0</strong> até <strong>10</strong> de <strong>100</strong>
            </Box>

            <Stack direction="row" spacing="2">

                { 
                    
                    currentPage !== 1 && 
                    <>
                        <PaginationItem key={1} pg={1} />
                        { currentPage  - 1 > 1 && <Text color="gray.300" width="8" textAlign="center">...</Text>}
                    </>
                }
                
                {previousPages.length && previousPages.map( page => (
                    <PaginationItem key={page} pg={page} />
                )) }
 
                <PaginationItem pg={currentPage} isCurrent />

                {nextPages.length && nextPages.map( page => (
                    <PaginationItem key={page} pg={page} />
                )) }

                { 
                    nextPages.length && 
                    nextPages[nextPages.length - 1] !== lastPage && 
                    <>
                        { lastPage - currentPage > 1 && <Text color="gray.300" width="8" textAlign="center">...</Text>}
                        <PaginationItem key={lastPage} pg={lastPage} />
                    </>
                }

            </Stack>

        </Stack>
    )
}