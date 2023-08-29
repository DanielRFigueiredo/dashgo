import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;

}
const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {

  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction={['column', 'row']}
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box><strong>0</strong> - <strong>10</strong> de <strong>100</strong></Box>
      <Stack spacing='2' direction='row'>
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} page={1}  />
            {currentPage > (2 + siblingsCount) && (<Text color='gray.300' width='8' textAlign='center' >...</Text>)}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} page={page} key={page} />
        })}
        <PaginationItem onPageChange={onPageChange} page={currentPage} active />
        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} page={page} key={page} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && (<Text color='gray.300' width='8' textAlign='center'>...</Text>)}
            <PaginationItem onPageChange={onPageChange} page={lastPage} />

          </>
        )}
      </Stack>


    </Stack >
  )
}