import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationIcon } from "./PaginationIcon";

interface PaginationProps {

}
export function Pagination(props: PaginationProps) {
  return (
    <Stack
      direction='row'
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box><strong>0</strong> - <strong>10</strong> de <strong>100</strong></Box>
      <Stack spacing='2' direction='row'>
        <PaginationIcon active page="1" />
        <PaginationIcon page="2" />
        <PaginationIcon page="3" />
        <PaginationIcon page="4" />
        <PaginationIcon page="5" />
        <PaginationIcon page="6" />
      </Stack>


    </Stack >
  )
}