import { Button } from "@chakra-ui/react";

interface PaginationIconProps {
  active?: boolean;
  page: string;
}
export function PaginationIcon({ active = false, page }: PaginationIconProps) {
  



  return active
    ? (<Button
      size='sm'
      fontSize='xs'
      width='4'
      colorScheme="pink"
      disabled
      _disabled={{
        bg: 'pink.500',
        cursor: 'default'
      }}
    >
      {page}
    </Button>)
    : (<Button
      size='sm'
      fontSize='xs'
      width='4'
      bg='gray.700'
      _hover={{
        bg: 'gray.500'
      }}
    >
      {page}
    </Button>)
}